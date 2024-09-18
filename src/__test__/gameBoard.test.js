import GameBoard from "../Game/gameBoard";
import Ship from "../Game/ship"; 

describe('Game Board Class', () => {
    let gameBoard;
    let ship;

    beforeEach(() => {
        gameBoard = new GameBoard(10);  
        ship = new Ship('Destroyer', 3); 
    });

    test('check if placing ship works correctly', () => {
        gameBoard.placeShip(ship, [0, 0], 'horizontal');

        expect(gameBoard.board[0][0]).toBe(ship);
        expect(gameBoard.board[0][1]).toBe(ship);
        expect(gameBoard.board[0][2]).toBe(ship);
    });

    test('check if ship placement prevents overlap', () => {
        gameBoard.placeShip(ship, [0, 0], 'horizontal');
        
        const anotherShip = new Ship('Submarine', 2);
        expect(() => gameBoard.placeShip(anotherShip, [0, 1], 'horizontal')).toThrow('Position already occupied or out of bounds');
    });
});
