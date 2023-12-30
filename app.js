const choices = document.querySelectorAll(".choice");

const arrOfChoices = ["rock", "paper", "scissors"];

let myScore = document.getElementById("myScore");
myScore.innerText = 0;
let compScore = document.getElementById("compScore");
compScore.innerText = 0;
let Mscore = 0;
let Cscore = 0;

let msgBox = document.querySelector(".msg");
let msg = document.querySelector(".msg").innerText;

let win = true;

choices.forEach(choice => {
        choice.addEventListener("click" , () => {
                let myChoice = choice.getAttribute("id");
                console.log(myChoice);

                let comp = compChoice();
                console.log(comp);

                winner(myChoice, comp);
        })
});

                /* =============
                 Computer's choice
                   ============= */

let compChoice = () => {
        let idx = Math.floor(Math.random()*3);
        // console.log(idx);
        return arrOfChoices[idx];
};

                /* =============
                 Winner Finder
                   ============= */

function winner(myChoice, comp) {
        if(myChoice === comp){
                msgBox.innerText = "Game Was Draw! Play your move again.";
                // console.log(msg);    
        } else {
                if(myChoice === "rock"){
                        win = comp === "paper" ? false : true;
                } else if(myChoice === "paper"){
                        win = comp === "scissors" ? false : true;
                } else {
                        win = comp === "rock" ? false : true;
                }

                if(win){
                        msgBox.innerText = `You Won! Your ${myChoice} beats ${comp}`;

                        Mscore++;
                        myScore.innerText = Mscore;
                } else {
                        msgBox.innerText = `You loos! ${comp} beats your ${myChoice} `;
                
                        Cscore++;
                        compScore.innerText = Cscore;
                }
        }
}
