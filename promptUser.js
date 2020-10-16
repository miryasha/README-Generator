const inquirer = require("inquirer");

function promptUser() {
      return inquirer.prompt([
            {
                  type: "input",
                  name: "Title",
                  message: "What is Title of your project?"
            },
            {
                  type: "input",
                  name: "Description",
                  message: "Describe your project?"
            },
            {
                  type: "input",
                  name: "Table of Contents",
                  message: "dddddddddd"
            },
            {
                  type: "input",
                  name: "Installation",
                  message: "Describe how to install?"
            },
            {
                  type: "input",
                  name: "Usage",
                  message: "Usage"
            },
            {
                  type: "input",
                  name: "License",
                  message: "What type of license did you use"
            },
            {
                  type: "input",
                  name: "Contributing",
                  message: "Name of contributers?"
            },
            {
                  type: "input",
                  name: "Tests",
                  message: "dddddddddd"
            },
            {
                  type: "input",
                  name: "IQuestions",
                  message: "Describe how to install?"
            },
            {
                  type: "input",
                  name: "linkedin",
                  message: "Enter your LinkedIn URL."
            }
      ]);
}



module.exports = {
promptUser
  }

promptUser().then(response => console.log(response));
