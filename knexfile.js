require('dotenv').config();
// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgres://localhost/g64secrets',
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
  },
};
