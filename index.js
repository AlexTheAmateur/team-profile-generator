const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/Employee");
// const Team = require("./lib/Team");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
// const Manager = require("./lib/Manager");

const team = []
const questions = [
    {
      type: "input",
      name: "name",
      message: "What is the name of the person?",
    },
    {
        type: "input",
        name: "id",
        message: "What is their assigned id number?",
      },
    {
      type: "input",
      name: "email",
      message: "What is their email?",
    },
    {
      type: "list",
      name: "role",
      message: "What is their role?",
      choices: ["Engineer", "Intern", "Manager"]
    },
    {
        type: "confirm",
        name: "anotherOne",
        message: "Would you like to add another member?"
      }
];

const createTeam = () => {
    inquirer.prompt(questions).then((answers) => {
        if (answers.role === "Engineer") {
            const engineer = new Employee(answers.name, answers.id, answers.email, answers.role)
            team.push(engineer);
        }
        if (answers.role === "Intern") {
            const intern = new Employee(answers.name, answers.id, answers.email, answers.role)
            team.push(intern);
        }
        if (answers.role === "Manager") {
            const manager = new Employee(answers.name, answers.id, answers.email, answers.role)
            team.push(intern);
        }
        if (answers.anotherOne) {
            createTeam();
        }
    })
}

createTeam();
