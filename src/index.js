import './style.css';
import './Game/computerAI.js';
import './Game/game.js';
import './Game/gameBoard.js';
import './Game/ship.js';
import './Game/player.js';


function createGameBoard(gridContainerId, boardSize) {
    const gameboardElement = document.querySelector(`#${gridContainerId}`);
    const letters = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ'; 

    // Create the board grid with headers (A1, B2, etc.)
    for (let i = 0; i <= boardSize; i++) {
        for (let j = 0; j <= boardSize; j++) {
            const cell = document.createElement('div');

            // Create the column headers (A, B, C, ...)
            if (i === 0 && j > 0) {
                cell.classList.add('header');
                cell.textContent = letters[j]; // Column headers
            }
            // Create the row headers (1, 2, 3, ...)
            else if (j === 0 && i > 0) {
                cell.classList.add('header');
                cell.textContent = i; // Row headers
            }
            // Create the actual grid cells
            else if (i > 0 && j > 0) {
                cell.classList.add('cell');
                cell.dataset.x = i - 1; // Adjust to 0-based index
                cell.dataset.y = j - 1;
            }

            gameboardElement.appendChild(cell);
        }
    }
}


createGameBoard('player1-grid', 10);  
createGameBoard('player2-grid', 10);



