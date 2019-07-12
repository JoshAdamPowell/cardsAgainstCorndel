import blackCards from '../data/black-cards';



export default class RoundService {
    constructor(players, allWhiteCards) {
        this.players = players;
        this.whiteCards = allWhiteCards;

    }
    

    newRound() {
        getCzar(newGame);//TODO: newgame is a boolean that is passed in
        dealCards();


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

    dealCards() {
        for (let currentPlayer of this.players) {
            for (let j = currentPlayer.whitecards.length; j <= 10; j++) {
                for (let card of this.whiteCards) {
                    if (card.state === 'inDeck')
                        currentPlayer.whitecards.push(card);
                        card["state"] = "inPlay";
                }
            }
        }
    }
}
