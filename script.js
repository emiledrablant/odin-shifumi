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
    let choice = prompt("Please choose between rock, paper or scissors.");
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    } else {
        return undefined;
    }
}

let computerChoice = getComputerChoice();
let choice;

while (choice === undefined) {
   choice = getHumanChoice();
}

console.log("computeur: " + computerChoice + " you : " + choice);