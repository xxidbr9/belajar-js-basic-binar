const knex = require("knex");
const knexfile = require("./knexfile");

const env = process.env.NODE_ENV;
const config = knexfile[env || "development"];
const db = knex(config);

module.exports = db;
