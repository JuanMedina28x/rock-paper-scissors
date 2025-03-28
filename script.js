'use strict'

const rButton = document.querySelector('#rock')
const pButton = document.querySelector('#paper')
const sButton = document.querySelector('#scissors')
const results = document.querySelector('#results-container')
const curScore = document.querySelector('#current-score')


let humanScore = 0;
let computerScore = 0;
let round = 0;


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
/*let getHumanChoice = function(){
    let choicePrompt = prompt("What will you pick?").toLowerCase();
    return choicePrompt
}
*/

//Function playRound, receiving humanChoice and computerChoice as parameters.
    function playRound(humanChoice, computerChoice){

    switch(true) {

    case (round < 5):
    if(humanChoice === 'rock' && computerChoice === 'paper'){
        computerScore++;
        round++;
       results.textContent = "You lose! Paper beats rock"
       curScore.textContent= 'Human: '+humanScore+' Computer: '+computerScore
    }
    else if(humanChoice === 'rock' && computerChoice === 'scissors'){
        humanScore++;
        round++;
        results.textContent = "You win! Rock beats scissors"
        curScore.textContent= 'Human: '+humanScore+' Computer: '+computerScore
    }

    else if(humanChoice === 'paper' && computerChoice === 'rock'){
        humanScore++;
        round++;
        results.textContent="You win! Paper beats rock"
        curScore.textContent= 'Human: '+humanScore+' Computer: '+computerScore
        
    }
    else if(humanChoice === 'paper' && computerChoice === 'scissors'){
        computerScore++;
        round++;
        results.textContent = "You lose! Scissors beat paper"
        curScore.textContent= 'Human: '+humanScore+' Computer: '+computerScore
    }
    else if(humanChoice === 'scissors' && computerChoice === 'rock'){
        computerScore++;
        round++;
        results.textContent = 'You lose! Rock beats scissors'
        curScore.textContent= 'Human: '+humanScore+' Computer: '+computerScore
        
    }
    else if(humanChoice === 'scissors' && computerChoice === 'paper'){
        humanScore++;
        round++;
        results.textContent='You win! Scissors beat paper'
        curScore.textContent= 'Human: '+humanScore+' Computer: '+computerScore
        
    }
    else {
        results.textContent="Tie!"
        curScore.textContent= 'Human: '+humanScore+' Computer: '+computerScore
        
    }
    break;

    default:
    let winner = humanScore>computerScore ? "You are the winner!" : "The computer wins!"
    results.textContent= winner;
    console.log(winner)
    break;
    }
    }



rButton.addEventListener("click", function(){
playRound("rock", getComputerChoice())
})
    
pButton.addEventListener("click", function(){
playRound("paper", getComputerChoice())
})
    
sButton.addEventListener("click", function(){
playRound("scissors", getComputerChoice())
})



/* //REMOVING THE LOGIC FOR THE 5 ROUNDS
    for(let i=1; i<6; i++){
    console.log("Round: "+i)
    playRound(getHumanChoice(), getComputerChoice());
    }
*/
/*
    if(humanScore > computerScore){
        console.log("You're the winner!")
    }
    else if(humanScore < computerScore){
        console.log("You lose!")
    }
    else{
        console.log("We have a draw!")
    }

    */

