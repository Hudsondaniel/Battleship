export default class Ship {
    constructor(type, length, position) {
        this.type = type; 
        this.length = length; 
        this.position = position; 
        this.hits = 0; 
    }

    hit() {
        this.hits++; 
        if (this.isSunk()) {
            console.log(`${this.type} ship sunk!`);
        } else {
            console.log(`${this.type} ship hit!`);
        }
    }
    isSunk() {
        return this.hits >= this.length;
    }
}
