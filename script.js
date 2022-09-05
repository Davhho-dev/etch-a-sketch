const buttons = document.querySelectorAll("button");
const grid = document.querySelector(".containerGrid");
//const slider = document.querySelector(".slider");
//const sliderVal = document.querySelector(".sliderValue");
createGrid(16, 16);

function createGrid(rows, columns) {
    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < columns; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.setAttribute("style", "border: 1px solid black; height: 37.5px; width: 37.5px;");
            grid.append(cell);
        } 
    }
}

grid.addEventListener("mouseover", function(e) {
   e.target.style.backgroundColor = "black";
});


buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let className = button.classList[0];
        console.log(button);
        grid.style.backgroundColor = setColor(className);
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

/*
function getSliderVal(val) {
    sliderVal.textContent = val;
    return slider.val;
}*/