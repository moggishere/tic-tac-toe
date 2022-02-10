const gameboard = (() => {
    const board = []; // [1, 2, 3, 4, 5, 6, 7, 8, 9]
    for (let i = 0; i < 9; i++) {
        board.push('');
    }

    // board[2] = 'X';
    // board[3] = 'O';
})

const Player = (name, score) => {
    return {name, score};
}

const switchPlayer = function (str) {
    if (str == 'X') {
        return 'O';
    } else if (str =='O') {
        return 'X';
    }
}

// drawGame() constantly updates the board based on what's inside the gameboard obj
// tile button should update gameboard object with 'X' or 'O'
// drawGame() updates itself

const drawGame = function() {
    for (let i = 0; i < 9; i++) {
        const signDraw = document.getElementById(`${i + 1}${sign}`)
    }
}



const playGame = function () {
    sign = 'O';

    for (let i = 0; i < 9; i++) {
        const tiles = document.getElementById(`${i + 1}`);
        const signDraw = document.getElementById(`${i + 1}${sign}`)
        tiles.addEventListener('click', e => {
            console.log(e);
            // signDraw.classList.add('turned-on');

        })
    }
}

// window.onload = playGame();