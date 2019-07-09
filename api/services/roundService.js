
export default class RoundService {
    constructor(players) {
        this.players = players;

    }

    newRound() {
        getCzar(newGame)//TODO: newgame is a boolean that is passed in

    }

    endRound() {

    }

    getCzar(newGame) {
        if (newGame) {
            this.currentCzarNum = Math.floor(Math.random() * Math.floor(this.players.length));
            this.currentCzar = this.players[this.currentCzarNum - 1];
            return this.currentCzar;
        } else {
            if (this.currentCzarNum === this.players.length) {
                this.currentCzarNum = 0
            } else {
                this.currentCzarNum++
            }
            this.currentCzar = this.players[this.currentCzarNum]
            return this.currentCzar;
        }
    }
}