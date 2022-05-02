const txtAnim = document.querySelector("#text");
let body = document.querySelector("body");
let monsterGIF = document.querySelector(".monsterGIF");
let introAudio = new Audio("/assets/Sounds/introMusic.wav");

new Typewriter(txtAnim, {
  deleteSpeed: 0,
})

  .changeDelay(25)

  .pauseFor(2000)
  .typeString("<h3>Bienvenue à toi cher aventurier.</h3> ")
  .pauseFor(1000)
  .deleteChars(40)
  .typeString("<h5>Je m'appelle Charles,</h5>")
  .pauseFor(400)
  .typeString("Escroc et mascotte en chef du village.")
  .pauseFor(900)
  .deleteChars(60)
  .typeString("Comme tout bon aventurier qui se respecte,")
  .pauseFor(400)
  .deleteChars(50)
  .typeString("Tu as été envoyé pour nous sauver.")
  .pauseFor(900)
  .deleteChars(80)
  .typeString("Nous sauver de quoi ?")
  .pauseFor(1400)
  .deleteChars(21)
  .typeString(
    " Trois fois rien, une légère malédiction qui a frappé l'entièreté de l'île, décimé le tiers de ses habitants et ouvert nos portes aux monstres."
  )
  .pauseFor(3000)
  .deleteChars(150)
  .typeString("Mais maintenant que tu es là, tout ira bien!")
  .pauseFor(1000)
  .typeString("...En principe.")
  .pauseFor(400)
  .deleteChars(80)
  .typeString(
    "Nous savons que tout ça est à cause du gros Malabar, le responsable de l'apparition de la malédiction et des démons."
  )
  .pauseFor(1900)
  .deleteChars(120)
  .typeString("Il rôde dans le donjon,")
  .pauseFor(400)
  .typeString("tue-le et mets fin à ce carnage.")
  .pauseFor(1500)
  .typeString("...S'il te plaît.")
  .pauseFor(3000)
  .typeString("...Merci. Bisous.")
  .pauseFor(3000)
  .start();

function introMusic() {
  introAudio.play();
}

introMusic();

setTimeout(function () {
  monsterGIF.innerHTML =
    '<img class="monsterH" src="/assets/monsterHello.gif"></img>';
}, 25500);
setTimeout(function () {
  monsterGIF.innerHTML = "";
}, 27700);

setTimeout(function () {
  window.location.href = "/index.html";
}, 61000);
