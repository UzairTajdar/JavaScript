const guessField = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
const p = document.createElement('p')

let randomNumber = Math.floor(Math.random() * 100) + 1;

let prevGuess = [];

let numGuess = 1;

let playgame = true

if (playgame) {
    submit.addEventListener('click',function (e){
        e.preventDefault();
        const guess = parseInt(guessField.value);
        // console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert ('Please enter a valid number');
    }
    else if (guess < 1 || guess > 100) {
        alert ('Please enter a number between 1 and 100');
    }else{
        prevGuess.push(guess);
        if (numGuess > 10) {
            displayGuess(guess);
            displayMessage(`Game Over the number was ${randomNumber}`);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage('You Guessed It Right');
    }else if(guess < randomNumber){
        displayMessage('You Guess Too Low'); 
    }
    else{
        displayMessage('You Guess Too High'); 
    }
}

function displayGuess(guess) {
    guessField.value = '';
    guesses.innerHTML += `${guess} `;
    numGuess ++;
    lastResult .innerHTML = `${11-numGuess}`
}

function displayMessage(message){
   lowOrHi.innerHTML = `<h3>${message}</h3>`
}

function endGame(){
    guessField.value = '';
    guessField.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h2 id ="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playgame = false;
    newGame();
}

function newGame(){
   const newGameStart = document.querySelector('#newGame');
   newGameStart.addEventListener('click',function(e){
    randomNumber = Math.floor(Math.random() * 100) + 1
    prevGuess = []
    numGuess = 1
    guessField.value = ''
    lastResult .innerHTML = `${11-numGuess}`
    guessField.removeAttribute('disabled')
    startOver.removeChild(p)
    lowOrHi.innerHTML = ``

    playgame = true;
   }
)}