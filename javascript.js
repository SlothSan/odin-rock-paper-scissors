/* Rock Paper Scissors Pseudocode 
need to randomly return one of the above as the "Computer pick" for the game 
Create array with Rock, Paper Scissors.
Create a random number between 0-2.
Make choice that element in the array. 
Return it. 


Function to play 1 round of RPS.
takes playerSelection and computerSelection as inputs.
if the same return draw.
if rock versus paper - paper wins
if rock versus scissors - rock wins.
if paper verus scissors - scissors win
if paper versus rock - paper wins
if scissors versus paper - scissors win
if scissors versus rock - rock wins
*/
const gameArray = [`Rock`, `Paper`, `Scissors`];
let round = true;
let message = ``;
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

//DOM JS for setting up DOM Manipulation. 

const buttons = document.querySelectorAll('button');
const results = document.querySelector(`#result-container`);
const score = document.querySelector(`#score-container`);

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id === `rock`) {
            playerSelection = `Rock`;
            computerSelection = computerPlay();
            playRound(playerSelection, computerSelection);
        }

        if (button.id === `paper`) {
            playerSelection = `Paper`;
            computerSelection = computerPlay();
            playRound(computerSelection, playerSelection);
        }

        if (button.id === `scissors`) {
            playerSelection = `Scissors`;
            computerSelection = computerPlay();
            playRound(computerSelection, playerSelection);
        }
    });
});


//Function to get computer guess randomly from an array.
function computerPlay () {
    let choice = gameArray[(Math.floor(Math.random() * 3))];
    return choice;
}


//Function to play one round and return a message to the console.
function playRound (computerSelection, playerSelection) {
    
    let computer = computerSelection; 
    let player = playerSelection;

    if (computer === player) {

        results.innerHTML = `Draw! Computer picked ${computer} & Player picked ${player}!`;

    } else if (computer === `Rock` && player === `Scissors` ) {

        results.innerHTML = `You Lose! ${computer} beats ${player}!`;
        ++computerScore;
    
    } else if (computer === `Rock` && player === `Paper`) {

        results.innerHTML = `You Win! ${player} beats ${computer} !`;
        ++playerScore;
    
    } else if (computer === 'Scissors' && player === `Paper`) {

        results.innerHTML = `You Lose! ${computer} beats ${player}!`;
        ++computerScore;
    
    } else if (computer === `Scissors` && player === `Rock` ) {

        results.innerHTML = `You Win! ${player} beats ${computer} !`;
        ++playerScore;
    
    } else if (computer === `Paper` && player === `Rock`) {

        results.innerHTML = `You Lose! ${computer} beats ${player}!`;
        ++computerScore;
    
    } else if (computer === `Paper` && player === `Scissors`) {

        results.innerHTML = `You Win! ${player} beats ${computer} !`;
        ++playerScore;
    }
    
    if (playerScore === 5 || computerScore === 5) {
        if (playerScore === 5) {
            score.innerHTML = `PLAYER WINS, CONGRATS HUMAN!`;
        }

        if (computerScore === 5) {
            score.innerHTML = `COMPUTER WINS, SKYNET IS TAKING OVER!`;
        } 
    } else {
        score.innerHTML = `Player Score: ${playerScore}   Computer Score: ${computerScore}`;
    }
}


function game () {

    for (;round;) { 
        playRound(computerSelection,playerSelection);
        score.innerHTML =`Player Score: ${playerScore}   Computer Score: ${computerScore}`;


        //sets round to true that ends the game and exits the for loop. 
        
        if (playerScore === 5 || computerScore === 5) {
            round = false;
        } 
    }


    //Ternary Operator to log the winner. 
    playerScore > computerScore ? console.log(`Player Wins! Good Job!`) : console.log(`Computer Wins! Skynet is taking over!`);

}

// game();









