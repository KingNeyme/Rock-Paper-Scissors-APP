// get computer choice
// get human choice
// rock beats scissors, scissors beats paper, paper beats rock
// if rock is chosen, computer chooses paper, paper beats rock: Computer wins!!
// if paper is chosen, computer chooses rock, rock beats paper User wins!!
// if scissors is chosen, computer chooses rock, rock beats scissors: Computer wins!!
// if user and computer choose the same, it's a tie
// prompt user to play again
// if user chooses to play again, repeat the game
// if user chooses not to play again, end the game


function getComputerChoice () {
    let choices = ["Rock", "Paper", "Scissors"];
    let computer = choices[Math.floor(Math.random() * choices.length)];
    return computer;
}

function getHumanChoice ( ) {
    let human = prompt("Enter Rock, Paper, or Scissors: ").toLowerCase();

    //validate input

    while (!["Rock", "Papeer", "Scissors"].includes(human)) {
      human = prompt("Invalid input. Please enter Rock, Paper, or Scissors: ").toLowerCase();
   }
    return human;
}


let humanScore = 0;
let computerScore = 0;


function playRound (humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`It is a Tie! Both you and the computer chose ${humanChoice}`);
    }  
    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
    }

}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Score after round ${i + 1}: Human: ${humanScore}, Computer: ${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log("Congratulations! You win the game!");
    } else if (computerScore > humanScore) {
        console.log("Sorry, the computer wins the game.");
    } else {
        console.log("It's a tie game!");
    }
}

// Start the game
playGame();


