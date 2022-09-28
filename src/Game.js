/* 
    author: przewnic
    project: TicTacToeJS
*/
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

export {Game};
