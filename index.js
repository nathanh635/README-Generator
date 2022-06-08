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
function writeToFile(fileName, data) {}

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
      message: 'What languages do you know?',
      name: 'languages',
    },
    {
      type: 'input',
      message: 'What is your preferred means of communication?',
      name: 'communication',
    },
  ])
  .then((response) =>
fs.writeFile('README.md', JSON.stringify(response), (err) =>
  err ? console.error(err) : console.log('Readme file created!')
)
  );
}

// Function call to initialize app
init();
