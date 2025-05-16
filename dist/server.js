"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = require("./routes");
const fileUpload = require("express-fileupload");
dotenv_1.default.config(); // para usar as constantes do .env
const app = (0, express_1.default)();
app.use(express_1.default.json()); // define que o servidor vai retornar json
app.use((0, cors_1.default)()); // habilita qualquer ip poder fazer requisiçao
app.use(fileUpload({
    limits: { fileSize: 10 * 1024 * 1024 }
}));
app.use(routes_1.router); // define as rotas que estao no routes.ts
app.use((err, req, res, next) => {
    if (err instanceof Error) {
        return res.status(400).json({
            error: err.message
        });
    }
    return res.status(500).json({
        status: 'error',
        message: 'Internal server error.'
    });
});
const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
    console.log('Servidor Online - Porta ' + PORT);
});
