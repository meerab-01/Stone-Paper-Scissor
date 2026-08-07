<<<<<<< HEAD
let userScore = 0;
let compScore = 0;

function playGame(userChoice) {

    let choices = ['stone', 'paper', 'scissors'];
    let computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = "";

    if (userChoice === computerChoice) {
        result = "It's a Draw ";
    }
    else if (
        (userChoice === "stone" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "stone") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You Win ";
        userScore++;
    }
    else {
        result = "You Lose";
        compScore++;
    }

    document.getElementById("result").innerText =
        `You: ${userChoice} | Computer: ${computerChoice} → ${result}`;

    document.getElementById("user-score").innerText = userScore;
    document.getElementById("comp-score").innerText = compScore;
=======
let userScore = 0;
let compScore = 0;

function playGame(userChoice) {

    let choices = ['stone', 'paper', 'scissors'];
    let computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = "";

    if (userChoice === computerChoice) {
        result = "It's a Draw ";
    }
    else if (
        (userChoice === "stone" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "stone") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You Win ";
        userScore++;
    }
    else {
        result = "You Lose";
        compScore++;
    }

    document.getElementById("result").innerText =
        `You: ${userChoice} | Computer: ${computerChoice} → ${result}`;

    document.getElementById("user-score").innerText = userScore;
    document.getElementById("comp-score").innerText = compScore;
>>>>>>> 37091366b1f94ad6bc3dfa5cf502fde6749ccfde
}