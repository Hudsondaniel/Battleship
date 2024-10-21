import './style.css';
import './Game/computerAI.js';
import './Game/game.js';
import createGameBoard from './Game/gameBoardUI.js';
import Player from './Game/player.js';
import './Game/ship.js';


// Logic for the whole game goes here

// UI elements for the game board

createGameBoard('player1-grid', 10);  
createGameBoard('player2-grid', 10);

// Backend logic for the game 

// New game board for Player 1

const playerOneBoard = new Player("Hudson");
const computerBoard = new Player("computer");

// Logic to place ships according to user input in the game board for Player 1
playerOneBoard.placeShipPlayer('carrier',5, [0,1], 'vertical');
playerOneBoard.placeShipPlayer('battleship', 4, [0,5], 'horizontal');
playerOneBoard.placeShipPlayer('cruiser', 4, [6,4], 'vertical');
playerOneBoard.placeShipPlayer('submarine', 3, [6, 7], 'horizontal');
playerOneBoard.placeShipPlayer('destroyer', 2, [2, 7], 'vertical');


// New game board for Player 2 (computer)

// Logic to randomly place ships in the game board for Player 2 (Computer)







