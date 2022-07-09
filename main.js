let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  const random = Math.floor(Math.random() * 3) + 1;
  if (random === 1) {
    return "rock";
  } else if (random === 2) {
    return "paper";
  } else if (random === 3) {
    return "scissors";
  }
}

function playRound() {
  const computerSelection = computerPlay().toLowerCase();
  const playerSelection = "rock".toLowerCase();
  if (playerSelection === computerSelection) {
    return "Match is Tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    playerScore++;
    return "You win";
  } else {
    computerScore++;
    return "You Lose";
  }
}

function game() {
  for (let i = 0; i <= 5; i++) {
    playRound();
    console.log(`Computer score: ${computerScore}`);
    console.log(`Player score: ${playerScore}`);
  }
  if (computerScore === playerScore) {
    return "Match is Tie";
  } else if (computerScore > playerScore) {
    return "Computer win";
  } else {
    return "You win";
  }
}

console.log(game());
// ✊ ✋✌
