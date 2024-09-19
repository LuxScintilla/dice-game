const adaptiveText = document.querySelector(".adaptive-text");

const diceDotsLeft = document.querySelectorAll(".grid-dot-left");
const diceDotsRight = document.querySelectorAll(".grid-dot-right");

const rollButton = document.querySelector(".roll-button");

let numberArray = [];

let playerOne;
let playerTwo;

rollButton.addEventListener("click", function() {
  hideDots()
  numberArray = [];
  generateRandomNumbers();
  playerOne = numberArray[0];
  playerTwo = numberArray[1];
  generateDiceLeft(playerOne);
  generateDiceRight(playerTwo);
  checkResult();
  console.log("Player 1: " + playerOne + " Player 2: " + playerTwo)
})

function hideDots() {
  diceDotsLeft.forEach(item => item.classList.add("hidden"));
  diceDotsRight.forEach(item => item.classList.add("hidden"));
}

function generateRandomNumbers() {
  let randomNumberOne = Math.floor(Math.random() * 6) + 1;
  numberArray.push(randomNumberOne);
  let randomNumberTwo = Math.floor(Math.random() * 6) + 1;
  numberArray.push(randomNumberTwo);
}

function checkResult() {
  if (playerOne > playerTwo) {
    adaptiveText.textContent = "Player 1 Wins!";
  } else if (playerOne < playerTwo) {
    adaptiveText.textContent = "Player 2 Wins!";
  } else if (playerOne === playerTwo) {
    adaptiveText.textContent = "It's a Draw!";
  }
}

function generateDiceLeft(number) {
  if (number === 1) {
    diceDotsLeft[4].classList.remove("hidden");
  } else if (number === 2) {
    diceDotsLeft[0].classList.remove("hidden");
    diceDotsLeft[8].classList.remove("hidden");
  } else if (number === 3) {
    diceDotsLeft[0].classList.remove("hidden");
    diceDotsLeft[4].classList.remove("hidden");
    diceDotsLeft[8].classList.remove("hidden");
  } else if (number === 4) {
    diceDotsLeft[0].classList.remove("hidden");
    diceDotsLeft[2].classList.remove("hidden");
    diceDotsLeft[6].classList.remove("hidden");
    diceDotsLeft[8].classList.remove("hidden");
  } else if (number === 5) {
    diceDotsLeft[0].classList.remove("hidden");
    diceDotsLeft[2].classList.remove("hidden");
    diceDotsLeft[4].classList.remove("hidden");
    diceDotsLeft[6].classList.remove("hidden");
    diceDotsLeft[8].classList.remove("hidden");
  } else if (number === 6) {
    diceDotsLeft[0].classList.remove("hidden");
    diceDotsLeft[2].classList.remove("hidden");
    diceDotsLeft[3].classList.remove("hidden");
    diceDotsLeft[5].classList.remove("hidden");
    diceDotsLeft[6].classList.remove("hidden");
    diceDotsLeft[8].classList.remove("hidden");
  }
}

function generateDiceRight(number) {
  if (number === 1) {
    diceDotsRight[4].classList.remove("hidden");
  } else if (number === 2) {
    diceDotsRight[0].classList.remove("hidden");
    diceDotsRight[8].classList.remove("hidden");
  } else if (number === 3) {
    diceDotsRight[0].classList.remove("hidden");
    diceDotsRight[4].classList.remove("hidden");
    diceDotsRight[8].classList.remove("hidden");
  } else if (number === 4) {
    diceDotsRight[0].classList.remove("hidden");
    diceDotsRight[2].classList.remove("hidden");
    diceDotsRight[6].classList.remove("hidden");
    diceDotsRight[8].classList.remove("hidden");
  } else if (number === 5) {
    diceDotsRight[0].classList.remove("hidden");
    diceDotsRight[2].classList.remove("hidden");
    diceDotsRight[4].classList.remove("hidden");
    diceDotsRight[6].classList.remove("hidden");
    diceDotsRight[8].classList.remove("hidden");
  } else if (number === 6) {
    diceDotsRight[0].classList.remove("hidden");
    diceDotsRight[2].classList.remove("hidden");
    diceDotsRight[3].classList.remove("hidden");
    diceDotsRight[5].classList.remove("hidden");
    diceDotsRight[6].classList.remove("hidden");
    diceDotsRight[8].classList.remove("hidden");
  }
}

hideDots();