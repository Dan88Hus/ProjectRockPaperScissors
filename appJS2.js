// Get all DOM elements
const userChoice = document.getElementById('userChoice');
const result_h2 = document.getElementById('result');
const rock_btn = document.getElementById('rock');
const paper_btn = document.getElementById('paper');
const scissors_btn = document.getElementById('scissors');

// create computer selection function 
function computerPlay () {
const options = ['rock','paper','scissors'];
return options[Math.floor(Math.random()*options.length)];
}

// Player Selection function

function game (playerSelection, computerSelection) {
    computerSelection = computerPlay ();
    document.getElementById("computerChoice").innerHTML= computerSelection;
    document.getElementById("userChoice").innerHTML =  playerSelection;     // userchoice is grabbed at above

switch (playerSelection + computerSelection ) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
        result.textContent = "You Lose!";
        break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
        result.textContent = "Its' a draw!";
        break;
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
        result.textContent = "You Win!";
        break;
}

}
function main () {
    rock_btn.addEventListener("click", function () {
        game("rock");
    });
    paper_btn.addEventListener("click", function() {
        game("paper");
    });
    scissors_btn.addEventListener("click", function (){
        game("scissors");
    });
}

main();
