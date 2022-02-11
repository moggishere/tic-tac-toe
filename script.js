//the button that I'm clicking should do a few things
//update the gameboard with either X or O IF the square is empty
//NOT update if the square has something in it
//switch the string from X to O or vice versa

const Player = (name, score) => {
  return { name, score };
}

const gameBoard = (() => {

  const board = Array(9).fill(''); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

  return {
    board
  };
})();

function drawGame() { //strictly for drawing signs on the board

  for (let i = 0; i < 9; i++) {
    document.getElementById(`sign-${i}`).innerHTML = '' //cleans the button beforehand
    const square = document.getElementById(`sign-${i}`);
    const newSign = document.createTextNode(`${gameBoard.board[i]}`);
    square.appendChild(newSign);
  }

}

function playerOneTurn() {

  const playerOneSquares = document.querySelectorAll('.square');
  for (let i = 0; i < playerOneSquares.length; i++) {
    playerOneSquares[i].addEventListener('click', e => {
      gameBoard.board[i] = 'X'
      drawGame();
    })
  }

}

function playerTwoTurn() {

  const playerTwoSquares = document.querySelectorAll('.square');
  for (let i = 0; i < playerTwoSquares.length; i++) {
    playerTwoSquares[i].addEventListener('click', e => {
      gameBoard.board[i] = 'O'
      drawGame();
    })
  }

}