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
  paragraphResult.innerHTML = string
  resultContainer.appendChild(paragraphResult)
}

function computerSelection() {
  let index = Math.floor(Math.random() * 3);
  return pieces[index];
}

function computerPlay(e) {
  let computer = computerSelection();
  let player = e.target.dataset.piece;
  if (computer === player) {
    
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
  gameInfomation(`<p class="players">You: ${player} | Computer: ${computer} </p>
  <p>You: ${score.player} | Computer: ${score.computer}</p>`);  
}