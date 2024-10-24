import Player from './player.js';
import ComputerAI from './computerAI.js';
import Ship from './ship.js';
import board from './gameBoard.js';

export default class Game {
    constructor(player, computer) {
        this.player = player;
        this.computer = computer;
    }

    startGame() {
        let turn = this.player;
        while (!this.isGameOver()) {
            if (turn === this.player) {
                this.playerTurn();
                turn = this.computer;
            } else {
                this.computerTurn();
                turn = this.player;
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

