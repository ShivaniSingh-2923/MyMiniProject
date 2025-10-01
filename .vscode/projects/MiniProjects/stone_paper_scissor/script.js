let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#message");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#computer-score");

const genCompChoice=()=>{
    let options=["rock","paper","scissor"];
    const randomIndex=Math.floor(Math.random()*3); //this will print any random number btw 0 & 1
    //if multiply by 3, will give value between 0-2;
    //for(0-9),multiply by 10  //jisse multiply krenge usse ek km value tk we can generate.
    return options[randomIndex];

}

const drawGame=()=>{
    console.log("game was draw");
    msg.innerText="IT'S DRAW,PLAY AGAIN";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win");
        msg.innerText=`YOU WIN, your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you lose");
        msg.innerText=`computer WIN, computer's ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
    console.log("user choice=",userChoice);
    const compChoice=genCompChoice();
    console.log("comp choice=",compChoice);

    if(userChoice==compChoice){
        //draw
        drawGame();
    }else{
        userWin=true;
        if(userChoice==="rock"){
            //scissor,paper
            userWin=compChoice ==="paper"? false :true;
        }else if(userChoice==="paper"){
            //rock,scissor
            userWin=compChoice==="scissor"? false: true;
        }else{
            //comp=paper,rock
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});