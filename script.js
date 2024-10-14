
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);
    if (number === 0) {
        return "rock";
    } else if (number === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Please choose between rock, paper or scissors.").toLowerCase();
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    } else {
        return undefined;
    }
}

function playRound(computerChoice, humanChoice) {
    if (computerChoice === "rock" && humanChoice === "paper") {
        console.log("You win: paper beats rock");
        humanScore += 1;
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        console.log("You lose: paper beats rock");
        computerScore += 1;
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
        console.log("You win: scissors beats paper");
        humanScore += 1;
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        console.log("You lose: scissors beats paper");
        computerScore += 1;
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
        console.log("You win: rock beats scissors");
        humanScore += 1;
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        console.log("You lose: scissors beats rock");
        computerScore += 1;
    } else {
        console.log("You both choose the same thing. It's a tie.")
    }
}


function PlayGame() {
    let computerChoice = getComputerChoice();
    let choice;

    while (choice === undefined) {
    choice = getHumanChoice();
    }
    playRound(computerChoice, choice);

    if (humanScore > computerScore) {
        console.log("You win! " + humanScore + " points for you and " + computerScore + " points for the computer");
    } else if (humanScore < computerScore) {
        console.log("You lose! " + humanScore + " points for you and " + computerScore + " points for the computer");
    } else {
        console.log("It's a tie! " + humanScore + " points for you and " + computerScore + " points for the computer");
    }
}

PlayGame();