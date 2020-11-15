/*----- constants -----*/
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ];

const messages = document.querySelector('h2');

/*----- app's state (variables) -----*/
let board;
let turn = 'X';
let win;


/*----- cached element references -----*/


const squares = Array.from(document.querySelectorAll('#board div'));


/*----- event listeners -----*/


document.getElementById('board').addEventListener('click', handleTurn);

document.getElementById('reset-button').addEventListener('click', restart);


/*----- functions -----*/


function getWinner() {
    let winner = null;
    winningCombos.forEach(function(combo, idx) {
        if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) winner = board[combo[0]];
        });
        return winner ? winner : board.includes('') ? null : 'T';
};


function handleTurn() {
    let idx = squares.findIndex((square) => {
        return square === event.target;
    });
    board[idx] = turn;
    turn = turn === 'X' ? 'O' : 'X';
    win = getWinner();
    render();
};


function restart() {
    board = [ '', '', '', '', '', '', '', '', ''];
    render();
};


function render() {
    board.forEach((mark, idx) => {
    //this moves the value of the board item into the squares[idx]
    squares[idx].textContent = mark;
    });
    messages.textContent = win === 'T' ? `We have a Tie!` : win ? `${win} wins the game!` : `It's ${turn}'s turn!`;
    };

restart(); 