function getComputerChoice() {
    let randomNumber =  Math.floor(Math.random() * 3);
    // console.log(randomNumber);
    switch (randomNumber) {
        case 0:
            // console.log("Rock");
            return "Rock";
        case 1:
            // console.log("Paper");
            return "Paper";
        case 2:
            // console.log("Scissors");
            return "Scissors";
        default:
            // console.log("Wrong output");
            return "Wrong output";    
    }
}

function playSingleRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    // console.log(playerSelection);
    // console.log(computerSelection);

    if (playerSelection === computerSelection) {
        return `It's the match! ${playerSelection} and ${computerSelection}`;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You won! rock beats scissors";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You won! paper beats rock";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You won! scissors beats paper"
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function game() {
        let playerSelection;
        let computerSelection;
        let result;
        let playerScore = 0;
        let computerScore = 0;
    for (let index = 0; index < 5; index++) {
        playerSelection = prompt("Write down your choose!")
        computerSelection = getComputerChoice();
        result = playSingleRound(playerSelection, computerSelection);
        //console.log(result);
        if (result.includes("won")) {
            playerScore++;
        }
        if (result.includes("lose")) {
            computerScore++;
        }
    }
    if (playerScore > computerScore) {
        console.log(`You are the winner! ${playerScore}-${computerScore}`);
    } else if (playerScore < computerScore) {
        console.log(`Computer is the winner! ${computerScore}-${playerScore}`);
    } else {
        console.log(`It is a draw! ${playerScore}-${computerScore}`)
    }
}

game();

// const playerSelection = getComputerChoice();
// const computerSelection = getComputerChoice();
// console.log(playSingleRound(playerSelection,computerSelection));