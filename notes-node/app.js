const fs = require('fs');
const notes = require('./notes');

const titleOption = {
    describe:'Title of note',
    demand:true,
    alias:'t'
};

const bodyOption = {
    describe:'Body of notes',
    demand:true,
    alias:'b'
};

const argv = require('yargs')
            .command('add','Add a new note',{
                title:titleOption,
                body:bodyOption
            })
            .command('list','List all notes')
            .command('read','Read a note',{
                title:titleOption
            })
            .command('remove','Remove a note',{
                title:titleOption
            })
            .help()
            .argv;

var command = argv._[0];
if (command === 'add') {
    let note = notes.addNotes(argv.title, argv.body);
    if (note) {
        console.log('---------');
        console.log(`Note Created with title : ${note.title}`);
    }else{
        console.log(`${argv.title} title already exist in Notes`);
    }

} else if (command === 'list') {
   let allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} notes`);

    allNotes.forEach((note) => {
        console.log(note);
    });
} else if (command === 'read') {

    let note = notes.readNote(argv.title);
    if(note.length !== 0){
        console.log(`Body of ${note[0].title} is ${note[0].body}`);
    }else{
        console.log(`No note found with title: ${argv.title}`);
    }
} else if (command === 'remove') {
    let noteRemove = notes.removeNote(argv.title);
    let message = noteRemove ? 'Note Removed' : 'Note not found';
    console.log(message);
} else {
    throw new Error('Invalid command');
}