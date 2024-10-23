import Player from './player.js';
import ComputerAI from './computerAI.js';
import Ship from './ship.js';
import board from './gameBoard.js';

class Game {
    constructor(playerName) {
        this.player = new Player(playerName);
        this.computer = new ComputerAI('Computer');
        this.shipTypes = [
            { name: 'Battleship', length: 4 },
            { name: 'Destroyer', length: 3 },
            { name: 'Submarine', length: 3 },
            { name: 'Patrol Boat', length: 2 },
        ];
        this.initializeGame();
    }

    initializeGame() {
        this.player.placeShipsAutomatically(this.shipTypes);
        this.computer.placeShipsAutomatically(this.shipTypes);
    }

    startGame() {
        let turn = 'player';
        while (!this.isGameOver()) {
            if (turn === 'player') {
                this.playerTurn();
                turn = 'computer';
            } else {
                this.computerTurn();
                turn = 'player';
            }
        }
        this.declareWinner();
    }

    playerTurn(position) {
        const target = this.getPlayerTarget();
        const hit = this.computer.fireShot(target);
        this.player.shotHistory.push({ target, hit });
        console.log(`You fired at ${target} and ${hit ? 'hit!' : 'missed!'}`);
    }

    computerTurn() {
        const target = this.computer.fireShot();
        const hit = this.player.fireShot(target);
        console.log(`Computer fired at ${target} and ${hit ? 'hit!' : 'missed!'}`);
    }

    getPlayerTarget(position) {
        const [x, y] = position; 
        this.board[x][y] = 'X'; 
    }
    

    isGameOver() {
        return this.player.isGameOver() || this.computer.isGameOver();
    }

    declareWinner() {
        if (this.player.isGameOver()) {
            console.log("Computer wins!");
        } else {
            console.log("You win!");
        }
    }
}

