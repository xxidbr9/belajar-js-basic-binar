/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("user_liked_posts", table => {
    table.uuid("id").unique().notNullable().primary();
    table.string("user_id").references("id").inTable("users");
    table.string("post_id").references("id").inTable("posts");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("user_liked_posts");
};
