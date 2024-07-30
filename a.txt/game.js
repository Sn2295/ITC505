const boardSize = 5;
const gameBoard = document.getElementById('game-board');
const gameStatus = document.getElementById('game-status');
const restartButton = document.getElementById('restart-button');
const helpButton = document.getElementById('help-button');
const helpInfo = document.getElementById('help-info');
const winModal = document.getElementById('win-modal');
const closeModalButton = document.getElementById('close-modal');

let board = [];

// Initialize the game board
function initializeBoard() {
    gameBoard.innerHTML = '';
    board = [];
    for (let i = 0; i < boardSize; i++) {
        const row = document.createElement('tr');
        board.push([]);
        for (let j = 0; j < boardSize; j++) {
            const square = document.createElement('td');
            const cell = document.createElement('div');
            cell.classList.add('square');
            cell.addEventListener('click', () => toggleLights(i, j));
            square.appendChild(cell);
            row.appendChild(square);
            board[i].push(cell);
        }
        gameBoard.appendChild(row);
    }
    randomizeBoard();
}

// Randomize the board by turning on/off some lights
function randomizeBoard() {
    board.forEach(row => row.forEach(square => square.classList.remove('on')));
    for (let i = 0; i < boardSize; i++) {
        for (let j = 0; j < boardSize; j++) {
            if (Math.random() < 0.5) {
                toggleLights(i, j, false);
            }
        }
    }
}

// Toggle lights and check for win condition
function toggleLights(row, col, checkWin = true) {
    toggleSquare(row, col);
    toggleSquare(row - 1, col);
    toggleSquare(row + 1, col);
    toggleSquare(row, col - 1);
    toggleSquare(row, col + 1);
    if (checkWin) checkForWin();
}

// Toggle the state of a specific square
function toggleSquare(row, col) {
    if (row >= 0 && row < boardSize && col >= 0 && col < boardSize) {
        board[row][col].classList.toggle('on');
    }
}

// Check if all lights are off and display win message
function checkForWin() {
    let allOff = true;
    for (let i = 0; i < boardSize; i++) {
        for (let j = 0; j < boardSize; j++) {
            if (board[i][j].classList.contains('on')) {
                allOff = false;
                break;
            }
        }
    }
    if (allOff) {
        showWinModal();
    }
}

// Show the win modal
function showWinModal() {
    winModal.classList.remove('hidden');
}

// Restart the game
restartButton.addEventListener('click', initializeBoard);

// Toggle help info visibility
helpButton.addEventListener('click', () => {
    if (helpInfo.classList.contains('hidden')) {
        helpInfo.classList.remove('hidden');
    } else {
        helpInfo.classList.add('hidden');
    }
});

// Close the win modal
closeModalButton.addEventListener('click', () => {
    winModal.classList.add('hidden');
});

// Initialize the game when the page loads
initializeBoard();
