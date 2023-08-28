const { v4 } = require("uuid");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("blogs").insert([
    {
      id: v4(),
      title: "dummy 1",
      content: "dummy 1 binar bersama sama",
      author: "nando"
    }
  ]);
};
