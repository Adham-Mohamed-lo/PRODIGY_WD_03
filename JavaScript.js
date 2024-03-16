const board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = true;
let winningCells = [];
let playerXWins = 0;
let playerOWins = 0;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function ChooseMove(cellIndex) {
    if (gameActive && board[cellIndex] === '') {
        board[cellIndex] = currentPlayer;
        document.getElementsByClassName('cell')[cellIndex].innerHTML = currentPlayer;
        if (checkWinner()) {
            document.getElementById('message').innerHTML = `${currentPlayer} wins!`;
            gameActive = false;
            updateWinnerCounter();
        } else if (checkDraw()) {
            document.getElementById('message').innerHTML = "It's a draw!";
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWinner() {
    for (let condition of winningConditions) {
        const [a, b, c] = condition;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            winningCells = [a, b, c];
            return true;
        }
    }
    return false;
}

function checkDraw() {
    return !board.includes('');
}

function reset() {
    board.fill('');
    document.getElementById('message').innerHTML = '';
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = '');
    currentPlayer = 'X';
    gameActive = true;
}

function updateWinnerCounter() {
    if (currentPlayer === 'X') {
        playerXWins++;
        document.getElementById('playerXWins').innerHTML = `Player X Wins: ${playerXWins}`;
    } else {
        playerOWins++;
        document.getElementById('playerOWins').innerHTML = `Player O Wins: ${playerOWins}`;
    }
}
function resetCounter() {
    reset();
    playerXWins = 0;
    playerOWins = 0;
    document.getElementById('playerXWins').innerHTML = `Player X Wins: ${playerXWins}`;
    document.getElementById('playerOWins').innerHTML = `Player O Wins: ${playerOWins}`;
}