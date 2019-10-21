# Emoji based book

The book can be found [here](BOOK.md).

## Disclaimer

Shoot! It seems I misremembered the month in which I was supposed to be doing NaNoGenMo, since I wrote this code up the evening of *October* 21st 2019.
Hope everybody can live with that, because I doubt I will be doing a new one in November.

## How the book is generated

Using an input file, every word is compared to a dataset of mappings between words and emoji.
If the word exist in the dataset the matching emoji is inserted into the book, otherwise the word is ignored.

Each line in the book has 20 emoji.

To generate the book yourself run the following command:
`node index.js`

## Definition of "word"

A sigle emoji followed by a space is seen as a word by MS Word.
That's the definition im sticking with.

## Input file

The input of the script is a concatenation of 8 books found through [Project Gutenberg](https://www.gutenberg.org/).
This was done to meet the criteria of 50.000 words.

- The Kama Sutra - Vatsyayana
- The Shunned House - H. P. Lovecraft
- Simple Italian Cookery - Antonia Isola
- Pride and Prejudice - Jane Austen
- The Q'uran - Rodwell
- The Used People Lot - Irving Fang
- The Mental Life of Monkeys and Apes - Robert M. Yerkes

## Dataset

The keywords and emojies used are extracted from the [EmojiNet dataset](http://emojinet.knoesis.org/home.php).

Sanjaya Wijeratne, Lakshika Balasuriya, Amit Sheth, Derek Doran. **EmojiNet: An Open Service and API for Emoji Sense Discovery.** In 11th International AAAI Conference on Web and Social Media (ICWSM 2017). Montreal, Canada; 2017. 
[\[Kno.e.sis Library Page\]](http://knoesis.org/node/2819) | [\[PDF\]](http://knoesis.org/people/sanjayaw/papers/2017/ICWSM_2017_EmojiNet_Final_Wijeratne.pdf) | [\[BibTeX\]](http://knoesis.org/people/sanjayaw/bibtex/2017/emojinet_icwsm.bib)
