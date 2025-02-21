import postgres from "postgres";

const db = postgres({
    host : process.env.HOST,
    port : process.env.PORTDB,
    database : process.env.DATABASE,
    username : process.env.USER,
    password : process.env.PASSWORD,
});

export default db;