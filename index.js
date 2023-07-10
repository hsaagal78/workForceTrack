const mysql = require('mysql2');
const inquirer = require('inquirer');
// const { type } = require('os');
// const { default: Choices } = require('inquirer/lib/objects/choices');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'business_db'
  });

//   function printAllEmployees() {
//     connection.query('SELECT * FROM employees', (err, data) => {
//       if (err) return console.log(err);
  
//       console.log(data);
//       connection.end();
//     });
//   }
//   printAllEmployees();

  function openPanel() {
    inquirer
    .prompt ([
        {
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
            'view all departments',
            'view all roles',
            'view all employees',
            'add a department',
            'add a role',
            'add an employee',
            'update an employee role',
            'exit'
        ]
    }
    ])
  }
  openPanel();