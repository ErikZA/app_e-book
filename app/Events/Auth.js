"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const configEmail_1 = __importDefault(require("../../utils/configEmail/configEmail"));
const sendMailForgotPassWord = async (mailProps) => {
    await Promise.resolve(setTimeout(() => {
        configEmail_1.default.html = '/mail/auth/forgot_password.html';
        configEmail_1.default.subject = 'Password Recovery';
        configEmail_1.default.to = mailProps.email;
        configEmail_1.default.context = { token: mailProps.token };
        configEmail_1.default.sendMail();
    }, 3600));
    return configEmail_1.default.response;
};
exports.default = {
    sendMailForgotPassWord,
};
//# sourceMappingURL=Auth.js.map