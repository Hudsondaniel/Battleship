// Game State Module
import Ship from './ship.js';
import { renderGameState, showGameModal } from './ui.js';

// Game state
let isPlayerTurn = true;
let gameActive = true;
let gameInProgress = false;

// Check if game is in progress from localStorage
function checkGameInProgress(playerName) {
    try {
        const playerData = localStorage.getItem(playerName);
        const computerData = localStorage.getItem('computer');
        // Consider game in progress if BOTH player and computer data exist
        return playerData && computerData;
    } catch (e) {
        console.error("Error checking local storage:", e);
        return false;
    }
}

// Process an attack on a cell
function processAttack(player, x, y, cell) {
    const board = player.board.board;
    const cellValue = board[x][y];

    if (cellValue === null) {
        // Miss
        board[x][y] = "X";
        cell.classList.remove('ship');  // Remove ship styling
        cell.classList.add('miss');
        cell.textContent = 'X';
        return "Miss";
    }

    // If the cell has a ship
    const ship = player.ships.find(s => s.type === cellValue);
    if (ship) {
        board[x][y] = "H";
        ship.hit();
        cell.classList.remove('ship');  // Remove ship styling
        cell.classList.add('hit');
        cell.textContent = 'H';
        return ship.isSunk() ? `Sunk ${ship.type}!` : "Hit!";
    }

    return "Invalid";
}

// Parse cell id to get coordinates
function parseCellId(cellId) {
    const match = cellId.match(/player2-grid-cell-(\d+)-(\d+)/);
    return match ? [parseInt(match[1]), parseInt(match[2])] : null;
}

// Check if the game is over
function checkGameOver(playerBoard, computerPlayer) {
    const playerLost = playerBoard.ships.every(ship => ship.isSunk());
    const computerLost = computerPlayer.ships.every(ship => ship.isSunk());

    if (playerLost || computerLost) {
        gameActive = false;
        declareWinner(playerLost ? 'Computer' : 'Player', playerBoard.name);
        return true;
    }

    return false;
}

// Declare winner and cleanup
function declareWinner(winner, playerName) {
    showGameModal(`${winner} Wins!`, `${winner === 'Player' ? 'Congratulations!' : 'Better luck next time!'}`);
    
    // Clear saved game state as the game is over
    localStorage.removeItem(playerName);
    localStorage.removeItem('computer');
}

// Handle new game request
function newGame(playerBoard, computerPlayer) {
    localStorage.removeItem(playerBoard.name);
    localStorage.removeItem('computer');
    
    // Clear both boards
    playerBoard.board.clearBoard();
    computerPlayer.board.clearBoard();
    
    // Reset the game state
    gameInProgress = false;
    gameActive = true;
    isPlayerTurn = true;
    
    return { gameInProgress, gameActive, isPlayerTurn };
}

// Initialize random ship placement for a board
function placeRandomShips(player, shipConfig) {
    player.placeShipsAutomatically(shipConfig);
}

// Setup a board with specific ships
function setupBoard(playerBoard, ships) {
    playerBoard.ships = ships.map(s => 
        new Ship(s.name, s.length, s.position, s.direction)
    );
    playerBoard.placeShipPlayer();
    playerBoard.saveGameState();
}

export {
    isPlayerTurn,
    gameActive,
    gameInProgress,
    checkGameInProgress,
    processAttack,
    parseCellId,
    checkGameOver,
    declareWinner,
    newGame,
    placeRandomShips,
    setupBoard
}; 