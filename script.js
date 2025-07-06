const grid = document.querySelector('#grid');
let gridSquares = 256

for (let i = 0; i < gridSquares; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    grid.appendChild(square);
}
