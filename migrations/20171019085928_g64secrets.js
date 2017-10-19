
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.text('')
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
  return knex.schema.dropTable('user_secrets');
  return knex.schema.dropTable('secrets');

};
