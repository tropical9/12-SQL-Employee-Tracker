DROP DATABASE IF EXISTS employees;
CREATED DATABASE employees;
USE employees;

CREATE TABLE department (
    id INT PRIMARY KEY AUTO_INCREMENT,
    department_name VARCHAR(30) NOT NULL 
);

CREATE TABLE role (
    id INT PRIMARY KEY AUTO_INCREMENT,
    role_title VARCHAR(30) NOT NULL,
    -- salary DECIMAL() NOT NULL, 
    department_id INT ?
);

CREATE TABLE employee (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT
);