function rockPaperScissors(player1, player2) {
    if (player1 === player2) {
        return "draw";
    }
    else if (player1 == "rock") {
        if (player2 == "paper") {
            return "player 2";
        }
        else if (player2 == "scissors") {
            return "player 1";
        }
    }
    else if (player1 == "paper") {
        if (player2 == "rock") {
            return "player 1";
        }
        else if (player2 == "scissors") {
            return "player 2";
        }
    }
    else if (player1 == "scissors") {
        if (player2 == "rock") {
            return "player 2";
        }
        else if (player2 == "paper") {
            return "player 1";
        }
    }
}

console.log(rockPaperScissors('rock', 'scissors'));
console.log(rockPaperScissors('rock', 'paper'));
console.log(rockPaperScissors('paper', 'paper'));
console.log(rockPaperScissors('rock', 'rock'));
console.log(rockPaperScissors('scissors', 'scissors'));
console.log(rockPaperScissors('scissors', 'paper'));
console.log(rockPaperScissors('scissors', 'rock'));
console.log(rockPaperScissors('paper', 'scissors'));
console.log(rockPaperScissors('paper', 'rock'));