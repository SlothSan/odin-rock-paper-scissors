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
if rock versus rock - draw
if rock versus scissors - rock wins.
*/

function computerPlay () {
    let gameArray = [`Rock`, `Paper`, `Scissors`];
    let choice = gameArray[(Math.floor(Math.random() * 3))];
    return choice;
}







