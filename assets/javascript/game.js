let words = 0;
const variables = 3;
const methods = 4;

let game = [
    {
        blank: ['_', '_', '_', '_'],
        word: ['h', 'i', 'y', 'a']
    },
    {
        blank: ['_', '_', '_', '_', '_', '_', '_'],
        word: ['w', 'h', 'a', 't', 's', 'u', 'p']
    },
    {
        blank: ['_', '_', '_', '_'],
        word: ['h', 'o', 'l', 'a']
    },
    {   
        usedLetters: [],
        newWord: document.getElementById('blanks'),
        guesses: document.getElementById('past_guesses')
    },
    {
        gameOver() {
            alert('Game over!')
            alert(`The last word was ${game[words].word.toString()}`);
            words++;
            game[variables].usedLetters = [];
            game[variables].guesses.innerHTML = game[variables].usedLetters.toString();
            if (words < 3) {
                alert('Next Word!')
            }
            else {
                alert('No more words');
            }
            game[variables].newWord.innerHTML = game[words].blank.toString();
        },

        youWin() {
            alert('Winner!')
            words++;
            game[variables].usedLetters = [];
            game[variables].guesses.innerHTML = game[variables].usedLetters.toString();
            if (words < 3) {
                alert('Next Word!')
            }
            else {
                alert('No more words');
            }
            game[variables].newWord.innerHTML = game[words].blank.toString();
        }
    }
];

// let usedLetters = [];
// let newWord = document.getElementById('blanks');
// let guesses = document.getElementById('past_guesses');
game[variables].newWord.innerHTML = game[words].blank.toString();

document.onkeyup = function(event) {
    if (typeof event.key === 'string' && event.key.length === 1) {
       
        if (game[variables].usedLetters.indexOf(event.key) !== -1) {
            alert(`${event.key} already guessed.`);
        }
        else if (game[words].word.indexOf(event.key) !== -1) {
            game[words].blank[game[words].word.indexOf(event.key)] = event.key;
            game[variables].newWord.innerHTML = game[words].blank.toString();
            if (game[words].blank.toString() === game[words].word.toString()) {
                game[methods].youWin();
            }
        }
        else {
            game[variables].usedLetters.push(event.key);
            game[variables].guesses.innerHTML = game[variables].usedLetters.toString();
            if (game[variables].usedLetters.length > 7) {
                game[methods].gameOver();
            }
        }
        
    }
}

