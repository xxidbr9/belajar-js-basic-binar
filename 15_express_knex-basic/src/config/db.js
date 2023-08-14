import knex from "knex";
import knexfile from "../../knexfile.js";

const NODE_ENV = process.env.NODE_ENV || "development";
const db = knex(knexfile[NODE_ENV]);

export default db;
