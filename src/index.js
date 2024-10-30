import './style.css';
import createGameBoard from './Game/gameBoardUI.js';
import Player from './Game/player.js';
import Ship from './Game/ship.js';
import ComputerAI from './Game/computerAI.js';
import Game from './Game/game.js';

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
    
    while(true){
        if (isPlayerTurn) {
            console.log("Player Choose a position to attack:");
            const position = await getPlayerInput(); // Function to get input asynchronously
            playerAttackComputer(position);
        } 
        
        if (!isPlayerTurn){
            console.log("Computer is choosing a spot to attack:");
            computerAttacksPlayer();
        }
        console.log(isPlayerTurn);
        // Toggle the turn
        isPlayerTurn = !isPlayerTurn;
    
        // Check for game over conditions
        // if (!isGameOver()) {
        //     nextTurn(); // Call the next turn if the game isn't over
        // } else {
        //     declareWinner(); // Handle declaring the winner
        // }
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
        return "Miss";
    }

    const cellValue = computerPlayer.board.board[x][y];
    let ship;

    switch (cellValue) {   
        case "Battleship":
            computerPlayer.board.board[x][y] = "H";
            ship = computerPlayer.ships.find(s => s.type === "Battleship");
            break;
        case "Carrier":
            computerPlayer.board.board[x][y] = "H";
            ship = computerPlayer.ships.find(s => s.type === "carrier");
            break;
        case "Submarine":
            computerPlayer.board.board[x][y] = "H";
            ship = computerPlayer.ships.find(s => s.type === "Submarine");
            break;
        case "Destroyer":
            computerPlayer.board.board[x][y] = "H";
            ship = computerPlayer.ships.find(s => s.type === "Destroyer");
            break;
        case "Patrol Boat":
            computerPlayer.board.board[x][y] = "H";
            ship = computerPlayer.ships.find(s => s.type === "Patrol Boat");
            break;
        default:
            return "Invalid";
    }

    if (ship) {
        ship.hit();
        computerPlayer.saveGameState();
        return "Hit";
    }
    return "Invalid";
}

function computerAttacksPlayer() {
    const [x, y] = computerPlayer.getRandomPosition();

    if (playerOneBoard.board.board[x][y] === null) {
        playerOneBoard.board.board[x][y] = "X";
        return "Miss";
    }

    const cellValue = playerOneBoard.board.board[x][y];
    let ship;

    switch (cellValue) {   
        case "Battleship":
            playerOneBoard.board.board[x][y] = "H";
            ship = playerOneBoard.ships.find(s => s.type === "Battleship");
            break;
        case "Carrier":
            playerOneBoard.board.board[x][y] = "H";
            ship = playerOneBoard.ships.find(s => s.type === "carrier");
            break;
        case "Submarine":
            playerOneBoard.board.board[x][y] = "H";
            ship = playerOneBoard.ships.find(s => s.type === "Submarine");
            break;
        case "Destroyer":
            playerOneBoard.board.board[x][y] = "H";
            ship = playerOneBoard.ships.find(s => s.type === "Destroyer");
            break;
        case "Patrol Boat":
            playerOneBoard.board.board[x][y] = "H";
            ship = playerOneBoard.ships.find(s => s.type === "Patrol Boat");
            break;
        default:
            return "Invalid";
    }

    if (ship) {
        ship.hit();
        playerOneBoard.saveGameState();
        return "Hit";
    }
    return "Invalid";
}

function allPlayerShipSunk(){
    return playerOneBoard.ships.every(ship => ship.isSunk());
}

function allComputerShipSunk(){
    return computerPlayer.ships.every(ship => ship.isSunk());
}

function isGameOver(){
    return allPlayerShipSunk() || allComputerShipSunk();
}

function newGame(){
    // Reset game board and players
    localStorage.clear();
}