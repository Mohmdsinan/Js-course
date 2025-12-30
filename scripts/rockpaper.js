let randomNumber;

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r'){
    play('rock');
  }else if (event.key === 'p'){
    play ('paper');
  }else if (event.key === 's'){
    play ('scissors');
  }
})

let isAutoPlaying = false;
let intervalId;

function autoPlay(){
  if(!isAutoPlaying){
    intervalId = setInterval(function(){
    let userinput = compinput();
    play(userinput);
    console.log(intervalId);
  },1000)
    isAutoPlaying = true;
  } else{
    clearInterval(intervalId);
    isAutoPlaying = false
  }
  
    const autoPlayBtn = document.querySelector(".js-auto-play");
    
    if(autoPlayBtn.innerHTML === 'Auto Play'){
      autoPlayBtn.innerHTML = 'Stop';
    } else{
      autoPlayBtn.innerHTML = 'Auto Play'
    }

}

function compinput() {
  let computerinput = '';
  if (randomNumber < (1 / 3) && randomNumber >= 0) {
    computerinput = 'rock';
  } else if (randomNumber < (2 / 3) && randomNumber >= (1 / 3)) {
    computerinput = 'paper';
  } else {
    computerinput = 'scissors';
  }

  return computerinput;
}



let score = JSON.parse(localStorage.getItem('score')) || {
  win: 0,
  lose: 0,
  draw: 0
};
updateScore();
let result = '';


function play(userinput) {
  randomNumber = Math.random();

  let computerMove = compinput();

  if (userinput === 'rock' && computerMove === 'paper') {
    result = 'You Lose';
  }
  else if (userinput === 'rock' && computerMove === 'scissors') {
    result = 'You Win';
  } else if (userinput === 'rock' && computerMove === 'rock') {
    result = 'Tie';
  }

  if (userinput === 'paper' && computerMove === 'paper') {
    result = 'Tie';
  }
  else if (userinput === 'paper' && computerMove === 'scissors') {
    result = 'You Lose';
  } else if (userinput === 'paper' && computerMove === 'rock') {
    result = 'You Win';
  }

  if (userinput === 'scissors' && computerMove === 'paper') {
    result = 'You Win';
  }
  else if (userinput === 'scissors' && computerMove === 'scissors') {
    result = 'Tie';
  } else if (userinput === 'scissors' && computerMove === 'rock') {
    result = 'You Lose';
  }

  if (result === 'You Win') {
    score.win++;
  } else if (result === 'You Lose') {
    score.lose++;
  } else if (result === 'Tie') {
    score.draw++;
  }

  localStorage.setItem('score', JSON.stringify(score));
  updateScore();
  document.querySelector('.js-result').innerHTML = result;
  document.querySelector('.js-moves').innerHTML = `
            You
            <img src="pictures/${userinput}-emoji.png" class="move-icon">
            <img src="pictures/${computerMove}-emoji.png" class="move-icon">
            Computer
            `;



}

function reset() {
  score = {
    win: 0,
    lose: 0,
    draw: 0
  };
  updateScore();

}

function updateScore() {
  document.querySelector('.js-scores').innerHTML = `
            Wins : ${score.win}, Losses : ${score.lose}, Ties : ${score.draw}
            `;
}
