# wordcount
Counting unique/total word ratio in a body of text

## strategy

1. Reads file "article.txt" in as utf-8 string
2. Splits string on non-word, non-apostrophe, and digit characters using regex
3. Uses a Set and add each word (structure of Set will enforce uniqueness)
4. At the end, the number of set entries === the number of unique words

## material

- Node.js filesystem module https://nodejs.org/api/fs.html
- JS string split https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
- JS set https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
- `/[^a-z|\u2019|']/i` regex pattern cobbled together on http://regexr.com/

## running locally

1. Install Node.js https://nodejs.org/en/download/
2. Open up your command line
3. Checkout this repo locally: `git clone https://github.com/alexburner/wordcount.git`
4. Run the JS file: `node count.js`

## example output

```
$ node count.js
fs.readFile -> /Users/aburner/Projects/node/wordcount/article.txt
total word count = 1302
unique word count = 466
unique/total ratio = 0.3579109062980031
```
