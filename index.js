// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = ["What is the title of your project?",
"Enter a description for your project:",
"Enter installation instructions for your project:",
"Describe how to use the application:",
"Enter guidelines for contributing to your project:",
"List instructions to test the project:",
"select a valid licence for your project",
"Enter your GitHub username:",
"Enter your email address:"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const text = require('./utils/generateMarkdown.js')(data);
    fs.writeFile(fileName, text, (err) =>
    err ? console.error(err) : console.log('Readme file created!')
  )
}

// TODO: Create a function to initialize app
function init() {
inquirer
  .prompt([
    {
      type: 'input',
      message: questions[0],
      name: 'title',
    },
    {
      type: 'input',
      message: questions[1],
      name: 'description',
    },
    {
      type: 'input',
      message: questions[2],
      name: 'installation',
    },
    {
        type: 'input',
        message: questions[3],
        name: 'usage',
      },
      {
        type: 'input',
        message: questions[4],
        name: 'contribution',
      },
      {
        type: 'input',
        message: questions[5],
        name: 'testing',
      },
      {
        type: 'list',
        message: questions[6],
        name: 'license',
        choices: ['GNU GPLv3', 'Apache 2.0', 'MIT', 'No License'],
      },
      {
        type: 'input',
        message: questions[7],
        name: 'username',
      },
      {
        type: 'input',
        message: questions[8],
        name: 'email',
      },
  ])
  .then((data) => {
    writeToFile("./utils/README.md", data)
  }
  );
}

// Function call to initialize app
init();
