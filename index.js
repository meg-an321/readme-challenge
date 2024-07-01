// // TODO: Include packages needed for this application
// const inquirer = require('inquirer');
// const fs = require('fs');


// // TODO: Create an array of questions for user input
// const questions = [

//     {
//         type: 'input',
//         name: 'title',
//         message: 'What is the title of your project?',
//     },
//     {
//         type: 'input',
//         name: 'description',
//         message: 'Please provide a description of your project.',
//     },
//     {
//         type: 'input',
//         name: 'installation',
//         message: 'Please provide installation instructions for your project.',
//     },
//     {
//         type: 'input',
//         name: 'usage',
//         message: 'Please provide usage information for your project.',
//     },
//     {
//         type: 'input',
//         name: 'contribution',
//         message: 'Please provide contribution guidelines for your project.',
//     },
//     {
//         type: 'input',
//         name: 'test',
//         message: 'Please provide test instructions for your project.',
//     },
//     {
//         type: 'list',
//         name: 'license',
//         message: 'Please select a license for your project.',
//         choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
//     },
//     {
//         type: 'input',
//         name: 'github',
//         message: 'Please provide your GitHub username.',
//     },
//     {
//         type: 'input',
//         name: 'email',
//         message: 'Please provide your email address.',
//     },
// ];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, (err) =>
//         err ? console.error(err) : console.log('Success!')
//     );
// }

// // TODO: Create a function to initialize app
// function init() {} 

// // Function call to initialize app
// init();




const inquirer = require('inquirer');
const fs = require('fs');

const buildReadMe = (answers) => `
# readme-challenge
<p>${answers.title}</p>

## Description
<p>${answers.descripton}</p>


## Table of Contents
<ul>...</ul>



## Installation
<p>${answers.installation}</p>


## Usage
<p>${answers.usage}</p>


## License
<p>${answers.license}</p>


## Contributing
<p>${answers.contribution}</p>


## Test
<p>${answers.test}</p>

## Questions
`;

const saveReadMe = (md) => {
    fs.writeFileSync('README.md', md);
    console.log('Thank You')
};

inquirer
    .prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?",
            default: "ReadMe Challenge",
        },
        {
            type: "input",
            name: "description",
            message: "Please provide a description of your project.",
            default: "This project...",
        },
        {
            type: "input",
            name: "installation",
            message: "Please provide instalation insrutcions for your project.",
            default: "",
        },
        {
            type: "input",
            name: "usage",
            message: "Please provide usage for this project.",
            default: "",
        },
        {
            type: "input",
            name: "contibution",
            message: "Provide contibution guildlines for this project.",
            default: "",
        },
        {
            type: "input",
            name: "test",
            message: "Provide test instruction for this project.",
            default: "",
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please select a license for your project.',
            choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
        },
        {
            type: "input",
            name: "gitHub",
            message: "What is your GitHub username?",
            default: "",
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?",
            default: "Student@UNCBootcamp.com",
        },
    ])
    .then(buildReadMe)
    .then(saveReadMe);