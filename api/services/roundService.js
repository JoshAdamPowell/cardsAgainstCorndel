
export default class RoundService {
    constructor() {
        this.players = [{
            username: 'shaquille_oatmeal',
            score: 8,
            ID: 1
        }, {
            username: 'dildo_swaggins',
            score: 6,
            ID: 2
        },
        {
            username: 'in_jail_out_soon',
            score: 7,
            ID: 3
        },
        {
            username: 'kiss - my - axe',
            score: 3,
            ID: 4
        },
        {
            username: 'hugs_for_drugs',
            score: 9,
            ID: 5
        }
        ];

    }

    newRound() {
        getCzar(newGame)//TODO: newgame is a boolean that is passed in

    }

    endRound() {

    }

    getCzar(newGame) {
        console.log(this.players.length);
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