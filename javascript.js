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

function computerPlay () {
    let choice = gameArray[(Math.floor(Math.random() * 3))];
    return choice;
}

//Function to normalize the players input, make char 0 uppercase and return rest of string as lowercase.
function caseNormalize (string) { 
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

let playerSelection = `Rock`;
let computerSelection = computerPlay(); //computerPlay() - removed for testing.  `Rock`

function round (computerSelection, playerSelection) {
    
    let player = caseNormalize(playerSelection);
    let computer = computerSelection; // change after testing to let computer = computerPlay();


    if (computer === player) {
        console.log(`Draw! Computer picked ${computer} & Player picked ${player}!`);
    } else if (computer === `Rock` && player === `Scissors` ) {
        console.log(`You Lose! ${computer} beats ${player}!`);
    } else if (computer === `Rock` && player === `Paper`) {
        console.log(`You Win! ${computer} loses to ${player}!`);
    } else if (computer === 'Scissors' && player === `Paper`) {
        console.log(`You Lose! ${computer} beats ${player}!`)
    } else if (computer === `Scissors` && player === `Rock` ) {
        console.log(`You Win! ${computer} loses to ${player}!`)
    } else if (computer === `Paper` && player === `Rock`) {
        console.log(`You Lose! ${computer} beats ${player}!`);
    } else if (computer === `Paper` && player === `Scissors`) {
        console.log(`You Win! ${computer} loses to ${player}!`)
    }
}

console.log(round(computerSelection,playerSelection));











