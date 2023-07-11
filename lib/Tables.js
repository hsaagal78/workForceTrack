const mysql = require('mysql2');

class TablesCreate {
  constructor(action) {
    this.action = action;
    this.connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      database: 'business_db'
    });
  }

  render() {
    switch (this.action) {
      case 'view all departments':
        return this.viewAllDepartments();
      case 'view all roles':
        return this.viewAllRoles();
        case 'view all employees':
        return this.viewAllEmployees();
      
    }
  }

  viewAllDepartments() {
    return new Promise((resolve, reject) => {
      this.connection.query('SELECT * FROM departments', (err, res) => {
        if (err) {
          console.log('Error:', err);
          reject(err);
        } else {
          console.log('Departments:');
          console.table(res);
          resolve();
        }
      });
    });
  }
    viewAllRoles() {
        return new Promise((resolve, reject) => {
            this.connection.query('SELECT * FROM roles', (err, res) => {
              if (err) {
                console.log('Error:', err);
                reject(err);
              } else {
                console.log('Roles:');
                console.table(res);
                resolve();
              }
            });
          });
  }
  viewAllEmployees() {
    return new Promise((resolve, reject) => {
        this.connection.query('SELECT * FROM employees', (err, res) => {
          if (err) {
            console.log('Error:', err);
            reject(err);
          } else {
            console.log('Roles:');
            console.table(res);
            resolve();
          }
        });
      });
}

}

module.exports = {
  TablesCreate
};



    //   case 'add a department':
    //     this.addDepartment();
    //     break;
    //   case 'add a role':
    //     this.addRole();
    //     break;
    //   case 'add an employee':
    //     this.addEmployee();
    //     break;
    //   case 'update an employee role':
    //     this.updateEmployeeRole();
    //     break;
    //   default:
    //     console.log('Invalid action');
    //     break;
//     }
//   }



//   addDepartment() {
//     // Prompt user for department details
//     // ...
//     const department_name = 'Sales'; // Example

//     const query = `INSERT INTO departments (department_name) VALUES ('${department_name}')`;
//     this.executeQuery(query);
//   }

//   addRole() {
//     // Prompt user for role details
//     // ...
//     const title = 'Sales Manager'; // Example
//     const salary = 50000; // Example
//     const department_id = 1; // Example

//     const query = `INSERT INTO roles (title, salary, department_id) VALUES ('${title}', ${salary}, ${department_id})`;
//     this.executeQuery(query);
//   }

//   addEmployee() {
//     // Prompt user for employee details
//     // ...
//     const first_name = 'John'; // Example
//     const last_name = 'Doe'; // Example
//     const role_id = 1; // Example
//     const manager_id = null; // Example

//     const query = `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('${first_name}', '${last_name}', ${role_id}, ${manager_id})`;
//     this.executeQuery(query);
//   }

//   updateEmployeeRole() {
//     // Prompt user for employee and new role details
//     // ...
//     const employee_id = 1; // Example
//     const new_role_id = 2; // Example

//     const query = `UPDATE employees SET role_id = ${new_role_id} WHERE id = ${employee_id}`;
//     this.executeQuery(query);
//   }

//   executeQuery(query) {
//     this.connection.query(query, (error, results) => {
//       if (error) {
//         console.error('Error executing query:', error);
//       } else {
//         console.log('Results:', results);
//       }
//       this.connection.end();
//     });
//   }
    // }

