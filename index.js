// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input

const questions = () => {
    return inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the title of your project? (Required)',
                validate: (nameInput) => {
                    if (nameInput) {
                        return true;
                    } else {
                        return 'Please enter a title to continue.'
                    };
                }
            },
            {
                type: 'input',
                name: 'username',
                message: 'What is your Github username? (Required)',
                validate: (usernameInput) => {
                    if (usernameInput) {
                        return true;
                    } else {
                        return 'Please provide your Github username to continue.'
                    };
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'Email: (Required)',
                validate: (emailInput) => {
                    if (emailInput) {
                        return true;
                    } else {
                        return 'Please provide your email address.'
                    };
                }
            },
            {
                type: 'input',
                name: 'description',
                message: 'Please add a description of your project.'
            },
            {
                type: 'input',
                name: 'installation',
                message: 'Please add step-by-step instructions needed to get the project running for testing. (Required)',
                validate: (installInput) => {
                    if (installInput) {
                        return true;
                    } else {
                        return 'Please enter the installation instructions to continue.'
                    };
                }
            },
            {
                type: 'input',
                name: 'usage',
                message: 'Please provide instructions for use. (Required)',
                validate: usageInput => {
                    if (usageInput) {
                        return true
                    } else {
                        console.log('Please enter usage instructions for your project.');
                        return false
                    }
                }
            },
            {
                type: 'input',
                name: 'tests',
                message: 'What commands are needed to run tests?'
            },
            {
                type: 'list',
                name: 'licenseSelection',
                message: "What license is being used? If you are not using one, please select 'None'.",
                choices: ['None','Apache 2.0', 'Boost', 'Eclipse', 'GNU', 'IBM', 'ISC', 'MIT', 'Mozilla', 'Open Database License', 'Perl', 'The Hippocratic License'] 
            },
            {
                type: 'input',
                name: 'contributors',
                message: 'Who are the contributors?'
            }
        ])}


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
            throw err
        } else {
            console.log('ReadME file Generated!');
        }
    }
)};

// TODO: Create a function to initialize app
const init = () => {
    questions()
    .then(function(data) {
        writeToFile('README.md', generateMarkdown(data));
        console.log(data);
    })
};

// Function call to initialize app
init();
