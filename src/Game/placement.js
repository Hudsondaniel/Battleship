// Ship Placement Module

import { shakeGrid } from './ui.js';

// Ship placement data
const shipsToPlace = [
    { name: 'Carrier', length: 5 },
    { name: 'Battleship', length: 4 },
    { name: 'Destroyer', length: 3 },
    { name: 'Submarine', length: 3 },
    { name: 'Patrol Boat', length: 2 },
];

let placementState = {
    ships: shipsToPlace.map(s => ({ ...s, placed: false, position: null, direction: 'horizontal' })),
    current: 0,
    direction: 'horizontal',
};

// UI references
let shipList;
let player1Grid;
let startGameBtn;

// Initialize placement UI and state
function initPlacement() {
    shipList = document.getElementById('ship-list');
    player1Grid = document.getElementById('player1-grid');
    startGameBtn = document.getElementById('start-game-button');
    
    renderShipList();
    setupPlacementListeners();
}

// Update placement UI
function updatePlacementUI() {
    renderShipList();
    startGameBtn.disabled = !placementState.ships.every(s => s.placed);
}

// Render the ship list in the placement modal
function renderShipList() {
    shipList.innerHTML = '';
    placementState.ships.forEach((ship, idx) => {
        const li = document.createElement('li');
        li.textContent = `${ship.name} (${ship.length})`;
        if (ship.placed) li.classList.add('placed');
        if (idx === placementState.current && !ship.placed) li.classList.add('selected');
        li.addEventListener('click', () => {
            if (!ship.placed) {
                placementState.current = idx;
                updatePlacementUI();
            }
        });
        shipList.appendChild(li);
    });
}

// Mouse event handlers for ship placement
function handlePlacementHover(e) {
    if (!isPlacingShips()) return;
    const cell = e.target;
    if (!cell.classList.contains('cell')) return;
    const x = parseInt(cell.dataset.x);
    const y = parseInt(cell.dataset.y);
    const ship = placementState.ships[placementState.current];
    highlightPlacement(x, y, ship.length, placementState.direction, canPlaceShip(x, y, ship.length, placementState.direction));
}

function clearPlacementHover() {
    Array.from(player1Grid.children).forEach(cell => cell.classList.remove('placement-ok', 'placement-bad'));
}

function handlePlacementClick(e) {
    if (!isPlacingShips()) return;
    const cell = e.target;
    if (!cell.classList.contains('cell')) return;
    const x = parseInt(cell.dataset.x);
    const y = parseInt(cell.dataset.y);
    const ship = placementState.ships[placementState.current];
    if (canPlaceShip(x, y, ship.length, placementState.direction)) {
        placeShipOnGrid(x, y, ship.length, placementState.direction, ship.name);
        ship.placed = true;
        ship.position = [x, y];
        ship.direction = placementState.direction;
        // Move to next unplaced ship
        const next = placementState.ships.findIndex(s => !s.placed);
        placementState.current = next === -1 ? 0 : next;
        updatePlacementUI();
    } else {
        shakeGrid();
    }
}

// Helper for checking if placement is active
function isPlacingShips() {
    const startModal = document.getElementById('start-modal');
    return startModal.style.display !== 'none' && placementState.ships.some(s => !s.placed);
}

// Check if a ship can be placed at the given position
function canPlaceShip(x, y, length, direction) {
    // Check bounds and overlap
    for (let i = 0; i < length; i++) {
        let xi = direction === 'horizontal' ? x : x + i;
        let yi = direction === 'horizontal' ? y + i : y;
        if (xi > 9 || yi > 9) return false;
        const cell = document.getElementById(`player1-grid-cell-${xi}-${yi}`);
        if (!cell || cell.classList.contains('ship')) return false;
    }
    return true;
}

// Highlight cells for ship placement
function highlightPlacement(x, y, length, direction, ok) {
    clearPlacementHover();
    for (let i = 0; i < length; i++) {
        let xi = direction === 'horizontal' ? x : x + i;
        let yi = direction === 'horizontal' ? y + i : y;
        const cell = document.getElementById(`player1-grid-cell-${xi}-${yi}`);
        if (cell) cell.classList.add(ok ? 'placement-ok' : 'placement-bad');
    }
}

// Place ship on the grid
function placeShipOnGrid(x, y, length, direction, name) {
    for (let i = 0; i < length; i++) {
        let xi = direction === 'horizontal' ? x : x + i;
        let yi = direction === 'horizontal' ? y + i : y;
        const cell = document.getElementById(`player1-grid-cell-${xi}-${yi}`);
        if (cell) {
            cell.classList.add('ship');
            cell.style.backgroundColor = '#cacbd8';
        }
    }
}

// Add placement event listeners
function setupPlacementListeners() {
    player1Grid.addEventListener('mouseover', handlePlacementHover);
    player1Grid.addEventListener('mouseout', clearPlacementHover);
    player1Grid.addEventListener('click', handlePlacementClick);
    
    // Rotate button listener
    const rotateShipButton = document.getElementById('rotate-ship-button');
    if (rotateShipButton) {
        rotateShipButton.addEventListener('click', () => {
            placementState.direction = placementState.direction === 'horizontal' ? 'vertical' : 'horizontal';
        });
    }
    
    // Reset button listener
    const resetPlacementButton = document.getElementById('reset-placement-button');
    if (resetPlacementButton) {
        resetPlacementButton.addEventListener('click', resetPlacement);
    }
}

// Clean up placement event listeners
function removePlacementListeners() {
    player1Grid.removeEventListener('mouseover', handlePlacementHover);
    player1Grid.removeEventListener('mouseout', clearPlacementHover);
    player1Grid.removeEventListener('click', handlePlacementClick);
}

// Reset ship placement
function resetPlacement() {
    // Reset placement state
    placementState = {
        ships: shipsToPlace.map(s => ({ ...s, placed: false, position: null, direction: 'horizontal' })),
        current: 0,
        direction: 'horizontal',
    };
    // Clear player grid UI
    Array.from(player1Grid.children).forEach(cell => {
        cell.classList.remove('ship', 'placement-ok', 'placement-bad', 'miss', 'hit');
        cell.textContent = '';
        cell.style.backgroundColor = '';
    });
    updatePlacementUI();
    startGameBtn.disabled = true;
}

// Get placed ships for game initialization
function getPlacedShips() {
    return placementState.ships.filter(s => s.placed);
}

export {
    shipsToPlace,
    initPlacement,
    updatePlacementUI,
    setupPlacementListeners,
    removePlacementListeners,
    resetPlacement,
    getPlacedShips
}; 