let timer = document.getElementById("timer");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

let seconds = 0;
let interval =null;
start.addEventListener('click',strt);
stop.addEventListener('click',stp);
reset.addEventListener('click',rst);



function stopwatch(){
    seconds++;
    let hrs = Math.floor(seconds / 3600);
    let min = Math.floor((seconds - (hrs * 3600))/60);
    let sec = seconds % 60;
    

   if(hrs < 10){
    hrs = `0${hrs}`;
   }
   if(min < 10){
    min = `0${min}`;
   }
   if(sec < 10){
    sec = `0${sec}`;
   }


    timer.innerHTML = `${hrs}:${min}:${sec}`;
}
function strt(){
    if(interval){
        return
    }
    interval = setInterval(stopwatch,1000);

}
function stp(){
    clearInterval(interval);
    interval = null;
}
function rst(){
    stp();
    seconds=0;
    timer.innerHTML="00:00:00";
   
    
    
}
