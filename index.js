const inquirer = require("inquirer");
const mysql = require("mysql2");
const consoleTable = require("console.table");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "shadow12",
  database: "employeeTracker",
});

connection.connect((err) => {
  if (err) throw err;
  userPrompt();
});

const userPrompt = () => {
  inquirer.prompt({
    name: "select",
    type: "list",
    message: "What would you like to do?",
    choices: [
      "view all departments",
      "view all roles",
      "view all employees",
      "add a department",
      "add a role",
      "add an employee",
      "update an employee role",
    ],
  });
};
