
export default class Deck {
    constructor(whiteCardDeck, players) {
        this.whiteCardDeck = whiteCardDeck.map(cards => (cards))
        this.players = players;
        this.shuffledDeck = this.shuffle(this.whiteCardDeck);
        console.log(this.shuffledDeck);
    }
    dealCards(whiteCardDeck) {
        for (let currentPlayer of this.players) {
            for (let card of whiteCardDeck) {
                if (card.state === 'inDeck' && currentPlayer.whitecards.length < 10) {
                    currentPlayer.whitecards.push(card);
                    card["state"] = "inPlay";
                }
            }
            console.log(currentPlayer.whitecards)
        }

    }

    shuffle() {
        return this.shuffledDeck.sort(() => Math.random() - 0.5)
    }
    checkCardsAreAvailable(shuffledDeck) {
        let cardsAvailable = shuffledDeck.filter(card => card["state"] === "inDeck").length;
        if (cardsAvailable > this.players.length * 3) {
            return true;
        }
    }

    allocateCards(){
        if (!checkCardsAreAvailable){
            reShuffleDeck()
        }
    }

    reShuffleDeck(deck) {
        this.shuffledDeck = this.shuffledDeck.filter(card => card["state"] === "discarded").map(card => {card["state"] = "inDeck"; return card;});

    }
}
    


// for(let card of shuffledDeck) {
//     if('nocardshaveinDeckastheirstate'){
//         while('cardsindeckhave"discarded"asstate') {
//             if(card["state"] === "discarded"){
//                 card["state"] = "inDeck";
//             } else {
//                 continue;
//             }
//         }

//     }
// }