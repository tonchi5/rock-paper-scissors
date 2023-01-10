const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function playRound() {
    const playerSelection = playerChoice();
    const computerSelection= computerChoice();
    console.log(computerSelection);
    const winner = checkWinner(playerSelection,computerSelection);
    console.log(winner)
    }

function game() {
    for (let i = 0; i < 5; i++) {
    playRound();}
    //winCondition();}
    winCondition();
  }

function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playerChoice() {
    let input = prompt("Type rock, paper or scissors:");
    while (input == null) {
        input = prompt("Type rock, paper or scissors!");
    }
    input = input.toLowerCase();
    return input;
}

function checkWinner(choiceP, choiceC) {
    if (choiceP === choiceC) {
        return "It's a tie!";
    } 
    else if (
    choiceP === "rock" && choiceC === "scissors" || 
    choiceP === "paper" && choiceC === "rock"|| 
    choiceP === "scissors" && choiceC === "paper") {
        return "You win!";
    }
    else {
        return "Try again!";
    } 
}

function winCondition() {
    if (playerScore == 5) {
      return "Congratulations!";
    }
    if (computerScore == 5) {
      return "Game over!";
    }
  }


game();
   
 