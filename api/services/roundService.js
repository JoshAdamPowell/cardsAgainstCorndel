import player from '../Objects/player';



export default class RoundService {
    constructor(players) {
        this.players = players;
        this.player = new player(1, 'Jay', 10);

    }

    newRound() {
        this.getCzar(true)//TODO: newgame is a boolean that is passed in

    }

    endRound() {
        checkWin();
    }

    getCzar(newGame) {
        if (newGame) {
            this.currentCzarNum = Math.floor(Math.random() * this.players.length - 1);
        } else {
            this.currentCzarNum === this.players.length ? this.currentCzarNum = 0 : this.currentCzarNum++
        }
        this.currentCzar = this.players[this.currentCzarNum];
        return this.currentCzar;
    }

    checkWin() {
        if (this.player.score === 10) {
            console.log(this.player.username + ' is the Winner!');
            return true;
        }
        else {
            this.newRound(this.getCzar());
        }
    }
}






