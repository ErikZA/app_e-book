"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Event_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Event"));
const luxon_1 = require("luxon");
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
const crypto_1 = require("crypto");
const AuthValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/AuthValidator"));
const UseToken_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/UseToken"));
class AuthController {
    async auth({ request, auth, response }) {
        const data = await request.validate(AuthValidator_1.default);
        const token = await auth.attempt(data.email, data.password);
        return response.ok(Object.assign(Object.assign({}, token), data));
    }
    async forgotPassword({ request, response }) {
        const data = request.only(["email"]);
        const token = crypto_1.randomBytes(20).toString("hex");
        const now = new Date();
        now.setHours(now.getHours() + 1);
        if (data.email) {
            try {
                const user = await User_1.default.findByOrFail("email", data.email);
                const useToken = await UseToken_1.default.create({
                    user_id: user.id,
                    passwordResetToken: token,
                    passwordResetExpires: luxon_1.DateTime.fromJSDate(now),
                });
                if (useToken) {
                    Event_1.default.emit("auth:send_mail_forgot_passWord", {
                        email: user.email,
                        token: token,
                    });
                }
                return response.ok({
                    code: 200,
                    message: "Sending",
                });
            }
            catch (e) {
                return response.ok({
                    code: 400,
                    message: "User not found.",
                    exceptionMsg: e,
                });
            }
        }
    }
    async resetPassword({ request, response }) {
        const reset = request.only(["email", "password", "token"]);
        try {
            const user = await User_1.default.findByOrFail("email", reset.email);
            const token = await UseToken_1.default.findByOrFail("password_reset_token", reset.token);
            const now = new Date();
            if (now > new Date(token.passwordResetExpires.toJSON())) {
                return response.badRequest({
                    code: 400,
                    message: "Token expired, try again",
                });
            }
            user.password = reset.password;
            return await user.save();
        }
        catch (e) {
            return response.badRequest({
                code: 400,
                message: "Cannot reset password, try again",
                exceptionMsg: e,
            });
        }
    }
}
exports.default = AuthController;
//# sourceMappingURL=AuthController.js.map