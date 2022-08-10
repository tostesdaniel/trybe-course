const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'notmypassword',
  database: 'rest_exercicios',
});

module.exports = connection;
