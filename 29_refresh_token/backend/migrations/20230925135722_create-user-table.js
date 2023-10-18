/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("users", table => {
      table.uuid("id").primary().notNullable();
      table.string("email").unique().notNullable();
      table.text("hash_password").notNullable();
    })
    .createTable("user_profiles", table => {
      table.uuid("user_id").references("id").inTable("users");
      table.text("full_name");
      table.text("address");
      table.date("birth_date");
      table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("users").dropTable("user_profiles");
};
