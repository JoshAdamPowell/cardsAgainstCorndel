import player from '../Objects/player';



export default class RoundService {
    constructor(players) {
        this.players = players;
        this.player = new player(1, 'Jay', 10);

    }

    newRound() {
        this.getCzar(true)//TODO: newgame is a boolean that is passed in
        dealCards();

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


    checkWin() {
        if (this.player.score === 10) {
            console.log(this.player.username + ' is the Winner!');
            return true;
        }
        else {
            this.newRound(this.getCzar());
        }
    }
    allocatePoint(){

    }
}






