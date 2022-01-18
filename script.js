let computerScore = 0;
let playerScore = 0;

let playername = document.querySelector("playername");
let playerNameUpdate = document.getElementById("player").addEventListener("click", myFunction);

console.log(playername)
function myFunction(){
    document.getElementById("playername").innerHTML = playername;
}
//Add element

// function addElement(name){
//     const element = document.createElement(`${name}`);
//     document.body.append(element);
// }


//Add player name to DOM

// function addPlayerNameToDOM(pName){
//     const nameToDOM = addElement(h2);
//     // const div = document.querySelector("div");
//     nameToDOM.innerText(`${pName}`);
// }
// addPlayerNameToDOM(playername);



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

const rock = document.getElementById("rock").addEventListener("click", myFunction);
const scissor = document.getElementById("scissor").addEventListener("click", myFunction);
const paper = document.getElementById("paper").addEventListener("click", myFunction);