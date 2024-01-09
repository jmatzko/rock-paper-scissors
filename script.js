let userSelection = prompt("Enter Rock, Paper, or Scissors");

for (let i = 0; i < 5; i++) {
let userSelection = prompt("Enter Rock, Paper, or Scissors");
console.log(playRound(playerChoice(userSelection), getComputerChoice()));
}
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice === 1) {
        let computerChoice = "rock";
        return computerChoice;
    }
    else if (choice === 2) {
        let computerChoice = "paper";
        return computerChoice;
    }
    else if (choice === 3) {
        let computerChoice = "scissors";
        return computerChoice;
    }
}

function playerChoice(userSelection) {
    let selection = userSelection.toLowerCase();
    return selection;
}

function playRound(selection, computerChoice) {
    if (selection === computerChoice) {
        return "It's a tie!";
    }
    else if ( (selection == "scissors" && computerChoice == "rock")
    || (selection == "paper" && computerChoice == "scissors")
    || (selection == "rock" && computerChoice == "paper")) {
        return "You lose!";
    }
    else {
        return "You win!";
    }
}





