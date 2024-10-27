export default class Game {
    constructor(player, computer, playerBoard, computerBoard) {
        this.player = player;
        this.computer = computer;
        this.playerBoard = playerBoard;
        this.computerBoard = computerBoard;
        this.turnCount = 0; // Temporary counter to prevent infinite loop in testing
    }

    start() {
        console.log(`${this.player}, welcome to Battleship!`);
        let turn = this.player;

        // Limit the loop to a maximum of 20 turns for debugging purposes
        // while (!this.isGameOver() && this.turnCount < 20) {
            if (turn === this.player) {
                this.playerTurn();
                turn = this.computer;
            } else {
                this.computerTurn();
                turn = this.player;
            }
            this.turnCount++;
        // }

        // this.declareWinner();
    }

    playerTurn() {
        const position = [2, 2];
        const [x, y] = position;
        console.log(`Player is firing at position: ${position}`);
        this.playerBoard.board[x][y] = "X";

    }

    computerTurn() {
        const target = [3, 3];
        console.log(`Computer is firing at position: ${target}`);
    }

    isGameOver() {
        // Implement logic to check if all ships of either player or computer are destroyed
        return false;
    }

    declareWinner() {
        if (this.player.isGameOver()) {
            console.log("Computer wins!");
        } else if (this.computer.isGameOver()) {
            console.log("You win!");
        } else {
            console.log("It's a draw!");
        }
    }
}
