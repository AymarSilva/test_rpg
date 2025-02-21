import connection from "../config/db.config.js";

export async function getRollResult(id) {
    try {

        const [ result ] = await connection`
            SELECT mensagem FROM Dice WHERE id = ${id};
            `;
        return [200, result]

    } catch (error) {

        return [400, error]

    };
  
};