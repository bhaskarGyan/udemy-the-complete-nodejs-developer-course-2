const fs = require('fs');

var fetchNote = () => {
    try {
        let noteString = fs.readFileSync('note-data.json');
        let notes = JSON.parse(noteString);
        return notes
    } catch (e) {
        return [];
    }
};

var addNote = (notes) => {
    fs.writeFileSync('note-data.json', JSON.stringify(notes));
};
var addNotes = (title, body) => {
    let notes = fetchNote();
    let note = {
        title,
        body
    };

    //Error handling if file don't exist


    //check if titleis duplicate
    let duplicateNote = notes.filter((val) => val.title === title);

    if (duplicateNote.length === 0) {
        notes.push(note);
        addNote(notes);
        return note;
    } else {

    }
};

var getAll = () => {
    let notes = fs.readFileSync('note-data.json');
    notes = JSON.parse(notes);
    return notes;
};

var readNote = (title) => {
    let notes = fetchNote();
    let filteredNote = notes.filter((note) => {

        return note.title === title;
    });
    return filteredNote;
};

var removeNote = (title) => {
    let notes = fetchNote();
    let filterNote = notes.filter((val) => val.title !== title);

    addNote(filterNote);

    return notes.length !== filterNote.length;
};

module.exports = {
    addNotes,
    getAll,
    readNote,
    removeNote
};