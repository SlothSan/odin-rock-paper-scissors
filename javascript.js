
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

const WINNERRESULTS = {
    computer: [`You lost the game to a computer, skynet is real huh?`, `#fb8500`],
    player: [`You won, Grats!!`, `#fb8500`],
    tie: [`Game is a Tie!, good match!`, `#fb8500`]
}

//Refresh page for new game.
resetButton.addEventListener(`click`, () => location.reload());

//Setup Player Choice Button Event Listeners 

optionsButtons.forEach(button => {button.addEventListener(`click`, getPlayerChoice) });

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
    let roundWinCombo = `${playerSelection}-${computerSelection.value}`;
    let playerWinCombo = [`1-0`, `0-2`, `2-1`];

    if(Number(playerSelection) === computerSelection.value) {
        playerScore.textContent = `Player Score: ${++playerCurrentScore}`;
        computerScore.textContent = `Computer Score: ${++computerCurrentScore}`;
        roundResults.textContent = `Tie round!`;
    } else if (playerWinCombo.includes(roundWinCombo)) {
        playerScore.textContent = `Player Score: ${++playerCurrentScore}`;
        computerScore.textContent = `Computer Score: ${computerCurrentScore}`;
        roundResults.textContent = `You Win! ${playerChoice} beats ${computerSelection.choice}!`;
    } else {
        playerScore.textContent = `Player Score: ${playerCurrentScore}`;
        computerScore.textContent = `Computer Score: ${++computerCurrentScore}`;
        roundResults.textContent = `You Lose! ${computerSelection.choice} beats ${playerChoice}!`;
    }
  checkWinner();
}


//Function to check the winner.
function checkWinner () {
    if (computerCurrentScore === 5 || playerCurrentScore === 5) {
        if (computerCurrentScore === playerCurrentScore) {
            updateWinner(`tie`);
        } else {
            let win = `${(computerCurrentScore > playerCurrentScore) ? `computer` : `player`}`;
            updateWinner(win);
        }
    }
}

//Function to update the winner.
function updateWinner (winner) {
    roundResults.textContent = WINNERRESULTS[winner][0];
    roundResults.style.color = WINNERRESULTS[winner][1];

    optionsButtons.forEach(button => {
        button.removeEventListener(`click`, getPlayerChoice);
    });
}

//Function to get playerchoice from button click.
function getPlayerChoice (e) {
    let playerSelection = (e.target.id);
    playerChoice = e.target.textContent;
    console.log(playerChoice);//testing !
    playRound(playerSelection, computerPlay());
}


