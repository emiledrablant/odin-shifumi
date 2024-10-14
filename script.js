
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

function playRound(computerChoice, humanChoice) {
    const newHistoric = document.createElement("div");
    let newResult = document.createElement("span");
    if (computerChoice === "rock" && humanChoice === "paper") {
        newResult.textContent = "You win: paper beats rock";
        humanScore += 1;
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        newResult.textContent = "You lose: paper beats rock";
        computerScore += 1;
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
        newResult.textContent = "You win: scissors beats paper";
        humanScore += 1;
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        newResult.textContent = "You lose: scissors beats paper";
        computerScore += 1;
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
        newResult.textContent = "You win: rock beats scissors";
        humanScore += 1;
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        newResult.textContent = "You lose: scissors beats rock";
        computerScore += 1;
    } else {
        newResult.textContent = "You both choose the same thing. It's a tie.";
    }

    newHistoric.appendChild(newResult);
    list.appendChild(newHistoric);
}


function playGame(playerChoice) {
    let computerChoice = getComputerChoice();
    let choice = playerChoice;

    playRound(computerChoice, choice);

    if (computerScore >= 5 || humanScore >= 5) {
        const newHistoric = document.createElement("div");
        let newResult = document.createElement("span");
        const replay = document.createElement("button");
        replay.textContent = "Click to play again.";

        if (humanScore > computerScore) {
            newResult.textContent = "You win! " + humanScore + " points for you and " + computerScore + " points for the computer";
        } else if (humanScore < computerScore) {
            newResult.textContent = "You lose! " + humanScore + " points for you and " + computerScore + " points for the computer";
        } else {
            newResult.textContent = "It's a tie! " + humanScore + " points for you and " + computerScore + " points for the computer";
        }

        newHistoric.appendChild(newResult);
        newHistoric.appendChild(replay);
        list.appendChild(newHistoric);

        replay.addEventListener("click", () => {
            computerScore = 0;
            humanScore = 0;
            while (list.firstChild) {
                list.removeChild(list.lastChild);
            }
        });
    }
}

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const list = document.querySelector("#list");

rockButton.addEventListener("click", () => {
    playGame("rock");
});

paperButton.addEventListener("click", () => {
    playGame("paper");
});

scissorsButton.addEventListener("click", () => {
    playGame("scissors");
});