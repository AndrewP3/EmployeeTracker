DROP DATABASE IF EXISTS employeeTracker;
CREATE DATABASE employeeTracker; 
USE employeeTracker;

CREATE TABLE Departments (
  id INTEGER AUTO_INCREMENT,
  department_name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE Roles (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL (10,2) NOT NULL,
    department_id INTEGER,
    PRIMARY KEY (id)
);

CREATE TABLE Employees (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER (10) NOT NULL,
    manager_id INTEGER (10),
    PRIMARY KEY(id)
);