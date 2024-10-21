import Player from './player.js';
import Ship from './ship.js';

export default class ComputerAI extends Player {
    constructor(name) {
        super(name);
    }

    // Automatically place ships on the board
    placeShipsAutomatically(shipTypes) {
        shipTypes.forEach(shipType => {
            let placed = false;

            while (!placed) {
                const position = this.getRandomPosition();
                const direction = this.getRandomOrientation();
                console.log(shipType)
                const ship = new Ship(shipType.name, shipType.length, position, direction);
                console.log(ship); 

                if (this.canPlaceShip(ship)) {
                    this.board.placeShip(ship.name, ship.length, ship.position, ship.direction);
                    this.ships.push(ship); 
                    placed = true; 
                } else {
                    console.log(`Cannot place ${ship.name} at ${ship.position} ${direction}, trying a new position...`);
                }
            }
        });
    }

    canPlaceShip(ship) {
        const [x, y] = ship.position;

        console.log(`Checking position: ${ship.position}, Direction: ${ship.direction}`); 
        console.log(ship.length);

        if (ship.direction === 'horizontal') {
            if (y + ship.length > this.board[0].length || x >= this.board.length) {
                console.log(`Out of bounds: ${x}, ${y} with length ${ship.length}`);
                return false; // Out of bounds
            }
            // Check for occupancy
            for (let i = 0; i < ship.length; i++) {
                if (this.board[x][y + i] !== null) {
                    console.log(`Position occupied at: ${x}, ${y + i}`);
                    return false; // Position occupied
                }
            }
        } else if (ship.direction === 'vertical') {
            // Check for out of bounds
            if (x + ship.length > this.board.length || y >= this.board[0].length) {
                console.log(`Out of bounds: ${x}, ${y} with length ${ship.length}`);
                return false; // Out of bounds
            }
            // Check for occupancy
            for (let i = 0; i < ship.length; i++) {
                if (this.board[x + i][y] !== null) {
                    console.log(`Position occupied at: ${x + i}, ${y}`);
                    return false; // Position occupied
                }
            }
        }

        return true; // Ship can be placed
    }

    // Fire a shot at a random position on the board
    fireShot() {
        let shotPosition;
        let hit = false;

        do {
            shotPosition = this.getRandomPosition();
            // Check if the shot position has already been fired at
            hit = !this.shotHistory.some(shot => shot.target[0] === shotPosition[0] && shot.target[1] === shotPosition[1]);

            if (hit) {
                // Record the shot in history
                const hitResult = this.board.checkHit(shotPosition);
                this.shotHistory.push({ target: shotPosition, hit: hitResult });
            }
        } while (!hit); // Repeat until a new shot is fired

        return shotPosition; // Return the position of the shot
    }

    // Get a random position within the board
    getRandomPosition() {
        const x = Math.floor(Math.random() * this.board.size);
        const y = Math.floor(Math.random() * this.board.size);
        return [x, y];
    }

    // Get a random orientation for placing ships
    getRandomOrientation() {
        return Math.random() < 0.5 ? 'horizontal' : 'vertical'; // Randomly returns either 'horizontal' or 'vertical'
    }
}
