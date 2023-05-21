'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
let highscore = document.querySelector('.highscore');
highscore.textContent = 0;

const message = document.querySelector('.message');

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  let score = Number(document.querySelector('.score').textContent);
  console.log(guess);
  if (!guess) {
    message.textContent = '🚧 No number!';
  } else if (guess === number) {
    document.querySelector('.number').textContent = number;
    message.textContent = '🌝 Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    // highscore.textContent = score;
    if (highscore.textContent < score) {
      highscore.textContent = score;
    }
    console.log('Test Git');
  } else {
    score--;
    document.querySelector('.score').textContent = score;
    message.textContent = guess < number ? '📉 Pretty Low!' : '🫸 Pretty High!';
    if (document.querySelector('.score').textContent <= 0) {
      message.textContent = '😿 You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = null;
  message.textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
});
