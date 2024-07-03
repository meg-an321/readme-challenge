// // TODO: Include packages needed for this application
// const inquirer = require('inquirer');
// const fs = require('fs');


// // TODO: Create an array of questions for user input
// const questions = [

//     

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     
// }

// // TODO: Create a function to initialize app
// function init() {} 

// // Function call to initialize app
// init();




const inquirer = require('inquirer');
const fs = require('fs');

const buildReadMe = (answers) => `
# README
${answers.title}

## Description
<p>${answers.description}</p>


## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Test](#test)
- [License](#license)
- [Questions](#questions)



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
<p>If you have any questions please reach out to me by GitHUb from the link below
<a href="#">https://github.com/${answers.gitHub}</a>
</p>
<p>or by email ${answers.email} Thank you. The link to the video is also avaliable here: https://drive.google.com/file/d/1TwH_5xLYCWvYZA-LqlldIiy2zTihqzHW/view?usp=sharing</p>
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
            default: "This project had students create a command-line application that dynamically generates a professional README file frpm a users input using the inqurier package.",
        },
        {
            type: "input",
            name: "installation",
            message: "Please provide instalation instructions for your project.",
            default: "This project was created by the installation of json package and json lock package as well as installation of node modules/ gitignore.",
        },
        {
            type: "input",
            name: "usage",
            message: "Please provide usage for this project.",
            default: "This usually is the first place that potential employers will look to evaluate my skills. Also allows me to showcase my work to other developers.",
        },
        {
            type: "input",
            name: "contribution",
            message: "Provide contibution guildlines for this project.",
            default: "none",
        },
        {
            type: "input",
            name: "test",
            message: "Provide test instruction for this project.",
            default: "To test this project, open git bash, type node index.js and fill out questions by clicking enter.",
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
            default: "meg-an321",
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