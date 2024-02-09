/*Get computer choice*/
function getComputerChoice() {
    const randomizer = Math.floor(Math.random() * 3) + 1;
    let computerChoice = "";
    if(randomizer == 3) {
        computerChoice = "Rock";
    } else if (randomizer == 1) {
        computerChoice = "Paper";
    } else if (randomizer == 2) {
        computerChoice = "Scissors";
    }

    return computerChoice;
}

let playerSelection = "";

const rockBtn = document.getElementById('rock');
rockBtn.addEventListener('click', () => {
    const rockContent = document.getElementById('displayPlayerSelection');
    rockContent.textContent='✊';
    playerSelection = 'Rock';
});

const paperBtn = document.getElementById('paper');
paperBtn.addEventListener('click', () => {
    const paperContent = document.getElementById('displayPlayerSelection');

    paperContent.textContent='✋';
    playerSelection = 'Paper';
});

const scissorsBtn = document.getElementById('scissors');
scissorsBtn.addEventListener('click', () => {
    const scissorsContent = document.getElementById('displayPlayerSelection');

    scissorsContent.textContent='✌️';
    playerSelection = 'Scissors';

});

const runGameBtn = document.getElementById('playRound');
runGameBtn.addEventListener('click', () => {
    let computerSelection = getComputerChoice();

    const displayComputerContent = document.getElementById('displayComputerSelection');
    
    let computerChoice = "";
    if(computerSelection == "Rock"){
        computerChoice = '✊';
    } else if (computerSelection == "Paper") {
        computerChoice = '✋';
    } else if (computerSelection == "Scissors"){
        computerChoice = '✌️';
    }

    displayComputerContent.textContent = computerChoice;

    let playerScore = 0;
    let computerScore = 0;

    let player_selection_num_val = convertSelection(playerSelection);
    let computer_selection_num_val = convertSelection(computerSelection);
    
    const displayOutput = document.getElementById('output');
    let round_result = '';

    for (let i=0; i <=5; i++){
        if (player_selection_num_val > computer_selection_num_val){
            round_result = 'Player Wins!';
        } else if (player_selection_num_val == computer_selection_num_val){
            round_result = `It's a Tie!`;
        } else {
            round_result = 'Computer Wins!';
        }
    }

    displayOutput.textContent = round_result;
});

function convertSelection(selection) {

    selection_num_val = 0;
    if (selection == 'Rock'){
        selection_num_val = 3;
    } else if (selection == 'Paper') {
        selection_num_val = 1;
    } else if (selection == 'Scissors') {
        selection_num_val = 2;
    }

    return selection_num_val
}

