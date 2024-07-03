function makeBubble() {
    var clutter = ``;
    for (var i = 0; i <= 183; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#bottom-panel").innerHTML = clutter;
}
makeBubble();

var timer = 60;
function setTimer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else {
            document.querySelector("#bottom-panel").innerHTML=`<h1>Game Over</h1><br><h1>Score:${score}</h1>`
            clearInterval(timerint);
        }
    }, 1000)
}
setTimer();

var hitrn;
function hitval(){
    hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent=hitrn;
}
hitval();

var score=0;
function hitscore(){
    score+=10;
    document.querySelector("#scoreval").textContent=score;
}

document.querySelector("#bottom-panel").addEventListener("click",function(dets){
    var clickednum=Number(dets.target.textContent);
    if(hitrn===clickednum){
        hitscore();
        hitval();
        makeBubble();
    }
})
