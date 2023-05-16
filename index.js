// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const lcs = ["Academic Free License",
"Apache license",
"Artistic license",
"Boost Software License",
"BSD 2-clause license",
"BSD 3-clause Clear license",
"BSD Zero-Clause license",
"Creative Commons license",
"Creative Commons Zero",
"Creative Commons Attribution",
"Creative Commons Attribution",
"Do What The F*ck You Want To Public License",
"Educational Community License",
"Eclipse Public License 1.0",
"Eclipse Public License 2.0",
"European Union Public License",
"GNU Affero General Public License",
"GNU General Public License",
"GNU General Public License",
"GNU General Public License",
"GNU Lesser General Public License",
"GNU Lesser General Public License",
"GNU Lesser General Public License",
"ISC",
"LaTeX Project Public License",
"Microsoft Public License",
"MIT",
"Mozilla Public License",
"Open Software License",
"PostgreSQL License",
"SIL Open Font License",
"University of Illinois/NCSA Open Source License",
"The Unlicense",
"zLib License"];

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
        name: 'TableContent',
        message: 'Enter the Table of content, seperated by (;)',
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'Describe the installation instructions',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Describe the Usage Information',
    },
    {
        type: 'list',
        name: 'Test',
        message: '',
        choice: ['Yes', 'No']
    },
    {
        type: 'list',
        name: 'License',
        message: 'Enter the License used for the project',
        choices: lcs
    },
    {
        type: 'list',
        name: 'Contributing',
        message: 'Accept Contributions?',
        choice: ['Yes', 'No']
    }
];


//[Contribution guidelines for this project](docs/CONTRIBUTING.md)

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    
}

function CreateReadme(ans) {
    const readme = '';
    
    return readme;
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions).then((answers) => {
        const readme = CreateReadme(answers);
        writeToFile('README.md',readme);
    });
}

// Function call to initialize app
init();

