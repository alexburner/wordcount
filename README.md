# wordcount
Counting unique/total word ratio in a body of text

## strategy

1. Reads file "article.txt" in as utf-8 string
2. Splits string on non-word, non-apostrophe, and digit characters using regex
3. Uses a Map and sets each word as a key (duplicates will overwrite)
4. At the end, the number of map entries === the number of unique words

## material

- Node filesystem module https://nodejs.org/api/fs.html
- JS string split https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
- `/[^\w|’|']|\d/` regex pattern cobbled together on http://regexr.com/

## running locally

1. Install node https://nodejs.org/en/download/
2. Open up your command line
3. Checkout this repo locally: `git clone https://github.com/alexburner/wordcount.git`
4. Run the JS file: `node count.js`
