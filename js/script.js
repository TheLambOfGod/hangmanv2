const wordPool = ["irish coffee", "mexican horchata", "soft drink",
                  "chai tea", "sports drink", 
                  "orange juice", "light beer", "large soda"]
var chosenWord;
var hiddenWordArr = [];
var hiddenWord;
var spacePosition;
var temp;
var numberOfGuesses = 12;
var lettersGuessed = [];
var correctLettersGuessed = [];
var hiddenWord = document.getElementById('hiddenword'); 
var newGameButton = document.getElementById('newgamebtn');
//var resetScoreButton = docuement.getElementById('resetscore');
var letterGuess = document.getElementById('guessbox');
var enterGuessBtn = document.getElementById('enterguess');
var guessedLetters = document.getElementById('guessletters');
var guessesRemaining = document.getElementById('guessesremaining');
var arrayedChosenWord = [];
var wordObject = {};


//Clicking the below starts the game

letterGuess.disabled = true;
newGameButton.addEventListener('click', function newGame() {
    letterGuess.value = "";
    hiddenWordArr = [];
    hiddenWord;
    chosenWord = [];
    numberOfGuesses = 12;   
    enterGuessBtn.disabled = false;
    letterGuess.disabled = false;
    lettersGuessed = [];
    guessedLetters.innerHTML = "";
    guessesRemaining.innerHTML = "";
    chosenWord = wordPool[Math.floor(Math.random() * wordPool.length)];
        for (i = 0; i < chosenWord.length; i++) {
             hiddenWordArr.push("_");
        };
    
    arrayedChosenWord = Array.from(chosenWord);    
    console.log("arrayed chosen word ", arrayedChosenWord);
    spacePosition = chosenWord.indexOf(" ");
    
    if (spacePosition > 0) { 
        hiddenWordArr[spacePosition] = "&nbsp;";
    };
    temp = hiddenWordArr.join(" ");
    hiddenWord.innerHTML = temp;

    console.log("hiddden word array ", hiddenWordArr);
});

//Letter guess submission
enterGuessBtn.disabled = true;
enterGuessBtn.addEventListener('click', function enterGuess() {
    numberOfGuesses -= 1;
    lettersGuessed.push(letterGuess.value);
    console.log("guessed letters array", lettersGuessed);
    letterGuess.value = "";
    guessedLetters.innerHTML = lettersGuessed.join(" ");
    guessesRemaining.innerHTML = numberOfGuesses;
    
    for (i = 0; i < arrayedChosenWord.length; i++) {
        if(lettersGuessed.includes(arrayedChosenWord[i])) {
            wordObject [i] = arrayedChosenWord[i];
        }
    }
    //console.log("Correct Letters Guessed ", correctLettersGuessed);
    console.log(" Word Object ", wordObject);

    for(i = 0; i < arrayedChosenWord.length; i++) {
        if(wordObject.values.includes(arrayedChosenWord[i])) {
            console.log("word Object keys: ", wordObject.keys());
        }
    }
});
