// Importing modules
const express = require("express");
const app = express();
//get CSS styles.
app.use(express.static(__dirname + '/public'));
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

const PORT = 8080; //default port 8080



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

// for (let i = 1; i <= x; i++) {
//   $('#wrapper').append($('<div/>', {id: 'r' + i, class:'square'}));
//   $(".square").height(h);
//   $(".square").width(h);
  
// }

// initializing the game board
let userBoard = new Board(); //Initialize user board
let serverBoard = new Board(); //Initializes server board

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




//Route for main page
app.get("/", (req, res) => {
  res.render("index");
});



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});



   