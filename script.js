const results = document.querySelector("#result");
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const score = document.querySelector("#score");
const finalResult = document.querySelector("#final-result");

rockButton.addEventListener("click", function() {
    playRound("rock");
});

paperButton.addEventListener("click", function() {
    playRound("paper");
});

scissorsButton.addEventListener("click", function() {
    playRound("scissors");
});

console.log("Rock Paper Scissors Game");
function getComputerChoice() {
    let cc =parseInt(Math.random() * 3);
    if (cc === 0) {
        return "rock";
    } else if (cc === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}



let humanscore = 0;
let computerscore = 0;


function playRound(humanSelection) {
    const computerSelection = getComputerChoice();
    results.textContent = 'Computer chose: ' + computerSelection + ', You chose: ' + humanSelection;

    if (computerSelection === humanSelection) {
        results.textContent += " It's a tie!";
    } else if (
        (computerSelection === "rock" && humanSelection === "scissors") ||
        (computerSelection === "paper" && humanSelection === "rock") ||
        (computerSelection === "scissors" && humanSelection === "paper")
    ) {
        results.textContent += " Computer wins this round!";
        computerscore++;
    } else {
        results.textContent += " You win this round!";
        humanscore++;
    }

    score.textContent = `Score - You: ${humanscore}, Computer: ${computerscore}`;
    if (humanscore === 5 || computerscore === 5) {
    if (humanscore === 5) {
        finalResult.textContent += " You won the game!";
    } else {
        finalResult.textContent += " Computer won the game!";
    }
}

    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    console.log(`Final Score - You: ${humanscore}, Computer: ${computerscore}`);
    alert(`Final Score - You: ${humanscore}, Computer: ${computerscore}`);
    if (humanscore > computerscore) {
        console.log("Congratulations! You won the game!");
        alert("Congratulations! You won the game!");
    } else if (humanscore < computerscore) {
        console.log("Computer won the game! Better luck next time.");
        alert("Computer won the game! Better luck next time.");
    } else {
        console.log("The game is a tie!");
        alert("The game is a tie!");
    }
}
