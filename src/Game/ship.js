export default class Ship {
    constructor(type, length, position, direction) {
        this.type = type; 
        this.length = length; 
        this.position = position; 
        this.direction = direction;
        this.hits = 0; 
        this.sunk = false;
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
        this.sunk = true;
        return this.hits >= this.length;
    }
}
