const prompt = require("prompt-sync")({ sigint: true }); 

let humanScore = 0;
let compScore = 0;

function rollTheDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function startGame() {
    while (true) {
        let answer = prompt("Would you like to roll a dice? (yes/no): ").toLowerCase();

        if (answer === "yes") {
            let humanRoll = rollTheDice();
            let compRoll = rollTheDice();

            console.log(`You rolled a ${humanRoll}`);
            console.log(`Computer rolled a ${compRoll}`);

            if (humanRoll > compRoll) {
                console.log("You win this round!");
                humanScore += 1;
            } else if (compRoll > humanRoll) {
                console.log("Computer wins this round!");
                compScore += 1;
            } else {
                console.log("It's a tie this round!");
            }

            console.log(`Current Scores -> You: ${humanScore}, Computer: ${compScore}`);
        } else if (answer === "no") {
            console.log("Thanks for playing!");
            console.log(`Final Scores -> You: ${humanScore}, Computer: ${compScore}`);
            break;
        } else {
            console.log("Please type 'yes' or 'no'");
        }
    }
}

startGame();