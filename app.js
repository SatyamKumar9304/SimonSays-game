let gameSeq = [];
let userSeq = [];
let btns =["yellow","red","purple","green"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game has started.");
        started = true;
        levelUp();
    }
})
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    },250);
}
function levelUp(){
    userSeq = [];   
    level++;
    h2.innerText=`Level ${level}`;
    let randIndx = Math.floor(Math.random()*3); 
    let randColor = btns[randIndx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
}

function checkAns(inx){
    // console.log("level:",level);
    let indx = level-1;
    if(userSeq[indx]===gameSeq[indx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
        // console.log("same level");
    }else{
        h2.innerHTML = `Game over! Your score was <b>${level}</b><br>Press any key to start!`;
        reset();
    }
}
function btnpress(){
    // console.log(this);
    let btn = this;
    // console.log("btn was pressed");
    btnFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns();
}
let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}


function reset(){
    started = false;
    gameSeq=[];
    userSeq = [];
    level  = 0;
}