let body = document.querySelector("body");
let deathmenu = document.querySelectorAll(".deathbutton");
let deathnav = Array.from(deathmenu);
let x = 0;
let home = false;
if (home == false) {
  deathnav[x].style.border = "2px solid black";
}

body.addEventListener("keydown", function (e) {
  let key = e.keyCode;
  if (key == 40 && x < 1) {
    deathnav[x].style.border = "0px solid rgb(0, 0, 0)";
    x++;
    deathnav[x].style.border = "2px solid black";
  } else if (key == 38 && x > 0) {
    deathnav[x].style.border = "0px solid rgb(0, 0, 0)";
    x--;
    deathnav[x].style.border = "2px solid black";
  } else if (key == 13) {
    if (x == 1) {
      window.location.href = "/menu/menu.html";
      home = true;
    }
    if (x == 2) {
      /* fonction pour charger */
    }
  }
});
// 38 : haut 40 : bas
