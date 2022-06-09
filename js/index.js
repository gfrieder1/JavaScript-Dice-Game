// generate dice nums
var diceNum1 = Math.floor(Math.random() * (6 - 1 + 1) + 1); // (max - min + 1) + min = inclusive rand generation
var diceNum2 = Math.floor(Math.random() * (6 - 1 + 1) + 1);

// create img names
var diceName1 = "images/dice" + diceNum1 + ".png";
var diceName2 = "images/dice" + diceNum2 + ".png";

// change images to reflect dice names
document.querySelector(".img1").setAttribute("src", diceName1);
document.querySelector(".img2").setAttribute("src", diceName2);

// change title to reflect winner (or draw)
if (diceNum1 > diceNum2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if (diceNum1 < diceNum2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "🚩 Draw 🚩";
}
