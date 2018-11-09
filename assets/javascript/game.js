// let words = 0;
// const variables = 4;
// const methods = 5;
const words = 0, variables = 1, methods = 2;
let wordIndex = 0;

let game = [
    {
        word: [ ['h', 'i', 'y', 'a'], ['h', 'e', 'l', 'l', 'o'],  ['w', 'h', 'a', 't', 's', 'u', 'p'], ['h', 'o', 'l', 'a']]
    },
    // {
    //     blank: ['_', '_', '_', '_'],
    //     word: ['h', 'i', 'y', 'a']
    // },
    // {
    //     blank: ['_', '_', '_', '_', '_'],
    //     word: ['h', 'e', 'l', 'l', 'o']
    // },
    // {
    //     blank: ['_', '_', '_', '_', '_', '_', '_'],
    //     word: ['w', 'h', 'a', 't', 's', 'u', 'p']
    // },
    // {
    //     blank: ['_', '_', '_', '_'],
    //     word: ['h', 'o', 'l', 'a']
    // },
    {   
        usedLetters: [],
        newWord: document.getElementById('blanks'),
        guesses: document.getElementById('past_guesses'),
        nbrOfGuessesLeft: document.getElementById('guessesLeft'),
        newButton: document.createElement('button'),
        newGame: document.getElementById('newGame'),
        blank: []
    },
    {   startNewGame() {
            if (wordIndex < 3) {
                alert('Next Word!')
                // words++;
                wordIndex++;
                game[variables].usedLetters = [];
                game[variables].guesses.innerHTML = game[variables].usedLetters.toString().replace(/,/g, ' ');
                // game[variables].newWord.innerHTML = game[words].blank.toString().replace(/,/g, ' ');
                game[variables].newWord.innerHTML = this.generateBlanks().toString().replace(/,/g, ' ');
                game[variables].nbrOfGuessesLeft.innerHTML = 7;
                game[variables].newButton.parentNode.removeChild(game[variables].newButton);
            }
            else {
                alert('No more words');
            }
    },
        generateBlanks() {
            game[variables].blank = [];
            // for (let i = 0; i < game[words].word.length; i++) {
            for (let i = 0; i < game[words].word[wordIndex].length; i++) {
                game[variables].blank.push('_');
            }
            return game[variables].blank;
        },
        createButton() {
            game[variables].guesses.innerHTML = game[variables].usedLetters.toString().replace(/,/g, ' ');
            game[variables].newGame.appendChild(game[variables].newButton);
            game[variables].newButton.setAttribute('onclick', 'game[methods].startNewGame()');
            game[variables].newButton.setAttribute('style', 'height: 48px; width: 96px;');
            game[variables].newGame.setAttribute('style', 'display: flex; justify-content: center;');
            game[variables].newButton.innerHTML = 'New Word!';
        },
        gameOver() {
            alert('Game over!')
            alert(`The last word was ${game[words].word[wordIndex].toString().replace(/,/g, '')}`);
            this.createButton();
            // alert(`The last word was ${game[words].word.toString().replace(/,/g, '')}`);
            // game[variables].usedLetters = [];
            // game[variables].guesses.innerHTML = game[variables].usedLetters.toString().replace(/,/g, ' ');
            // game[variables].newGame.appendChild(game[variables].newButton);
            // game[variables].newButton.setAttribute('onclick', 'game[methods].startNewGame()');
            // game[variables].newButton.setAttribute('style', 'height: 48px; width: 96px; position: flex; justify-items: center;');
            // game[variables].newButton.innerHTML = 'New Word!';
            // game[variables].newWord.innerHTML = game[words].blank.toString().replace(/,/g, ' ');
            // game[variables].nbrOfGuessesLeft.innerHTML = 7;
        },
        youWin() {
            alert('Winner!')
            this.createButton();
            // game[variables].usedLetters = [];
            // game[variables].guesses.innerHTML = game[variables].usedLetters.toString().replace(/,/g, ' ');
            // game[variables].newGame.appendChild(game[variables].newButton);
            // game[variables].newButton.setAttribute('onclick', 'game[methods].startNewGame()');
            // game[variables].newButton.setAttribute('style', 'height: 48px; width: 96px; position: relative; left: 45%;');
            // game[variables].newButton.innerHTML = 'New Word!';
            // game[variables].newWord.innerHTML = game[words].blank.toString().replace(/,/g, ' ');
            // game[variables].nbrOfGuessesLeft.innerHTML = 7;
        }
    }
];

// let usedLetters = [];
// let newWord = document.getElementById('blanks');
// let guesses = document.getElementById('past_guesses');
// game[variables].newWord.innerHTML = game[variables].blank.toString().replace(/,/g, ' ');
game[variables].newWord.innerHTML = game[methods].generateBlanks().toString().replace(/,/g, ' ');
game[variables].nbrOfGuessesLeft.innerHTML = 7;

document.onkeyup = function(event) {
    if(event.keyCode >= 65 && event.keyCode <= 90) { 

        //if (typeof event.key === 'string' && event.key.length === 1) {
        
            if (game[variables].usedLetters.indexOf(event.key.toLowerCase()) !== -1) {
                alert(`${event.key} already guessed.`);
            }
            // else if (game[words].word.indexOf(event.key) !== -1) {
            else if (game[words].word[wordIndex].indexOf(event.key.toLowerCase()) !== -1) {
                // game[variables].blank[game[words].word.indexOf(event.key)] = event.key;
                game[variables].blank[game[words].word[wordIndex].indexOf(event.key.toLowerCase())] = event.key.toLowerCase();
                game[variables].newWord.innerHTML = game[variables].blank.toString().replace(/,/g, ' ');
                // if (game[words].word.indexOf(event.key, game[words].word.indexOf(event.key) + 1) !== -1) {
                if (game[words].word[wordIndex].indexOf(event.key.toLowerCase(), game[words].word[wordIndex].indexOf(event.key.toLowerCase()) + 1) !== -1) {
                    // game[variables].blank[game[words].word.indexOf(event.key, (game[words].word.indexOf(event.key)) + 1)] = event.key;
                    game[variables].blank[game[words].word[wordIndex].indexOf(event.key.toLowerCase(), (game[words].word[wordIndex].indexOf(event.key.toLowerCase())) + 1)] = event.key.toLowerCase();
                    game[variables].newWord.innerHTML = game[variables].blank.toString().replace(/,/g, ' ');
                }
                // if (game[variables].blank.toString().replace(/,/g, ' ') === game[words].word.toString().replace(/,/g, ' ')) {
                if (game[variables].blank.toString().replace(/,/g, ' ') === game[words].word[wordIndex].toString().replace(/,/g, ' ')) {
                    game[methods].youWin();
                }
            } //append button to start new game and remove button after it is pressed
            else {
                game[variables].usedLetters.push(event.key.toLowerCase());
                game[variables].guesses.innerHTML = game[variables].usedLetters.toString().replace(/,/g, ' ');
                game[variables].nbrOfGuessesLeft.innerHTML = 7 - game[variables].usedLetters.length;
                if (game[variables].usedLetters.length >= 7) {
                    game[methods].gameOver();
                }

            }
            
       // }
    }
}
