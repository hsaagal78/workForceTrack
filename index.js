const inquirer = require('inquirer');
const { TablesCreate} = require('./lib/Tables');

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

      if (action === 'add a department') {
        // Call the function to add a department
        addedDepartment();
      } else if (action === 'exit') {
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

function addedDepartment() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'department_name',
        message: 'Enter the department name:'
      }
    ])
    .then((answer) => {
      const department = new TablesCreate(answer);
      department.addDepartment(answer)
        .then(() => {
          console.log('Department added successfully!');
          console.log(answer);
          openPanel();
        })
        .catch((error) => {
          console.log('Error adding department:', error);
          openPanel();
        });
    });
}

openPanel();





 
 



