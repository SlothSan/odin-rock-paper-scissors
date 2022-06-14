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

//Function to get computer guess randomly from an array.
function computerPlay () {
    let choice = gameArray[(Math.floor(Math.random() * 3))];
    return choice;
}

//Function to normalize the players input, make char 0 uppercase and return rest of string as lowercase.
function caseNormalize (string) { 
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}


//Function to play one round and return a message to the console.
function round (computerSelection, playerSelection) {
    
    let computer = computerSelection; 
    let player = caseNormalize(playerSelection);
    let message = ``;

    if (computer === player) {
        
        message = `Draw! Computer picked ${computer} & Player picked ${player}!`;
    
    } else if (computer === `Rock` && player === `Scissors` ) {
        
        message = `You Lose! ${computer} beats ${player}!`;
    
    } else if (computer === `Rock` && player === `Paper`) {
        
        message = `You Win! ${computer} loses to ${player}!`;
    
    } else if (computer === 'Scissors' && player === `Paper`) {
        
        message = `You Lose! ${computer} beats ${player}!`;
    
    } else if (computer === `Scissors` && player === `Rock` ) {
        
        message = `You Win! ${computer} loses to ${player}!`;
    
    } else if (computer === `Paper` && player === `Rock`) {
        
        message = `You Lose! ${computer} beats ${player}!`;
    
    } else if (computer === `Paper` && player === `Scissors`) {
        
        message = `You Win! ${computer} loses to ${player}!`;
    }

    console.log(message);
}


let playerSelection = `Rock`;
let computerSelection = computerPlay();

console.log(round(computerSelection,playerSelection));











