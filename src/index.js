import './style.css';
import './Game/computerAI.js';
import './Game/game.js';
import GameBoard from './Game/gameBoard.js';
import createGameBoard from './Game/gameBoardUI.js';
import './Game/ship.js';
import './Game/player.js';



createGameBoard('player1-grid', 10);  
createGameBoard('player2-grid', 10);

const gameBoard = new GameBoard(10); // Replace 'player1-grid' with your actual grid container ID

// Call the printBoard method to display the board in the console
gameBoard.printBoard();
gameBoard.placeShip('Destroyer', [0,1], 'vertical');

const divElem = document.querySelector('[data-x="1"][data-y="1"]');
console.log(divElem);
if (gameBoard.board[1][1] === 'Destroyer'){
    console.log(gameBoard.board.length);
}



for (let i = 0; i < gameBoard.board.length; i++) {
    for (let j = 0; j < gameBoard.board[i].length; j++) {  // Make sure to check gameBoard[i].length
        if (gameBoard.board[i][j] === 'Destroyer') {
            // Use i and j to target the corresponding div with data-x and data-y
            const divElem = document.querySelector(`[data-x="${i}"][data-y="${j}"]`);
            console.log("Destroyer found")
            
            if (divElem) {
                // Now, you can manipulate divElem, for example, change its background color
                divElem.style.backgroundColor = 'red'; // Mark as occupied by the 'Destroyer'
            }
        }
    }
}

