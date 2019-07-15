// // To use jQuery
// const jsdom = require('jsdom');
// const { JSDOM } = jsdom;
// const { window } = new JSDOM();
// const { document } = (new JSDOM('')).window;
// global.document = document;
// const $ = require('jquery')(window);

// CLASSES
class Tile {
  constructor(x,y) {
    this.xPos = x;
    this.yPos = y;
    this.ship = false;
    this.hit = false;
  }
  tileHit() {
    if (!this.hit && this.ship) {
      this.hit = true;
      console.log("You've hit the SHIPNAME!");
    } else if (!this.hit && !this.ship) {
      console.log("You didn't hit anything.");
      this.hit = true;
      //console.log(`#${this.xPos},${this.yPos}`);
      $(`#${this.xPos},${this.yPos}`).css('backgroud-color','blue');
    } else {
      console.log("You've already hit this spot.");
    }
  }
  placeShip(ship) {
    if (this.ship) {
      console.log("There is already a ship here");
    }
    //// CHECK THAT NOT RUNNING INTO EDGE OF BOARD
  }
}

class Ship {
  constructor(x,y,orient,length) {
    this.xStart = x; //starting x position
    this.yStart = y; // starting y position
    this.orient = orient; // horz or vert (horz is default)
    this.length = length;
  }

}

const clickHandler = function (event) {
  // Gets x & y position from HTML element
  console.log(event.target);
  let x = event.target.getAttribute('xPos'); 
  let y = event.target.getAttribute('yPos');
  //
  let actionTile = event.data.board[`${x},${y}`];
  actionTile.tileHit();
};


class Board {
  constructor(player) {
    this.player = player;
    let board = {};
    for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
        board[`${x},${y}`] = (new Tile(x,y));
        let $tile = $('<div/>', { id: x + "," + y, 'class' : 'tile', 'xPos': x, 'yPos': y});
        $tile.click({ board }, clickHandler);
        $(`#${player}board`).append($tile);
        
      }
    }
    console.log(board);
    return board;
  }
}
  


// initializing the game board when user clicks the "Start New Game" Button
$(document).ready(function() {
  let serverBoard = new Board('server');
  console.log

});
 

//Initializes server board
// initialize the server's ships (NEED FUNCTION TO RANDOMLY GENERATE LOCATION of BOATS)
// let serverCarrier = new Ship(x, y, horz, 5);
// let serverCruiser = new Ship(x, y, horz, 3);
// let serverBattleship = new Ship(x, y, horz, 4);
// let serverSubmarine = new Ship(x, y, horz, 3);
// let serverDestroyer = new Ship(x, y, horz, 2);

// Prompt user for input on where they would like to place their ships.
// let userCarrier = new Ship(x, y, horz, 5);
// let userBattleship = new Ship(x, y, horz, 4);
// let userCruiser = new Ship(x, y, horz, 3);
// let userSubmarine = new Ship(x, y, horz, 3);
// let userDestroyer = new Ship(x, y, horz, 2);