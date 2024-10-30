import './style.css';
import createGameBoard from './Game/gameBoardUI.js';
import Player from './Game/player.js';
import Ship from './Game/ship.js';
import ComputerAI from './Game/computerAI.js';
import Game from './Game/game.js';

newGame()
// Initiate game UI to which You would be adding the backend details
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
    {name: 'carrier', length: 5},
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

    while (true) {
        if (isPlayerTurn) {
            console.log("Player Choose a position to attack:");
            const position = await getPlayerInput(); // Function to get input asynchronously
            const attackResult = playerAttackComputer(position);
            console.log(attackResult); // Log the result of the attack
            
            // Check if the game is over after the player's attack
            if (isGameOver()) {
                declareWinner();
                break; // Exit the loop if the game is over
            }
        } else {
            console.log("Computer is choosing a spot to attack:");
            const attackResult = computerAttacksPlayer();
            console.log(attackResult); // Log the result of the attack
            
            // Check if the game is over after the computer's attack
            if (isGameOver()) {
                declareWinner();
                break; // Exit the loop if the game is over
            }
        }

        // Toggle the turn
        isPlayerTurn = !isPlayerTurn;
    }
}

function getPlayerInput() {
    return new Promise((resolve) => {
        const position = prompt("Enter your attack coordinates (e.g., 0,1):");
        resolve(position.split(',').map(Number)); // Convert input to array of numbers
    });
}

// Updating the board for computer when the player attacks
function playerAttackComputer(position) {
    const [x, y] = position;

    if (computerPlayer.board.board[x][y] === null) {
        computerPlayer.board.board[x][y] = "X";
        computerPlayer.saveGameState(); // Save game state after the attack
        return "Miss";
    }

    const cellValue = computerPlayer.board.board[x][y];
    let ship;

    switch (cellValue) {   
        case "Battleship":
        case "carrier":
        case "Submarine":
        case "Destroyer":
        case "Patrol Boat":
            computerPlayer.board.board[x][y] = "H";
            ship = computerPlayer.ships.find(s => s.type === cellValue);
            console.log(ship);
            break;
        default:
            return "Invalid";
    }

    if (ship) {
        ship.hit();
        console.log(ship);
        computerPlayer.saveGameState();
        return "Hit";
    }
    return "Invalid";
}

function computerAttacksPlayer() {
    const [x, y] = computerPlayer.getRandomPosition();

    if (playerOneBoard.board.board[x][y] === null) {
        playerOneBoard.board.board[x][y] = "X";
        playerOneBoard.saveGameState(); // Save game state after the attack
        return "Miss";
    }

    const cellValue = playerOneBoard.board.board[x][y];
    let ship;

    switch (cellValue) {   
        case "Battleship":
        case "carrier":
        case "Submarine":
        case "Destroyer":
        case "Patrol Boat":
            playerOneBoard.board.board[x][y] = "H";
            ship = playerOneBoard.ships.find(s => s.type === cellValue);
            console.log(ship);
            break;
        default:
            console.log("Invalid Moves");
            return "Invalid";
    }

    if (ship) {
        ship.hit();
        console.log(ship);
        playerOneBoard.saveGameState();
        return "Hit";
    }
    return "Invalid";
}

function allPlayerShipSunk() {
    console.log(playerOneBoard.ships)
    return playerOneBoard.ships.every(ship => ship.isSunk());
}

function allComputerShipSunk() {
    console.log(computerPlayer.ships)
    return computerPlayer.ships.every(ship => ship.isSunk());
}

function isGameOver() {
    return allPlayerShipSunk() || allComputerShipSunk();
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
}
