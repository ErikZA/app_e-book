"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class UserValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            name: Validator_1.schema.string({ trim: true, escape: true }, [Validator_1.rules.required()]),
            email: Validator_1.schema.string({ trim: true, escape: true }, [
                Validator_1.rules.required(),
                Validator_1.rules.email(),
            ]),
            password: Validator_1.schema.string({ trim: true, escape: true }, [Validator_1.rules.required()]),
        });
        this.cacheKey = this.ctx.routeKey;
        this.messages = {
            'name.required': 'You must enter the name of the user.',
            'name.string': 'The value entered for the user name is not valid.',
            'email.required': 'You must enter the email of the user.',
            'email.string': 'The value entered for the user email is not valid.',
            'email.email': 'The email informed is invalid.',
            'password.required': 'You must enter the password.',
            'password.string': 'The value of the password entered is not valid.',
        };
    }
}
exports.default = UserValidator;
//# sourceMappingURL=UserValidator.js.map