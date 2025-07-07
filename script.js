const resize = document.querySelector('#resize')
const color = document.querySelector('#color')
const reset = document.querySelector('#reset')
const shaker = document.querySelector('#shaker')
const grid = document.querySelector('#grid');

let gridSquares = 256
let h = 26.125
let w = 26.125
let squareHeight = `${h}px`;
let squareWidth = `${w}px`;


resize.addEventListener('click', resizeGrid())

function resizeGrid() { 
    const sizePrompt = prompt("Pick a number between 4 and 100")
        if(sizePrompt > 100) {
             alert ("Too Big!");
        } else if (sizePrompt < 4) {
            alert ("Not Enough");
        } else {
         gridSquares = ( sizePrompt * sizePrompt ) 
         h = (450 / sizePrompt) - 2
         w = (450 / sizePrompt) - 2
         squareHeight = `${h}px`;
         squareWidth = `${w}px`;
         gridGenerator();
            }
 } 

function gridGenerator() {
    const squareDivs = document.querySelectorAll(".square")
    for (let x = 0; x < squareDivs.length; x++) {
        grid.removeChild(squareDivs[x]);
    }

    for (let i = 0; i < gridSquares; i++) {
        const square = document.createElement('div')
        square.classList.add('square');
        grid.appendChild(square);
        square.style.height = squareHeight
        square.style.width = squareWidth
        
        square.addEventListener('mouseenter', () => {
        square.style.backgroundColor = 'black';
        })
    
    function resetGrid() {
        reset.addEventListener('click', () => {
        square.style.backgroundColor = "#FFFDD0"
        shaker.currentTime = 0;
        shaker.play()
        })
    }
      
resetGrid();
    }
}
gridGenerator();
