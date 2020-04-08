var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "root",
  database: "employeeTrackerdb",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Sucess");
  //   addInfo();
  //   console.log("This works on:" + port);
  start();
});

// function addInfo() {
//   inquirer.prompt([{
//     name: "action",
//     type: "rawlist",
//     message: "Add: ",
//     choices: ["Add departments", "Add roles", "Add employees"],
//   }]);
//   addInfo();
// }

function start() {
  inquirer
    .prompt({
      name: "AddViewUpdate",
      type: "list",
      message: "Would you like to [ADD], [VIEW], [UPDATE]?",
      choices: ["ADD", "VIEW", "UPDATE"],
    })
    .then(function (answer) {
      // based on their answer, either call the bid or the post functions
      switch (answer.AddViewUpdate) {
        case "ADD":
          addDRE();
          break;

        case "VIEW":
          viewDRE();
          break;

        case "UPDATE":
          updateDRE();
          break;
      }
    });
}

function addDRE() {
  inquirer
    .prompt({
      name: "AddDRE",
      type: "list",
      message: "Would you like to [Departments], [Roles], [Employee]?",
      choices: ["Departments", "Roles", "Employee"],
    })
    .then(function (answer) {
      // based on their answer, either call the bid or the post functions
      switch (answer.AddDRE) {
        case "Departments":
          addDepartmentsDRE();
          break;

        case "Roles":
          addRolesDRE();
          break;

        case "Employee":
          addEmployeesDRE();
          break;
      }
    });
  // inquirer.prompt({});
}

function addDepartmentsDRE() {
  inquirer
    .prompt([
      { name: "Department", type: "input", message: "Department Name: " },
      {
        name: "id",
        type: "input",
        message: "id#",
      },
    ])
    .then(function (answer) {
      connection.query(
        "INSERT INTO departments SET ?",
        {
          id: answer.id,
          names: answer.Department,
        },
        function (err) {
          if (err) throw err;
          console.log("Department Added!");
          start();
        }
      );
    });
}

function addRolesDRE() {
  inquirer
    .prompt([
      { name: "title", type: "input", message: "Role Name: " },
      {
        name: "id",
        type: "input",
        message: "id#",
      },
      {
        name: "salary",
        type: "input",
        message: "Salary: $ "
      },
      {
        name: "departmentId",
        type: "input",
        message: "department_id: "
      }
    ])
    .then(function (answer) {
      connection.query(
        "INSERT INTO roles SET ?",
        {
          id: answer.id,
          title: answer.title,
          salary: answer.salary,
          department_id: answer.departmentId
        },
        function (err) {
          if (err) throw err;
          console.log("Roles Added!");
          start();
        }
      );
    });
}

function addEmployeesDRE() {
  inquirer
    .prompt([
      { name: "role_id", type: "input", message: "Role ID: " },
      {
        name: "id",
        type: "input",
        message: "id#",
      },
      {
        name: "firstName",
        type: "input",
        message: "First Name:  "
      },
      {
        name: "lastName",
        type: "input",
        message: "Last Name: "
      }
    ])
    .then(function (answer) {
      connection.query(
        "INSERT INTO employee SET ?",
        {
          id: answer.id,
          role_id: answer.role_id,
          first_name: answer.firstName,
          last_name: answer.lastName
        },
        function (err) {
          if (err) throw err;
          console.log("Employee Added!");
          start();
        }
      );
    });
}

function viewDRE() {
  inquirer
    .prompt({
      name: "viewDRE",
      type: "list",
      message: "Would you like to [Departments], [Roles], [Employee]?",
      choices: ["Departments", "Roles", "Employee"],
    })
    .then(function (answer) {
      // based on their answer, either call the bid or the post functions
      switch (answer.AddDRE) {
        case "Departments":
          viewDepartmentsDRE();
          break;

        case "Roles":
          viewRolesDRE();
          break;

        case "Employee":
          viewEmployeesDRE();
          break;
      }
    });
  // inquirer.prompt({});
}

function viewDepartmentsDRE() {}

function viewRolesDRE() {}

function viewEmployeesDRE() {}

function updateDRE() {
  // inquirer.prompt({});
}
