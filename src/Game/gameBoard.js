export default class GameBoard {
    constructor(size) {
        this.board = Array(size).fill(null).map(() => Array(size).fill(null));
        this.ships = []; // Keep track of ships on the board
    }

    placeShip(ship, position, direction = 'horizontal') {
        const [x, y] = position;

        if (x < 0 || x >= this.board.length || y < 0 || y >= this.board.length) {
            throw new Error('Position out of bounds');
        }

        if (direction === 'horizontal') {
            for (let i = 0; i < ship.length; i++) {
                if (this.board[x][y + i] !== null) {
                    throw new Error('Position already occupied or out of bounds');
                }
                this.board[x][y + i] = ship;
            }
        } else if (direction === 'vertical') {
            for (let i = 0; i < ship.length; i++) {
                if (this.board[x + i][y] !== null) {
                    throw new Error('Position already occupied or out of bounds');
                }
                this.board[x + i][y] = ship;
            }
        }

        this.ships.push(ship); // Add the ship to the ships array
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
