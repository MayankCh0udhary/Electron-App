// Import mysql2
const mysql = require('mysql2');

// Create connection pool
const pool = mysql.createPool({
  host: 'DESKTOP-AAS0NEJ',  // Your MySQL host (e.g., localhost)
  user: 'root', // Your MySQL username
  password: 'Mayank@1234', // Your MySQL password
  database: 'ElectronAppDB', // Your MySQL database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Export the connection pool
module.exports = pool;
