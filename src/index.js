import './style.css';
import createGameBoard from './Game/gameBoardUI.js';
import Player from './Game/player.js';
import Ship from './Game/ship.js';
import ComputerAI from './Game/computerAI.js';

// Create game boards
createGameBoard('player1-grid', 10);
createGameBoard('player2-grid', 10);

// Initialize players
const playerOneBoard = new Player("Hudson", [
    new Ship('Carrier', 5, [0, 0], 'vertical'),
    new Ship('Battleship', 4, [0, 3], 'horizontal'),
    new Ship('Destroyer', 3, [6, 0], 'vertical'),
    new Ship('Submarine', 3, [4, 4], 'horizontal'),
    new Ship('Patrol Boat', 2, [7, 7], 'vertical'),
]);

playerOneBoard.placeShipPlayer();
console.log(playerOneBoard.board)

const computerPlayer = new ComputerAI('computer');
computerPlayer.placeShipsAutomatically([
    { name: 'Carrier', length: 5 },
    { name: 'Battleship', length: 4 },
    { name: 'Destroyer', length: 3 },
    { name: 'Submarine', length: 3 },
    { name: 'Patrol Boat', length: 2 },
]);

// Setup initial states
playerOneBoard.initialize();
computerPlayer.initialize();

let isPlayerTurn = true;
let gameActive = true;

// Event handlers
document.getElementById('player2-grid').addEventListener('click', handlePlayerAttack);
document.getElementById('new-game-button').addEventListener('click', newGame);

function handlePlayerAttack(event) {
    if (!gameActive || !isPlayerTurn) return;

    const cell = event.target;
    const position = parseCellId(cell.id);

    if (!position || cell.classList.contains('hit') || cell.classList.contains('miss')) {
        alert('Invalid move or position already attacked.');
        return;
    }

    const [x, y] = position;
    const result = processAttack(computerPlayer, x, y, cell);

    console.log(`Player attack result: ${result}`);
    if (checkGameOver()) return;

    isPlayerTurn = false;
    setTimeout(handleComputerAttack, 1000);
}

function handleComputerAttack() {
    if (!gameActive || isPlayerTurn) return;

    const [x, y] = computerPlayer.getRandomPosition();
    const cell = document.getElementById(`player1-grid-cell-${x}-${y}`);
    const result = processAttack(playerOneBoard, x, y, cell);

    console.log(`Computer attack result: ${result}`);
    if (checkGameOver()) return;

    isPlayerTurn = true;
}

function processAttack(player, x, y, cell) {
    const board = player.board.board;
    const cellValue = board[x][y];

    if (cellValue === null) {
        board[x][y] = "X";
        cell.classList.add('miss');
        cell.textContent = 'X';
        return "Miss";
    }

    const ship = player.ships.find(s => s.type === cellValue);
    if (ship) {
        board[x][y] = "H";
        ship.hit();
        cell.classList.add('hit');
        cell.textContent = 'H';

        if (ship.isSunk()) return `Sunk ${ship.type}!`;
        return "Hit!";
    }

    return "Invalid";
}

function parseCellId(cellId) {
    const match = cellId.match(/player2-grid-cell-(\d+)-(\d+)/);
    return match ? [parseInt(match[1]), parseInt(match[2])] : null;
}

function checkGameOver() {
    const playerLost = playerOneBoard.ships.every(ship => ship.isSunk());
    const computerLost = computerPlayer.ships.every(ship => ship.isSunk());

    if (playerLost || computerLost) {
        gameActive = false;
        declareWinner(playerLost ? 'Computer' : 'Player');
        return true;
    }

    return false;
}

function declareWinner(winner) {
    alert(`${winner} wins!`);
}

function newGame() {
    localStorage.clear();
    location.reload();
}
