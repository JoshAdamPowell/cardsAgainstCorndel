import deckService from './deckService';

export default class RoundService {
    constructor(players, allWhiteCards) {
        this.players = players;
        this.whiteCards = allWhiteCards;

    }
    

    newRound() {
        getCzar(newGame);//TODO: newgame is a boolean that is passed in
        deckService.dealCards();
    }

    endRound() {

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
}

