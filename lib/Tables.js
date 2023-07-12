const mysql = require('mysql2');

class TablesCreate {
  constructor(action,title,salary,department_id,first_name,last_name,role_id,manager_id) {
    this.action = action;
    this.title = title;
    this.salary = salary;
    this.department_id = department_id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.role_id = role_id;
    this.manager_id = manager_id;
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
      case 'add a department':
        return this.addDepartment();
      case 'add a role':
        return this.addRole();
      case 'add an employee':
        return this.addEmployee();
    
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
          resolve(res);
        }
      });
    });
  }

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
              console.log('Departments:');
              console.table(res);
              resolve();
            }
          });
        }
      });
    });
  }

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

  addEmployee() {
    return new Promise((resolve, reject) => {
      const insertSql = 'INSERT INTO roles (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)';
      const selectSql = 'SELECT * FROM employees';

      this.connection.query(
        insertSql,
        [this.first_name, this.last_name, this.role_id,this.manager_id],
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
                console.log('Employes:');
                console.table(res);
                resolve(res);
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


