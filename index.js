const inquirer = require("inquirer");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "shadow12",
  database: "employeeTracker",
});

connection.connect((err) => {
  if (err) throw err;
  runSearch();
});
