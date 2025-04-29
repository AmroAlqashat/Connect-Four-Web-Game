type playersTurn =
  | { player1: true; player2: false }
  | { player1: false; player2: true };

let currentTurn: playersTurn = { player1: true, player2: false };

const switchColor = (turn: playersTurn): void => {
  const circles = document.querySelectorAll(".circle");
  circles.forEach((circle) => {
    circle.classList.remove(`hover:bg-${turn.player1 ? "red" : "blue"}-500`);
    circle.classList.add(`hover:bg-${turn.player1 ? "blue" : "red"}-500`);
  });
};

const switchTurn = (turn: playersTurn): void => {
  currentTurn = !turn.player1
    ? { player1: true, player2: false }
    : { player1: false, player2: true };
  switchColor(currentTurn);
};

const board = document.getElementById("board") as HTMLElement;
for (let i = 0; i < 42; i++) {
  const circle = `<div class='circle bg-gray-200 hover:bg-blue-500 rounded-full w-20 h-20 duration-75 cursor-pointer'></div>`;
  board.innerHTML += circle;
}

const circles = document.querySelectorAll(".circle");
circles.forEach((circle) => {
  circle.addEventListener("click", () => {
    console.log(currentTurn);
    switchTurn(currentTurn);
    console.log(currentTurn);
  });
});
