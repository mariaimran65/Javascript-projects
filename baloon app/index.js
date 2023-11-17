// my own code

function startGame() {
  let score = 0;
  let life = 5;
  splashScreen.classList.add("hidden");
  playScreen.classList.remove("hidden");

  let main = setInterval(function () {
    let baloon = document.createElement("img");
    baloon.src = "car.jpg";
    baloon.className = "baloon";
    baloon.style.left = Math.random() * gameApp.offsetWidth + "px";
    playScreen.appendChild(baloon);

    baloon.onclick = function () {
      clearInterval(key);
      score += 5;
      scoreBox.innerText = score;
      baloon.remove();
    };
    let key = setInterval(function () {
      baloon.style.bottom = parseFloat(baloon.style.bottom || 0) + 2 + "px";
      if (baloon.offsetTop == -baloon.offsetHeight) {
        clearInterval(key);
        baloon.remove();
        life -= 1;
        lifeBox.innerText = life;
        if (life == 0) {
          playScreen.classList.add("hidden");
          gameOverScreen.classList.remove("hidden");
          clearInterval(main);
          gameApp.style.backgroundColor = "red";
        }
      }
    }, 20);
  }, 600);
}
