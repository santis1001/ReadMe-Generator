// Require Packages
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");
const getlicenses = require("./utils/licenses");

const fs = require('fs');

// Returns the object containing all the license information
// Compete Name, and short name
const lcs = getlicenses().map(item => item.license);

//Inquirer questions Object Array 
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github Username?',
    },
    {
        type: 'input',
        name: 'Email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'Title',
        message: 'What is the project title?',
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Enter the description of the project',
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'Dependencies used to install your application',
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Describe the projects Usage Information',
    },
    {
        type: 'list',
        name: 'License',
        message: 'Enter the License used for the project',
        choices: lcs
    },
    {
        type: 'input',
        name: 'Test',
        message: 'Describe the test steps'        
    },
    {
        type: 'input',
        name: 'Contributing',
        message: 'Enter your Contribution Policy'        
    }
];

// TODO: Create a function to write README file
//Invoke the function and create the readme file using the data from 
//generateMarkdown() function
function writeToFile(fileName, data) { 
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            if (err) {
                reject(err);
                return;
            }
            else {
                resolve({
                    ok: true,
                    message: 'File created!'
                });
                console.log('README.md file created successfully!');
            }
        });
    });
}

// Make the question prompts and send the answers to the generateMarkdown()
// Function, which will return a string with the readme file body.
function init() {
    return inquirer.prompt(questions).then((answers) => {
        const readme = generateMarkdown(answers);
        writeToFile('./README.md',readme);
    });
}
// Function call to initialize app
init();

