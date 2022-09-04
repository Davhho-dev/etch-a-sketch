const buttons = document.querySelectorAll("button");
const grid = document.querySelector(".containerGrid");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let className = button.classList[0];
        console.log(button);
        if(className === "black") {
            console.log("yes");
            grid.style.backgroundColor = "black";
        }else if(className = "reset") {
            grid.style.backgroundColor = "#d3d3d3";
        }
    });
});

