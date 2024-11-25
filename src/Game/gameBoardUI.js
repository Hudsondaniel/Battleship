export default function createGameBoard(gridContainerId, boardSize) {
    const gameboardElement = document.querySelector(`#${gridContainerId}`);
    const letters = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ'; 

    // Clear any existing content
    gameboardElement.innerHTML = '';

    // Add a data attribute to identify the player
    gameboardElement.dataset.player = gridContainerId;

    // Create the board grid with headers (A1, B2, etc.)
    for (let i = 0; i <= boardSize; i++) {
        for (let j = 0; j <= boardSize; j++) {
            const cell = document.createElement('div');
            
            // Create the column headers (A, B, C, ...)
            if (i === 0 && j > 0) {
                cell.classList.add('header', 'column-header');
                cell.textContent = letters[j]; // Column headers
            }
            // Create the row headers (1, 2, 3, ...)
            else if (j === 0 && i > 0) {
                cell.classList.add('header', 'row-header');
                cell.textContent = i; // Row headers
            }
            // Create the actual grid cells
            else if (i > 0 && j > 0) {
                cell.classList.add('cell');
                
                // Create unique identifiers for cells
                cell.id = `${gridContainerId}-cell-${i-1}-${j-1}`;
                
                // Add data attributes for coordinates
                cell.dataset.player = gridContainerId;
                cell.dataset.x = i - 1; // Adjust to 0-based index
                cell.dataset.y = j - 1;
            }

            gameboardElement.appendChild(cell);
        }
    }

}