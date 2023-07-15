const mysql = require('mysql2');

class TablesCreate {
  constructor(action,title,salary,department_id,first_name,last_name,role_id,manager_id) {
    // Set the properties of the TableCreate class
    this.action = action;
    this.title = title;
    this.salary = salary;
    this.department_id = department_id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.role_id = role_id;
    this.manager_id = manager_id;
    // Create a MySQL connection
    this.connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      database: 'business_db'
    });
  }
  // Render the appropriate action base on the provided action value
  render() {
    switch (this.action) {
      case 'view all departments':
        return this.viewAllDepartments();
      case 'view all roles':
        return this.viewAllRoles();
      case 'view all employees':
        return this.viewAllEmployees();
      case 'add a department':
        return this.addDepartment();
      case 'add a role':
        return this.addRole();
      case 'add an employee':
        return this.addEmployee();
    
    }
  }
// Retrive and display all departments
  viewAllDepartments() {
    return new Promise((resolve, reject) => {
      this.connection.query('SELECT * FROM departments', (err, res) => {
        if (err) {
          console.log('Error:', err);
          reject(err);
        } else {
          console.log('Departments:');
          console.table(res);
          resolve(res);
        }
      });
    });
  }
// Retrieve and display all roles with department information
  viewAllRoles() {
    return new Promise((resolve, reject) => {
      this.connection.query(
        `SELECT
          r.id, 
          r.title,
          d.department_name AS department,
          r.salary
         FROM roles r
         JOIN departments d ON r.department_id = d.id`,
        (err, res) => {
          if (err) {
            console.log('Error:', err);
            reject(err);
          } else {
            console.log('roles:');
            console.table(res);
            resolve(res);
          }
        }
      );
    });
  }

  // Retrieve and display all employees with role and department information
  viewAllEmployees() {
    return new Promise((resolve, reject) => {
      this.connection.query(
        `SELECT
          e.first_name,
          e.last_name,
          r.title AS title,
          d.department_name AS department,
          r.salary AS salary,
          e.manager_id AS manager
        FROM employees e
        JOIN roles r ON e.role_id = r.id
        JOIN departments d ON r.department_id = d.id`,
        (err, res) => {
          if (err) {
            console.log('Error:', err);
            reject(err);
          } else {
            console.log('Employees:');
            console.table(res);
            resolve(res);
          }
        }
      );
    });
  }

  // Add a new department to the database
  addDepartment() {
    return new Promise((resolve, reject) => {
      const insertSql = 'INSERT INTO departments (department_name) VALUES (?)';
      const selectSql = 'SELECT * FROM departments';

      this.connection.query(insertSql, [this.title], (err, res) => {
        if (err) {
          console.log('Error:', err);
          reject(err);
        } else {
          this.connection.query(selectSql, (err, res) => {
            if (err) {
              console.log('Error:', err);
              reject(err);
            } else {
              // console.log('Departments:');
              // console.table(res);
              resolve();
            }
          });
        }
      });
    });
  }
// Add a new role to the database
  addRole() {
    return new Promise((resolve, reject) => {
      const insertSql = 'INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)';
      const selectSql = 'SELECT * FROM roles';

      this.connection.query(
        insertSql,
        [this.title, this.salary, this.department_id],
        (err, res) => {
          if (err) {
            console.log('Error:', err);
            reject(err);
          } else {
            this.connection.query(selectSql, (err, res) => {
              if (err) {
                console.log('Error:', err);
                reject(err);
              } else {
                console.log('Roles:');
                console.table(res);
                resolve();
              }
            });
          }
        }
      );
    });
  }

  // Get the IDs of all managers from the employees table
  getManagerIds() {
    return new Promise((resolve, reject) => {
      const query = 'SELECT first_name, last_name, manager_id FROM employees';
  
      this.connection.query(query, (error, results) => {
        if (error) {
          reject(error);
        } else {
          const managerIds = results.map((row) => ({
            name: `${row.first_name} ${row.last_name}`,
            value: row.manager_id
          }))
          .filter((managerIds) => managerIds.value !== null) 
          
          resolve(managerIds);
        }
      });
    });
  }
  
  // Get the titles of all roles from the roles table
  getRoleTitles() {
    return new Promise((resolve, reject) => {
      const query = 'SELECT title, department_id FROM roles';
  
      this.connection.query(query, (error, results) => {
        if (error) {
          reject(error);
        } else {
          const managerIds = results.map((row) => ({
            name: `${row.title} `,
            value: row.department_id
          }));
          resolve(managerIds);
        }
      });
    });
  }
// Add a new employee to the database
   addEmployee() {
    return new Promise((resolve, reject) => {
      const insertSql = 'INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)';
      const selectSql = 'SELECT * FROM employees';
        this.connection.query(
        insertSql,
        [this.first_name, this.last_name, this.role_id, this.manager_id],
        (err, res) => {
          if (err) {
            console.log('Error:', err);
            reject(err);
          } else {
            this.connection.query(selectSql, (err, res) => {
              if (err) {
                console.log('Error:', err);
                reject(err);
              } else {  
                console.log('Employee added successfully!');
                console.log('Employees');
                console.table(res);
                resolve();
              }
            });
          }
        }
      );
    });
  }
  
}
module.exports = {
  TablesCreate
};







