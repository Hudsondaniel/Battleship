import './style.css';
import createGameBoard from './Game/gameBoardUI.js';
import Player from './Game/player.js';
import Ship from './Game/ship.js';
import ComputerAI from './Game/computerAI.js';
import Game from './Game/game.js';


// Initiate game UI to which You would be adding the backend details
createGameBoard('player1-grid', 10);  
createGameBoard('player2-grid', 10);

const playerOneBoard = new Player("Hudson", [
    new Ship('Carrier', 5, [0, 0], 'vertical'),      
    new Ship('Battleship', 4, [0, 3], 'horizontal'), 
    new Ship('Destroyer', 3, [6, 0], 'vertical'),    
    new Ship('Submarine', 3, [4, 4], 'horizontal'),  
    new Ship('Patrol Boat', 2, [7, 7], 'vertical'),  
]);

playerOneBoard.placeShipPlayer();

const computerPlayer = new ComputerAI('computer');
computerPlayer.placeShipsAutomatically([
    {name: 'carrier', length: 5},
    {name: 'Battleship', length: 4},
    {name: 'Destroyer', length: 3},
    {name: 'Submarine', length: 3},
    {name: 'Patrol Boat', length: 2}
]);

playerOneBoard.initialize();
computerPlayer.initialize();

// Load game states for both players
playerOneBoard.loadGameState();
computerPlayer.loadGameState();

startGame();

async function startGame() {
    let isPlayerTurn = true;
    
    while(true){
        if (isPlayerTurn) {
            console.log("Player Choose a position to attack:");
            const position = await getPlayerInput(); // Function to get input asynchronously
            playerAttackComputer(position);
        } 
        
        if (!isPlayerTurn){
            console.log("Computer is choosing a spot to attack:");
            computerAttacksPlayer();
        }
        console.log(isPlayerTurn);
        // Toggle the turn
        isPlayerTurn = !isPlayerTurn;
    
        // Check for game over conditions
        // if (!isGameOver()) {
        //     nextTurn(); // Call the next turn if the game isn't over
        // } else {
        //     declareWinner(); // Handle declaring the winner
        // }
    }
}

function getPlayerInput() {
    return new Promise((resolve) => {
        const position = prompt("Enter your attack coordinates (e.g., 0,1):");
        resolve(position.split(',').map(Number)); // Convert input to array of numbers
    });
}

// Updating the board for computer when the player attacks

function playerAttackComputer(position) {
    const [x, y] = position;
    
    if(computerPlayer.board.board[x][y] === null){
        computerPlayer.board.board[x][y] = "X";
        return;
    }
    // Update the computer's board
    if(computerPlayer.board.board[x][y] === "X"){
        console.log("Invalid! You have already hit this position!")
    };

    const cellValue = computerPlayer.board.board[x][y];
    let ship; // Declare ship variable outside of the switch

    switch (cellValue) {   
        case "Battleship":
            console.log(`Before Hit: ${computerPlayer.board.board[x][y]}`);
            computerPlayer.board.board[x][y] = "H";
            console.log(`After Hit: ${computerPlayer.board.board[x][y]}`);

            ship = computerPlayer.ships.find(s => s.type === "Battleship");
            break;

        case "Carrier":
            console.log(`Before Hit: ${computerPlayer.board.board[x][y]}`);
            computerPlayer.board.board[x][y] = "H";
            console.log(`After Hit: ${computerPlayer.board.board[x][y]}`);

            ship = computerPlayer.ships.find(s => s.type === "carrier");
            break;

        case "Submarine":
            console.log(`Before Hit: ${computerPlayer.board.board[x][y]}`);
            computerPlayer.board.board[x][y] = "H";
            console.log(`After Hit: ${computerPlayer.board.board[x][y]}`);

            ship = computerPlayer.ships.find(s => s.type === "Submarine");
            break;

        case "Destroyer":
            console.log(`Before Hit: ${computerPlayer.board.board[x][y]}`);
            computerPlayer.board.board[x][y] = "H";
            console.log(`After Hit: ${computerPlayer.board.board[x][y]}`);

            ship = computerPlayer.ships.find(s => s.type === "Destroyer");
            break;

        case "Patrol Boat":
            console.log(`Before Hit: ${computerPlayer.board.board[x][y]}`);
            computerPlayer.board.board[x][y] = "H";
            console.log(`After Hit: ${computerPlayer.board.board[x][y]}`);

            ship = computerPlayer.ships.find(s => s.type === "Patrol Boat");
            break;

        default:
            console.log("Missed or invalid target.");
            return; // Exit the function if it's a miss or invalid
    }

    // After the switch, handle the hit logic if a ship was found
    if (ship) {
        ship.hit();
        console.log(`Hit! Player hit the ${ship.type}. Total hits: ${ship.hits}`);
    }

    console.log(computerPlayer.ships)
    computerPlayer.saveGameState();
}

function computerAttacksPlayer() {
    const [x, y] = computerPlayer.getRandomPosition();
    console.log([x, y]);
    if(playerOneBoard.board.board[x][y] === null){
        playerOneBoard.board.board[x][y] = "X";
        console.log("Marked a NULL spot!")
        return;
    }
    
    // Update the players board
    if(playerOneBoard.board.board[x][y] === "X"){
        console.log("Invalid! You have already hit this position!")
    };

    const cellValue = playerOneBoard.board.board[x][y];
    console.log(cellValue)
    let ship; 

    switch (cellValue) {   
        case "Battleship":
            console.log(`Before Hit: ${playerOneBoard.board.board[x][y]}`);
            playerOneBoard.board.board[x][y] = "H";
            console.log(`After Hit: ${playerOneBoard.board.board[x][y]}`);

            ship = playerOneBoard.ships.find(s => s.type === "Battleship");
            break;

        case "Carrier":
            console.log(`Before Hit: ${playerOneBoard.board.board[x][y]}`);
            playerOneBoard.board.board[x][y] = "H";
            console.log(`After Hit: ${playerOneBoard.board.board[x][y]}`);

            ship = playerOneBoard.ships.find(s => s.type === "carrier");
            break;

        case "Submarine":
            console.log(`Before Hit: ${playerOneBoard.board.board[x][y]}`);
            playerOneBoard.board.board[x][y] = "H";
            console.log(`After Hit: ${playerOneBoard.board.board[x][y]}`);

            ship = playerOneBoard.ships.find(s => s.type === "Submarine");
            break;

        case "Destroyer":
            console.log(`Before Hit: ${playerOneBoard.board.board[x][y]}`);
            playerOneBoard.board.board[x][y] = "H";
            console.log(`After Hit: ${playerOneBoard.board.board[x][y]}`);

            ship = playerOneBoard.ships.find(s => s.type === "Destroyer");
            break;

        case "Patrol Boat":
            console.log(`Before Hit: ${playerOneBoard.board.board[x][y]}`);
            playerOneBoard.board.board[x][y] = "H";
            console.log(`After Hit: ${playerOneBoard.board.board[x][y]}`);

            ship = playerOneBoard.ships.find(s => s.type === "Patrol Boat");
            break;

        default:
            console.log("Missed or invalid target.");
            return; // Exit the function if it's a miss or invalid
    }

    // After the switch, handle the hit logic if a ship was found
    if (ship) {
        ship.hit();
        console.log(`Hit! Computer hit the ${ship.type}. Total hits: ${ship.hits}`);
    }
    console.log("This is players ships")
    console.log(playerOneBoard.ships)
    playerOneBoard.saveGameState();
}

function newGame(){
    // Reset game board and players
    localStorage.clear();
}