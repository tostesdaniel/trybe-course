const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  // host: process.env.MYSQL_HOST,
  // database: process.env.MYSQL_DATABASE,
  // user: process.env.MYSQL_USER,
  // password: process.env.MYSQL_PASSWORD,
  host: 'localhost',
  database: 'cep_lookup',
  user: 'root',
  password: 'notmypassword',
});

module.exports = connection;
