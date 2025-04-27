import './style.css';
import createGameBoard from './Game/gameBoardUI.js';
import Player from './Game/player.js';
import Ship from './Game/ship.js';
import ComputerAI from './Game/computerAI.js';
import { 
    initUI, 
    showStartModal, 
    hideStartModal, 
    showGameModal, 
    hideGameModal, 
    showGameInterface, 
    hideGameInterface, 
    movePlayerGridToGameArea, 
    renderGameState 
} from './Game/ui.js';
import { 
    shipsToPlace, 
    initPlacement, 
    updatePlacementUI, 
    setupPlacementListeners, 
    removePlacementListeners, 
    resetPlacement, 
    getPlacedShips 
} from './Game/placement.js';
import { 
    isPlayerTurn, 
    gameActive, 
    gameInProgress, 
    checkGameInProgress, 
    processAttack, 
    parseCellId, 
    checkGameOver, 
    declareWinner, 
    newGame, 
    placeRandomShips, 
    setupBoard 
} from './Game/gameState.js';

// Game state variables
let gameIsActive = gameActive;
let gameIsPlayerTurn = isPlayerTurn;
let gameIsInProgress = gameInProgress;

// Initialize players
const playerOneBoard = new Player("Hudson", [
    new Ship('Carrier', 5, [0, 0], 'vertical'),
    new Ship('Battleship', 4, [0, 3], 'horizontal'),
    new Ship('Destroyer', 3, [6, 0], 'vertical'),
    new Ship('Submarine', 3, [4, 4], 'horizontal'),
    new Ship('Patrol Boat', 2, [7, 7], 'vertical'),
]);

const computerPlayer = new ComputerAI('computer');

// Create opponent grid
createGameBoard('player2-grid', 10);

// Initialize game on load
function initializeGame() {
    // Initialize UI elements
    initUI();
    
    // Add event listeners
    document.getElementById('player2-grid').addEventListener('click', handlePlayerAttack);
    document.getElementById('new-game-button').addEventListener('click', handleNewGame);
    
    // Check if game is in progress
    gameIsInProgress = checkGameInProgress(playerOneBoard.name);
    
    if (gameIsInProgress) {
        // First create the player1 grid in both the modal and main game area
        if (!document.getElementById('player1-grid') || 
            !document.getElementById('player1-grid').children.length) {
            createGameBoard('player1-grid', 10);
        }
        
        // Load game data for both players
        playerOneBoard.loadGameState();
        computerPlayer.loadGameState();
        
        // Move player grid to game area
        movePlayerGridToGameArea();
        
        // Now render the boards after they exist
        renderGameState(playerOneBoard, 'player1-grid', false); // Don't hide player ships!
        renderGameState(computerPlayer, 'player2-grid', true); // Hide computer ships
        
        // Hide placement modal, show game interface
        hideStartModal();
        showGameInterface();
    } else {
        // Create the player grid in the modal for placement
        if (!document.getElementById('player1-grid') || 
            !document.getElementById('player1-grid').children.length) {
            createGameBoard('player1-grid', 10);
        }
        
        // New game - set up computer ships
        placeRandomShips(computerPlayer, [
            { name: 'Carrier', length: 5 },
            { name: 'Battleship', length: 4 },
            { name: 'Destroyer', length: 3 },
            { name: 'Submarine', length: 3 },
            { name: 'Patrol Boat', length: 2 },
        ]);
        
        // Initialize ship placement UI
        initPlacement();
        
        // Show placement modal, hide game interface
        showStartModal();
        
        // Add start game button listener
        document.getElementById('start-game-button').addEventListener('click', handleStartGame);
        document.getElementById('close-modal-button').addEventListener('click', hideGameModal);
    }
}

// Player attack handler
function handlePlayerAttack(event) {
    if (!gameIsActive || !gameIsPlayerTurn) return;

    const cell = event.target;
    const position = parseCellId(cell.id);

    if (!position || cell.classList.contains('hit') || cell.classList.contains('miss')) {
        alert('Invalid move or position already attacked.');
        return;
    }

    const [x, y] = position;
    const result = processAttack(computerPlayer, x, y, cell);

    console.log(`Player attack result: ${result}`);
    playerOneBoard.saveGameState(); // Save after attack
    computerPlayer.saveGameState(); // Save after attack

    // Notify player if a ship was sunk
    if (typeof result === 'string' && result.startsWith('Sunk')) {
        showGameModal('Ship Sunk!', `You sunk the opponent's ${result.replace('Sunk ', '').replace('!', '')}!`);
        setTimeout(() => hideGameModal(), 1500);
    }

    if (checkGameOver(playerOneBoard, computerPlayer)) return;

    gameIsPlayerTurn = false;
    setTimeout(handleComputerAttack, 1000);
}

// Computer attack handler
function handleComputerAttack() {
    if (!gameIsActive || gameIsPlayerTurn) return;

    const [x, y] = computerPlayer.getRandomPosition();
    const cell = document.getElementById(`player1-grid-cell-${x}-${y}`);
    const result = processAttack(playerOneBoard, x, y, cell);

    console.log(`Computer attack result: ${result}`);
    playerOneBoard.saveGameState(); // Save after attack
    computerPlayer.saveGameState(); // Save after attack

    if (checkGameOver(playerOneBoard, computerPlayer)) return;

    gameIsPlayerTurn = true;
}

// Handle start game button click
function handleStartGame() {
    // Remove event listeners for placement
    removePlacementListeners();
    
    // Move grid to main gameboard
    movePlayerGridToGameArea();
    
    // Set up playerOneBoard with placed ships
    const placedShips = getPlacedShips();
    setupBoard(playerOneBoard, placedShips);
    
    // Save game state and prepare game
    computerPlayer.saveGameState();
    gameIsInProgress = true;
    
    // Update UI
    hideStartModal();
    showGameInterface();
}

// Handle new game button click
function handleNewGame() {
    const { gameInProgress, gameActive, isPlayerTurn } = newGame(playerOneBoard, computerPlayer);
    gameIsInProgress = gameInProgress;
    gameIsActive = gameActive;
    gameIsPlayerTurn = isPlayerTurn;
    
    // Reset UI for placement
    resetPlacement();
    
    // Make sure grids are properly rendered
    renderGameState(playerOneBoard, 'player1-grid');
    renderGameState(computerPlayer, 'player2-grid', true);
    
    // Update UI state
    showStartModal();
    hideGameInterface();

    // Re-initialize ship placement UI and listeners
    initPlacement();
}

// Initialize the game when DOM is ready
document.addEventListener('DOMContentLoaded', initializeGame);

