const path = require('path');
const fs = require('fs');
const rp = require('request-promise');

let dataPath = path.join(__dirname, './popular-articles.json');

rp('https://reddit.com/r/popular.json')
    .then((res) => {
        let redditArray = [];

        JSON.parse(res).data.children.forEach(item => {
            redditArray.push({title: item.data.title, author: item.data.author, url: item.data.url});
        });

        let redditArrayStr = JSON.stringify(redditArray, null, 2);
            fs.appendFileSync(dataPath, redditArrayStr);
    })
    .catch((err) => {
        console.log(err);
    });
