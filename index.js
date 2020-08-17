var inquirer = require("inquirer");
var fs = require('fs');

// array of questions for user
const questions = [{
        type: "input",
        message: "What is yout GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your project's name?",
        name: "project"
    },
    {
        type: "input",
        message: "Please write a short description of your project.",
        name: "description"
    },
    {
        type: "list",
        message: "What kind of license should your project have?",
        name: "license",
        choices: [
            "MIT",
            "APACHE 2.0",
            "GPL 3.0",
            "BSD 3",
            "None"
        ]
    },
    {
        type: "input",
        message: "What command should be run to install dependencies?",
        name: "install"
    },
    {
        type: "input",
        message: "What command should be run to run tests?",
        name: "test"
    },
    {
        type: "input",
        message: "What does the user need to know about using the repo? Enter 'N/A' if none.",
        name: "repo"
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to the repo? Enter 'N/A' if none.",
        name: "contribute"
    }
];


// function to write README file
function writeToFile(filename, data) {
    return fs.writeFileSync(filename, data)
};


// function to initialize program
function init() {
    inquirer.prompt(questions).then(function (data) {
        writeToFile("READMD.md", 
`# ${data.project}\n
![GitHub License](https://img.shields.io/badge/License-${data.license}-green.svg)\n
## Description\n
${data.description}\n
## Table of Contents\n
* [Installation](#installation)\n
* [Usage](#usage)\n
* [License](#license)\n
* [Contributing](#contributing)\n
* [Tests](#tests)\n
* [Questions](#Questions)\n
## Installation\n
To install necessary dependecies, run the following commands:\n
\`\`\`
${data.install}
\`\`\`\n
## Usage\n
${data.repo}\n
## License\n
This project is licensed under the ${data.license} license.\n
## Contributing\n
${data.contribute}\n
## Tests\n
To run tests, run the following command:
\`\`\`
${data.test}
\`\`\`\n
## Questions\n
If you have any questions, open an issue or contact me directly at [${data.email}](${data.email}). You can find more of my work at [${data.username}](https://github.com/${data.username})`)
            console.log("Your README has been generated!")
        
    });
}

// function call to initialize program
init();