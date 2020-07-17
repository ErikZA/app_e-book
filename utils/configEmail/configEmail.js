"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer = __importStar(require("nodemailer"));
const Env_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Env"));
const Application_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Application"));
const handlebars_1 = __importDefault(require("handlebars"));
const fs_1 = __importDefault(require("fs"));
class Mail {
    constructor(response, to, from, context, html, subject) {
        this.response = response;
        this.to = to;
        this.from = from;
        this.context = context;
        this.html = html;
        this.subject = subject;
        this.response = { status: '200', message: 'Sending' };
    }
    sendMail() {
        let mailOptions = {
            from: Env_1.default.get('USER_EMAIL', 'email@gmail.com'),
            to: this.to,
            html: this.html,
            subject: this.subject,
        };
        const statusSend = {};
        const transporter = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "380e009ef554d9",
        pass: "d8779c89ab911e",
      },
        });
        const readHTMLFile = function (path, callback) {
            fs_1.default.readFile(path, { encoding: 'utf-8' }, function (err, html) {
                if (err) {
                    callback(err, null);
                }
                else {
                    callback(null, html);
                }
            });
        };
        readHTMLFile(Application_1.default.publicPath('resources') + mailOptions.html, (error, html) => {
            if (!error) {
                const template = handlebars_1.default.compile(html);
                const replacements = this.context;
                const htmlToSend = template(replacements);
                mailOptions.html = htmlToSend;
                transporter.sendMail({
                    from: `${mailOptions.subject} <${mailOptions.from}>`,
                    to: mailOptions.to,
                    subject: mailOptions.subject,
                    html: mailOptions.html,
                }, function (error) {
                    if (error) {
                        console.log(error);
                        statusSend.status = '400';
                        statusSend.message = error.message;
                    }
                    else {
                        statusSend.status = '200';
                        statusSend.message = 'Email successfully sent';
                    }
                        console.log(error);
                });
            }
            else {
                statusSend.status = '400';
                statusSend.message = error.message;
            }
            this.response = statusSend;
        });
    }
}
exports.default = new Mail();
//# sourceMappingURL=configEmail.js.map
