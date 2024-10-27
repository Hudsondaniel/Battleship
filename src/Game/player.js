import GameBoard from "./gameBoard.js";
import Ship from "./ship.js";

export default class Player {
    constructor(name, ships = []) {
        this.name = name;
        this.board = this.createBoard(10); 
        this.ships = ships;
        this.shotHistory = [];
    }

    
    // Method to initialize the game with the saved board.
    initialize() {
        const player = localStorage.getItem(this.name);
        if(!player){
            this.saveGameState();
        }
        return true;
    }

    //Saves the current board
    saveGameState(){
        // Custom serialization to extract the essential information
        const gameState = {
            name: this.name,
            board: this.board.serializeBoard(), // We will define this method below
            ships: this.ships.map(ship => ({
                type: ship.type,
                length: ship.length,
                position: ship.position,
                direction: ship.direction
            })),
            shotHistory: this.shotHistory
        };
    
        localStorage.setItem(this.name, JSON.stringify(gameState));
        //console.log("Game saved:", localStorage.getItem("gameState"));
    }
    
    //Loads the current/updated board
    loadGameState(){
        const savedGameState = JSON.parse(localStorage.getItem(this.name));
        if (savedGameState) {
            // Reconstruct board
            this.board = new GameBoard(10, this.name);
            this.board.deserializeBoard(savedGameState.board);  // Custom deserialization method
            
            // Reconstruct ships
            this.ships = savedGameState.ships.map(shipData => new Ship(shipData.type, shipData.length, shipData.position, shipData.direction));
    
            // Restore shot history
            this.shotHistory = savedGameState.shotHistory;
            console.log(this.name)
            console.table("Game loaded:", this.board.board, this.ships, this.shotHistory);
            console.table(this.board.board)
        } else {
            console.log("No saved game found.");
        }
    }
    
    playerShips(){
        this.ships.forEach(
            ship => console.log(ship)
        )
    }
    createBoard(size, name) {
        const newBoard = new GameBoard(size, this.name);
        return newBoard;
    }

    placeShipPlayer() {
        this.ships.forEach(
            ship => this.board.placeShip(ship.type, ship.length, ship.position, ship.direction)
        );
    }

    playerGetShot() {
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

    isSunk() {
        return this.ships.every(ship => ship.isSunk()); 
    }

    getShipsLeft() {
        return this.ships.filter(ship => !ship.isSunk()).length; 
    }

    getBoard() {
        return this.board;
    }

    getName() {
        console.log(this.name);
    }

    getScore() {
        return this.shotHistory.filter(shot => shot.hit).length; 
    }

    getHealth() {
        return this.ships.reduce((total, ship) => total + ship.getHealth(), 0); 
    }

    isGameOver() {
        return this.getShipsLeft() === 0; 
    }

    getRemainingShots() {
        return 100 - this.shotHistory.length; 
    }

    // Returns the current game status
    getGameStatus() {
        return {
            score: this.getScore(),
            shipsLeft: this.getShipsLeft(),
            health: this.getHealth(),
            remainingShots: this.getRemainingShots(),
            isGameOver: this.isGameOver(),
        };
    }

    // Returns the history of all shots made by the player
    getShotHistory() {
        return this.shotHistory;
    }
}
