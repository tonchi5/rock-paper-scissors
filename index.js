const choices = ["rock", "paper", "scissors"];

function playRound() {
    const playerSelection = playerChoice();
    const computerSelection= computerChoice();
    console.log(computerSelection);
    const winner = checkWinner(playerSelection,computerSelection);
    console.log(winner)
    } 

function game() {
    playRound();
  }

function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playerChoice() {
    let input = prompt("Type rock, paper or scissors:");
    input = input.toLowerCase();
}

function checkWinner(choiceP, choiceC) {
    if (choiceP === choiceC) {
        return "It's a tie!";
    } 
    else if (choiceP === "rock" && choiceC === "scissors" || choiceP === "paper" && choiceC === "rock"|| choiceP === "scissors" && choiceC === "paper") {
        return "You win!";
    }
    else {
        return "You lose!";
    } 
}

game();
   
 