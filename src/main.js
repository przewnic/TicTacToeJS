class Player {
    constructor(sign) {
        this.sign = sign;
    }

}


class Game {
    constructor(player_1, player_2,) {
        this.players = [player_1, player_2];
        this.board = [
            null, null, null,
            null, null, null,
            null, null, null 
        ];
        this.turn = 0;
        this.stop = false;
    }

    play(field) {
        if (this.board[field] === null) {
            this.board[field] = this.players[this.turn].sign;
            this.change_turn();
        }
    }

    check_win() {
        this.stop = true;
        for (let i=0;i<3;i++) {
            let k = i*3;
            if (this.board[k]===this.board[k+1] && this.board[k]===this.board[k+2] && this.board[k]!==null) {
                return true;
            }
            if (this.board[i]===this.board[i+3] && this.board[i]===this.board[i+6] && this.board[i]!==null) {
                return true;
            }
        }
        if (this.board[0]===this.board[4] && this.board[0]===this.board[8] && this.board[0]!==null) {
            return true;
        }
        if (this.board[2]===this.board[4] && this.board[2]===this.board[6] && this.board[2]!==null) {
            return true;
        }
        this.stop = false;
        return false
    }

    check_draw() {
        for (let i of this.board) {
            if (i===null) {
                return false;
            }
        }
        return true;
    }

    reset() {
        for (let i=0;i<9;i++) {
            this.board[i] = null;
        }

        this.turn = 0;
        this.stop = false;
    }

    change_turn() {
        this.turn = this.turn==0 ? 1 : 0;
    }
}


class View {
    constructor(buttons, message, resetButton, game) {
        this.message = message;
        this.resetButton = resetButton;
        this.buttons = buttons;
        this.game = game;
        this.update();
    }

    play(event) {
        if (!this.game.stop) {
            this.game.play(event.target.id);
            this.update();            
        }
    }

    update() {
        for (let i=0; i<9; i++) {
            this.buttons[i].textContent = this.game.board[i];
        }

        if (this.game.check_draw()) {
            this.message.textContent = "Draw"
        } 
        else if(this.game.check_win()) {
            this.game.change_turn();  // To get the winner
            this.message.textContent = `Won: ${this.game.players[this.game.turn].sign}`;
        }
        else {
            this.message.textContent = `Next move: ${this.game.players[this.game.turn].sign}`;
        }
    }

    reset() {
        this.game.reset();
        this.update();
    }
}


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
