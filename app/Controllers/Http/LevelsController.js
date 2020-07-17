"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Level_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Level"));
class LevelsController {
    async index({}) {
        const levels = await Level_1.default.all();
        return levels;
    }
    async show({ params }) {
        const { id } = params.id;
        const levels = await Level_1.default.findByOrFail('id', id);
        return levels;
    }
}
exports.default = LevelsController;
//# sourceMappingURL=LevelsController.js.map