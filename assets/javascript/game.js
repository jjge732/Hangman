// sets up variables to give more relevance to object array values
const words = 0, variables = 1, methods = 2;
//sets counters for the word the user is trying to determine and number of wins
let wordIndex = 0, wins = 0;

let game = [
    {
        //words for use in game
        term: [ ['s', 'q', 'u', 'a', 't'], ['d', 'e', 'a', 'd', 'l', 'i','f', 't'], ['b', 'e', 'n', 'c', 'h'],  ['l', 'u', 'n', 'g', 'e'], ['d', 'i', 'p']]
    },
    {   
        // array to hold incorrectly guessed letters
        usedLetters: [],
        //array to hold blanks that will be used to show length of mystery word and position of correctly guessed letters
        blank: [],
        //access display for blanks and successfully guessed letters
        newWord: document.getElementById('blanks'),
        //access paragraph for letters already guessed
        guesses: document.getElementById('past_guesses'),
        //access paragraph for number of guesses left display
        nbrOfGuessesLeft: document.getElementById('guessesLeft'),
        //create button to start new game
        newButton: document.createElement('button'),
        //create h4 for win counter
        newH4: document.createElement('h4'),
        //creates divs for body parts of hangman
        newDiv: [document.createElement('div'), document.createElement('div'), document.createElement('div'), document.createElement('div'), document.createElement('div'), document.createElement('div')],
        //access new game div for button to be placed into
        newGame: document.getElementById('newGame'),
        //access central content for blank letter spaces, incorrect letter guesses, & number of guesses left
        accessMainContent: document.getElementById('centralContent'),
        //access right content for win counter
        accessRightContent: document.getElementById('rightContent'),
        //access left content for body parts
        accessLeftContent: document.getElementById('leftContent')
    },
    {   startNewGame() {
        //
            if (wordIndex < game[words].term.length - 1) {
                alert('Next Word!')
                wordIndex++;    //moves to next word in word list
                game[variables].usedLetters = [];   //resets used letters variables
                //resets used letters display
                game[variables].guesses.innerHTML = game[variables].usedLetters.toString().replace(/,/g, ' ');
                //resets blanks displayed
                game[variables].newWord.innerHTML = this.generateBlanks().toString().replace(/,/g, ' ');
                //resets number of guesses display
                game[variables].nbrOfGuessesLeft.innerHTML = 7;
                //removes button
                game[variables].newButton.parentNode.removeChild(game[variables].newButton);
                //resets hangman display
                for (let i = 0; i < game[variables].newDiv.length; i++) {
                    game[variables].accessLeftContent.removeChild(game[variables].newDiv[i]);
                }
            }
            else {
                alert('No more words');
            }
    },
        generateBlanks() {
            //resets letters to blanks from last game
            game[variables].blank = [];
            //generates a blank for each letter in the word
            for (let i = 0; i < game[words].term[wordIndex].length; i++) {
                    game[variables].blank.push('_');
            }
            return game[variables].blank;
        },
        //button starts next game
        createButton() { 
            game[variables].guesses.innerHTML = game[variables].usedLetters.toString().replace(/,/g, ' ');
            //creates button element
            game[variables].newGame.appendChild(game[variables].newButton);
            //adds on click attribute to element
            game[variables].newButton.setAttribute('onclick', 'game[methods].startNewGame()');
            //adds class for aesthetics to button
            game[variables].newButton.setAttribute('class', 'buttonAesthetics');
            //centers button
            game[variables].newGame.setAttribute('style', 'display: flex; justify-content: center;');
            //adds text to button
            game[variables].newButton.innerHTML = 'New Word!';
        },
        gameOver() {
            alert('Game over!')
            //displays the last word as a string with no commas
            alert(`The last word was ${game[words].term[wordIndex].toString().replace(/,/g, '')}`);
            this.createButton();    //generates button to start the game
        },
        youWin() {
            alert('Winner!')
            wins++; //updates win counter
            this.createButton();    //generates button to start next game
            if (wins > 1) { //stops duplication of win counter
                game[variables].accessRightContent.removeChild(game[variables].newH4);
            }
            //displays & updates number of wins when win occurs
            game[variables].accessRightContent.appendChild(game[variables].newH4).innerHTML = `Number of wins: <br> ${wins}`;
        },
        generateBodyPart() {
            //switch case based on number of incorrect guesses to add body part to hangman display
            switch (game[variables].usedLetters.length) {
                case 1:
                    game[variables].accessLeftContent.appendChild(game[variables].newDiv[game[variables].usedLetters.length - 1]);
                    game[variables].newDiv[game[variables].usedLetters.length - 1].setAttribute('id', 'head');
                    break;
                case 2:
                    game[variables].accessLeftContent.appendChild(game[variables].newDiv[game[variables].usedLetters.length - 1]);
                    game[variables].newDiv[game[variables].usedLetters.length - 1].setAttribute('id', 'body');
                    break;
                case 3:
                    game[variables].accessLeftContent.appendChild(game[variables].newDiv[game[variables].usedLetters.length - 1]);
                    game[variables].newDiv[game[variables].usedLetters.length - 1].setAttribute('id', 'leftArm');
                    break;
                case 4:
                    game[variables].accessLeftContent.appendChild(game[variables].newDiv[game[variables].usedLetters.length - 1]);
                    game[variables].newDiv[game[variables].usedLetters.length - 1].setAttribute('id', 'rightArm');
                    break;
                case 5:
                    game[variables].accessLeftContent.appendChild(game[variables].newDiv[game[variables].usedLetters.length - 1]);
                    game[variables].newDiv[game[variables].usedLetters.length - 1].setAttribute('id', 'leftLeg');
                    break;
                case 6:
                    game[variables].accessLeftContent.appendChild(game[variables].newDiv[game[variables].usedLetters.length - 1]);
                    game[variables].newDiv[game[variables].usedLetters.length - 1].setAttribute('id', 'rightLeg');
                    break;
                default:
                    break;
            }
        }
    }
];

