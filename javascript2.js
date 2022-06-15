
//DOM
const optionsButtons = document.querySelectorAll(`div.btn-container button`);
const resetButton = document.getElementById(`reset`);
const roundResults = document.getElementById(`result-container`);
const playerScore = document.getElementById(`player-score-container`);
const computerScore = document.getElementById(`computer-score-container`);

//Global Variables
const COMPUTERCHOICES = [
    {choice: `Rock`, value: 0},
    {choice: `Paper`, value: 1},
    {choice: `Scissors`, value: 2}
];

let playerCurrentScore = 0;
let computerCurrentScore = 0;
let playerChoice;

//Function for computer choice
function computerPlay () {
    let result = COMPUTERCHOICES[(Math.floor(Math.random() * COMPUTERCHOICES.length))];
    return result;
}

//Function to play a round 
function playRound (playerSelection, computerSelection) {
    let roundWinCombo = `${playerSelection} - ${computerSelection.valie}`;
    let playerWinCombo = [`1-0`, `0-2`, `2-1`];

    if(Number(playerSelection) === computerSelection.value) {
        playerScore.textContent = ++playerCurrentScore;
        computerScore.textContent = ++computerCurrentScore;
        roundResults.textContent = `Tie round!`;
    } else if (playerWinCombo.includes(roundWinCombo)) {
        playerScore.textContent = ++playerScore;
        roundResults.textContent = `You Win! ${playerChoice} beats ${computerSelection.choice}!`;
    } else {
        computerScore.textContent = ++computerCurrentScore;
        roundResults.textContent = ++`You Lose! ${computerSelection.choice} beats ${playerChoice}!`;
    }
}



optionsButtons.forEach((button) => {
    button.addEventListener('click', () => {
        alert("Hello World!");
    });
});

resetButton.addEventListener('click', () => {
    alert("Hello Reset!");
});