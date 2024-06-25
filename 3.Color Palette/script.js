let btn = document.querySelector(".item");
let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");
let box4 = document.querySelector(".box4");

function r(){
    return Math.floor(Math.random() * 256);
}

btn.addEventListener('click',() => {
  box1.style.backgroundColor = `rgb(${r()},${r()},${r()})`;
  box2.style.backgroundColor = `rgb(${r()},${r()},${r()})`;
  box3.style.backgroundColor = `rgb(${r()},${r()},${r()})`;
  box4.style.backgroundColor = `rgb(${r()},${r()},${r()})`;
})