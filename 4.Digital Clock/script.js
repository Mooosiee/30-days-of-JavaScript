let hour = document.querySelector(".hr");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");

function time() {
  let current = new Date();
  let hours = current.getHours()%12;
  let mins = current.getMinutes();
  let secs = current.getSeconds();
  if (secs < 10 ) {
    sec.innerText = `0${secs}`;
  }
  else {
    sec.innerText = secs;
  } 
  if(hours < 10){
    hour.innerText = `0${hours}`;
  }
  else{
    hour.innerText = hours;
  }
  if(mins  < 10 ){
    min.innerText = `0${mins}`;
  }
  else{
    min.innerText = mins;
  }
  
}
setInterval(time, 1000);
