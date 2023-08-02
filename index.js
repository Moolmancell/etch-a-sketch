const canvas = document.querySelector(".canvas");
let canvasWidth = canvas.offsetWidth;
let canvasHeight = canvas.offsetHeight;

let gridNo = 10;

/*---------------------------------*/
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
