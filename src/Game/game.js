import GameBoard from "./gameBoard.js";
import ship from "./ship.js"

const gameBoard = new GameBoard(10);
const shipInstance = new ship('Destroyer', 5, [3, 2])
gameBoard.placeShip(ship, shipInstance.position ,'vertical');
gameBoard.printBoard();