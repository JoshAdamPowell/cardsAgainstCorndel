
export default class Deck {
    constructor(whiteCardDeck, players) {
        this.whiteCardDeck = whiteCardDeck.map(cards => (cards))
        this.players = players;
        this.shuffledDeck = this.shuffle(this.whiteCardDeck);
    }
    dealCards(whiteCardDeck) {
        for (let currentPlayer of this.players) {
            for (let card of whiteCardDeck) {
                if (card.state === 'inDeck' && currentPlayer.whitecards.length < 10) {
                    currentPlayer.whitecards.push(card);
                    card["state"] = "inPlay";
                }
            }
        }

    }

    shuffle(deck) {
        return deck.sort(() => Math.random() - 0.5)
    }
    checkCardsAreAvailable() {
        let cardsAvailable = this.shuffledDeck.filter(card => card["state"] === "inDeck").length;
        console.log('cards', cardsAvailable)
        return (cardsAvailable > this.players.length * 3) 
    }

    allocateCards() {
        if (!checkCardsAreAvailable) {
            reShuffleDeck()
        }
    }

    reShuffleDeck(deck) {
        this.shuffledDeck = this.shuffledDeck.filter(card => card["state"] === "discarded").map(card => { card["state"] = "inDeck"; return card; });

    }
}
