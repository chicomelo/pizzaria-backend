import express, { Request, Response, NextFunction } from "express";
import 'express-async-errors'
import cors from 'cors'
import dotenv from 'dotenv';

import { router } from "./routes";
import fileUpload = require("express-fileupload");

dotenv.config(); // para usar as constantes do .env

const app = express()
app.use(express.json()) // define que o servidor vai retornar json
app.use(cors()) // habilita qualquer ip poder fazer requisiçao
app.use(fileUpload({
    limits: { fileSize: 10 * 1024 * 1024 }
}))
app.use(router) // define as rotas que estao no routes.ts

app.use((err: Error, req: Request, res: Response, next: NextFunction)=>{
    if(err instanceof Error){
        return res.status(400).json({
            error: err.message
        })
    }

    return res.status(500).json({
        status: 'error',
        message: 'Internal server error.'
    })
})

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
    console.log('Servidor Online - Porta ' + PORT);
});