const knex = require("knex");
const knexFile = require("../knexfile");

const db = knex(knexFile["development"]);
db.on("query", function (queryData) {
  console.log(queryData);
});
module.exports = db;
