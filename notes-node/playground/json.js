let obj = {
    title:'Some title',
    body:'This is body'
};
const fs = require('fs');

fs.writeFileSync('notes.json',JSON.stringify(obj));

let noteDataOriginal = fs.readFileSync('notes.json');

let noteDataParse = JSON.parse(noteDataOriginal);
console.log(noteDataParse.title);