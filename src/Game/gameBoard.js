export default class GameBoard {
    constructor(size, name) {
        this.board = Array(size).fill(null).map(() => Array(size).fill(null));
        this.ships = []; 
        this.name = name;
        this.printName();
        this.size = size;
    }

    serializeBoard() {
        return {
            size: this.size,
            grid: this.board
        };
    }

    deserializeBoard(serializedData) {
        this.size = serializedData.size;
        this.board = serializedData.grid || serializedData.board; // Ensure correct deserialization
        //console.table(this.board); // Debugging step
    }

    // Example method to display the board
    printBoard() {
        return this.grid;
    }

    printName(){
        console.log(`Player ${this.name}'s Board:`);
    }

    placeShip(shipName, shipSize, position, direction = 'horizontal') {
        const [x, y] = position;
    

        if (x < 0 || x >= this.board.length || y < 0 || y >= this.board[x].length) {
            return false; 
        }
    
        if (direction === 'horizontal') {
            if (y + shipSize > this.board[x].length) {
                return false; 
            }
            for (let i = 0; i < shipSize; i++) {
                if (this.board[x][y + i] !== null) {
                    return false; 
                }
            }
            for (let i = 0; i < shipSize; i++) {
                this.board[x][y + i] = shipName; 
            }
        } else if (direction === 'vertical') {
            if (x + shipSize > this.board.length) {
                return false; 
            }
            for (let i = 0; i < shipSize; i++) {
                if (this.board[x + i][y] !== null) {
                    return false; 
                }
            }
            for (let i = 0; i < shipSize; i++) {
                this.board[x + i][y] = shipName; 
            }
        }

        this.ships.push(shipName); 
        return true; 
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
        if (x < 0 || x >= this.size || y < 0 || y >= this.size) {
            return null; 
        }
        return this.board[x][y]; 
    }
}
