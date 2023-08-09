const userSchema = (table) => {
  table.string('id').primary().unique()
  table.string('fullname').notNullable()
  table.string('email').unique().notNullable()
  table.string('gender').notNullable()
  table.string('password').notNullable()
  table.timestamps(true, true)
}

module.exports = userSchema;