const express = require ('express');
const inquirer = require ('inquirer');
const mysql = require ('mysql2');

const PORT = process.env.PORT || 3001;


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'employees'
  });

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
}
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
function viewAllEmployees 
// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database
function addRole 
// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role 
// and that role is added to the database
function addEmployee
// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
function updateRole
// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database



// inquirer
//   .prompt([
//     {
//       type: 'list',
//       name: 'action',
//       message: 'What would you like to do?',
//       choices: [
//         'View all departments',
//         'View all roles',
//         'View all employees',
//         'Add a department',
//         'Add a role',
//         'Add an employee',
//         'Update an employee role',
//         'Exit'
//       ]
//     }
//   ])
//   .then(answers => {
//     switch (answers.action) {
//       case 'View all departments':
//         connection.query('SELECT * FROM departments', (err, res) => {
//           if (err) throw err;
//           console.table(res);
//         });
//         break;
//       case 'View all roles':
//         connection.query(
//           'SELECT roles.id, roles.title, roles.salary, departments.name FROM roles JOIN departments ON roles.department_id = departments.id',
//           (err, res) => {
//             if (err) throw err;
//             console.table(res);
//           }
//         );
//         break;
//       case 'View all employees':
//         connection.query(
//           'SELECT employees.id, employees.first_name, employees.last_name, roles.title, departments.name, roles.salary, CONCAT(managers.first_name, " ", managers.last_name) as manager FROM employees JOIN roles ON employees.role_id = roles.id JOIN departments ON roles.department_id = departments.id LEFT JOIN employees as managers ON employees.manager_id = managers.id',
//           (err, res) => {
//             if (err) throw err;
//             console.table(res);
//           }
//         );
//         break;
//       case 'Add a department':
//         inquirer
//           .prompt([
//             {
//               type: 'input',
//               name: 'name',
//               message: 'Enter the name of the department:'
//             }
//           ])
//           .then(answers => {
//             connection.query(
//               'INSERT INTO departments SET ?',
//               {
//                 name: answers.name
//               },
//               (err, res) => {
//                 if (err) throw err;
//                 console.log('Department added!');
//               }
//             );
//           });
//         break;
//       case 'Add a role':
//         inquirer
//           .prompt([
//             {
//               type: 'input',
//               name: 'title',
//               message: 'Enter the title of the role:'
//             },
//             {
//               type: 'input',
//               name: 'salary',
//               message: 'Enter the salary for the role:'
//             },
//             {
//               type:
