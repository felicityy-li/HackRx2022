const mysql = require('mysql2/promise');
var dotenv = require('dotenv');
dotenv.config();

module.exports = mysql.createConnection({
    user: process.env.MYSQL_USERNAME,
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    multipleStatements: true
});

