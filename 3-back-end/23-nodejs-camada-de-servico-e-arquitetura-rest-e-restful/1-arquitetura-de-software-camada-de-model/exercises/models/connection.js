const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'notmypassword',
  database: 'model_exercise',
});

module.exports = pool;
