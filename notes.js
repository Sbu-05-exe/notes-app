const fs = require("fs")

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

	const duplicateNotes = notes.filter(note => {
		return title === note.title
	})

	if (duplicateNotes.length === 0) {

		notes.push({
			title: title,
			body: body
		})

		console.log("new note added")
	
	} else {

		console.log(`Note title:[${title}] taken`)
	}

	saveNotes(notes);

}

const getNotes = function() {

	return "Your notes...";

}

module.exports = {

	getNotes: getNotes,
	addNote: addNote
};


