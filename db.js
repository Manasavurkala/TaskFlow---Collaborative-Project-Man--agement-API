// config/db.js

const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

// Create MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  multipleStatements: true
});

// Connect to database
db.connect((err) => {
  if (err) {
    console.error('DB Connection Failed:', err.message);
  } else {
    console.log('✅ MySQL Connected...');
  }
});

module.exports = db;
