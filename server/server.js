const path = require('path');
const fs = require('fs');

const dataPath = path.join(__dirname, '../chirps.json');

let chirpArray = [
    { chirpText: `Hello Node!` },
    { chirpText: `What's up?` },
    { chirpText: `Node is cool.` },
    { chirpText: `What's on Reddit?` },
    { chirpText: `My dogs are hyper.` }
]

let data = JSON.stringify(chirpArray);

fs.writeFile(dataPath, data, (err) => {
    console.log(err);   
})