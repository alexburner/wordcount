let fs = require('fs');
let path = require('path');
let csvParse = require('csv-parse');

let inputFile = path.resolve(__dirname, 'posts.csv');
let outputFile = path.resolve(__dirname, 'wordcount.csv');

let output = '';

fs.readFile(inputFile, 'utf8', (err, data) => {
    console.log('fs.readFile ->', inputFile);
    if (err) return console.error(err);
    if (!data) return console.error('no data');
    csvParse(data, function (err, data) {
        if (err) return console.error(err);
        if (!data) return console.error('no data');
        data.forEach(function (post) {
            let text = post[0];
            output += countWords(text);
        });
        fs.writeFile(outputFile, output, function (err) {
            if (err) return console.error(err);
            console.log('fs.writeFile ->', outputFile);
        })
    });
});

// console.log('--------- CSV BELOW ----------');
// console.log('Total Count, Unique Count, Unique/Total Ratio, Text');
output += 'Total Count, Unique Count, Unique/Total Ratio, Text\n';

function countWords(text) {
    let words = text.split(/[^a-z|\u2019|']/i); // u2019 = fancy apostrophe
    let wordSet = new Set();
    words.forEach(word => {
        if (!word || !word.length) return;
        word = word.toLowerCase();
        wordSet.add(word);
    });
    let totalCount = words.length;
    let uniqueCount = wordSet.size;
    let ratio = uniqueCount / totalCount;
    // console.log(`${totalCount}, ${uniqueCount}, ${ratio}, ${text}`);
    return `${totalCount}, ${uniqueCount}, ${ratio}, ${text}\n`;
}

