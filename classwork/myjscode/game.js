let userScore = 0;
let computerScore = 0;
// let counter = 0;
let round = 0;
const maxRounds = 5;

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const resultText = document.getElementById("result");
const playerScore = document.getElementById("score1");
const machineScore = document.getElementById("score2");

function computerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playGame(userChoice) {
  const computer = computerChoice();

  if (userChoice === computer) {
    resultText.innerHTML = "Tie!";
  } else if (
    (userChoice === "rock" && computer === "scissors") ||
    (userChoice === "paper" && computer === "rock") ||
    (userChoice === "scissors" && computer === "paper")
  ) {
    userScore++;
    playerScore.innerText = userScore;
    resultText.innerHTML = `You win! ${userChoice} beats ${computer}.`;
  } else {
    computerScore++;
    machineScore.innerText = computerScore;
    resultText.innerText = `You lose! ${computer} beats ${userChoice}.`;
  }
  round++;
  document.getElementById(
    "round-display"
  ).innerHTML = `Round ${round} of ${maxRounds}`;
  if (round >= maxRounds) {
    alert("Game Over!");
    setTimeout(restartGame, 2000);
  }
}

function restartGame() {
  round = 0;
  document.getElementById(
    "round-display"
  ).innerHTML = `Round ${round} of ${maxRounds}`;
  document.getElementById("result-display").innerHTML = "";
}

rockButton.addEventListener("click", () => {
  playGame("rock");
});

paperButton.addEventListener("click", () => {
  playGame("paper");
});

scissorsButton.addEventListener("click", () => {
  playGame("scissors");
});
