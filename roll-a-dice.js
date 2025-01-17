

let prompt = prompt('Would you like to play roll a dice?')

//I have tested this function on my end. it's working 
function rollTheDice() {
    let result = Math.floor(Math.random()*6) + 1;
    // let playerTwoResult = 0 - can leave this for when we make it work with just a result
    return result
}

function startGame(){
    
    console.log(prompt);
    // Include sub functions e.g. prompt, executing random roll etc
    const prompt=require("prompt-sync")({sigint:true}); 

    if (//answer === 'roll') {
        rollTheDice()
    } else {
        
    }
    
    

}


function winner() {

}


startGame() // <---- Starts game from here












