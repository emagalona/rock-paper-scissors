/*Get computer choice*/
function getComputerChoice() {
    const randomizer = Math.floor(Math.random() * 3) + 1;
    let computerChoice = "";
    if(randomizer == 1) {
        computerChoice = "Rock";
    } else if (randomizer == 2) {
        computerChoice = "Paper";
    } else if (randomizer == 3) {
        computerChoice = "Scissors";
    }

    return computerChoice;
}

/*Convert Selection to Numeric Value*/
function convertSelection(selection){
    let numericVal = 0;
    const selectionToUpper = selection.toUpperCase();

    if(selectionToUpper == 'ROCK') { 
        numericVal = 1;
    } else if (selectionToUpper == 'PAPER') {
        numericVal = 2;
    } else if (selectionToUpper == 'SCISSORS') {
        numericVal = 3;
    }

    return numericVal;
    
}

/*Play Round*/
function playRound(computerSelection, playerSelection) { 

    
    const selectionArr = ['Rock', 'Paper', 'Scissors'];
    

    const convertedComputerSelection = convertSelection(computerSelection);
    const convertedPlayerSelection = convertSelection(playerSelection);

    let result = `${selectionArr[convertedComputerSelection - 1]} beats ${selectionArr[convertedPlayerSelection - 1]}`;

    if(convertedComputerSelection > convertedPlayerSelection){
        result = `You Lose! ${result}`;
    } else if (convertedComputerSelection == convertedPlayerSelection) {
        result = 'The result is Tie!'
    } else {
        result = `You Win! ${result}`;
    }

    return result;
}

/*Play the Whole Game*/
function game(){

    let playerScore = 0;
    let computerScore = 0;

    

    for(let i=0; i <5; i++){

        const computerChoice = getComputerChoice();
        const playerChoice = prompt(`What's your choice?`);

        result = playRound(computerChoice, playerChoice);

        if(result.includes('Win')){
            playerScore++;
        } else if (result.includes('Lose')){
            computerScore++; 
        } 
        alert(result);
    }

    alert(playerScore);
    alert(computerScore);
}

game();