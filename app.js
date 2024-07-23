let gameSeq = [];
let userSeq = [];
let started = false;

let btns = ["yellow","red","purple","green"];
let h2 = document.querySelector('h2');
let level = 0;

//key press game start
document.addEventListener("keypress", function(){
    if(started == false){
        started = true;
        console.log("game is started");

        levelUp();
    }
})

//random button flash

function gameFlash(btn){
    btn.classList.add('flash');
    setInterval(function(){
        btn.classList.remove('flash')
    }, 250);
}


function userFlash(btn){
    btn.classList.add('userFlash');
    setInterval(function(){
        btn.classList.remove('userFlash')
    }, 250);
}
function levelUp(){
    userSeq = [];
    level++;

    h2.innerText = `Level ${level}`;

    let randomIdx = Math.floor(Math.random()*3);
    let randomColor = btns[randomIdx];
    let randomBtn = document.querySelector(`.${randomColor}`);

    gameSeq.push(randomColor);
    console.log(gameSeq);
    // console.log(randomIdx);
    // console.log(randomColor);
    // console.log(randomBtn);

    //random button choose
    gameFlash(randomBtn);
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    } else{
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br>

        Press any key to restart the game .`;

        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
        level = 0;
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);
    let userColor = btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll('.btn');
for(btn of allBtns){
    btn.addEventListener("click" , btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
}