const pieces = ["rock", "paper", "scissor"];
const buttonsContainer = document.querySelector(".btnActions");
const playButtons = document.querySelectorAll(".btn");
const resultContainer = document.querySelector(".result");
const paragraphResult = document.createElement("p");
const btnStart = document.querySelector(".btnStart");
const gamePlay = document.querySelector(".gamePlay");

paragraphResult.classList.add("resultText");
const score = {
  player: 0,
  computer: 0,
  tie: 0,
};
const color = {
  player: "",
  computer: "",
};
playButtons.forEach((btn) => btn.addEventListener("click", computerPlay));
btnStart.addEventListener("click", startGame);

function gameInfomation(object) {
  let string = `<div class='gridResult'>
                <p class="score">
                  <i class="fa-solid fa-user"></i> 
                  ${getIcon(object.player,color.player)}   ${getIcon(object.computer,color.computer)}
                  <i class="fa-solid fa-robot"></i>
                </p>
                <p class="players">
                  Score </br></br>
                  ${score.player} - ${score.computer}
                </p>
              </div>`;
  paragraphResult.innerHTML = string;
  resultContainer.appendChild(paragraphResult);
}

function computerSelection() {
  let index = Math.floor(Math.random() * 3);
  return pieces[index];
}

function computerPlay(e) {
  let choices = {
    computer: computerSelection(),
    player: e.target.dataset.piece,
  };
  if (choices.computer === choices.player) {
    color.player = "yellow";
    color.computer = "yellow";
  } else if (choices.computer == "rock") {
    if (choices.player == "paper") {
      score.player++;
      setColor(true);
    } else {
      score.computer++;
      setColor(false);
    }
  } else if (choices.computer == "paper") {
    if (choices.player == "scissor") {
      score.player++;
      setColor(true);
    } else {
      score.computer++;
      setColor(false);
    }
  } else if (choices.computer == "scissor") {
    if (choices.player == "rock") {
      score.player++;
      setColor(true);
    } else {
      score.computer++;
      setColor(false);
    }
  }
  if (score.player == 5 || score.computer == 5) {
    let winner = score.player == 5 ? "You Win!" : "Oh S**t You Loose!";
    resultContainer.innerHTML = "";
    resultContainer.innerHTML = `<article  class="resultflex">
      <h2>${winner}</h2>
      <button class="reset">Restart</button>
    <article>`;
    const btnReset = document.querySelector(".reset");
    btnReset.addEventListener("click", reset);
    gamePlay.classList.add("hidden");
  }

  gameInfomation(choices);
}

function startGame() {
  btnStart.classList.add("hidden");
  gamePlay.classList.remove("hidden");
}

function reset() {
  score.player = 0;
  score.computer = 0;
  score.tie = 0;
  resultContainer.innerHTML = "";
  gamePlay.classList.remove("hidden");
}

function setColor(state) {
  if (state) {
    color.player = "green";
    color.computer = "red";
  } else {
    color.player = "red";
    color.computer = "green";
  }
}

function getIcon(choice,color) {
  switch (choice) {
    case "rock":
      return `<i class="fa-solid fa-hand-back-fist btn" style="color:${color}"></i>`;
      break;
    case "paper":
      return `<i class="fa-solid fa-hand btn" style="color:${color}"></i>`;
      break;
    case "scissor":
      return `<i class="fa-solid fa-hand-scissors btn" style="color:${color}"></i>`;
      break;
    default:
      break;
  }
}
