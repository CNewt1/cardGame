'use strict';

const flip = document.querySelector('.cardflip');
const face = document.querySelector('.face');
const hold = document.querySelector('.hold');
const reset = document.querySelector('.reset');
const activePlayer = document.querySelector('.active');
const winnerMsg = document.querySelector('.winner');
const player1 = document.querySelector('.player1');
const player1Score = document.querySelector('.player1score');
const player1GameScore = document.querySelector('.player1gamescore');
const player2 = document.querySelector('.player2');
const player2Score = document.querySelector('.player2score');
const player2GameScore = document.querySelector('.player2gamescore');
const showModal = document.querySelector('.show-modal');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
let player1CurrentScore = 0;
let player2CurrentScore = 0;
let player1OverallScore = 0;
let player2OverallScore = 0;

function flipCard() {
  const card = Math.trunc(Math.random() * 13 + 1);
  switch (card) {
    case 1:
      face.src = '1.png';
      if (player1.classList.contains('active')) {
        player1CurrentScore++;
        player1Score.textContent = player1CurrentScore;
      } else {
        player2CurrentScore++;
        player2Score.textContent = player2CurrentScore;
      }
      break;
    case 2:
      face.src = '2.png';
      if (player1.classList.contains('active')) {
        player1CurrentScore += 2;
        player1Score.textContent = player1CurrentScore;
      } else {
        player2CurrentScore += 2;
        player2Score.textContent = player2CurrentScore;
      }
      break;
    case 3:
      face.src = '3.png';
      if (player1.classList.contains('active')) {
        player1CurrentScore += 3;
        player1Score.textContent = player1CurrentScore;
      } else {
        player2CurrentScore += 3;
        player2Score.textContent = player2CurrentScore;
      }
      break;
    case 4:
      face.src = '4.png';
      if (player1.classList.contains('active')) {
        player1CurrentScore += 4;
        player1Score.textContent = player1CurrentScore;
      } else {
        player2CurrentScore += 4;
        player2Score.textContent = player2CurrentScore;
      }
      break;
    case 5:
      face.src = '5.png';
      if (player1.classList.contains('active')) {
        player1CurrentScore += 5;
        player1Score.textContent = player1CurrentScore;
      } else {
        player2CurrentScore += 5;
        player2Score.textContent = player2CurrentScore;
      }
      break;
    case 6:
      face.src = '6.png';
      if (player1.classList.contains('active')) {
        player1CurrentScore += 6;
        player1Score.textContent = player1CurrentScore;
      } else {
        player2CurrentScore += 6;
        player2Score.textContent = player2CurrentScore;
      }
      break;
    case 7:
      face.src = '7.png';
      if (player1.classList.contains('active')) {
        player1CurrentScore += 7;
        player1Score.textContent = player1CurrentScore;
      } else {
        player2CurrentScore += 7;
        player2Score.textContent = player2CurrentScore;
      }
      break;
    case 8:
      face.src = '8.png';
      if (player1.classList.contains('active')) {
        player1CurrentScore += 8;
        player1Score.textContent = player1CurrentScore;
      } else {
        player2CurrentScore += 8;
        player2Score.textContent = player2CurrentScore;
      }
      break;
    case 9:
      face.src = '9.png';
      if (player1.classList.contains('active')) {
        player1CurrentScore += 9;
        player1Score.textContent = player1CurrentScore;
      } else {
        player2CurrentScore += 9;
        player2Score.textContent = player2CurrentScore;
      }
      break;
    case 10:
      face.src = '10.png';
      if (player1.classList.contains('active')) {
        player1CurrentScore += 10;
        player1Score.textContent = player1CurrentScore;
      } else {
        player2CurrentScore += 10;
        player2Score.textContent = player2CurrentScore;
      }
      break;
    case 11:
      face.src = 'jack.png';
      // if (player1.classList.contains('active')) {
      //   player1CurrentScore = 0;
      //   player1Score.textContent = player1CurrentScore;
      //   player1.classList.remove('active');
      //   player2.classList.add('active');
      // } else {
      //   player2CurrentScore = 0;
      //   player2Score.textContent = player2CurrentScore;
      //   player2.classList.remove('active');
      //   player1.classList.add('active');
      // }
      break;
    case 12:
      face.src = 'queen.png';
      // if (player1.classList.contains('active')) {
      //   player1CurrentScore = 0;
      //   player1Score.textContent = player1CurrentScore;
      //   player1.classList.remove('active');
      //   player2.classList.add('active');
      // } else {
      //   player2CurrentScore = 0;
      //   player2Score.textContent = player2CurrentScore;
      //   player2.classList.remove('active');
      //   player1.classList.add('active');
      // }
      break;
    case 13:
      face.src = 'king.png';
      if (player1.classList.contains('active')) {
        player1CurrentScore = 0;
        player1Score.textContent = player1CurrentScore;
        player1.classList.remove('active');
        player2.classList.add('active');
      } else {
        player2CurrentScore = 0;
        player2Score.textContent = player2CurrentScore;
        player2.classList.remove('active');
        player1.classList.add('active');
      }
      break;
  }
}

function holdScore() {
  if (
    player1.classList.contains('active') &&
    player1OverallScore + player1CurrentScore >= 100
  ) {
    // player1.classList.remove('active');
    // player1.classList.add('winner');
    flip.classList.add('hidden');
    hold.classList.add('hidden');
    reset.classList.remove('hidden');
    winnerMsg.classList.remove('hidden');
    winnerMsg.textContent = 'Player 1 wins!';
    face.classList.add('hidden');
  } else if (
    player2.classList.contains('active') &&
    player2OverallScore + player2CurrentScore >= 100
  ) {
    // player2.classList.remove('active');
    // player2.classList.add('winner');
    flip.classList.add('hidden');
    hold.classList.add('hidden');
    reset.classList.remove('hidden');
    winnerMsg.classList.remove('hidden');
    winnerMsg.textContent = 'Player 2 wins!';
    face.classList.add('hidden');
  }
  if (player1.classList.contains('active')) {
    player1OverallScore += player1CurrentScore;
    player1GameScore.textContent = player1OverallScore;
    player1CurrentScore = 0;
    player1Score.textContent = player1CurrentScore;
    player1.classList.remove('active');
    player2.classList.add('active');
  } else {
    player2OverallScore += player2CurrentScore;
    player2GameScore.textContent = player2OverallScore;
    player2CurrentScore = 0;
    player2Score.textContent = player2CurrentScore;
    player2.classList.remove('active');
    player1.classList.add('active');
  }
}

function resetGame() {
  face.classList.remove('hidden');
  face.src = 'card.png';
  player1.classList.add('active');
  player2.classList.remove('active');
  flip.classList.remove('hidden');
  hold.classList.remove('hidden');
  reset.classList.add('hidden');
  winnerMsg.classList.add('hidden');
  winnerMsg.textContent = ' ';
  player1CurrentScore = 0;
  player2CurrentScore = 0;
  player1OverallScore = 0;
  player2OverallScore = 0;
  player1Score.textContent = player1CurrentScore;
  player1GameScore.textContent = player1OverallScore;
  player2Score.textContent = player2CurrentScore;
  player2GameScore.textContent = player2OverallScore;
}

flip.addEventListener('click', flipCard);
hold.addEventListener('click', holdScore);
reset.addEventListener('click', resetGame);
showModal.addEventListener('click', function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
});
closeModal.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});
document.addEventListener('keydown', function (e) {
  if (e.key == 'Escape') {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }
});
