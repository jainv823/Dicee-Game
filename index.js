var randonNumber1 = Math.floor(Math.random() * 6) + 1;
document
  .querySelector("img.img1")
  .setAttribute("src", "./images/dice" + randonNumber1 + ".png");
var randonNumber2 = Math.floor(Math.random() * 6) + 1;
document
  .querySelector("img.img2")
  .setAttribute("src", "./images/dice" + randonNumber2 + ".png");
if (randonNumber1 > randonNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
} else if (randonNumber1 < randonNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player 2 Wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
