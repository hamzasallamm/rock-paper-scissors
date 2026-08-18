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

function getHumanChoice() {
    let hc = prompt("Enter your choice (rock, paper, scissors):");
    hc = hc.toLowerCase();
    if (hc ==="rock" || hc ==="paper" || hc ==="scissors"){
        return hc
    }
    else{
        alert("Not a valid choice");
        return getHumanChoice();
    }
}

let humanscore = 0;
let computerscore = 0;


function playRound(){
    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();
    console.log(`Computer chose: ${computerSelection}`);
    console.log(`You chose: ${humanSelection}`);
    alert(`Computer chose: ${computerSelection}`);
    alert(`You chose: ${humanSelection}`);

    if (computerSelection === humanSelection) {
        console.log("It's a tie!");
        alert("It's a tie!");
    } else if (
        (computerSelection === "rock" && humanSelection === "scissors") ||
        (computerSelection === "paper" && humanSelection === "rock") ||
        (computerSelection === "scissors" && humanSelection === "paper")
    ) {
        console.log("Computer wins this round!");
        alert("Computer wins this round!");
        computerscore++;
    } else {
        console.log("You win this round!");
        alert("You win this round!");
        humanscore++;
    }
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

game();