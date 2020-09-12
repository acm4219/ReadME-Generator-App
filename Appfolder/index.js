// array of questions for user
let inquirer = require("inquirer");
let fs = require("fs");
let generate = require("./utils/generateMarkdown");
const questions = [
  {
    type: "input",
    message: "What is the title of your read me?",
    name: "title",
  },
  {
    type: "input",
    message: "What is the description of the Application?",
    name: "description",
  },
  {
    type: "input",
    message: "How do you install the app?",
    name: "installation",
  },
  {
    type: "input",
    message: "How do you use it?",
    name: "usage",
  },
  {
    type: "input",
    message: "Who contributed to the project?",
    name: "contributing",
  },
  {
    type: "input",
    message: "How often did you test this?",
    name: "tests",
  },
  {
    type: "input",
    message: "What are some questions you need to ask?",
    name: "questions",
  },
  {
    type: "input",
    message: "Please provide license link",
    name: "license",
  },
];

// function to write README file
// function writeToFile(fileName, data) {

// }
inquirer.prompt(questions).then(function (data) {
  fs.writeFile("README.md", generate(data), function (err) {
    if (err) {
      return console.log(err);
    } else {
      console.log("success");
    }
  });
});

// function to initialize program
function init() {}

// function call to initialize program
init();
