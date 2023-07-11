const inquirer = require('inquirer');
const { TablesCreate,Department } = require('./lib/Tables');

function openPanel() {
  inquirer
    .prompt([
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
      const { action } = answer;

      if (action === 'exit') {
        console.log('Closing the app');
        process.exit();
      } else {
        const tablesCreate = new TablesCreate(action);
        tablesCreate.render().then(() => {
          openPanel(); 
        });
      }
    });
}

openPanel();





 
 



