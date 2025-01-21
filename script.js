const rockBtn = document.querySelector("#rockBtn");

function getComputerChoice() {
  const compChoicesForTheGame = ["Rock", "Paper", "Scissor"];
  let indexOfChoice = Math.floor(Math.random() * 3);
  return compChoicesForTheGame[indexOfChoice];
}

function getHumanChoice() {
  let humanInput = window.prompt(
    `Enter either "Rock", "Paper", or "Scissor": `
  );
  humanInput = humanInput[0].toUpperCase() + humanInput.slice(1).toLowerCase();
  return humanInput;
}

let humanScore = 0,
  compScore = 0;

let humanChoice = "";

function playRound() {
  let computerChoice = getComputerChoice();
  let winCondition = {
    Rock: "Scissor",
    Paper: "Rock",
    Scissor: "Paper",
  };

  if (computerChoice == humanChoice) {
    console.log("Tie");
  } else if (winCondition[computerChoice] == humanChoice) {
    console.log("The computer wins!");
    compScore++;
  } else {
    console.log("You win!");
    humanScore++;
  }

  return humanScore, compScore;
}

rockBtn.addEventListener("click", function () {
  let computerChoice = getComputerChoice();
  let humanChoice = "Rock";

  let winCondition = {
    Rock: "Scissor",
    Paper: "Rock",
    Scissor: "Paper",
  };

  if (computerChoice == humanChoice) {
    console.log("Tie");
  } else if (winCondition[computerChoice] == humanChoice) {
    console.log("The computer wins!");
    compScore++;
  } else {
    console.log("You win!");
    humanScore++;
  }

  return humanScore, compScore;
});
