var words = [
  'bananas',
  'grapes',
  'carousel',
  'milkshake',
  'javascript',
  'limousine',
  'chocolate',
  'programming',
  'meatloaf',
  'ukulele',
  'mango'
]

var correctGuesses = []
var incorrectGuesses = []
var guessedLetters = []

var maxGuesses = 10
var wins = 0
var losses = 0

var wordToGuess = document.getElementById('word-to-guess')
var remainingGuess = document.getElementById('remaining-guesses')
var incorrectLetters = document.getElementById('incorrect-letters')
var previousWord = document.getElementById('previous-word')
var wins = document.getElementById('wins')
var loss = document.getElementById('losses')

remainingGuess.textContent = maxGuesses;

var currentWord = words[Math.floor(Math.random() * words.length)];      
var tempCurrentWord = currentWord
var hiddenWord = Array(currentWord.length + 1).join('_');

wordToGuess.textContent = hiddenWord

document.onkeyup = function(e) {
  var key = e.key.toLowerCase()
  console.log(currentWord)

  var letterRegex = /^[a-z]$/;

  if (!letterRegex.test(key) || guessedLetters.includes(key)) {
    return;
  };

  guessedLetters.push(key)

  if (currentWord.includes(key)) {
    correctGuesses.push(key);
    let hiddenWordLetters = hiddenWord.split('')
    let currentWordLetters = currentWord.split('')

     for (let i = 0; i < currentWord.length; i++) {
       if (currentWord[i] === key) {
        hiddenWordLetters[i] = key;
       }
    }

  hiddenWord = hiddenWordLetters.join('')
    currentWord = currentWordLetters.join('')

    wordToGuess.textContent = hiddenWord

    if (tempCurrentWord === hiddenWord) {
      wins.innerText++
      reset()
    }

  } else {

    incorrectGuesses.push(key)
    incorrectLetters.textContent = incorrectGuesses.join(', ');
    remainingGuess.textContent--;

    if (remainingGuess.textContent == 0) {
      loss.innerText++; 
      reset()
    }
  }
  
function reset() {
  previousWord.innerText = tempCurrentWord;
  currentWord = words[Math.floor(Math.random() * words.length)];
  tempCurrentWord = currentWord
  hiddenWord = Array(currentWord.length + 1).join('_');
  wordToGuess.innerText = hiddenWord
  remainingGuess.textContent = maxGuesses;
  incorrectGuesses = [];
  guessedLetters = [];
  incorrectLetters.textContent = "";
}

}