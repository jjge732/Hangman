let words = 2;
const methods = 3;

let game = [
    {
        blank: ['_', ' ', '_', ' ', '_', , '_', ,'_'],
        word: 'h e l l o'
    },
    {
        blank: '_ _ _ _ _ _ _',
        word: 'w e l c o m e'
    },
    {
        blank: ['_', '_', '_', '_'],
        word: 'hola'
    },
    {
         get() {

        }
    }
];

let usedLetters = [];
let newWord = document.getElementById('blanks');
let guesses = document.getElementById('past_guesses');

document.onkeyup = function(event) {
    if (typeof event.key === 'string' && event.key.length === 1) {
        usedLetters.push(event.key);
        if (game[words].word.indexOf(event.key) !== -1) {
            game[words].blank[game[words].word.indexOf(event.key)] = event.key;
            console.log(game[words].blank.toString());
        }
        else {
            guesses.innerHTML = usedLetters;
            for (let i = 0; i < usedLetters.length; i++) {
                guesses = usedLetters[i];
            }
        }
        
    }
}

