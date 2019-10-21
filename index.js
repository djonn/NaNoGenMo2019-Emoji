const fs = require('fs');
const readline = require('readline');
var os = require("os");
const EmojiDataset = require('./data/emoji-dataset.json')

const outputPath = './output.md';
//const inputPath = './data/sample-input.txt';
const inputPath = './data/books.txt';

var lineWriter = fs.createWriteStream(outputPath, {
    flags: 'w' // 'w' means writing and created if exist or truncated if not
});

var lineReader = readline.createInterface({
    input: fs.createReadStream(inputPath),
    output: null,
    console: false
});

var emojiBuffer = [];
var emojiPerLine = 20;

lineReader.on('line', function (line) {
    let words = line.split(" ");

    words.forEach(w => {
        let emoji = getEmoji(w);

        if (emoji != "") {
            emojiBuffer.push(emoji);
        }
    });

    // When buffer reaches 10 or more emoji, write them to lines of 10 emojies
    while (emojiBuffer.length >= emojiPerLine) {
        let result = [];
        for (i = 0; i < emojiPerLine; i++) {
            result.push(emojiBuffer.shift());
        }
        lineWriter.write(result.join(" ") + os.EOL + os.EOL);
    }
});

//---------------------------------
// Utility
//---------------------------------

// get emoji from a word
function getEmoji(word) {
    let sanitizedWord = word.toLowerCase().replace(/[^\w]/g, '');
    let possibleEmojis = EmojiDataset.filter(em => em['word'] == sanitizedWord);

    if (possibleEmojis.length == 0) {
        return "";
    } else {
        // choose random out of the possibilities
        let index = Math.floor(Math.random() * possibleEmojis.length)
        return formatEmoji(possibleEmojis[index]['emoji']);
    }
}

// format emoji for html/markdown
function formatEmoji(unicode) {
    let bare = unicode.split(" ")[0].substr(2); //discard 2 first letters
    return "&#x" + bare + ";";
}