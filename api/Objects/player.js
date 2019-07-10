export default class player {
    constructor(id, username, score, ) {
        this.id = id;
        this.username = username;
        this.score = score;
        this.cards = [];
    }

    get cards() {
        return this.cards;
    }

    get points() {
        return this.score;
    }

    addCard(card) {
        this.cards.push(card);
    }
}