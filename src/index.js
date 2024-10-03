import './style.css';
import './Game/computerAI.js';
import './Game/game.js';
import GameBoard from './Game/gameBoard.js';
import './Game/ship.js';
import './Game/player.js';
import './Game/gameBoardUI.js';


const gameBoard = new GameBoard(10); // Replace 'player1-grid' with your actual grid container ID

// Call the printBoard method to display the board in the console
gameBoard.printBoard();
gameBoard.placeShip('Destroyer', [0,1], 'vertical');