const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.join(__dirname, `.env.${process.env.NODE_ENV || "dev"}`) });

const config = {
  development: {
    client: "pg",
    connection: process.env.DATABASE_URI,
    searchPath: ["knex", "public"],
    migrations: {
      directory: "./src/db/migrations"
    },
    seeds: {
      directory: "./src/db/seeds"
    }
  }
};


module.exports = config;
