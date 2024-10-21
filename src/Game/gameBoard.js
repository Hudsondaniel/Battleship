export default class GameBoard {
    constructor(size, name) {
        this.board = Array(size).fill(null).map(() => Array(size).fill(null));
        this.ships = []; 
        this.name = name;
        this.printName();
        this.size = size;
    }
    printName(){
        console.log(`Player ${this.name}'s Board:`);
    }

    placeShip(shipName, shipSize, position, direction = 'horizontal') {
        const [x, y] = position;
    
        if (x < 0 || x >= this.board.length || y < 0 || y >= this.board.length) {
            return false; // Position out of bounds
        }
    
        if (direction === 'horizontal') {
            for (let i = 0; i < shipSize; i++) {
                if (this.board[x][y + i] !== null) {
                    return false; // Position already occupied
                }
                this.board[x][y + i] = shipName;
            }
        } else if (direction === 'vertical') {
            for (let i = 0; i < shipSize; i++) {
                if (this.board[x + i][y] !== null) {
                    return false; // Position already occupied
                }
                this.board[x + i][y] = shipName;
            }
        }
    
        this.ships.push(shipName); // Add the ship to the ships array
        return true; // Placement successful
    }

    checkHit(position) {
        const [x, y] = position;

        if (this.board[x][y] && this.board[x][y] !== 'X') {
            const ship = this.board[x][y];
            ship.hit();
            this.board[x][y] = 'X'; // Mark as hit
            return true;
        }
        return false;
    }

    printBoard() {
        console.table(this.board);
    }

    isGameOver() {
        return this.ships.every(ship => ship.isSunk());
    }

    clearBoard() {
        this.board = Array(this.board.length).fill(null).map(() => Array(this.board[0].length).fill(null));
        this.ships = [];
    }

    getShipsSunkCount() {
        return this.ships.filter(ship => ship.isSunk()).length;
    }

    getShipsLeftCount() {
        return this.ships.filter(ship => !ship.isSunk()).length;
    }

    getShipsOnBoard() {
        return this.ships;
    }
}
