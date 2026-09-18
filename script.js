const results = document.querySelector("#result");
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const score = document.querySelector("#score");
const finalResult = document.querySelector("#final-result");
const rounds = document.querySelector("#rounds");
const playerChoiceEl = document.querySelector("#player-choice");
const computerChoiceEl = document.querySelector("#computer-choice");

const choiceEmojis = {
    rock: "🪨",
    paper: "📄",
    scissors: "✂️"
};

function playBattleAnimation(humanSelection, computerSelection, outcome) {
    playerChoiceEl.textContent = choiceEmojis[humanSelection];
    computerChoiceEl.textContent = choiceEmojis[computerSelection];

    playerChoiceEl.classList.remove("win", "lose", "tie", "animate");
    computerChoiceEl.classList.remove("win", "lose", "tie", "animate");
    void playerChoiceEl.offsetWidth; // restart animation on repeated clicks

    if (outcome === "human") {
        playerChoiceEl.classList.add("win");
        computerChoiceEl.classList.add("lose");
    } else if (outcome === "computer") {
        playerChoiceEl.classList.add("lose");
        computerChoiceEl.classList.add("win");
    } else {
        playerChoiceEl.classList.add("tie");
        computerChoiceEl.classList.add("tie");
    }

    playerChoiceEl.classList.add("animate");
    computerChoiceEl.classList.add("animate");
}

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
let currentRound = 0;
let totalRounds;


function playRound(humanSelection) {
    if (currentRound === 0) {
        totalRounds = parseInt(rounds.value);
        rounds.disabled = true;
    }

    const computerSelection = getComputerChoice();
    results.textContent = 'Computer chose: ' + computerSelection + ', You chose: ' + humanSelection;

    let outcome;
    if (computerSelection === humanSelection) {
        outcome = "tie";
        results.textContent += " It's a tie!";
    } else if (
        (computerSelection === "rock" && humanSelection === "scissors") ||
        (computerSelection === "paper" && humanSelection === "rock") ||
        (computerSelection === "scissors" && humanSelection === "paper")
    ) {
        outcome = "computer";
        results.textContent += " Computer wins this round!";
        computerscore++;
        currentRound++;
    } else {
        outcome = "human";
        results.textContent += " You win this round!";
        humanscore++;
        currentRound++;
    }

    playBattleAnimation(humanSelection, computerSelection, outcome);

    score.textContent = `Score - You: ${humanscore}, Computer: ${computerscore}`;
    if (currentRound >= totalRounds) {
        if (humanscore > computerscore) {
            finalResult.textContent += " You won the game!";
        } else {
            finalResult.textContent += " Computer won the game!";
        }
    
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
}

}