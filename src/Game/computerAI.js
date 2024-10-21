import Player from './player.js';
import Ship from './ship.js';

export default class ComputerAI extends Player {
    constructor(name) {
        super(name);
    }

    placeShipsAutomatically(shipTypes) {
        shipTypes.forEach(shipType => {
            let placed = false;
            while (!placed) {
                const position = this.getRandomPosition();
                const orientation = this.getRandomOrientation();
                const ship = new Ship(shipType.name, shipType.length, position, orientation);
    
                if (this.canPlaceShip(ship)) {
                    // Once a valid position is found, place the ship
                    this.board.placeShip(ship.name, ship.length, ship.position, ship.orientation);
                    this.ships.push(ship); // Add the ship to the ships array
                    placed = true; // Set placed to true
                } else {
                    console.log(`Cannot place ${ship.name} at ${ship.position} ${orientation}, trying a new position...`);
                }
            }
        });
    }
    
    canPlaceShip(ship) {
        const [x, y] = ship.position;

        if (ship.orientation === 'horizontal') {
            // Check for out of bounds
            if (y + ship.length > this.board[0].length || x >= this.board.length) {
                return false; // Out of bounds
            }
            // Check for occupancy
            for (let i = 0; i < ship.length; i++) {
                if (this.board[x][y + i] !== null) {
                    return false; // Position occupied
                }
            }
        } else if (ship.orientation === 'vertical') {
            // Check for out of bounds
            if (x + ship.length > this.board.length || y >= this.board[0].length) {
                return false; // Out of bounds
            }
            // Check for occupancy
            for (let i = 0; i < ship.length; i++) {
                if (this.board[x + i][y] !== null) {
                    return false; // Position occupied
                }
            }
        }

        return true; // Ship can be placed
    }

    fireShot() {
        let shotPosition;
        let hit = false;

        while (!hit) {
            shotPosition = this.getRandomPosition();
            hit = this.shotHistory.some(shot => shot.target[0] === shotPosition[0] && shot.target[1] === shotPosition[1]) ? false : true;

            if (hit) {
                this.shotHistory.push({ target: shotPosition, hit: this.board.checkHit(shotPosition) });
            }
        }

        return shotPosition;
    }

    getRandomPosition() {
        const x = Math.floor(Math.random() * this.board.size);
        const y = Math.floor(Math.random() * this.board.size);
        return [x, y];
    }

    getRandomOrientation() {
        return Math.random() < 0.5 ? 'horizontal' : 'vertical'; // Randomly returns either 'horizontal' or 'vertical'
    }
}
