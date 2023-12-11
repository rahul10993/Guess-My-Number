"use strict";
//console.log(document.querySelector('.message').textContent);
let secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// const displayMessage = function (message) {
//   document.querySelector('.message').textContent = message;
// };

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector(".message").textContent = "🥵 No Number";
    //
    //
    //
    //
  } else if (guess === secretnumber) {
    document.querySelector(".message").textContent = " 🇮🇳 Correct Number!";
    document.querySelector(".number").textContent = secretnumber;
    document.querySelector("body").style.backgroundColor = "#474cb3";
    document.querySelector(".number").style.width = "30rem";
    //
    //
    //

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    //
    //
    //
  } else if (guess !== secretnumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretnumber ? "📈 Too High" : "📉 Too Low";
      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = " 👎 you lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretnumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Guessing it.....";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
