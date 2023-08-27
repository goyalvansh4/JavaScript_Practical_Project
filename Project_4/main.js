var timer=60;
var score=0;
var hitNum=0;
function makeBubble(){
    var clutter ="";

    for(let i=1;i<=150;i++){
        let rn = Math.floor(Math.random()*10);
        clutter += `<div class="bubble"><h3>${rn}</h3></div>`
    }
    
    document.querySelector("#pbottom").innerHTML = clutter;
}

makeBubble();

function runTimer(){
    var tI = setInterval(function(){
      if (timer > 0){
        timer--;
         document.querySelector("#timerval").textContent=timer;
      }
      else{
        clearInterval(tI);
        document.querySelector("#pbottom").innerHTML=`<h1>Game Over</h1>  <h1>Your Score: ${score}</h1>`;
        document.querySelector("#pbottom").style.flexDirection="column";
        }
    },1000)
}

runTimer();

function getNewHit(){
    hitNum=Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitNum;
}
getNewHit();


function increaseScore(){
    
 score += 10;
 document.querySelector("#scoreval").textContent=score;
}

document.querySelector("#pbottom").addEventListener("click",function(dets){
    var clickedNum = Number(dets.target.textContent);
    if(clickedNum===hitNum){
        increaseScore();
        getNewHit();
        makeBubble();
    }
})

