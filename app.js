const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");

yargs.version('1.2.0');

// add, remove, read, list

// Create add command
yargs.command({
	command:"add",
	describe: "Add a new note",
	builder: {
		title: {
			describe: "Note title",
			demandOption: true,
			type: 'string'
		},

		body: {
			describe: "Note body",
			demandOption: true,
			type: 'string'
		}
	},

	handler: (argv) => {

		notes.addNote(argv.title, argv.body)
	}
})

// Create remove command
yargs.command({
	command: "remove",
	describe: "Remove a note",
	handler: () => {
		console.log("Removing a note!")
	}
})
// Create list command
yargs.command({
	command:"list",
	describe: "Lists your notes",
	handler: ()=> {
		console.log("Listing out all notes!")
	}
})

yargs.command({
	command: "read",
	describe: "Reads a note",
	handler: () => {
		console.log("Reading a note!")
	}
})


yargs.parse()