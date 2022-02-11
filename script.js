//the button that I'm clicking should do a few things
//update the gameboard with either X or O IF the square is empty
//NOT update if the square has something in it
//switch the string from X to O or vice versa

const Player = (name, score) => {
  return { name, score };
}

const gameBoard = (() => {

  const board = Array(9).fill(''); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const isPlaying = true;
  let sign = 'X'

  const verifyBoardState = () => { //this is the dumbest way to do this, find a more elegant solution
    if (
      board[0] == 'X' && board[1] == 'X' && board[2] == 'X' || // checks wincon for P1
      board[3] == 'X' && board[4] == 'X' && board[5] == 'X' ||
      board[6] == 'X' && board[7] == 'X' && board[8] == 'X' ||
      board[0] == 'X' && board[3] == 'X' && board[6] == 'X' ||
      board[1] == 'X' && board[4] == 'X' && board[7] == 'X' ||
      board[2] == 'X' && board[5] == 'X' && board[8] == 'X' ||
      board[0] == 'X' && board[4] == 'X' && board[8] == 'X' ||
      board[6] == 'O' && board[4] == 'O' && board[2] == 'O' || // checks wincon for P2
      board[0] == 'O' && board[1] == 'O' && board[2] == 'O' ||
      board[3] == 'O' && board[4] == 'O' && board[5] == 'O' ||
      board[6] == 'O' && board[7] == 'O' && board[8] == 'O' ||
      board[0] == 'O' && board[3] == 'O' && board[6] == 'O' ||
      board[1] == 'O' && board[4] == 'O' && board[7] == 'O' ||
      board[2] == 'O' && board[5] == 'O' && board[8] == 'O' ||
      board[0] == 'O' && board[4] == 'O' && board[8] == 'O' ||
      board[6] == 'O' && board[4] == 'O' && board[2] == 'O'
    ) {

      console.log('someone won')
      return true;

    } else {

      return false;

    }
  }

  const statusUpdate = () => {
    document.getElementById('status-p1').innerHTML = ''
    document.getElementById('status-p2').innerHTML = ''
    const activeStatus = document.createTextNode('ACTIVE');
    const waitStatus = document.createTextNode('WAITING');
    const p1Status = document.getElementById('status-p1');
    const p2Status = document.getElementById('status-p2');

    if (sign =='X') {
      p1Status.appendChild(activeStatus);
      p2Status.appendChild(waitStatus)
    } else if (sign=='O') {
      p2Status.appendChild(activeStatus)
      p1Status.appendChild(waitStatus)
    }

    verifyBoardState();
  }

  function drawGame() { //strictly for drawing signs on the board

    for (let i = 0; i < 9; i++) {
      document.getElementById(`sign-${i}`).innerHTML = '' //cleans the button beforehand
      const square = document.getElementById(`sign-${i}`);
      const newSign = document.createTextNode(`${gameBoard.board[i]}`);
      square.appendChild(newSign);
    }

  }

  const playerTurn = () => {

    const playerSquares = document.querySelectorAll('.square-off');
    for (let i = 0; i < playerSquares.length; i++) {
      playerSquares[i].addEventListener('click', e => {
        gameBoard.board[i] = sign
        drawGame();
        if (sign === 'X') {
          sign = 'O'
        } else if (sign ==='O') {
          sign = 'X'
        }
        statusUpdate();
      })
    }

  }

  // const playerTwoTurn = () => {

  //   const playerTwoSquares = document.querySelectorAll('.square-off');
  //   for (let i = 0; i < playerTwoSquares.length; i++) {
  //     playerTwoSquares[i].addEventListener('click', e => {
  //       gameBoard.board[i] = 'O'
  //       drawGame();
  //     })
  //   }

  // }


  return {
    board,
    sign,
    verifyBoardState: verifyBoardState,
    playerTurn: playerTurn
  };
})();


function playGame() {
  gameBoard.playerTurn();
}

window.onload = playGame();