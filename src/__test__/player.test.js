import Player from "../Game/player";
import GameBoard from "../Game/gameBoard";
import Ship from "../Game/ship";

jest.mock("../Game/gameBoard"); 
jest.mock("../Game/ship"); 

describe('Player class', () => {
    let player;
    let mockBoard;
    let mockShip;

    beforeEach(() => {
        mockBoard = new GameBoard(10); 
        player = new Player('Hudson'); 
        player.board = mockBoard; 
        mockShip = new Ship('Battleship', 4, [0, 0]); 

        // Set up mock implementations
        mockShip.getHealth = jest.fn(); // Mock getHealth method
    });

    test('should initialize player with a name and board', () => {
        expect(player.getName()).toBe('Hudson');
        expect(player.getBoard()).toBe(mockBoard);
    });

    test('should place a ship on the player’s board', () => {
        player.placeShipPlayer(mockShip, [0, 0]);

        expect(mockBoard.placeShip).toHaveBeenCalledWith(mockShip, [0, 0]);
        expect(player.ships).toContain(mockShip); 
    });

    test('should fire a shot and record it in shot history', () => {
        mockBoard.checkHit.mockReturnValue(true); 

        const result = player.fireShot([0, 0]);
        expect(result).toBe(true); 

        expect(player.shotHistory.length).toBe(1); 
        expect(player.shotHistory[0]).toEqual({ target: [0, 0], hit: true }); 
        expect(mockBoard.checkHit).toHaveBeenCalledWith([0, 0]);
    });

    test('should correctly report if all ships are sunk', () => {
        mockShip.isSunk.mockReturnValue(true); 
        player.ships.push(mockShip);

        expect(player.isSunk()).toBe(true); 
    });

    test('should correctly report number of ships left', () => {
        mockShip.isSunk.mockReturnValue(false); 
        player.ships.push(mockShip);

        expect(player.getShipsLeft()).toBe(1); 
    });

    test('should return the correct score', () => {
        player.shotHistory = [
            { target: [0, 0], hit: true },
            { target: [1, 0], hit: false },
            { target: [2, 0], hit: true }
        ];

        expect(player.getScore()).toBe(2); 
    });

    test('should return total health of all ships', () => {
        mockShip.getHealth.mockReturnValue(2); // Set health for mockShip
        const anotherMockShip = new Ship('Destroyer', 3, [1, 1]);
        anotherMockShip.getHealth = jest.fn().mockReturnValue(3); // Mock health for another ship

        player.ships.push(mockShip);
        player.ships.push(anotherMockShip);

        expect(player.getHealth()).toBe(5); 
    });

    test('should correctly report if the game is over', () => {
        mockShip.isSunk.mockReturnValue(true); 
        player.ships.push(mockShip);

        expect(player.isGameOver()).toBe(true); 
    });

    test('should correctly return remaining shots', () => {
        player.shotHistory = Array(50).fill({}); 
        expect(player.getRemainingShots()).toBe(50); 
    });

    test('should return the correct game status', () => {
        mockShip.isSunk.mockReturnValue(false);
        player.ships.push(mockShip);
        player.shotHistory = [{ target: [0, 0], hit: true }];
        mockShip.getHealth.mockReturnValue(3);

        const status = player.getGameStatus();
        expect(status).toEqual({
            score: 1, 
            shipsLeft: 1, 
            health: 3, 
            remainingShots: 99, 
            isGameOver: false 
        });
    });

    test('should return shot history correctly', () => {
        player.shotHistory = [{ target: [0, 0], hit: true }];

        expect(player.getShotHistory()).toEqual([{ target: [0, 0], hit: true }]); 
    });
});
