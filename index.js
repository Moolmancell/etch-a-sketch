const body = document.querySelector("body");
const canvas = document.querySelector(".canvas");
const pixelNo = document.getElementById("pixelNumber");
let canvasWidth = canvas.offsetWidth;
let canvasHeight = canvas.offsetHeight;
const black = document.getElementById("black");
const RGB = document.getElementById("RGB")
const eraser = document.getElementById("eraser")
const resetButton = document.getElementById("eraseButton")
let pixels;
let grid = spawnGrid(16);

pixelNo.addEventListener("input", (e) => {
    canvas.innerHTML = "";
    spawnGrid(pixelNo.value)
})

/*---------------------------------*/
function randomInteger(max) {
    return Math.floor(Math.random()*(max + 1));
}

function randomRgbColor() {
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    return [r,g,b];
}

function randomHexColor() {
    let [r,g,b] =randomRgbColor();
    let hr = r.toString(16).padStart(2, '0');
    let hg = g.toString(16).padStart(2, '0');
    let hb = b.toString(16).padStart(2, '0');
    return "#" + hr + hg + hb;
}

function spawnGrid(gridNo) {
    if (gridNo < 2) {
        gridNo = 2;
    } else if (gridNo > 64) {
        gridNo = 64;
    }

    for (let i = 1; i <= gridNo; i++) {
        const column = document.createElement("div");
        column.classList.add("column")
        column.style.height = `${canvasHeight/gridNo}px`;
        canvas.appendChild(column);
        for (let i = 1; i <= gridNo; i++) {
            const row = document.createElement("div");
            row.classList.add("row");
            row.style.height = `${canvasHeight/gridNo}px`;
            row.style.width = `${canvasWidth/gridNo}px`;
            column.appendChild(row);
        }
    }
    pixels = canvas.querySelectorAll("div.row")
    pixels.forEach(pixel => {
        pixel.addEventListener("mouseover", (e) => {
            if (black.checked === true) {
                e.target.style.backgroundColor = "black";
            } else if (RGB.checked === true){
                e.target.style.backgroundColor = `${randomHexColor()}`;
            } else if (eraser.checked === true) {
                e.target.style.backgroundColor = "";
            }
           
        })
       });
}

resetButton.addEventListener("click", () => {
    pixels.forEach(pixel => {
        pixel.style.backgroundColor = "";
    });
})