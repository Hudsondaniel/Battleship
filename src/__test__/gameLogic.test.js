import { playerAttackComputer, computerAttacksPlayer } from '../index.js';

describe("Battleship Game Logic", () => {

    const mockComputerPlayer = {
        board: { board: [[null, "Submarine"], [null, "Battleship"]] },
        ships: [
            { type: "Submarine", hits: 0, hit: jest.fn() },
            { type: "Battleship", hits: 0, hit: jest.fn() }
        ],
        saveGameState: jest.fn()
    };

    const mockPlayerBoard = {
        board: { board: [[null, "Destroyer"], ["carrier", null]] },
        ships: [
            { type: "Destroyer", hits: 0, hit: jest.fn() },
            { type: "carrier", hits: 0, hit: jest.fn() }
        ],
        saveGameState: jest.fn()
    };

    const mockGetRandomPosition = jest.fn(() => [0, 1]);

    test("Player hits computer's ship", () => {
        const result = playerAttackComputer.call({ computerPlayer: mockComputerPlayer }, [0, 1]);
        expect(result).toBe("Hit");
        expect(mockComputerPlayer.ships[0].hit).toHaveBeenCalled();
        expect(mockComputerPlayer.board.board[0][1]).toBe("H");
    });

    test("Player misses computer's ship", () => {
        const result = playerAttackComputer.call({ computerPlayer: mockComputerPlayer }, [0, 0]);
        expect(result).toBe("Miss");
        expect(mockComputerPlayer.board.board[0][0]).toBe("X");
    });

    test("Computer hits player's ship", () => {
        const result = computerAttacksPlayer.call({ playerOneBoard: mockPlayerBoard, getRandomPosition: mockGetRandomPosition });
        expect(result).toBe("Hit");
        expect(mockPlayerBoard.ships[1].hit).toHaveBeenCalled();
        expect(mockPlayerBoard.board.board[0][1]).toBe("H");
    });

    test("Computer misses player's ship", () => {
        const result = computerAttacksPlayer.call({ playerOneBoard: mockPlayerBoard, getRandomPosition: () => [0, 0] });
        expect(result).toBe("Miss");
        expect(mockPlayerBoard.board.board[0][0]).toBe("X");
    });

});
