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
  if (computerChoice == "Rock" && humanChoice == "Scissor") {
    console.log("The computer wins!");
    compScore++;
  } else if (computerChoice == "Scissor" && humanChoice == "Rock") {
    console.log("You win!");
    humanScore++;
  } else if (computerChoice == "Paper" && humanChoice == "Rock") {
    console.log("The computer wins!");
    compScore++;
  } else if (computerChoice == "Rock" && humanChoice == "Paper") {
    console.log("You win!");
    humanScore++;
  } else if (computerChoice == "Scissor" && humanChoice == "Paper") {
    console.log("The computer wins!");
    compScore++;
  } else if (computerChoice == "Paper" && humanChoice == "Scissor") {
    console.log("You win!");
    humanScore++;
  } else {
    console.log("Tie");
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
  } else {
    return "HIS NAME IS JOHN CENAAAAA! You won the GAME!";
  }
}

console.log(playGame());
console.log("your score", humanScore);
console.log("comp score", compScore);
