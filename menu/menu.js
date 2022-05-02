let body = document.querySelector("body");
let menu = document.querySelectorAll(".button");
let nav = Array.from(menu);
let i = 0;
let game = false;
let audioEnter = new Audio("/assets/Sounds/boutton_enter.wav");
let audioHover = new Audio("/assets/Sounds/boutton_hover.wav");

function playAudioEnter() {
  audioEnter.play();
}
function playAudioHover() {
  audioHover.play();
}

if (game == false) {
  nav[i].style.boxShadow = "10px 5px 5px red";
  nav[i].style.backgroundColor = "black";
  nav[i].style.border = "1px dashed red";
}

body.addEventListener("keydown", function (e) {
  playAudioHover();
  let key = e.keyCode;
  if (key == 40 && i < 2) {
    nav[i].style.boxShadow = "none";
    nav[i].style.border = "none";
    nav[i].style.backgroundColor = "rgb(0,0,0,0)";

    i++;
    nav[i].style.border = "1px dashed red";
    nav[i].style.boxShadow = "5px 5px 5px red";
    nav[i].style.backgroundColor = "black";
  } else if (key == 38 && i > 0) {
    nav[i].style.boxShadow = "none";
    nav[i].style.border = "none";
    nav[i].style.backgroundColor = "rgb(0,0,0,0)";

    i--;
    nav[i].style.border = "1px dashed red";
    nav[i].style.boxShadow = "5px 5px 5px red";
    nav[i].style.backgroundColor = "black";
  } else if (key == 13) {
    // if (i == 0) -> charger
    playAudioEnter();
    if (i == 0) {
      window.location.href = "/intro/Intro.html";
      game = true;
    }
    if (i == 2) {
      window.close();
    }
  }
});
// 38 : haut 40 : bas
