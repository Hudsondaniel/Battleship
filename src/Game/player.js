import GameBoard from "./gameBoard.js";

export default class Player {
    constructor(name, ships = []) {
        this.name = name;
        this.board = this.createBoard(10); 
        this.ships = ships;
        this.shotHistory = [];
    }

    playerShips(){
        this.ships.forEach(
            ship => console.log(ship)
        )
    }
    createBoard(size, name) {
        const newBoard = new GameBoard(size, this.name);
        console.log(newBoard.printBoard());
        return newBoard;
    }

    placeShipPlayer() {
        this.ships.forEach(
            ship => this.board.placeShip(ship.type, ship.length, ship.position, ship.direction)
        );
    }

    fireShot(target) {
        const hit = this.board.checkHit(target); 
        this.shotHistory.push({ target, hit }); 
        return hit; 
    }

    isSunk() {
        return this.ships.every(ship => ship.isSunk()); 
    }

    getShipsLeft() {
        return this.ships.filter(ship => !ship.isSunk()).length; 
    }

    getBoard() {
        return this.board;
    }

    getName() {
        return this.name;
    }

    getScore() {
        return this.shotHistory.filter(shot => shot.hit).length; 
    }

    getHealth() {
        return this.ships.reduce((total, ship) => total + ship.getHealth(), 0); 
    }

    isGameOver() {
        return this.getShipsLeft() === 0; 
    }

    getRemainingShots() {
        return 100 - this.shotHistory.length; 
    }

    // Returns the current game status
    getGameStatus() {
        return {
            score: this.getScore(),
            shipsLeft: this.getShipsLeft(),
            health: this.getHealth(),
            remainingShots: this.getRemainingShots(),
            isGameOver: this.isGameOver(),
        };
    }

    // Returns the history of all shots made by the player
    getShotHistory() {
        return this.shotHistory;
    }
}
