// db.js
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port:'3308',
  password: '',
  database: 'fantasy_hall',
});

module.exports = connection;
