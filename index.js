// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your full name?",
    name: "user",
  },
  {
    type: "input",
    message: "What is your Github Username?",
    name: "githubUsername",
  },
  {
    type: "input",
    message: "What is your contact email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "What is this description of your project?",
    name: "description",
  },
  {
    type: "input",
    message: "What are the installation instructions of your project?",
    name: "installation",
  },
  {
    type: "input",
    message: "what are the usage direction/information needed for this project?",
    name: "usage",
  },
  {
    type: "list",
    message: "What license did you use?",
    name: "license",
    choices: [
      "MIT License",
      "Apache License 2.0",
      "Mozilla Public License 2.0 (MPL-2.0)",
      "The Unliscense",
    ],
  },
  {
    type: "input",
    message: "How are people going to contribute to your project?",
    name: "contributing",
  },
  {
    type: "input",
    message: "How can users test your project?",
    name: "test",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err, data) => {
    err ? console.log(err) : console.log("Success");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const data = generateMarkdown(answers);
    writeToFile("GeneratedREADME.md", data);
  });
}

// Function call to initialize app
init();