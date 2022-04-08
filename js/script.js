const pieces = ['rock','paper','scissors'];

function computerSelection(){
    let index = Math.floor(Math.random()*3);
    return pieces[index];
}

function playerSelection(){
    let index = prompt(`Select a number:
    1- rock 2- paper 3- scissors`);
    if (Number(index) > 3 || Number(index) == 'NaN') {
        console.log('This is not an option.');
        return false;
    }else{
        return pieces[index-1];
    }
}

// console.log(playerSelection());
// console.log(computerPlay());