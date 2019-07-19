var db = ['ubuntu','debian','manjaro','fedora','lubuntu'];

var guessedLetters = []; 
var wordGuess = []; 
var guessesLeft = 6; 
var words;
var randomWord; 

function startGame() {
    words = Math.floor(Math.random() * db.length);
    randomWord = db[words];
    
    for (var i = 0; i < randomWord.length; i++) {
		wordGuess[i] = '_ ';
    }
    console.log(randomWord);
    updateDisplay();
}

function updateDisplay() {
	document.getElementById('guess').innerHTML = wordGuess.join(' '); 
	document.getElementById('guessesLeft').innerHTML = guessesLeft; 
	document.getElementById('lettersGuessed').innerHTML = guessedLetters.join(' '); 
}

document.onkeyup = function(event) {
    if(guessesLeft <=0) return;
    checkInput(event.key);
}

function checkInput(input) {
	if (guessedLetters.indexOf(input) <= -1) {
		guessedLetters.push(input);
			if (randomWord.includes(input)) {
				for (var i = 0; i < randomWord.length; i++) {
					if (input == randomWord[i]) {
						wordGuess[i] = randomWord[i];
						console.log(guessesLeft);
					}	
				}	
			} else {
				guessesLeft--;
				console.log(guessesLeft);
			}

			updateDisplay();

			if (guessesLeft <= 0) {
				document.getElementById('result').innerHTML = 'Game Over !';
			}

			if (wordGuess.join('') == randomWord) {
				document.getElementById('result').innerHTML = 'You Win!'; 		
			}

		} else {
			alert('You have already guessed that!');
		}
}

window.onload = function(){
    startGame();
}
