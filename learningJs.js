var randomNumber = Math.floor(Math.random() * 10 + 1);
const guessField = document.querySelector(".guessField");
const guessSubmit = document.querySelector(".guessSubmit");

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

guesses.textContent = "Previous Answers are: ";

let counter = 1;

function startGame() {
  if (counter === 11) {
    gameOver();
  } else if (randomNumber === guessField.value) {
    lastResult.textContent = "7cr .... (In AB Voice)";
    lastResult.style.backgroundColor = "green";
  } else {
    lastResult.textContent = "galat jawab!!";
    lastResult.style.backgroundColor = "red";
    // guesses.textContent = 'Pre';
    guesses.textContent = guesses.textContent + ` ${guessField.value}`;
  }

  counter++;
  guessField.value = "";
  guessField.focus();
}
function gameOver() {

  lastResult.style.backgroundColor = "white";
  guesses.textContent = "Game Khatam tata bye bye gaya!!";
  guessField.disabled = true;
  guessSubmit.disabled = true;
  const resetButton = document.createElement('button');
  resetButton.textContent = "Ek aut Khele Ga?"
  document.body.append(resetButton);
  resetButton.addEventListener('click', reSetGame);

}
guessSubmit.addEventListener("click", startGame);

function reSetGame() {
  counter = 1;
  
  
  const resultParas = document.querySelectorAll('.resultParas');
  
  for (const resultParases of resultParas) {
    resultParases.textContent = '';
  }
  
  // resetButton.parentNode.removeChild(resetButton);
  
  
  guessField.disabled = false;
  guessSubmit.disabled = false;guessField.value = '';

  guessField.focus()
  lastResult.style.backgroundColor = 'white';
  
  // randomNumber = Math.floor(Math.random() * 100) + 1;
  

}
