"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
const Application_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Application"));
Route_1.default.get('/', async () => {
    return { hello: 'world' };
});
Route_1.default.post('/users', 'UsersController.store');
Route_1.default.post('/forgot_password', 'AuthController.forgotPassword');
Route_1.default.post('/auth', 'AuthController.auth');
Route_1.default.post('/reset_password', 'AuthController.resetPassword');
Route_1.default.get('/uploads/:image', async ({ response, params }) => {
    const filePath = Application_1.default.publicPath('uploads');
    const fileName = params.image;
    response.download(`${filePath}/${fileName}`);
});
//# sourceMappingURL=routes.js.map