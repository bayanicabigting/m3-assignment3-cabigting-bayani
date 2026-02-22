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

var wordToGuess = document.getElementById('word-to-guess')
var remainingGuess = document.getElementById('remaining-guesses')
var incorrectLetters = document.getElementById('incorrect-letters')
var previousWord = document.getElementById('previous-word')
var wins = document.getElementById('wins')
var losses = document.getElementById('losses')

var word;
var display;
var wrong = [];
var guesses = 10;

startGame();

function startGame() {
  word = words[Math.floor(Math.random() * words.length)];
  display = Array(word.length).fill('_');
  wrong = [];
  guesses = 10;

  wordToGuess.textContent = display.join('');
  incorrectLetters.textContent = '';
  remainingGuess.textContent = guesses;
}

document.addEventListener('keyup', function(e) {
  var letter = e.key.toLowerCase();

  if (!/^[a-z]$/.test(letter)) return;

  if (display.includes(letter) || wrong.includes(letter)) return;

  if (word.includes(letter)) {
    for (var i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        display[i] = letter;
      }
    }

    wordToGuess.textContent = display.join('');

    if (!display.includes('_')) {
      wins.textContent++;
      previousWord.textContent = word;
      startGame();
    }

  } else {
    wrong.push(letter);
    guesses--;

    incorrectLetters.textContent = wrong.join(', ');
    remainingGuess.textContent = guesses;

    if (guesses === 0) {
      losses.textContent++;
      previousWord.textContent = word;
      startGame();
    }
  }
});