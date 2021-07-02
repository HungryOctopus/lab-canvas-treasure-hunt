const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

// Iteration 1
function drawGrid() {
  const columns = 10;
  for (let x = 0; x < width; x += width / columns) {
      for (let y = 0; y < height; y += height / columns) {
          context.strokeRect(x, y, width / 10, height / 10);
        }
    }
    debugger;
}




function drawEverything() {
  drawGrid();
  // drawPlayer()
  // drawTreasure()
}

drawEverything();
