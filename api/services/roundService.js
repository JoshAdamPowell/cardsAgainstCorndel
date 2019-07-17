import deckService from './deckService';
import player from '../Objects/player';

export default class RoundService {
    constructor(players, allWhiteCards) {
        this.players = player;
        this.whiteCards = allWhiteCards;

    }
    newRound(newGame) {
        getCzar(newGame);//TODO: newgame is a boolean that is passed in
        deckService.dealCards();
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
            this.newRound(false);
        }
    }
    allocatePoint(){

    }
}