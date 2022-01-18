let computerScore = 0;
let playerScore = 0;


//Update player name

function updateName(){
    const button = document.querySelector("button");
    const input = document.querySelector("input");
    const h2 = document.querySelector("h2");
    button.addEventListener("click", function(event){
        console.log(event);
        h2.innerText = input.value;
        
    })
    
}
updateName();

//Computations for computer

function calcCompPick(){
    let compScore = 0;
    let roll = Math.random();
    if(roll>=0 && roll < 0.33){
        compScore = 1;
    }else if(roll>=0.33 && roll <0.66){
        compScore = 2;
    }else {
        compScore = 3;
    }
    return compScore;
}

//Player choice 

function playerChoice(){
    const picRock = document.querySelector("rock");
    const picScissor = document.querySelector("scissor");
    const picPaper = document.querySelector("paper");
    
    let pScore = 0;
    picRock.addEventListener("click", function(event){
        console.log(event);
        pScore = 1;
    })
    picScissor.addEventListener("click", function(event){
        console.log(event);
        pScore = 2;
    })
    picPaper.addEventListener("click", function(event){
        console.log(event);
        pScore = 3;
    })
    return pScore;
}
playerChoice();

//Compare computer and player

function compareScore(){
    while(playerScore<3 && computerScore<3){ 
    if(playerChoice() > calcCompPick()){
        playerScore++;
    }else{
        computerScore++;
    }
    }
    if(playerScore = 3){
        alert("Player won!");
    }else if(computerScore = 3){
        alert("Computer won!")
    }

}
compareScore();