
//constructor function for tile
function Tile(x,y) {
  this.xPos = x;
  this.yPos = y;
  this.ship = false;
  this.hit = false;
  this.tileHit = function() {
    //what to do if tile is hit, check if ship & hit are true.
  }
}

// create a board
const generateBoard = function () {
  board = [];//create a row
  for (j = 0; j < 10; j++ ) {
    for (i = 0; i < 10; i++) {
      board.push(new Tile(i,j));
    }
  }
  console.log(board);
}

generateBoard();
   