"use strict";
let currentTurn = { player1: true, player2: false };
const switchColor = (turn) => {
    const circles = document.querySelectorAll(".circle");
    circles.forEach((circle) => {
        circle.classList.remove(`hover:bg-${turn.player1 ? "red" : "blue"}-500`);
        circle.classList.add(`hover:bg-${turn.player1 ? "blue" : "red"}-500`);
    });
};
const switchTurn = (turn) => {
    currentTurn = !turn.player1
        ? { player1: true, player2: false }
        : { player1: false, player2: true };
    switchColor(currentTurn);
};
const board = document.getElementById("board");
for (let i = 0; i < 7; i++) {
    const column = `<div class='column column-${i} flex flex-col gap-6'></div>`;
    board.innerHTML += column;
    for (let j = 0; j < 6; j++) {
        const circle = `<div class='circle circle-${j} bg-gray-200 hover:bg-blue-500 rounded-full w-18 h-18 lg:w-22 lg:h-22 duration-75 cursor-pointer'></div>`;
        const column = document.querySelector(`.column-${i}`);
        column.innerHTML += circle;
    }
}
const columns = document.querySelectorAll(".column");
columns.forEach((column) => {
    const circles = column.children;
    Array.from(circles).forEach((circle, index) => {
        circle.addEventListener("click", () => {
            for (let i = 5; i >= 0; i--) {
                if (i >= index) {
                    if (!column.children[i].classList.contains("bg-blue-500") &&
                        !column.children[i].classList.contains("bg-red-500")) {
                        column.children[i].classList.remove("bg-gray-200");
                        column.children[i].classList.add(currentTurn.player1 ? "bg-blue-500" : "bg-red-500");
                        switchTurn(currentTurn);
                        break;
                    }
                }
            }
        });
    });
});
