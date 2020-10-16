const inquirer = require("inquirer");
const markdownGenerator = require("./utils/generateMarkdown");
const fs = require("fs");




async function init() {
      const data = await inquirer.prompt([
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
                  name: "Installation",
                  message: "Describe how to install?"
            },
            {
                  type: "input",
                  name: "Usage",
                  message: "Usage"
            },
            {
                  type: "list",
                  name: "License",
                  message: "Select yout license",
                  choices: [
                        "agpl-3.0",
                        "apache-2.0",
                        "bsd-2-clause",
                        "gpl-3.0",
                        "mit",
                        "unlicense"
                  ]

            },
            {
                  type: "input",
                  name: "Contributing",
                  message: "Name of contributers?"
            },
            {
                  type: "input",
                  name: "Tests",
                  message: "Tests"
            },
            {
                  type: "input",
                  name: "IQuestions",
                  message: "Describe how to install?"
            },
            {
                  type: "input",
                  name: "github",
                  message: "Enter your github username."
            }

      ])
      console.log(data);
      writeToFile(data);
}

function writeToFile(data) {
      console.log(data)
      fs.writeFile("readme.md", markdownGenerator(data), function (err) {
            if (err) {
                  console.log("youve got an" + err);

            } else
                  console.log("Youre readme id ready!!");

      })
}

init()



