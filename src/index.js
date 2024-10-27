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



function startGame() {
    let isPlayerTurn = true; // Boolean to track whose turn it is

    console.log("Game started!");
    attackComputer([0, 1])

    // Loop to continue until the game ends
    // while (true) {
        // if (isPlayerTurn) {
            // console.log("Choose a position to attack:");
            // attackComputer([0, 1]); // Assuming this function handles the attack
        // } else {
            // Handle computer's turn logic here
            // console.log("Computer's turn...");
            // Add computer's attack logic here, e.g.:
            // computerAttack();
        // }

        // Toggle the turn
        // isPlayerTurn = !isPlayerTurn;

        // Here, you may want to include logic to check if the game has ended
        // For example, check for a winner or if there are remaining turns
    // }
}


function attackComputer(position) {
    const [x, y] = position;

    // Update the computer's board
    computerPlayer.board.board[x][y] = "X";
    computerPlayer.saveGameState();

}


function computerAttacksPlayer(position) {
    const [x, y] = position;

    
}