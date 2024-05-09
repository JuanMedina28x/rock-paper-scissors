'use strict'

let humanScore = 0;
let computerScore = 0;


//It returns rock, paper or scissors from the computer.
let getComputerChoice = function(){
    let randomChoice = Math.floor(Math.random() * 3) + 1;

    if(randomChoice === 1){
        return "rock"
    }
    else if(randomChoice === 2){
        return "paper"
    }
    else{
        return "scissors"
    }
}

//It returns rock, paper or scissors from the player.
let getHumanChoice = function(){

    let choicePrompt = prompt("What will you pick?").toLowerCase();
    return choicePrompt
}



let playGame = function(){

    let humanScore = 0;
    let computerScore = 0;
   

//Function playRound, receiving humanChoice and computerChoice as parameters.
    function playRound(humanChoice, computerChoice){
    if(humanChoice === 'rock' && computerChoice === 'paper'){
        computerScore++;
        console.log("You lose! Paper beats rock.")
        console.log('Human: '+humanScore+' Computer: '+computerScore)
    }
    else if(humanChoice === 'rock' && computerChoice === 'scissors'){
        humanScore++;
        console.log("You win! Rock beats scissors.")
        console.log('Human: '+humanScore+' Computer: '+computerScore)
    }

    else if(humanChoice === 'paper' && computerChoice === 'rock'){
        console.log("You win! Paper beats rock. ")
        humanScore++;
        console.log('Human: '+humanScore+' Computer: '+computerScore)
    }
    else if(humanChoice === 'paper' && computerChoice === 'scissors'){
        computerScore++;
        console.log("You lose! Scissors beat paper.")
        console.log('Human: '+humanScore+' Computer: '+computerScore)
    }
    else if(humanChoice === 'scissors' && computerChoice === 'rock'){
        computerScore++;
        console.log('You lose! Rock beats scissors')
        console.log('Human: '+humanScore+' Computer: '+computerScore)
    }
    else if(humanChoice === 'scissors' && computerChoice === 'paper'){
        humanScore++;
        console.log('You win! Scissors beat paper.')
        console.log('Human: '+humanScore+' Computer: '+computerScore)
    }
    else{
        console.log("Tie!")
        console.log('Human: '+humanScore+' Computer: '+computerScore)
    }   
}

    for(let i=1; i<6; i++){
    console.log("Round: "+i)
    playRound(getHumanChoice(), getComputerChoice());
    }


    if(humanScore > computerScore){
        console.log("You're the winner!")
    }
    else if(humanScore < computerScore){
        console.log("You lose!")
    }
    else{
        console.log("We have a draw!")
    }
}


playGame();

