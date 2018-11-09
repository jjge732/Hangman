let words = 0;
const variables = 4;
const methods = 5;

let game = [
    {
        blank: ['_', '_', '_', '_'],
        word: ['h', 'i', 'y', 'a']
    },
    {
        blank: ['_', '_', '_', '_', '_'],
        word: ['h', 'e', 'l', 'l', 'o']
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
        guesses: document.getElementById('past_guesses'),
        nbrOfGuessesLeft: document.getElementById('guessesLeft'),
        newButton: document.createElement('button'),
        newGame: document.getElementById('newGame')
    },
    {   startNewGame() {
            if (words < 3) {
                alert('Next Word!')
                words++;
                game[variables].usedLetters = [];
                game[variables].guesses.innerHTML = game[variables].usedLetters.toString().replace(/,/g, ' ');
                game[variables].newWord.innerHTML = game[words].blank.toString().replace(/,/g, ' ');
                game[variables].nbrOfGuessesLeft.innerHTML = 7;
                game[variables].newButton.parentNode.removeChild(game[variables].newButton);
            }
            else {
                alert('No more words');
            }
    },
        //generateBlanks();
        gameOver() {
            alert('Game over!')
            alert(`The last word was ${game[words].word.toString().replace(/,/g, '')}`);
            // game[variables].usedLetters = [];
            game[variables].guesses.innerHTML = game[variables].usedLetters.toString().replace(/,/g, ' ');
            game[variables].newGame.appendChild(game[variables].newButton);
            game[variables].newButton.setAttribute('onclick', 'game[methods].startNewGame()');
            game[variables].newButton.setAttribute('style', 'height: 48px; width: 96px; position: relative; left: 45%;');
            game[variables].newButton.innerHTML = 'New Word!';
            // game[variables].newWord.innerHTML = game[words].blank.toString().replace(/,/g, ' ');
            // game[variables].nbrOfGuessesLeft.innerHTML = 7;
        },

        youWin() {
            alert('Winner!')
            // game[variables].usedLetters = [];
            game[variables].guesses.innerHTML = game[variables].usedLetters.toString().replace(/,/g, ' ');
            game[variables].newGame.appendChild(game[variables].newButton);
            game[variables].newButton.setAttribute('onclick', 'game[methods].startNewGame()');
            game[variables].newButton.setAttribute('style', 'height: 48px; width: 96px; position: relative; left: 45%;');
            game[variables].newButton.innerHTML = 'New Word!';
            // game[variables].newWord.innerHTML = game[words].blank.toString().replace(/,/g, ' ');
            // game[variables].nbrOfGuessesLeft.innerHTML = 7;
        }
    }
];

// let usedLetters = [];
// let newWord = document.getElementById('blanks');
// let guesses = document.getElementById('past_guesses');
game[variables].newWord.innerHTML = game[words].blank.toString().replace(/,/g, ' ');
game[variables].nbrOfGuessesLeft.innerHTML = 7;

document.onkeyup = function(event) {
    if(event.keyCode >= 65 && event.keyCode <= 90) { 

        //if (typeof event.key === 'string' && event.key.length === 1) {
        
            if (game[variables].usedLetters.indexOf(event.key) !== -1) {
                alert(`${event.key} already guessed.`);
            }
            else if (game[words].word.indexOf(event.key) !== -1) {
                game[words].blank[game[words].word.indexOf(event.key)] = event.key;
                game[variables].newWord.innerHTML = game[words].blank.toString().replace(/,/g, ' ');
                if (game[words].word.indexOf(event.key, game[words].word.indexOf(event.key) + 1) !== -1) {
                    console.log('Wow');
                    game[words].blank[game[words].word.indexOf(event.key, (game[words].word.indexOf(event.key)) + 1)] = event.key;
                    game[variables].newWord.innerHTML = game[words].blank.toString().replace(/,/g, ' ');
                }
                if (game[words].blank.toString().replace(/,/g, ' ') === game[words].word.toString().replace(/,/g, ' ')) {
                   game[methods].youWin();
                }
            } //append button to start new game and remove button after it is pressed
            else {
                game[variables].usedLetters.push(event.key);
                game[variables].guesses.innerHTML = game[variables].usedLetters.toString().replace(/,/g, ' ');
                game[variables].nbrOfGuessesLeft.innerHTML = 7 - game[variables].usedLetters.length;
                if (game[variables].usedLetters.length >= 7) {
                    game[methods].gameOver();
                }

            }
            
       // }
    }
}
