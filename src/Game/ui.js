// UI Module - Handles UI-related functionality

// UI Elements
let startModal;
let gameModal;
let modalTitle;
let modalMessage;
let startGameButton;
let closeModalButton;
let newGameButton;
let player2Grid;
let rotateShipButton;
let player1Grid;
let resetPlacementButton;
let shipList;

// Initialize UI elements
function initUI() {
    startModal = document.getElementById('start-modal');
    gameModal = document.getElementById('game-modal');
    modalTitle = document.getElementById('modal-title');
    modalMessage = document.getElementById('modal-message');
    startGameButton = document.getElementById('start-game-button');
    closeModalButton = document.getElementById('close-modal-button');
    newGameButton = document.getElementById('new-game-button');
    player2Grid = document.getElementById('player2-grid');
    rotateShipButton = document.getElementById('rotate-ship-button');
    player1Grid = document.getElementById('player1-grid');
    resetPlacementButton = document.getElementById('reset-placement-button');
    shipList = document.getElementById('ship-list');
}

// Modal functions
function showStartModal() {
    startModal.style.display = 'flex';
    player2Grid.style.pointerEvents = 'none';
    newGameButton.style.display = 'none';
}

function hideStartModal() {
    startModal.style.display = 'none';
    player2Grid.style.pointerEvents = 'auto';
    newGameButton.style.display = 'inline-block';
}

function showGameModal(title, message) {
    modalTitle.textContent = title;
    modalMessage.textContent = message;
    gameModal.classList.add('active');
    gameModal.style.display = 'flex';
    player2Grid.style.pointerEvents = 'none';
}

function hideGameModal() {
    gameModal.classList.remove('active');
    gameModal.style.display = 'none';
    player2Grid.style.pointerEvents = 'auto';
}

// Game interface functions
function showGameInterface() {
    if (newGameButton) newGameButton.style.display = 'inline-block';
    movePlayerGridToGameArea();
}

function hideGameInterface() {
    if (newGameButton) newGameButton.style.display = 'none';
}

// Move player1-grid from modal to game area
function movePlayerGridToGameArea() {
    const playerGridContainer = document.querySelector('.player-1 .inner-container');
    const playerGrid = document.getElementById('player1-grid');
    
    if (playerGrid && playerGridContainer && !playerGridContainer.contains(playerGrid)) {
        playerGridContainer.appendChild(playerGrid);
    }
}

// Render the game state onto the grid
function renderGameState(player, gridId, hideShips = false) {
    const board = player.board.board;
    const grid = document.getElementById(gridId);
    if (!grid) {
        console.error(`Grid with ID ${gridId} not found`);
        return;
    }

    // Clear all cell classes and text before rendering
    Array.from(grid.children).forEach(cell => {
        if (cell.classList.contains('cell')) {
            cell.classList.remove('ship', 'miss', 'hit');
            cell.textContent = '';
            cell.style.backgroundColor = '';
        }
    });

    // Render ships first (if not hiding)
    if (!hideShips && player.ships) {
        player.ships.forEach(ship => {
            if (!ship.position) return;
            const [x, y] = ship.position;
            const direction = ship.direction;
            for (let i = 0; i < ship.length; i++) {
                let xi = direction === 'horizontal' ? x : x + i;
                let yi = direction === 'horizontal' ? y + i : y;
                const cellId = `${gridId}-cell-${xi}-${yi}`;
                const cell = document.getElementById(cellId);
                if (cell) {
                    cell.classList.add('ship');
                    cell.style.backgroundColor = '#cacbd8';
                }
            }
        });
    }

    // Then render hits and misses (they override ship display)
    for (let x = 0; x < board.length; x++) {
        for (let y = 0; y < board[x].length; y++) {
            const cellId = `${gridId}-cell-${x}-${y}`;
            const cell = document.getElementById(cellId);
            if (!cell) continue;
            
            const cellValue = board[x][y];
            if (cellValue === "X") {
                cell.classList.remove('ship');
                cell.classList.add('miss');
                cell.textContent = 'X';
            } else if (cellValue === "H") {
                cell.classList.add('hit');
                cell.textContent = 'H';
            }
        }
    }
}

// Add shake animation for invalid placement
function shakeGrid() {
    player1Grid.classList.add('shake');
    setTimeout(() => player1Grid.classList.remove('shake'), 400);
}

// Export functions
export {
    initUI,
    showStartModal,
    hideStartModal,
    showGameModal,
    hideGameModal,
    showGameInterface,
    hideGameInterface,
    movePlayerGridToGameArea,
    renderGameState,
    shakeGrid
}; 