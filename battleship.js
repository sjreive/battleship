
//constructor function for tile
class Tile {
  constructor(x,y) {
    this.xPos = x;
    this.yPos = y;
    this.ship = false;
    this.hit = false;
  }
  tileHit () {
    if (!this.hit && this.ship) {
      this.hit = true;
      console.log("You've hit the SHIPNAME!");
    } else if (!this.hit && !this.ship) {
      console.log("You didn't hit anything.");
    } else {
      console.log("You've already hit this spot.");
    }
  }
  placeShip (ship) {
    if (this.ship) {
      console.log("There is already a ship here");
    }
    if (th) //// CHECK THAT NOT RUNNING INTO EDGE OF BOARD
  }
}


class Ship {
  constructor(x,y,orient,type){ 
    this.xStart = x; //starting x position
    this.yStart = y // starting y position
    this.orient = orient // horz or vert (horz is default)
    this.type = type // carrier (5 tiles), battleship (4 tiles), cruiser (3 tiles), submarine (3 tiles), destroyer (2 tiles)
  }

}
A Carrier, which is 5 tiles long
A Battleship, which is 4 tiles long
A Cruiser, which is 3 tiles long
A Submarine, which is 3 tiles long
A Destroyer, which is 2 tiles long

class Board {
  constructor() {
    let board = []; //create a row
    for (let x = 0; x < 10; x++) {
      let row = [];
      for (let y = 0; y < 10; y++) {
        row.push(new Tile(x,y));
      }
      board.push(row);
    }
    console.log(board); 
    return board;
  }
}

// initializing the game
let userBoard = new Board(); //Initialize user board
let serverBoard = new Board(); //Initializes server board






   