import './style.css';
import createGameBoard from './Game/gameBoardUI.js';
import Player from './Game/player.js';
import Ship from './Game/ship.js';
import ComputerAI from './Game/computerAI.js';

// Initiate game UI
createGameBoard('player1-grid', 10);  
createGameBoard('player2-grid', 10);

const playerOneBoard = new Player("Hudson", [
    new Ship('Carrier', 5, [0, 0], 'vertical'),      
    new Ship('Battleship', 4, [0, 3], 'horizontal'), 
    new Ship('Destroyer', 3, [6, 0], 'vertical'),    
    new Ship('Submarine', 3, [4, 4], 'horizontal'),  
    new Ship('Patrol Boat', 2, [7, 7], 'vertical'),  
]);

playerOneBoard.placeShipPlayer();

const computerPlayer = new ComputerAI('computer');
computerPlayer.placeShipsAutomatically([
    {name: 'Carrier', length: 5},
    {name: 'Battleship', length: 4},
    {name: 'Destroyer', length: 3},
    {name: 'Submarine', length: 3},
    {name: 'Patrol Boat', length: 2}
]);

playerOneBoard.initialize();
computerPlayer.initialize();

// Load game states for both players
playerOneBoard.loadGameState();
computerPlayer.loadGameState();

startGame();

async function startGame() {
    let isPlayerTurn = true;
    let gameActive = true;

    while (gameActive) {
        if (isPlayerTurn) {
            console.log("Player Choose a position to attack:");
            const position = await getPlayerInput();
            const attackResult = playerAttackComputer(position);
            console.log(`Player attack result: ${attackResult}`);
            
            if (isGameOver()) {
                gameActive = false;
                declareWinner();
                break;
            }
        } else {
            console.log("Computer is choosing a spot to attack:");
            const attackResult = computerAttacksPlayer();
            console.log(`Computer attack result: ${attackResult}`);
            
            if (isGameOver()) {
                gameActive = false;
                declareWinner();
                break;
            }
        }

        isPlayerTurn = !isPlayerTurn;
    }
}

function getPlayerInput() {
    return new Promise((resolve) => {
        const position = prompt("Enter your attack coordinates (e.g., 0,1):");
        resolve(position.split(',').map(Number));
    });
}

function playerAttackComputer(position) {
    const [x, y] = position;
    
    // Validate position
    if (x < 0 || x >= 10 || y < 0 || y >= 10) {
        return "Invalid position";
    }

    // Check if position was already attacked
    if (computerPlayer.board.board[x][y] === "X" || computerPlayer.board.board[x][y] === "H") {
        return "Position already attacked";
    }

    const cellValue = computerPlayer.board.board[x][y];

    // Miss
    if (cellValue === null) {
        computerPlayer.board.board[x][y] = "X";
        computerPlayer.saveGameState();
        return "Miss";
    }

    // Hit
    const ship = computerPlayer.ships.find(s => s.type === cellValue);
    if (ship) {
        computerPlayer.board.board[x][y] = "H";
        ship.hit();
        computerPlayer.saveGameState();
        
        if (ship.isSunk()) {
            return `Sunk ${ship.type}!`;
        }
        return "Hit!";
    }

    return "Invalid";
}

function computerAttacksPlayer() {
    const [x, y] = computerPlayer.getRandomPosition();
    
    // Check if position was already attacked
    if (playerOneBoard.board.board[x][y] === "X" || playerOneBoard.board.board[x][y] === "H") {
        return computerAttacksPlayer(); // Try again with a new position
    }

    const cellValue = playerOneBoard.board.board[x][y];

    // Miss
    if (cellValue === null) {
        playerOneBoard.board.board[x][y] = "X";
        playerOneBoard.saveGameState();
        return "Miss";
    }

    // Hit
    const ship = playerOneBoard.ships.find(s => s.type === cellValue);
    if (ship) {
        playerOneBoard.board.board[x][y] = "H";
        ship.hit();
        playerOneBoard.saveGameState();
        
        if (ship.isSunk()) {
            return `Sunk ${ship.type}!`;
        }
        return "Hit!";
    }

    return "Invalid";
}

function allPlayerShipSunk() {
    return playerOneBoard.ships.every(ship => {
        const sunk = ship.isSunk();
        console.log(`${ship.type}: ${ship.hits}/${ship.length} hits, Sunk: ${sunk}`);
        return sunk;
    });
}

function allComputerShipSunk() {
    return computerPlayer.ships.every(ship => {
        const sunk = ship.isSunk();
        console.log(`${ship.type}: ${ship.hits}/${ship.length} hits, Sunk: ${sunk}`);
        return sunk;
    });
}

function isGameOver() {
    console.log("\nChecking player ships:");
    const playerLost = allPlayerShipSunk();
    
    console.log("\nChecking computer ships:");
    const computerLost = allComputerShipSunk();
    
    return playerLost || computerLost;
}

function declareWinner() {
    if (allPlayerShipSunk()) {
        alert("Computer wins!");
    } else {
        alert("Player wins!");
    }
}

function newGame() {
    localStorage.clear();
    location.reload();
}

