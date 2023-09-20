/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('events').del()
  await knex('events').insert([
    {id: 1, event_name: 'event 1', event_date: new Date(2023, 8, 28, 12, 10, 0)},
    {id: 2, event_name: 'event 2', event_date: new Date(2023, 8, 28, 13, 0, 0)},
    {id: 3, event_name: 'event 3', event_date: new Date(2023, 8, 28, 15, 0, 0)},
    {id: 4, event_name: 'event 4', event_date: new Date(2023, 0, 28, 15, 0, 0)}
  ]);
};
