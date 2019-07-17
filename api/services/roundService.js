import deckService from './deckService';

export default class RoundService {
    constructor(allWhiteCards, players) {
        this.players = players;
        this.whiteCards = allWhiteCards;
        this.deckService = new deckService(allWhiteCards, players)

    }
    newRound(newGame) {
        this.getCzar(newGame);//TODO: newgame is a boolean that is passed in
        this.deckService.dealCards();
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
        for (let player of this.players){
            if (player.score === 10) {
                console.log(player.username + ' is the Winner!');
                return true;
            }
        }
        return this.newRound(false)
    }
    allocatePoint(){

    }
}