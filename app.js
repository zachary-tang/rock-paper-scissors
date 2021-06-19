/* Caching the DOM */
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const scissors_div = document.getElementById("Scissors");
const resetButton_btn = document.getElementById("reset-btn");

/* Compare user choice against computer choice */
function game(userChoice) {
  const compChoice = getComputerChoice();
  switch (userChoice + compChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(convertLetter(userChoice), convertLetter(compChoice)); 
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(convertLetter(userChoice), convertLetter(compChoice)); 
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(convertLetter(userChoice), convertLetter(compChoice)); 
      break;
  }
}

/* Generate computer choice */
function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  return choices[Math.floor(Math.random() * 3)];
}

/* Outcome functions */
function win(userChoice, compChoice) {
  userScore++;
  updateScore();
  result_p.innerHTML = `${userChoice} versus ${compChoice}, you won!`;
  document.getElementById(userChoice).classList.add("green-glow");
  setTimeout(function() {document.getElementById(userChoice).classList.remove("green-glow")}, 300);
}

function lose(userChoice, compChoice) {
  computerScore++;
  updateScore();
  result_p.innerHTML = `${userChoice} versus ${compChoice}, you lost!`;
  document.getElementById(userChoice).classList.add("red-glow");
  setTimeout(function() {document.getElementById(userChoice).classList.remove("red-glow")}, 300);
}

function draw(userChoice, compChoice) {
  updateScore();
  result_p.innerHTML = `${userChoice} versus ${compChoice}, draw!`;
  document.getElementById(userChoice).classList.add("gray-glow");
  setTimeout(function() {document.getElementById(userChoice).classList.remove("gray-glow")}, 300);
}

/* Update the page with the score */
function updateScore() {
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
}

/* Convert letters to words */
function convertLetter(letter) {
  if (letter === "r") {
    return "Rock";
  }
  if (letter === "s") {
    return "Scissors";
  }
  if (letter === "p") {
    return "Paper";
  }
}

/* Main function */
function main() {
  rock_div.addEventListener('click', function() {
    game("r");
  })

  paper_div.addEventListener('click', function() {
    game("p");
  })

  scissors_div.addEventListener('click', function() {
    game("s");
  })

  resetButton_btn.addEventListener('click', () => location.reload()) 
}

main(); 