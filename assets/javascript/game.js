var wins = 0;
var losses = 0;
var guessesLeft = 0;
var theLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var theChosenLetter = "";
var yourGuesses = [];
var newLost = 0;
var lives = 999;

function getLetter() {
	var randomValue = (Math.floor(Math.random() * theLetters.length));
	theChosenLetter = theLetters[randomValue];
	return theChosenLetter;
}

function guessesFun() {
	guessesLeft--;
	document.getElementById("guesses-left").innerHTML = guessesLeft;
}

function addLetterToArray() {
	if(globalKeyCodeStroke !== 32){
		yourGuesses.push(globalKeyStroke);
		document.getElementById("guesses-so-far").innerHTML = yourGuesses.toString();
		guessesFun();
	}else if(globalKeyCodeStroke === 32){
		document.getElementById("guesses-so-far").innerHTML = yourGuesses.toString();
	}
}

function winner() {
	wins++;
	document.getElementById("wins").innerHTML = wins;
}

function loser() {
	losses++;
	document.getElementById("losses").innerHTML = losses;
	newLost = 1;
}

function checkIfLetter() {
	if(theChosenLetter === globalKeyStroke){
		winner();
	}
}

function checkIfInArray() {
	for(var i = 0; i < yourGuesses.length + 1; i++){
		if(yourGuesses.indexOf(globalKeyStroke) === -1){
			checkIfLetter();
			addLetterToArray();
		}
	}
}

function weLost(){
	if(guessesLeft <= 1){
		return true;
	}
}
for(var i = 0; i < lives; i++){
document.onkeyup = function(event) {
		globalKeyStroke = event.key;
		globalKeyCodeStroke = event.keyCode;
		if(event.keyCode === 32){
		  yourGuesses.length = 0;
		  lives = 666;
		  guesses = 10;
		  getLetter();
		  guessesLeft = 10
		  addLetterToArray();
		}else{
			//check if letter input is in word or in array
			if(guessesLeft > 1){
			checkIfInArray();
			}else if(weLost() && newLost === 0){
				checkIfInArray();
				loser();
			}
		}
	};
}