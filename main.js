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
  constructor(name, col, row, direction = 'down') {
    this.name = name;
    this.col = col;
    this.row = row;
    this.direction = direction;
  }

  moveUp() {
    this.direction = 'up';
    if (this.row > 0) {
      this.row--;
    }
  }
  moveDown() {
    this.direction = 'down';
    if (this.row < 10) {
      this.row++;
    }
  }
  moveLeft() {
    this.direction = 'left';
    if (this.col > 0) {
      this.col--;
    }
  }
  moveRight() {
    this.direction = 'right';
    if (this.col < 10) {
      this.col++;
    }
  }
}

let player1 = new Character('newPlayer', 0, 0);

// Iteration 3: Drawing the player

function drawPlayer() {
  /*
    let imageDown = '/images/character-down.png';
  let imageLeft = '/images/character-left.png';
  let imageRight = '/images/character-right.png';
  let imageUp = '/images/character-up.png';
  let currentDirection;
  switch (player1.currentDirection) {
    case 'down':
      currentDirection = imageDown;
      break;
    case 'left':
      currentDirection = imageLeft;
      break;
    case 'up':
      currentDirection = imageUp;
      break;
    case 'right':
      currentDirection = imageRight;
      break;
  }
  // it's not working, why?
*/

  let viking = new Image();
  viking.src = '/images/character-down.png';
  viking.addEventListener('load', () => {
    context.drawImage(viking, player1.col * 50, player1.row * 50);
  });
}

// Iteration 4: the treasure

class Treasure {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }

  setRandomPosition() {
    if (0 < this.row < 11 && 0 < this.col < 11) {
      this.col = Math.ceil(Math.random() * 10) - 1;
      this.row = Math.ceil(Math.random() * 10) - 1;
    }
  }
}

let bigTreasure = new Treasure(0, 0);
bigTreasure.setRandomPosition();

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
  context.clearRect(0, 0, width, height);
  drawGrid();
  drawPlayer();
  drawTreasure();
}
/* also not working...
function newGame(player1, bigTreasure) {
  if (player1.row === bigTreasure.row && player1.col === bigTreasure.col) {
    bigTreasure.setRandomPosition();
  } 
}
*/

drawEverything();
// Iteration 5: React to player input

window.addEventListener('keydown', (event) => {
  // Stop the default behavior (moving the screen to the left/up/right/down)
  event.preventDefault();

  // React based on the key pressed
  switch (event.keyCode) {
    case 37:
      player1.moveLeft();
      break;
    case 38:
      player1.moveUp();
      break;
    case 39:
      player1.moveRight();
      break;
    case 40:
      player1.moveDown();
      break;
  }
  drawEverything();
});
