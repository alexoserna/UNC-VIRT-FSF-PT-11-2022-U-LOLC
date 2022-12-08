var choices = ["R","P", "S"];

var wins = 0;
var losses = 0;
var ties = 0;

function playGame () {
    let userInput = window.prompt("Rock, Paper, or Scissors?" + "\n" + "Please enter R, P, S");
    var userIndex;
    if ( userInput === "R" ) {
        userIndex = 0;
        
    } else if ( userInput === "P" ) {
        userIndex = 1;
    } else if ( userInput === "S" ) {
        userIndex = 2;
    } else {

    }
}