
export default class Deck{
    constructor(whiteCardDeck, players) {
        this.whiteCardDeck = whiteCardDeck.map(cards => JSON.parse(JSON.stringify(cards)))
        this.players = players;
        this.shuffledDeck = this.shuffle(this.whiteCardDeck);
        console.log(this.shuffledDeck);
    }
    dealCards(whiteCardDeck) {
        for(let currentPlayer of this.players) {
                for(let card of whiteCardDeck) {
                    if (card.state === 'inDeck' && currentPlayer.whitecards.length < 10){
                        currentPlayer.whitecards.push(card);
                        card["state"] = "inPlay";
                    }
            }
            console.log(currentPlayer.whitecards) 
        }
        
    }

    shuffle(deck){
        return deck.sort(() => Math.random() - 0.5)
    }
}

