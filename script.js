console.log("JavaScript is successfully connected!");

const reset = document.querySelector("#reset");
const squares = document.querySelectorAll(".square");
const currentPlayer = document.querySelector("#current-player");

//Data trackers
let counter = 0;

//For loop
function handleClick(event) {
    const square = event.target;
    createX(square);
}

//Elements
function gameLoop(event){
    const square = event.target;
    if(currentPlayer.textContent === "0"){
        square.textContent = "0";
        currentPlayer.textContent = "X";
    } else{
        square.textContent = "X";
        currentPlayer.textContent = "0";
    }
}

for(const square of squares){
    console.log('Squares:', square);
    square.addEventListener("click", gameLoop);
}

