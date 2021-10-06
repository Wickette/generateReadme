// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
//title of app
        {
            type: "input",
            message: "What is the title of the application?",
            name: "title",
        },
// Description of app
        {
            type: "input",
            message: "Enter a description of the application. What, why, how?",
            name: "description",
        },
// Installation instructions of app
        {
            type: "input",
            message: "Any installation instructions for the app?",
            name: "installation",
        },
// How to use the app
        {
            type: "input",
            message: "How do you use the app?",
            name: "usage",
        },
// What licenses does the app use
        {
            type: "list",
            message: "What licenses does the app use?",
            name: "license",
            choices: ["Apache", "Academic", "GNU", "ISC", "MIT", "Mozilla", "Open"]
        },
// List of contibutors
        {
            type: "input",
            message: "Please acknowledge any contributors.",
            name: "contributions",
        },
// Tests?
        {
            type: "input",
            message: "Is there a test included?",
            name: "tests",
        },
// How can the user ask a question if needed?
        {
            type: "input",
            message: "How can a user reach you with questions/what should they do if there is an issue?",
            name: "questions",
        },
// Owners Git username
        {
            type: "input",
            message: "Enter your GitHub username.",
            name: "gitUsername",
        },
        {
            type: "input",
            message: "Enter your email address.",
            name: "email",
        }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./${fileName.toLowerCase().split(" ").join("")}.md`, data, (err) => {
        if(err){
            console.log(err)
        }
        console.log("README successfully generated!")
    })
}

// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions)
.then((result) => {
    console.log(result)
    writeToFile(result.title, generateMarkdown(result))
})    
}

// Function call to initialize app
init();
