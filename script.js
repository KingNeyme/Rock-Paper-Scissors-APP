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


let humanScore = 0;
let computerScore = 0;

// Generate computer's random choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

// Play a round
function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    if (humanChoice === computerChoice) {
        updateMessage(`It is a Tie! Both you and the computer chose ${humanChoice}.`);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        updateMessage(`You win! ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
    } else {
        updateMessage(`You lose! ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
    }
    updateScore();
    if (humanScore === 5 || computerScore === 5) declareWinner();
}

// Update the game message
function updateMessage(message) {
    document.getElementById("message").textContent = message;
}

// Update the scores
function updateScore() {
    document.getElementById("score").textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
}

// Declare the winner
function declareWinner() {
    if (humanScore === 5) {
        updateMessage("🎉 You won the game! Refresh to play again.");
    } else {
        updateMessage("💻 The computer wins the game! Refresh to play again.");
    }
    // Disable buttons to stop the game
    document.querySelectorAll("button").forEach(button => button.disabled = true);
}

// Add event listeners to buttons
document.getElementById("rock").addEventListener("click", () => playRound("rock"));
document.getElementById("paper").addEventListener("click", () => playRound("paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));