//setup game with blanks and total number of guesses
game[variables].newWord.innerHTML = game[methods].generateBlanks().toString().replace(/,/g, ' ');
game[variables].nbrOfGuessesLeft.innerHTML = 6;

document.onkeyup = function(event) {
    //conditional to see if the key pressed is a letter & the current game is not over
    if(event.keyCode >= 65 && event.keyCode <= 90 && (game[variables].blank.toString().replace(/,/g, ' ') !== game[words].term[wordIndex].toString().replace(/,/g, ' ')) && game[variables].usedLetters.length < 6) {         
        //checks if letter has already been guessed so one letter doesn't take up multiple guesses
        if (game[variables].usedLetters.indexOf(event.key.toLowerCase()) !== -1) {
                alert(`${event.key} already guessed.`);
            }
            //checks if letter is in the word
            else if (game[words].term[wordIndex].indexOf(event.key.toLowerCase()) !== -1) {
                //sets the proper blank equal to the letter pressed
                game[variables].blank[game[words].term[wordIndex].indexOf(event.key.toLowerCase())] = event.key.toLowerCase();
                //writes the blank to the html
                game[variables].newWord.innerHTML = game[variables].blank.toString().replace(/,/g, ' ');
                //allows for multiple of the same letters
                for (let i = 1; i < game[words].term.length + 1; i++) { 
                    game[variables].blank[game[words].term[wordIndex].indexOf(event.key.toLowerCase(), (game[words].term[wordIndex].indexOf(event.key.toLowerCase())) + i)] = event.key.toLowerCase();
                    game[variables].newWord.innerHTML = game[variables].blank.toString().replace(/,/g, ' ');
                }
                //checks to see if the word has been completed
                if (game[variables].blank.toString().replace(/,/g, ' ') === game[words].term[wordIndex].toString().replace(/,/g, ' ')) {
                    game[methods].youWin();
                }
            }
            else {
                //adds the incorrect letter to the list of used letters
                game[variables].usedLetters.push(event.key.toLowerCase());
                //displays the incorrect letters
                game[variables].guesses.innerHTML = game[variables].usedLetters.toString().replace(/,/g, ' ');
                //updates the number of guesses left
                game[variables].nbrOfGuessesLeft.innerHTML = 6 - game[variables].usedLetters.length;
                //updates the hangman image
                game[methods].generateBodyPart();
                //checks to see if all the guesses have been used up
                if (game[variables].usedLetters.length >= 6) {
                    game[methods].gameOver();
                }
            }
    }
}
