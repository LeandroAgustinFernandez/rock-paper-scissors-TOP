const pieces = ['rock','paper','scissors'];

function computerPlay(){
    let index = Math.floor(Math.random()*3);
    return pieces[index];
}

// console.log(computerPlay());