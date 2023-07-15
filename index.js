const inquirer = require('inquirer');
const { TablesCreate } = require('./lib/Tables');

// Funcion to open panel and display options
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
          'exit'
        ]
      }
    ])
    .then((answer) => {
      const { action } = answer;
      // Perform the corresponding action based on the selected option
      if (action === 'view all departments') {
        viewAllDepartments();
      } else if (action === 'view all roles') {
        viewAllRoles();
      } else if (action === 'view all employees') {
        viewAllEmployees();
      } else if (action === 'add a department') {
        addDepartment();
      } else if (action === 'add a role') {
        addRole();
      } else if (action === 'add an employee') {
        addEmployee();
      } else if (action === 'exit') {
        console.log('Closing the app');
        process.exit();
      }
    });
}
//Function to view all departments
function viewAllDepartments() {
  const tablesCreate = new TablesCreate('view all departments');
  tablesCreate.render().then(() => {
    openPanel();
  });
}
// Function to view all roles
function viewAllRoles() {
  const tablesCreate = new TablesCreate('view all roles');
  tablesCreate.render().then(() => {
    openPanel();
  });
}
//Function to add a department
function viewAllEmployees() {
  const tablesCreate = new TablesCreate('view all employees');
  tablesCreate.render().then(() => {
    openPanel();
  });
}

function addDepartment() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'department_name',
        message: 'What is the name of the new department:'
      }
    ])
    .then((answer) => {
      const { department_name } = answer;
      const tablesCreate = new TablesCreate('add a department', department_name);
      tablesCreate
        .render()
        .then(() => {
          console.log('Department added successfully!');
          openPanel();
        })
        .catch((error) => {
          console.log('Error adding department:', error);
          openPanel();
        });
    });
}
//Function to add a role
function addRole() {
  const tablesCreate = new TablesCreate('view all departments');
  tablesCreate.render()
    .then((departments) => {
      const departmentChoices = departments.map((department) => ({
        name: department.department_name,
        value: department.id
      }));

      return inquirer.prompt([
        {
          type: 'input',
          name: 'title',
          message: 'What is the name of the new role?'
        },
        {
          type: 'input',
          name: 'salary',
          message: 'What is the salary of the role?'
        },
        {
          type: 'list',
          name: 'department_id',
          message: 'Which department does the role belong to?',
          choices: departmentChoices
        }
      ]);
    })
    .then((answers) => {
      const { title, salary, department_id } = answers;
      const newRole = new TablesCreate('add a role', title, salary, department_id);
      return newRole.render();
    })
    .then(() => {
      console.log('Role added successfully!');
      openPanel();
    })
    .catch((error) => {
      console.log('Error adding role:', error);
      openPanel();
    });
}
// Function to add an employee
function addEmployee() {
  let roleChoices;
  let managerChoices;

  Promise.all([
    new TablesCreate().getRoleTitles(),
    new TablesCreate().getManagerIds()
  ])
    .then(([roleTitles, managerIds]) => {
      
      roleChoices = roleTitles;
      managerChoices = managerIds;
      return inquirer.prompt([
        {
          type: 'input',
          name: 'first_name',
          message: 'What is the employee\'s first name?'
        },
        {
          type: 'input',
          name: 'last_name',
          message: 'What is the employee\'s last name?'
        },
        {
          type: 'list',
          name: 'role_id',
          message: 'What is the employee\'s role?',
          choices: roleChoices
        },
        {
          type: 'list',
          name: 'manager_id',
          message: 'Who is the employee\'s manager?',
          choices: managerChoices
        }
      ]);
    })
    .then((answers) => {
      const { first_name, last_name, role_id, manager_id } = answers;
      console.log('fist name:', first_name);
      console.log('last_name:', last_name);
      console.log('Role:', role_id);
      console.log('Manager', manager_id);

      const newEmployee = new TablesCreate('add an employee',null,null,null, first_name, last_name, role_id, manager_id);
      return newEmployee.render();
    })
    .then(() => {
      console.log('Employee added successfully!');
      openPanel();
    })
    .catch((error) => {
      console.log('Error adding employee:', error);
      openPanel();
    });
}
// Start the application by opening panel
  openPanel();


