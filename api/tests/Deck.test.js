import Deck from '../services/deckService';

let whiteCardsInPlay = [
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

let whiteCardsToCheck = [
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

let inPlayCards = [
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
    { text: "Concealing a boner.", state: "inPlay" },
]

let inDeckCards = [
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

let deckToCheckCards = [
    { text: "Coat hanger abortions.", state: "inDeck" },
    { text: "Man meat.", state: "inPlay" },
    { text: "Autocannibalism.", state: "discarded" },
    { text: "Vigorous jazz hands.", state: "inPlay" },
    { text: "Flightless birds.", state: "inPlay" },
    { text: "Pictures of boobs.", state: "discarded" },
    { text: "Doing the right thing.", state: "discarded" },
    { text: "The violation of our most basic human rights.", state: "inPlay" },
    { text: "Viagra&reg;.", state: "inPlay" },
    { text: "Self-loathing.", state: "discarded" },
    { text: "Concealing a boner.", state: "inDeck" },
]

let deckToReShuffle = [
    { text: "Coat hanger abortions.", state: "inDeck" },
    { text: "Man meat.", state: "inPlay" },
    { text: "Autocannibalism.", state: "inDeck" },
    { text: "Vigorous jazz hands.", state: "inPlay" },
    { text: "Flightless birds.", state: "inPlay" },
    { text: "Pictures of boobs.", state: "inDeck" },
    { text: "Doing the right thing.", state: "inDeck" },
    { text: "The violation of our most basic human rights.", state: "inPlay" },
    { text: "Viagra&reg;.", state: "inPlay" },
    { text: "Self-loathing.", state: "inDeck" },
    { text: "Concealing a boner.", state: "inDeck" },
]

let players =
    [{
        username: 'shaquille_oatmeal',
        score: 8,
        ID: 1,
        whitecards: []
    }]


test('if card is played, change status to "inPlay"', () => {
    const service = new Deck(whiteCardsInPlay, players);
    service.shuffledDeck = whiteCardsInPlay;
service.dealCards(whiteCardsInPlay);
    console.log(whiteCardsInPlay)
expect(whiteCardsInPlay).toStrictEqual([
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
    const service = new Deck(whiteCardsToCheck, players);

service.dealCards(whiteCardsToCheck);

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

test('when cards are reshuffled, dont change "inPlay" cards', () => {
    const service = new Deck(inPlayCards, players);

service.reShuffleDeck(inPlayCards);

expect(inPlayCards).toStrictEqual([
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
    { text: "Concealing a boner.", state: "inPlay" },
])
})


test('when cards are reshuffled, dont change "inDeck" cards', () => {
    const service = new Deck(inDeckCards, players);

service.reShuffleDeck(inDeckCards);

expect(inDeckCards).toStrictEqual([
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

test('when cards are reshuffled, change "discarded" cards but not others', () => {
    const service = new Deck(deckToReShuffle, players);

service.reShuffleDeck(deckToReShuffle);

expect(deckToReShuffle).toStrictEqual([
    { text: "Coat hanger abortions.", state: "inDeck" },
    { text: "Man meat.", state: "inPlay" },
    { text: "Autocannibalism.", state: "inDeck" },
    { text: "Vigorous jazz hands.", state: "inPlay" },
    { text: "Flightless birds.", state: "inPlay" },
    { text: "Pictures of boobs.", state: "inDeck" },
    { text: "Doing the right thing.", state: "inDeck" },
    { text: "The violation of our most basic human rights.", state: "inPlay" },
    { text: "Viagra&reg;.", state: "inPlay" },
    { text: "Self-loathing.", state: "inDeck" },
    { text: "Concealing a boner.", state: "inDeck" },
])
})

test('when number of cards is less than players.length * 3 cards available to return true', () => {
    const service = new Deck(deckToCheckCards, players);
    const result = service.checkCardsAreAvailable();

service.checkCardsAreAvailable(deckToCheckCards, players);

expect(result).toBe(false);
})

