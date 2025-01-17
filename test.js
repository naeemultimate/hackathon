
const prompt=require("prompt-sync")({sigint:true}); 

function rollTheDice() {
    let result = Math.floor(Math.random()*6) + 1;
    // let playerTwoResult = 0 - can leave this for when we make it work with just a result
    return result
}

function startGame(){
    let player1Score = 0
    let player2Score = 0
    let round = 1

    while (true) {
        let answer = prompt('Would you like to roll a dice? (yes/no):').toLowerCase();

        if (answer === 'yes') { 
            let  humanResult= rollTheDice();
            let  compResult= rollTheDice();
        
            console.log(`You rolled a ${humanResult}`)
            console.log(`Computer rolled a ${compResult}`)

            if (humanResult > compResult) {
                console.log(`Human wins with a score of ${humanResult} vs ${compResult}!`);
            } else if (compResult > humanResult) {
                console.log(`Computer wins with a score of ${compResult} vs ${humanResult}!`);
            } else if (compResult === humanResult) {
                console.log(`It's a tie! Both players scored ${humanResult}.`);
            } else {
                console.log("Please type yes or no");
        } 
        

    } else if (answer === 'no'){ 
        // Game ends
        console.log("Thanks for playing!");
        break;
    } else if (answer !== 'yes' && answer !== 'no'){
        console.log("Please enter a valid input!"); //invalid input message here
    }
        round++
    }
}


startGame() // <---- Starts game from here
