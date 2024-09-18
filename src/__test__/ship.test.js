// src/Game/ship.test.js
import Ship from '../Game/ship'; // Correct import path and class name

describe('Ship class', () => {
    let ship;

    beforeEach(() => {
        ship = new Ship('Battleship', 4, [0, 0]); // Use number for length
    });

    test('should initialize with correct properties', () => {
        expect(ship.type).toBe('Battleship'); // Correct property name
        expect(ship.length).toBe(4); // Use number
        expect(ship.position).toEqual([0, 0]);
        expect(ship.hits).toBe(0);
    });

    test('should register a hit correctly', () => {
        ship.hit();
        expect(ship.hits).toBe(1); // Check hits property, not method
    });

    test('should be sunk after all hits', () => {
        for (let i = 0; i < 4; i++) {
            ship.hit();
        }
        expect(ship.isSunk()).toBe(true);
    });

    test('should not be sunk before all hits', () => {
        ship.hit();
        expect(ship.isSunk()).toBe(false);
    });
});
