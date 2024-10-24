import Player from './player.js';
import ComputerAI from './computerAI.js';
import Ship from './ship.js';
import board from './gameBoard.js';

export default class Game {
    constructor(player, computer) {
        this.player = player;
        this.computer = computer;
    }

    start() {
        console.log(`${this.player}, welcome to Battleship!`);
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

    playerTurn() {
        console.log(this.player + "enter the target: ")
        const position = [0, 2];
        this.player.fireShot(position);
        // const hit = this.computer.fireShot(target);
        // this.player.shotHistory.push({ target, hit });
        // console.log(`You fired at ${target} and ${hit ? 'hit!' : 'missed!'}`);
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
        return false;
    }

    declareWinner() {
        if (this.player.isGameOver()) {
            console.log("Computer wins!");
        } else {
            console.log("You win!");
        }
    }
}

