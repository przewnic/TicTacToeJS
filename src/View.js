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

        if(this.game.check_win()) {
            this.game.change_turn();  // To get the winner
            this.message.textContent = `Won: ${this.game.players[this.game.turn].sign}`;
        }
        else if (this.game.check_draw()) {
            this.message.textContent = "Draw"
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

export {View};
