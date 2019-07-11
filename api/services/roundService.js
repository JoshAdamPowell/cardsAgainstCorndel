import whiteCards from '../data/white-cards';
import blackCards from '../data/black-cards';



export default class RoundService {
    constructor(players) {
        this.players = players;

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
        for (let i = 0; i < players.length; i++) {
            for (let j = players.whitecards.length; j <= 10; j++) {
                for (let object of whiteCards) {
                    if (object.state === 'inDeck')
                        players.whitecards.push(object.text);
                        object["state"] = "inPlay";
                }
            }
        }
    }
    //for every player in the group, give them white cards until they have 10 (nested for loops)
    //add the card text to the whitecards property as an array item (push)
    //change whitecard state to 'inplay'
}
