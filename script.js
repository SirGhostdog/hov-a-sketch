const grid = document.querySelector('#grid');
let gridSquares = 256
const resize = document.querySelector('#resize')
const color = document.querySelector('#color')
const reset = document.querySelector('#reset')

for (let i = 0; i < gridSquares; i++) {
    const square = document.createElement('div')
    square.classList.add('square');
    grid.appendChild(square); 
    
    square.addEventListener('mouseenter', () => {
    square.style.backgroundColor = 'black';
    })
    
    function resetGrid (){
        reset.addEventListener('click', () => {
        square.style.backgroundColor = "#FFFDD0"
        })
    }
resetGrid()
}



