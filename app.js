// const add = require("./util.js");
const chalk = require("chalk");
const validator = require("validator");
const getNotes = require("./notes.js");


let message = getNotes();

// const sum = add(4, -2)
console.log(message);
console.log(validator.isEmail("Andrew@example.com")) // true
console.log(validator.isEmail("@example.com")) // false
console.log(validator.isURL("https://mead.io")) // true

console.log(chalk.green("We are live up and running :)"))