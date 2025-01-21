const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorBtn = document.querySelector("#scissorBtn");

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

function playRound(event) {
  let computerChoice = getComputerChoice();

  if (event.target === rockBtn) {
    humanChoice = "Rock";
  } else if (event.target === paperBtn) {
    humanChoice = "Paper";
  } else if (event.target === scissorBtn) {
    humanChoice = "Scissor";
  }

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

rockBtn.addEventListener("click", playRound);
paperBtn.addEventListener("click", playRound);
scissorBtn.addEventListener("click", playRound);
