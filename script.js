console.log("JavaScript is successfully connected!");

const reset = document.querySelector("#reset");
const squares = document.querySelectorAll(".square");
const currentPlayer = document.querySelector("#current-player");
const messageText = document.querySelector("#message");

let moves = 0;
let gameOver = false;
let player = "X";

function switchPlayer() {
  if (player === "X") {
    player = "O";
  } else {
    player = "X";
  }

  currentPlayer.textContent = player;
  messageText.textContent = player + "'s turn";
}

function checkWinner() {
  const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < winningLines.length; i++) {
    const line = winningLines[i];
    const first = squares[line[0]].textContent;
    const second = squares[line[1]].textContent;
    const third = squares[line[2]].textContent;

    if (first !== "" && first === second && first === third) {
      gameOver = true;
      messageText.textContent = first + " wins!";
      return true;
    }
  }

  if (moves === 9) {
    gameOver = true;
    messageText.textContent = "It's a draw!";
    return true;
  }

  return false;
}

function playTurn(event) {
  if (gameOver === true) {
    return;
  }

  const square = event.target;

  if (square.textContent === "") {
    square.textContent = player;
    moves = moves + 1;

    if (checkWinner() === true) {
      return;
    }

    switchPlayer();
  }
}

function resetGame() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].textContent = "";
  }

  moves = 0;
  gameOver = false;
  player = "X";
  currentPlayer.textContent = "X";
  messageText.textContent = "X's turn";
}

for (const square of squares) {
  square.addEventListener("click", playTurn);
}

reset.addEventListener("click", resetGame);

currentPlayer.textContent = "X";
messageText.textContent = "X's turn";

