const path = require('path');
const fs = require('fs');
const rp = require('request-promise');

let dataPath = path.join(__dirname, './downloads/');

rp('https://reddit.com/r/popular.json')
.then(res => JSON.parse(res))
.then(body => {
    body.data.children.forEach(item => {
        
        let fileName = item.data.id;
        let extName = path.extname(item.data.url);
        let writeName = fileName + extName;

        if(extName) {
            rp(item.data.url, { encoding: 'binary' })
            .then(data => {
                fs.writeFile(writeName, data, { encoding: 'binary' }, (err) => {
                    if (err) console.log(err);
                }).pipe(fs.createWriteStream(dataPath, writeName));
            })
        };

    });
})
.catch(err => console.log(err));