import express from "express";
import cors from "cors";
import { ObterResultRol } from "./controllers/dice.controller.js";

const server = express();
const porta = process.env.PORT;

server.use(cors());
server.use(express.json());

server.get('/roll/:id', ObterResultRol);

server.listen(porta, () => {
    console.debug("Server listening on port " + porta);
});