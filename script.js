function getComputerChoice() {
    let randomNumber =  Math.floor(Math.random() * 3);
    console.log(randomNumber);
    switch (randomNumber) {
        case 0:
            console.log("Rock");
            return "Rock";
        case 1:
            console.log("Paper");
            return "Paper";
        case 2:
            console.log("Scissors");
            return "Scissors";
        default:
            console.log("Wrong output");
            return "Wrong output";    
    }
}

getComputerChoice();