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

function playRound(computerChoice, humanChoice) {
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

function playGame() {
  for (let i = 0; i < 5; i++) {
    let computerChoice = getComputerChoice(),
      humanChoice = getHumanChoice();
    playRound(computerChoice, humanChoice);
  }
  if (humanScore < compScore) {
    return "AND THEY COMPUTER WONNNN!";
  } else if (compScore < humanScore) {
    return "HIS NAME IS JOHN CENAAAAA! You won the GAME!";
  } else {
    console.log("YOU GUYS MANAGED TO TIEEEEE!");
  }
}

console.log(playGame());
console.log("your score", humanScore);
console.log("comp score", compScore);
