let fs = require('fs');

let file = __dirname + '/article.txt';

fs.readFile(file, 'utf8', (err, data) => {
    console.log('readFile:', file);
    if (err) return console.error(err);
    if (!data) return console.error('no data');
    let words = data.split(/[^\w|’|']|\d/);
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