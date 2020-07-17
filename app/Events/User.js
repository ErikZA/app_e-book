"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendMail = async (mail) => {
    await Promise.resolve(setTimeout(() => console.log(`Ola ${mail}`), 3600));
    return 'sent';
};
exports.default = {
    sendMail,
};
//# sourceMappingURL=User.js.map