const pieces = ["rock", "paper", "scissor"];
const buttonsContainer = document.querySelector('.btnActions');
const playButtons = document.querySelectorAll('.btn')
const resultContainer = document.querySelector('.result')
const paragraphResult = document.createElement('p');
paragraphResult.classList.add('resultText')
const score = {
  player: 0,
  computer: 0,
  tie: 0
 }
playButtons.forEach(btn => btn.addEventListener('click',computerPlay))

function gameInfomation(string) {
  paragraphResult.textContent = string
  resultContainer.appendChild(paragraphResult)
}

function computerSelection() {
  let index = Math.floor(Math.random() * 3);
  return pieces[index];
}

// function playerSelection(e) {
//   let input = e.target.dataset.piece
//   let validOption = pieces.find((item) => item === input.toLowerCase());
//   if (!validOption) {
//     console.log("This is not an option.");
//     return false;
//   } else {
//     return input;
//   }
// }

function computerPlay(e) {
  let computer = computerSelection();
  let player = e.target.dataset.piece;
  console.log({computer,player});
  if (computer === player) {
    gameInfomation("It's a tie!!!");
  } else if (computer == "rock") {
    if (player == "paper") {
      score.player++
    } else {
      score.computer++
    }
  } else if (computer == "paper") {
    if (player == "scissor") {
      score.player++
    } else {
      score.computer++
    }
  } else if (computer == "scissor") {
    if (player == "rock") {
      score.player++
    } else {
      score.computer++
    }
  }
  if (score.player == 5 || score.computer == 5) {
    let winner = (score.player == 5) ? 'You Win!' : 'Oh S**t You Loose!'
    buttonsContainer.innerHTML = `<h2>${winner}<h2>`;
  }
  gameInfomation(`You:${score.player} | Computer:${score.computer}`);  
}