"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
const Event_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Event"));
const UserValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/UserValidator"));
class UsersController {
    async store({ request, response }) {
        const data = await request.validate(UserValidator_1.default);
        let user = new User_1.default();
        user.name = data.name;
        user.email = data.email;
        user.password = data.password;
        try {
            await user.save();
        }
        catch (e) {
            return response.badRequest({
                result: e,
                code: 500,
                message: `Insert fail - Duplicate entry ${user.email}`,
            });
        }
        Event_1.default.emit("user:send_mail", user.email);
        return user;
    }
}
exports.default = UsersController;
//# sourceMappingURL=UsersController.js.map