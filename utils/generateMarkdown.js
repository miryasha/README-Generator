// function to generate markdown for README
function generateMarkdown(data) {
  return `The titile of project is # ${data.Title}

           *${data.Description}*

           #TableofContents
           **Installation
           **Usage
           **License
           **Contributing
           **Tests
          
           ## ${data.Installation}
           ## ${data.Usage}
           ##License
           #${data.License}
           ## ${data.Contributing}
           ## ${data.Tests}
           ## ${data.IQuestions}

           https://github.com/${data.github}?tab=repositories
       

`;
}

module.exports = generateMarkdown;
