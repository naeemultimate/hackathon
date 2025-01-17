
const prompt=require("prompt-sync")({sigint:true}); 

function rollTheDice() {
    let result = Math.floor(Math.random()*6) + 1;
    // let playerTwoResult = 0 - can leave this for when we make it work with just a result
    return result
}

function startGame(){
    
    // Include sub functions e.g. prompt, executing random roll etc
    
    while (true) {
        let answer = prompt('Would you like to roll a dice? (yes/no):').toLowerCase();

        if (answer === 'yes') {
            let rollResult = rollTheDice();
            console.log(`You rolled a ${rollResult}`)
        } else if (answer === 'no') {
        console.log("Thanks for playing!");
        break;
        } else {
        console.log("Please type yes or no");
        
        }

    }
   
}
// function winner() {

// }

startGame() // <---- Starts game from here

