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
                const ship = new Ship(shipType.name, shipType.length, position);

                // Check if the ship can be placed at the generated position
                if (this.board.canPlaceShip(ship, orientation)) {
                    this.board.placeShip(ship, position, orientation);
                    this.ships.push(ship);
                    placed = true;
                }
            }
        });
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
