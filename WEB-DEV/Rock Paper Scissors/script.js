const choices = ["rock", "paper", "scissors"];

function computerPlay() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    const resultDisplay = document.getElementById("result");
    const userChoiceDisplay = document.getElementById("user-choice");
    const computerChoiceDisplay = document.getElementById("computer-choice");

    userChoiceDisplay.textContent = `You chose: ${playerSelection}`;
    computerChoiceDisplay.textContent = `Computer chose: ${computerSelection}`;

    if (playerSelection === computerSelection) {
        resultDisplay.textContent = "It's a tie!";
        resultDisplay.style.color = "black";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        resultDisplay.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
        resultDisplay.style.color = "green";
    } else {
        resultDisplay.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
        resultDisplay.style.color = "red";
    }
}

function game(playerChoice) {
    const computerChoice = computerPlay();
    playRound(playerChoice, computerChoice);
}

const buttons = document.querySelectorAll(".choice");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        game(button.id);
    });
});
