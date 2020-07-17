"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Event_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Event"));
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Events/User"));
const Auth_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Events/Auth"));
Event_1.default.on('user:send_mail', User_1.default.sendMail);
Event_1.default.on('auth:send_mail_forgot_passWord', Auth_1.default.sendMailForgotPassWord);
//# sourceMappingURL=events.js.map