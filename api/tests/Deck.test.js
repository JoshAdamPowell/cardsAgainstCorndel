import Deck from '../services/deckService';

let whiteCards = [
    { text: "Coat hanger abortions.", state: "inDeck" },
    { text: "Man meat.", state: "inDeck" },
    { text: "Autocannibalism.", state: "inDeck" },
    { text: "Vigorous jazz hands.", state: "inDeck" },
    { text: "Flightless birds.", state: "inDeck" },
    { text: "Pictures of boobs.", state: "inDeck" },
    { text: "Doing the right thing.", state: "inDeck" },
    { text: "The violation of our most basic human rights.", state: "inDeck" },
    { text: "Viagra&reg;.", state: "inDeck" },
    { text: "Self-loathing.", state: "inDeck" },
    { text: "Concealing a boner.", state: "inDeck" },
]

let discardedCards = [
    { text: "Coat hanger abortions.", state: "discarded" },
    { text: "Man meat.", state: "discarded" },
    { text: "Autocannibalism.", state: "discarded" },
    { text: "Vigorous jazz hands.", state: "discarded" },
    { text: "Flightless birds.", state: "discarded" },
    { text: "Pictures of boobs.", state: "discarded" },
    { text: "Doing the right thing.", state: "discarded" },
    { text: "The violation of our most basic human rights.", state: "discarded" },
    { text: "Viagra&reg;.", state: "discarded" },
    { text: "Self-loathing.", state: "discarded" },
    { text: "Concealing a boner.", state: "discarded" },
]

let players =
    [{
        username: 'shaquille_oatmeal',
        score: 8,
        ID: 1,
        whitecards: []
    }]


test('if card is played, change status to "inPlay"', () => {
    const service = new Deck(whiteCards, players);

service.dealCards(whiteCards);

expect(whiteCards).toStrictEqual([
    { text: "Coat hanger abortions.", state: "inPlay" },
    { text: "Man meat.", state: "inPlay" },
    { text: "Autocannibalism.", state: "inPlay" },
    { text: "Vigorous jazz hands.", state: "inPlay" },
    { text: "Flightless birds.", state: "inPlay" },
    { text: "Pictures of boobs.", state: "inPlay" },
    { text: "Doing the right thing.", state: "inPlay" },
    { text: "The violation of our most basic human rights.", state: "inPlay" },
    { text: "Viagra&reg;.", state: "inPlay" },
    { text: "Self-loathing.", state: "inPlay" },
    { text: "Concealing a boner.", state: "inDeck" },
])
})

test('check all players have 10 cards', () => {
    const service = new Deck(whiteCards, players);

service.dealCards(whiteCards);

expect(players[0].whitecards.length).toBe(10);
})

test('when cards are discarded, change to indeck', () => {
    const service = new Deck(discardedCards, players);

service.reShuffleDeck(discardedCards);

expect(discardedCards).toStrictEqual([
    { text: "Coat hanger abortions.", state: "inDeck" },
    { text: "Man meat.", state: "inDeck" },
    { text: "Autocannibalism.", state: "inDeck" },
    { text: "Vigorous jazz hands.", state: "inDeck" },
    { text: "Flightless birds.", state: "inDeck" },
    { text: "Pictures of boobs.", state: "inDeck" },
    { text: "Doing the right thing.", state: "inDeck" },
    { text: "The violation of our most basic human rights.", state: "inDeck" },
    { text: "Viagra&reg;.", state: "inDeck" },
    { text: "Self-loathing.", state: "inDeck" },
    { text: "Concealing a boner.", state: "inDeck" },
])
})




