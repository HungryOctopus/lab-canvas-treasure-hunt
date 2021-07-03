const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

// Iteration 1: draw the grid
function drawGrid() {
  const columns = 10;
  for (let row = 0; row < width; row += width / columns) {
    for (let col = 0; col < height; col += height / columns) {
      context.strokeRect(row, col, width / 10, height / 10);
    }
  }
}

// Iteration 2: Class Character

class Character {
  constructor(name, col, row) {
    this.name = name;
    this.col = col;
    this.row = row;
  }

  moveUp() {
    if (this.row > 0) {
      this.row--;
    }
  }
  moveDown() {
    if (this.row < 11) {
      this.row++;
    }
  }
  moveLeft() {
    if (this.col > 0) {
      this.col--;
    }
  }
  moveRight() {
    if (this.col < 11) {
      this.col++;
    }
  }
}

let player1 = new Character('newPlayer', 0, 0);

console.log(player1);
player1.moveDown();
console.log(player1.row);

// Iteration 3: Drawing the player

function drawPlayer() {
  let imgDown = '/images/character-down.png';
  let imgLeft = '/images/character-left.png';
  let imgRight = '/images/character-right.png';
  let imgUp = '/images/character-up.png';
  // Switch function here
  let viking = new Image();
  let vikingCol = player1.col * 50;
  let vikingRow = player1.row * 50;

  viking.src = '/images/character-down.png'; // will be replaced by the direction given by the switch function
  imgScale = 30 / 30;
  viking.onload = function () {
    context.drawImage(viking, vikingCol, vikingRow, 50 * imgScale, 50);
  };
}

// Iteration 4: the treasure

class Treasure {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }

  setRandomPosition() {
    if (0 < this.row < 11 && 0 < this.col < 11) {
      this.col = Math.ceil(Math.random() * 10);
      this.row = Math.ceil(Math.random() * 10);
    }
  }
}

let bigTreasure = new Treasure(0, 0);
bigTreasure.setRandomPosition();
console.log(bigTreasure);

function drawTreasure() {
  let diamants = new Image();
  let diamantCol = bigTreasure.col * 50;
  let diamantRow = bigTreasure.row * 50;
  diamants.src = '/images/treasure.png';
  imgScale = 30 / 30;
  diamants.onload = function () {
    context.drawImage(diamants, diamantCol, diamantRow, 50 * imgScale, 50);
  };
}

function drawEverything() {
  drawGrid();
  drawPlayer();
  drawTreasure();
}

drawEverything();
