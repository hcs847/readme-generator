const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkDown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
    'What is your GitHub username?', 'What is your email address?',
    'What is the title of the project?', 'What is the description of the project?',
    'What are the Installation instructions?', 'What is the Usage information?',
    'What is the License for the project?', 'What are the contribution guidelines?',
    'What are the tests instructions?', 'What are the Questions?'
];

// present user with a list of prompts to capture info for readme file
const promptUser = () => {
    return inquirer
        .prompt([{
            type: 'input',
            name: 'github',
            message: questions[0]
        },
        {
            type: 'input',
            name: 'email',
            message: questions[1]
        },
        {
            type: 'input',
            name: 'title',
            message: questions[2]
        },
        {
            type: 'input',
            name: 'description',
            message: questions[3]
        },
        {
            type: 'input',
            name: 'installation',
            message: questions[4]
        },
        {
            type: 'input',
            name: 'usage',
            message: questions[5]
        },
        {
            type: 'checkbox',
            name: 'license',
            message: questions[6],
            choices: ['Apache License 2.0', 'BSD', 'ISC', 'MIT']
        },
        {
            type: 'input',
            name: 'contribution',
            message: questions[7]
        },
        {
            type: 'input',
            name: 'tests',
            message: questions[8]
        },
        {
            type: 'input',
            name: 'questions',
            message: questions[9]
        }
        ])
};

// function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            })
        })
    });
};

// function to initialize program
function init() {
    promptUser().then(answers => generateMarkDown(answers)).then(result => writeToFile("./README.md", result));
}

// function call to initialize program
init();

