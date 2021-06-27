import express, { Request, Response, NextFunction, response } from "express";
import "reflect-metadata";
import "../database";
import { router } from "./routes";
import "express-async-errors";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof Error){
        return response.status(400).json({ error: err.message })
    }

    return response.status(500).json({ status: "error", message: "internal server error"})
})

app.listen(5000, () => {
    console.log("servidor executando na porta 5000");
})