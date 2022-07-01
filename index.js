// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const path = require('path');
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [
    {
    type: "input",
    name: "Title",
    message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Could you add some decription?",
    },
    {
         type: "input",
         name: "License",
         message: "What license does your project have?",
    },
    {
        type: "input",
        name: "Usage",
        message: "what are the usage of this readME?",
    },
    {
        type: "input",
        name: "github",
        message: "What is your username in github?",
        },
        {
            type: "input",
            name: "email",
            message: "Whats your email?",
            },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data);
    }



    // TODO: Create a function to initialize app
    function init() {
        inquirer.prompt(questions).then(inquirerResponses=> {
            console.log("its making your readme hold up!");
            writeToFile('README.md', generateMarkdown({ ...inquirerResponses }));
        })   
    }

// Function call to initialize app
init();