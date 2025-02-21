import { getRollResult } from "../models/dice.model.js";

export async function ObterResultRol(req,res) {
    const { id } = req.params;
    const [statusCode, text] = await getRollResult(id);
    res.status(statusCode).json(text);
};