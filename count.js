let fs = require('fs');
let path = require('path');

let file = path.resolve(__dirname, 'article.txt');

fs.readFile(file, 'utf8', (err, data) => {
    console.log('fs.readFile ->', file);
    if (err) return console.error(err);
    if (!data) return console.error('no data');
    let words = data.split(/[^a-z|\u2019|']/i); // u2019 = fancy apostrophe
    let wordSet = new Set();
    words.forEach(word => {
        if (!word || !word.length) return;
        word = word.toLowerCase();
        wordSet.add(word);
    });
    let totalCount = words.length;
    let uniqueCount = wordSet.size;
    let ratio = uniqueCount / totalCount;
    console.log('total word count =', totalCount);
    console.log('unique word count =', uniqueCount);
    console.log('unique/total ratio =', ratio);
    // console.log(words);
    // console.log(wordSet);
});