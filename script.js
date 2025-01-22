const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorBtn = document.querySelector("#scissorBtn");
const gameOutput = document.querySelector("#gameOutput");
const compScCount = document.querySelector("#compScCount");
const humanScCount = document.querySelector("#humanScCount");

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
  compScore = 0,
  count = 0;

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
    count++;
    gameOutput.textContent = `Round ${count}: Tie`;
    console.log("tie");
  } else if (winCondition[computerChoice] == humanChoice) {
    count++;
    gameOutput.textContent = `Round ${count}: Computer gets one point`;
    console.log("comp win");
    compScore++;
  } else {
    count++;
    gameOutput.textContent = `Round ${count}: You get one point`;
    console.log("you win");
    humanScore++;
  }

  humanScCount.textContent = `Human's Score: ${humanScore}`;
  compScCount.textContent = `Computer's Score: ${compScore}`;

  if (humanScore == 5) {
    console.log("HUMAN won", humanScore);
    gameOutput.textContent = "THE HUMAN HAS WONNNNN THE GAMEEEEE!!!";
    return "win";
  } else if (compScore == 5) {
    gameOutput.textContent = "THE COMPUTER HAS WONNNNNN YEAAAAA!!!";
    console.log("COMP won", compScore);
    return "win";
  }

  return humanScore, compScore;
}

rockBtn.addEventListener("click", playRound);
paperBtn.addEventListener("click", playRound);
scissorBtn.addEventListener("click", playRound);
