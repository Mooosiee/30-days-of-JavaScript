let btn = document.querySelectorAll(".box");

function keyFlash(KeyCode) {
  console.log(KeyCode);
  let keycode = document.querySelector(`.box[data-key="${KeyCode}"]`);
  console.log(keycode);
  keycode.classList.add("flash");
  setTimeout(() => {
    keycode.classList.remove("flash");
  }, 200);
}

function sound(event) {
  console.log(event);

  switch (event.code) {
    case "KeyA":
      console.log("a is clicked");
      let s1 = new Audio("sounds/clap.wav");
      s1.play();
      console.log(typeof event.key);
      keyFlash(event.keyCode);
      break;
    case "KeyS":
      console.log("s is clicked");
      let s2 = new Audio("sounds/hihat.wav");
      s2.play();
      keyFlash(event.keyCode);
      break;
    case "KeyD":
      console.log("d is clicked");
      let s3 = new Audio("sounds/kick.wav");
      s3.play();
      keyFlash(event.keyCode);
      break;
    case "KeyF":
      console.log("f is clicked");
      let s4 = new Audio("sounds/openhat.wav");
      s4.play();
      keyFlash(event.keyCode);
      break;
    case "KeyG":
      console.log("g is clicked");
      let s5 = new Audio("sounds/boom.wav");
      s5.play();
      keyFlash(event.keyCode);
      break;
    case "KeyH":
      console.log("h is clicked");
      let s6 = new Audio("sounds/ride.wav");
      s6.play();
      keyFlash(event.keyCode);
      break;
    case "KeyJ":
      console.log("j is clicked");
      let s7 = new Audio("sounds/snare.wav");
      s7.play();
      keyFlash(event.keyCode);
      break;
    case "KeyK":
      console.log("k is clicked");
      let s8 = new Audio("sounds/tom.wav");
      s8.play();
      keyFlash(event.keyCode);
      break;
    case "KeyL":
      console.log("l is clicked");
      let s9 = new Audio("sounds/tink.wav");
      s9.play();
      keyFlash(event.keyCode);
      break;
    default:
      break;
  }
}
window.addEventListener("keydown", sound);
