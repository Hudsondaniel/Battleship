import Player from './player.js';
import Ship from './ship.js';

export default class ComputerAI extends Player {
    constructor(name) {
        super(name); // No need to pass board here, it will be created in the Player class
    }

    // Automatically place ships on the board
    placeShipsAutomatically(shipTypes) {
        shipTypes.forEach(shipType => {
            let placed = false;

            while (!placed) {
                const position = this.getRandomPosition();
                const orientation = this.getRandomOrientation();
                const ship = new Ship(shipType.name, shipType.length, position, orientation);
                if (this.canPlaceShip(ship)) {
                    this.board.placeShip(ship.type, ship.length, ship.position, ship.direction);
                    this.ships.push(ship);
                    placed = true; 
                } else {
                    console.log(`Cannot place ${ship.name} at ${ship.position} ${orientation}, trying a new position...`);
                }
            }
        });
    }

    // Check if the ship can be placed at the given position and orientation
    canPlaceShip(ship) {
        const [x, y] = ship.position;

        console.log(`Checking position: ${ship.position}, Orientation: ${ship.direction}`); 
    
        if (ship.direction === 'horizontal') {
            if (y + ship.length > this.board.getSize() || x >= this.board.getSize()) { 
                console.log(`Out of bounds: ${x}, ${y} with length ${ship.length}`);
                return false; 
            }

            for (let i = 0; i < ship.length; i++) {
                if (this.board.getCell(x, y + i) !== null) { 
                    console.log(`Position occupied at: ${x}, ${y + i}`);
                    return false; 
                }
            }
        } else if (ship.direction === 'vertical') {
            if (x + ship.length > this.board.getSize() || y >= this.board.getSize()) {
                console.log(`Out of bounds: ${x}, ${y} with length ${ship.length}`);
                return false; 
            }
            for (let i = 0; i < ship.length; i++) {
                if (this.board.getCell(x + i, y) !== null) {
                    console.log(`Position occupied at: ${x + i}, ${y}`);
                    return false; 
                }
            }
        }

        return true; 
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
        const x = Math.floor(Math.random() * this.board.getSize()); // Use getSize() for both dimensions
        const y = Math.floor(Math.random() * this.board.getSize());
        return [x, y];
    }

    // Get a random orientation for placing ships
    getRandomOrientation() {
        return Math.random() < 0.5 ? 'horizontal' : 'vertical'; // Randomly returns either 'horizontal' or 'vertical'
    }
}
