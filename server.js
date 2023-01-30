const express = require ('express');
const inquirer = require ('inquirer');
const mysql = require ('mysql2');
const consoleTable = require ('console.table');

const PORT = process.env.PORT || 3001;
const app = express ();

app.use(express.urlencoded({extended: false}));
app.use (express.json());

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'passwordsql!',
    database: 'employees'
  },

  console.log ('Connected to employees database.')

  );

// WHEN I start the application
// THEN I am presented with the following options: 
// view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
function startApplication() {
  inquirer.prompt ([ 
    {
      type: 'list',
      name: 'choice',
      message: 'What would you like to do?',
      choices: [ 
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role',
        'Exit'
      ]

    }
  ])

.then(answer => {
  if (answer.choice == 'View all departments') {
    viewAllEmployees();
  } else if (answer.choice == 'View all roles') {
    viewAllRoles();
  } else if (answer.choice == 'View all employees') {
    viewAllEmployees();
  } else if (answer.choice == 'Add a department') {
    addDepartment();
  } else if (answer.choice == 'Add a role') {
    addRole();
  } else if (answer.choice == 'Add an employee') {
    addEmployee();
  } else if (answer.choice == 'Upldate and employee role') {
    updateRole();
  } else {
    init();
  }

})
};



// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing department names and department ids
function viewAllDepartment 
// WHEN I choose to view all roles
// THEN I am presented with the job title, role id, the department that role belongs to, 
//and the salary for that role
function viewAllRoles 
// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, 
// including employee ids, first names, last names, job titles, departments, 
// salaries, and managers that the employees report to
function viewAllEmployees()
// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database
function addDepartment
// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role 
// and that role is added to the database
function addRole 

function addEmployee
// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
function updateRole
// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database


