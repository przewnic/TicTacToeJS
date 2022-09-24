import { Player } from "./Player";
import { Game } from "./Game";
import { View } from "./View";


const container = document.getElementById("main");

const info = document.createElement("div");
info.classList.add("info");
const message = document.createElement("p");
info.appendChild(message);
message.id = "message";
const restartButton = document.createElement("button");
restartButton.textContent = "Restart";
restartButton.addEventListener("click", onRestartClick)
info.appendChild(restartButton);
container.appendChild(info);

const boardContainer = document.createElement("div");
boardContainer.classList.add("container");
container.appendChild(boardContainer);

function create_fields(board) {
    const buttons = [];
    for(let i=0;i<9;i++) {
        const button = document.createElement("button");
        button.classList.add("game-button");
        button.id = `${i}`;
        button.addEventListener("click", onFieldClick);
        board.appendChild(button);
        buttons.push(button)
    }
    return buttons;
}

const buttons = create_fields(boardContainer);

const playerX = new Player('X');
const playerO = new Player('O');

const game = new Game(playerX, playerO);
const view = new View(buttons, message, restartButton, game);


function onFieldClick(event) {
    view.play(event);
}

function onRestartClick() {
    view.reset();    
}
