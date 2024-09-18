import GameBoard from "./gameBoard.js";
import ship from "./ship.js";

export default class Player {
    constructor(name) {
        this.name = name;
        this.board = this.createBoard(10); // Assume 10x10 grid
        this.ships = [];
        this.shotHistory = [];
    }

    createBoard(size) {
        return new GameBoard(size);
    }

    placeShipPlayer(ship, position) {

    }

    fireShot(target) {

    }

    isSunk() {

    }

    getShipsLeft() {

    }

    getBoard() {

    }

    getName() {

    }

    getScore() {

    }

    getHealth() {

    }

    isGameOver() {

    }

    getRemainingShots() {

    }

    getGameStatus() {

    }

    getShotHistory() {

    }
}
