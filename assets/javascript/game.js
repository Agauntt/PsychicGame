function Genie() {
var alphabet = "abcedfghijklmnopqrstuvwxyz";
var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(randomLetter);
};


window.onkeypress = function (evt) {
    evt = evt || window.event;
    var keyCode = evt.keyCode || evt.which;
    var guess = String.fromCharCode(keyCode);
    console.log(guess);
}
   