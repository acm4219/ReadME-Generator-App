// array of questions for user
let inquirer = require("inquirer");
let fs = require("fs");
const questions = [
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the title of your read me?",
        name: "README Title",
      },
      {
        type: "input",
        message: "What is the description of the Application?",
        name: "Description",
      },
      {
        type: "input",
        message: "What is the table of Contents?",
        name: "Table of Contents",
      },
      {
        type: "input",
        message: "How do you install the app?",
        name: "Installation",
      },
      {
        type: "input",
        message: "How do you use it?",
        name: "Usage",
      },
      {
        type: "input",
        message: "License?",
        name: "License",
      },
      {
        type: "input",
        message: "Who contributed to the project?",
        name: "Contributing",
      },
      {
        type: "input",
        message: "How often did you test this?",
        name: "tests",
      },
      {
        type: "input",
        message: "What are some questions you need to ask?",
        name: "Questions",
      },
    ])
    .then(function (response) {
      if (response.confirm === response.input) {
        console.log("Success!");
      } else {
        console.log("Unable to process!");
      }
    }),
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile("README.md", process.argv[2], function (err) {
    if (err) {
      return console.log(err);
    } else {
      console.log("success");
    }
  });
}

// function to initialize program
function init() {}

// function call to initialize program
init();
