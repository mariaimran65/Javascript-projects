"use Strict";
let rNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let Highestscore = 0;
let playagain = document.querySelector(".again");
playagain.onclick = function () {
  rNumber = Math.trunc(Math.random() * 20) + 1;
  document.body.style.backgroundColor = " #222";
  document.querySelector(".input").value = "";
};
document.querySelector(".check").addEventListener("click", function () {
  let input = Number(document.querySelector(".input").value);
  // document.querySelector(".number").textContent = rNumber;
  if (!input) {
    document.querySelector(".result").textContent = "Please Write a Number";
  } else if (input < rNumber) {
    document.querySelector(".result").textContent = "very Low";
    score--;
    document.querySelector(".score").textContent = "Score :" + score;
    document.body.style.backgroundColor = "red";
    document.querySelector(".input").value = "";
    if (score == 0) {
      document.querySelector(".result").textContent = "you lost";
    }
  } else if (input > rNumber) {
    document.querySelector(".result").textContent = "very high";
    score--;
    document.querySelector(".score").textContent = "Score :" + score;
    document.body.style.backgroundColor = "red";
    document.querySelector(".input").value = "";
    if (score == 0) {
      document.querySelector(".result").textContent = "you lost";
    }
  } else if (input == rNumber) {
    document.querySelector(".result").textContent = "Correct Number";
    document.body.style.backgroundColor = "#60b347";

    if (score > Highestscore) {
      Highestscore = score;
      document.querySelector(".highscore").innerText =
        "HighScore : " + Highestscore;
    }
  }
});
