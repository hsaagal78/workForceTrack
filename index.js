const mysql = require('mysql2');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'business_db'
  });

  function printAllEmployees() {
    connection.query('SELECT * FROM employees', (err, data) => {
      if (err) return console.log(err);
  
      console.log(data);
      connection.end();
    });
  }
  printAllEmployees();