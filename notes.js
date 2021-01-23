const fs = require("fs")
const chalk = require("chalk")

const loadNotes = () => {

	try {

		const dataBuffer =  fs.readFileSync("notes.json")
		const dataJSON = dataBuffer.toString();
		return JSON.parse(dataJSON)
	
	} catch (e) {

		return []
	}

}

const saveNotes = (notes) => {
	const dataJSON = JSON.stringify(notes);
	fs.writeFileSync("notes.json", dataJSON);

}


const addNote = (title, body) => {

	let notes = loadNotes()

	const duplicateNote = notes.find(note => title === note.title)
	console.log(duplicateNote)

	if (!duplicateNote) {

		notes.push({
			title: title,
			body: body
		})

		const message = chalk.green.inverse("New note added!")
		console.log(message);
	
	} else {

		const message = chalk.red.inverse(`Note title:[${title}] taken`)
		console.log(message)
	}

	saveNotes(notes);
}

const removeNote = title => {

	console.log(`Removing note [${title}]...`)

	const notes = loadNotes();
	const notesToKeep = notes.filter( note => note.title !== title );

	// if the original notes and the notesToKeep are the same length then nothing has
	// been removed/filtered 
	if (notes.length === notesToKeep.length) {
		const message = chalk.red.inverse("No note found!");
		console.log(message)

	} else {
	
		const message = chalk.green.inverse("Note removed")
		saveNotes(notesToKeep)
		console.log(message)
	}
}

const readNote = (title) => {
	const notes = loadNotes();

	const match = notes.find( note => note.title === title)

	if (match) { 
		console.log(`${chalk.blue(match.title)}\n`)
		console.log(`${match.body}`)
	} else {
		const message = chalk.red.inverse(`Error: note[${title}] does not exist`)
		console.log(message)
	}
}

// const getNotes = () =>  {

// 	const notes = loadNotes();
// 	let result = [];

// 	notes.forEach( note => {
// 		result.push(note.title)
// 	})

// 	return result

// }

const listNotes = () => {
	const notes = loadNotes();

	console.log(chalk.inverse("Your notes...\n"))
	let i = 1;
	notes.forEach( note => {
		console.log(`${i}) - ${note.title}`)
		i++
	})

}

module.exports = {

	listNotes: listNotes,
	addNote: addNote,
	removeNote: removeNote,
	readNote: readNote

};


