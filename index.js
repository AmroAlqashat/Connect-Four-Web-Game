"use strict";
const board = document.getElementById("board");
for (let i = 0; i < 42; i++) {
    const circle = "<div class='bg-gray-200 rounded-full w-20 h-20'></div>";
    board.innerHTML += circle;
}
