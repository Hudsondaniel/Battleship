class GameManager {
    constructor(playerOne, computerPlayer) {
        this.playerOne = playerOne;
        this.computerPlayer = computerPlayer;
        this.isPlayerTurn = true;
        this.gameActive = true;
    }

    async playTurn() {
        if (this.isPlayerTurn) {
            console.log("Player's turn:");
            const position = await this.getPlayerInput();
            const attackResult = this.playerAttackComputer(position);
            console.log(`Player attack result: ${attackResult}`);
        } else {
            console.log("Computer's turn:");
            const attackResult = this.computerAttacksPlayer();
            console.log(`Computer attack result: ${attackResult}`);
        }

        if (this.isGameOver()) {
            this.gameActive = false;
            this.declareWinner();
        } else {
            this.isPlayerTurn = !this.isPlayerTurn; // Switch turns
        }
    }

    async getPlayerInput() {
        return new Promise((resolve) => {
            const position = prompt("Enter your attack coordinates (e.g., 0,1):");
            resolve(position.split(',').map(Number));
        });
    }

    playerAttackComputer(position) {
        const [x, y] = position;

        // Validate position
        if (x < 0 || x >= 10 || y < 0 || y >= 10) {
            return "Invalid position";
        }

        // Check if position was already attacked
        if (this.computerPlayer.board.board[x][y] === "X" || this.computerPlayer.board.board[x][y] === "H") {
            return "Position already attacked";
        }

        const targetCell = document.querySelector(`#player2-grid-cell-${x}-${y}`);
        const cellValue = this.computerPlayer.board.board[x][y];

        // Miss
        if (cellValue === null) {
            this.computerPlayer.board.board[x][y] = "X";
            this.computerPlayer.saveGameState();
            if (targetCell) targetCell.classList.add('miss');
            return "Miss";
        }

        // Hit
        const ship = this.computerPlayer.ships.find(s => s.type === cellValue);
        if (ship) {
            this.computerPlayer.board.board[x][y] = "H";
            ship.hit();
            this.computerPlayer.saveGameState();
            if (targetCell) targetCell.classList.add('hit');

            if (ship.isSunk()) return `Sunk ${ship.type}!`;
            return "Hit!";
        }

        return "Invalid";
    }

    computerAttacksPlayer() {
        const [x, y] = this.computerPlayer.getRandomPosition();

        if (this.playerOne.board.board[x][y] === "X" || this.playerOne.board.board[x][y] === "H") {
            return this.computerAttacksPlayer(); // Try a new position
        }

        const targetCell = document.querySelector(`#player1-grid-cell-${x}-${y}`);
        const cellValue = this.playerOne.board.board[x][y];

        // Miss
        if (cellValue === null) {
            this.playerOne.board.board[x][y] = "X";
            this.playerOne.saveGameState();
            if (targetCell) targetCell.classList.add('miss');
            return "Miss";
        }

        // Hit
        const ship = this.playerOne.ships.find(s => s.type === cellValue);
        if (ship) {
            this.playerOne.board.board[x][y] = "H";
            ship.hit();
            this.playerOne.saveGameState();
            if (targetCell) targetCell.classList.add('hit');

            if (ship.isSunk()) return `Sunk ${ship.type}!`;
            return "Hit!";
        }

        return "Invalid";
    }

    isGameOver() {
        return this.allPlayerShipSunk() || this.allComputerShipSunk();
    }

    allPlayerShipSunk() {
        return this.playerOne.ships.every(ship => ship.isSunk());
    }

    allComputerShipSunk() {
        return this.computerPlayer.ships.every(ship => ship.isSunk());
    }

    declareWinner() {
        if (this.allPlayerShipSunk()) {
            alert("Computer wins!");
        } else {
            alert("Player wins!");
        }
    }

    getState() {
        return {
            playerOne: this.playerOne.getState(),
            computerPlayer: this.computerPlayer.getState(),
            isPlayerTurn: this.isPlayerTurn,
            gameActive: this.gameActive,
        };
    }

    static fromState(state) {
        const playerOne = Player.fromState(state.playerOne);
        const computerPlayer = ComputerAI.fromState(state.computerPlayer);
        const gameManager = new GameManager(playerOne, computerPlayer);
        gameManager.isPlayerTurn = state.isPlayerTurn;
        gameManager.gameActive = state.gameActive;
        return gameManager;
    }
}
