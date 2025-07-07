const resize = document.querySelector('#resize')
const color = document.querySelector('#color')
const reset = document.querySelector('#reset')
const shaker = document.querySelector('#shaker')
const grid = document.querySelector('#grid');
const click = document.querySelector('#click')

let gridSquares = 256
let h = 26.125
let w = 26.125
let squareHeight = `${h}px`;
let squareWidth = `${w}px`;
let squareColorChange = true

resize.addEventListener('click', resizeGrid)
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
        
        const multiColor = function() {
            const randomNum = Math.floor(Math.random() * 16777215)
            let hexColor = randomNum.toString(16);
            hexColor= "#" + ("000000" + hexColor).slice(-6)
            square.style.backgroundColor = hexColor
        }
        
       const singleColor = function() {
            square.style.backgroundColor = 'black';
        }
        
        square.addEventListener("mouseenter", () => {
            if(squareColorChange) {
                singleColor();
            } else {
                multiColor();
            }
        })
        

    function resetGrid() {
        reset.addEventListener('click', () => {
        square.style.backgroundColor = "white"
        shaker.currentTime = 0;
        shaker.play()
        })
    }
      
resetGrid();
    }
}
gridGenerator();

function switchColor() {
    squareColorChange = !squareColorChange
    click.currentTime = 0;
    click.play()
}

color.addEventListener("click", switchColor)