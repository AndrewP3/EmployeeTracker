# Employee-Tracker Application

Module 12

## Installation and Execution

Perform "npm install" to install all required dependencies to run this app. Then type "node index.js" in the terminal and hit "enter" to begin the application.

## Project Description

The Employee Tracker is a command line application that allows the user to manipulate data in a SQL database. The app is designed to interact with 3 SQL databases: one called "employees," one called "roles," and one called "departments." Each employee has a "title" that is a member of the "roles" database, and each role is associated with a member of the "departments" database.

## Task
- GIVEN a command-line application that accepts user input
- WHEN I start the application
- THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
- WHEN I choose to view all departments
- THEN I am presented with a formatted table showing department names and department ids
- WHEN I choose to view all roles
- THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
- WHEN I choose to view all employees
- THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
- WHEN I choose to add a department
- THEN I am prompted to enter the name of the department and that department is added to the database
- WHEN I choose to add a role
- THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
- WHEN I choose to add an employee
- THEN I am prompted to enter the employee’s first name, last name, role, and manager and that employee is added to the database
- WHEN I choose to update an employee role
- THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
