const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

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

function playRound() {
    const playerSelection = playerChoice();
    const computerSelection= computerChoice();
    const result = checkWinner(playerSelection,computerSelection);
    console.log(result)
    if (playerScore == 5) {
        return "Congratulations!";
      }
      else if (computerScore == 5) {
        return "Game over!, Play another?";
      }
      else {
        return "It's a tie!";
      }
    }

function game() {
    for (let i = 0; i < 5; i++) {
    playRound();
    checkWinner();
        }
    }
    
  
function checkWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } 
    else if (
    playerSelection === "rock" && computerSelection === "scissors" || 
    playerSelection === "paper" && computerSelection === "rock"|| 
    playerSelection === "scissors" && computerSelection === "paper") {
        return "You win this one!";
    }
    else {
        return "Try again!";
    } 
}

game();
   
 