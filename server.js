var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",
 
  password: "root",
  database: "employeeTrackerdb"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Sucess")
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
      if (answer.AddViewUpdate === "ADD") {
        addDRE();
      } else if (answer.AddViewUpdate === "VIEW") {
        viewDRE();
      } else if (answer.AddViewUpdate === "UPDATE") {
        updateDRE();
      } else {
        connection.end();
      }
    });
  
}

function addDRE() {
  // inquirer.prompt({});
}

function viewDRE() {
  // inquirer.prompt({});
}

function updateDRE() {
  // inquirer.prompt({});
}
