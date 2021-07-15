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
  runmenu();
});

function menu() {
  inquirer
    .prompt({
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
    })

    .then(function (answer) {
      console.log(answer);

      if (answer.select === "View All Employees") {
        viewAll();
      } else if (answer.select === "View Department") {
        viewDepartments();
      } else if (answer.select === "View role") {
        viewRoles();
      } else if (answer.select === "Add Employee") {
        addEmployee();
      } else if (answer.select === "Add department") {
        addDepartment();
      } else if (answer.select === "Add Role") {
        addRole();
      } else if (answer.select === "Update Role") {
        updateRole();
      } else {
        connection.end();
      }
    });
}
