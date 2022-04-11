const pieces = ["rock", "paper", "scissor"];

function computerSelection() {
  let index = Math.floor(Math.random() * 3);
  return pieces[index];
}

function playerSelection() {
  let input =
    prompt(`Select your weapon!
    Rock Paper Scissor`) || "Cancel";
  console.log(input);
  let validOption = pieces.find((item) => item === input.toLowerCase());
  if (!validOption) {
    console.log("This is not an option.");
    return false;
  } else {
    return input;
  }
}

function computerPlay(playerSelection, computerSelection) {
  let computer = computerSelection;
  let player = playerSelection;
  if (computer === player) {
    console.log("It's a tie!!!");
    return 't';
  } else if (computer == "rock") {
    if (player == "paper") {
      console.log("Player Win!!! Paper beats Rock!");
      return 'p'
    } else {
      console.log("Oh! You Lose!!! Rock beats Scissor!");
      return 'c'
    }
  } else if (computer == "paper") {
    if (player == "scissor") {
      console.log("Player Win!!! Scissor beats Paper!");
      return 'p'
    } else {
      console.log("Oh! You Lose!!! Peper beats Rock!");
      return 'c'
    }
  } else if (computer == "scissor") {
    if (player == "rock") {
      console.log("Player Win!!! Rock beats Scissor!");
      return 'p'
    } else {
      console.log("Oh! You Lose!!! Scissor beats Paper!");
      return 'c'
    }
  }
  console.log(`${computer} ${player}`);
}

function gamePlay(){
  let score = {
   player: 0,
   computer: 0,
   tie: 0
  }
  for (let i = 0; i < 5; i++) {
      let res = computerPlay(playerSelection(), computerSelection());
      if (res == 'p') {
        score.player++;
      } else if(res == 'c'){
        score.computer++;
      }else{
        score.tie++;
      }
  }
  return score;
}

console.log(gamePlay())