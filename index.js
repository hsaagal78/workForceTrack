const inquirer = require('inquirer');
const { Department, TablesCreate } = require('./lib/Tables');


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
    .then((answer) => {
        const {action}=answer;
        if(action ==="exit") {
            console.log('closing the app');
            process.exit();
        }else {
          const department = new TablesCreate(action);
          department.render();
        }
    }
    )
  }
  openPanel();





