const canvas = document.querySelector(".canvas");
const pixelNo = document.getElementById("pixelNumber");
let canvasWidth = canvas.offsetWidth;
let canvasHeight = canvas.offsetHeight;

const pixels = document.querySelectorAll("div.row")

let grid = spawnGrid(16);

pixelNo.addEventListener("input", (e) => {
    canvas.innerHTML = "";
    spawnGrid(pixelNo.value)
})

/*---------------------------------*/
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
}
