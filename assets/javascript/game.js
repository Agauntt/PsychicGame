

function Genie() {
var alphabet = "abcedfghijklmnopqrstuvwxyz";
var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
var guess = document.getElementById("guesses");
console.log(randomLetter);
console.log(guess);

if (randomLetter === guess) {
    console.log("you Win!");  
  } else {
    console.log("Not that one!")  
  }
};


/*window.onkeypress = function (evt) {
    evt = evt || window.event;
    var keyCode = evt.keyCode || evt.which;
    var guess = String.fromCharCode(keyCode);
    console.log(guess);
}*/


   

