import './style.css';
import './Game/computerAI.js';
import './Game/game.js';
import './Game/gameBoard.js';
import './Game/ship.js';
import './Game/player.js';


// Function to create a gameboard grid dynamically
function createGameBoard(gridContainerId, boardSize) {
    const gameboardElement = document.querySelector(`#${gridContainerId}`);
    
    for (let i = 0; i < boardSize; i++) {
        for (let j = 0; j < boardSize; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.x = i;
            cell.dataset.y = j;
            gameboardElement.appendChild(cell);
        }
    }
}

// Call the function for both players' grids
createGameBoard('player1-grid', 10);  // Create a 10x10 grid for Player 1
createGameBoard('player2-grid', 10);  // Create a 10x10 grid for Player 2


