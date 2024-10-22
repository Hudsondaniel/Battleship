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
    
        // Check if the starting position is out of bounds
        if (x < 0 || x >= this.board.length || y < 0 || y >= this.board[x].length) {
            return false; // Position out of bounds
        }
    
        // Check if the ship can fit based on the direction
        if (direction === 'horizontal') {
            if (y + shipSize > this.board[x].length) {
                return false; // Ship cannot fit horizontally
            }
            for (let i = 0; i < shipSize; i++) {
                if (this.board[x][y + i] !== null) {
                    return false; // Position already occupied
                }
            }
            for (let i = 0; i < shipSize; i++) {
                this.board[x][y + i] = shipName; // Place the ship
            }
        } else if (direction === 'vertical') {
            if (x + shipSize > this.board.length) {
                return false; // Ship cannot fit vertically
            }
            for (let i = 0; i < shipSize; i++) {
                if (this.board[x + i][y] !== null) {
                    return false; // Position already occupied
                }
            }
            for (let i = 0; i < shipSize; i++) {
                this.board[x + i][y] = shipName; // Place the ship
            }
        }
    
        // Optionally, create a Ship object instead of just using the name
        // this.ships.push(new Ship(shipName, shipSize, position, direction));
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
    getSize() {
        return this.size; 
    }

    getCell(x, y) {
        // Check if the coordinates are within the bounds of the board
        if (x < 0 || x >= this.size || y < 0 || y >= this.size) {
            return null; // Return null if out of bounds
        }
        return this.board[x][y]; // Return the value of the cell
    }
}
