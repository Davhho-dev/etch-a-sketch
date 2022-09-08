const buttons = document.querySelectorAll("button");
const grid = document.querySelector(".containerGrid");
const slider = document.querySelector(".slider");
const sliderVal = document.querySelector(".sliderValue");

createGrid(slider.value, slider.value); //create the first grid when app starts



function createGrid(rows, columns) {
    let cellDimension = 600/rows; //width & height of cell based on # of cells
    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < columns; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.setAttribute("style", `border: 1px solid black; height: ${cellDimension}px; width: ${cellDimension}px; background-color: #d3d3d3;`);
            grid.append(cell);
        } 
    }
}

//button events - hover action - resets grid if button is selected - sets the color
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let colors = setColor(button.classList[0]);
        if(colors === "#d3d3d3") {
           while(grid.firstChild) {
                grid.removeChild(grid.firstChild);
           }
           createGrid(slider.value, slider.value);
        }
        grid.addEventListener("mouseover", function(e) {
            e.target.style.backgroundColor = colors;
        })
    });
});

function setColor(className) {
    if(className === "reset") return "#d3d3d3";
    else if(className === "black") return "black";
    else {
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        randomColor = "#" + randomColor;
        return randomColor;
    }
}

//slider action - remove current grid and update grid based on value of slider
slider.addEventListener("input", () => {
    sliderVal.textContent = slider.value;
    while(grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    createGrid(slider.value, slider.value);
});