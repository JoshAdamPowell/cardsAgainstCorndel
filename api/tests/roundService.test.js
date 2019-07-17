import roundService from '../services/roundService';
import player from '../Objects/player';

let whiteCards = [
    { text: "Coat hanger abortions.", state: "inPlay" },
    { text: "Man meat.", state: "inPlay" },
    { text: "Autocannibalism.", state: "inPlay" },
    { text: "Vigorous jazz hands.", state: "inPlay" },
    { text: "Flightless birds.", state: "inPlay" },
    { text: "Pictures of boobs.", state: "inPlay" },
    { text: "Doing the right thing.", state: "inPlay" },
    { text: "The violation of our most basic human rights.", state: "inPlay" },
    { text: "Viagra&reg;.", state: "inDeck" },
    { text: "Self-loathing.", state: "inDeck" },
    { text: "Concealing a boner.", state: "inDeck" },
]



let playersArray = [{
    username: 'shaquille_oatmeal',
    score: 8,
    ID: 1,
    whitecards: [{ text: "Coat hanger abortions.", state: "inPlay" },
    { text: "Man meat.", state: "inPlay" },
    { text: "Autocannibalism.", state: "inPlay" },
    { text: "Vigorous jazz hands.", state: "inPlay" },
    { text: "Flightless birds.", state: "inPlay" },
    { text: "Pictures of boobs.", state: "inPlay" },
    { text: "Doing the right thing.", state: "inPlay" },
    { text: "The violation of our most basic human rights.", state: "inPlay" }]
}, {
    username: 'dildo_swaggins',
    score: 6,
    ID: 2,
    whitecards: [{ text: "Coat hanger abortions.", state: "inPlay" },
    { text: "Man meat.", state: "inPlay" },
    { text: "Autocannibalism.", state: "inPlay" },
    { text: "Vigorous jazz hands.", state: "inPlay" },
    { text: "Flightless birds.", state: "inPlay" },
    { text: "Pictures of boobs.", state: "inPlay" },
    { text: "Doing the right thing.", state: "inPlay" },
    { text: "The violation of our most basic human rights.", state: "inPlay" }]
},
{
    username: 'in_jail_out_soon',
    score: 7,
    ID: 3,
    whitecards: [{ text: "Coat hanger abortions.", state: "inPlay" },
    { text: "Man meat.", state: "inPlay" },
    { text: "Autocannibalism.", state: "inPlay" },
    { text: "Vigorous jazz hands.", state: "inPlay" },
    { text: "Flightless birds.", state: "inPlay" },
    { text: "Pictures of boobs.", state: "inPlay" },
    { text: "Doing the right thing.", state: "inPlay" },
    { text: "The violation of our most basic human rights.", state: "inPlay" }]
},
{
    username: 'kiss - my - axe',
    score: 3,
    ID: 4,
    whitecards: [{ text: "Coat hanger abortions.", state: "inPlay" },
    { text: "Man meat.", state: "inPlay" },
    { text: "Autocannibalism.", state: "inPlay" },
    { text: "Vigorous jazz hands.", state: "inPlay" },
    { text: "Flightless birds.", state: "inPlay" },
    { text: "Pictures of boobs.", state: "inPlay" },
    { text: "Doing the right thing.", state: "inPlay" },
    { text: "The violation of our most basic human rights.", state: "inPlay" }]
},
{
    username: 'hugs_for_drugs',
    score: 9,
    ID: 5,
    whitecards: [{ text: "Coat hanger abortions.", state: "inPlay" },
    { text: "Man meat.", state: "inPlay" },
    { text: "Autocannibalism.", state: "inPlay" },
    { text: "Vigorous jazz hands.", state: "inPlay" },
    { text: "Flightless birds.", state: "inPlay" },
    { text: "Pictures of boobs.", state: "inPlay" },
    { text: "Doing the right thing.", state: "inPlay" },
    { text: "The violation of our most basic human rights.", state: "inPlay" }]
}
]
test('if new game, get a random player to be czar', () => {
    const mockMath = Object.create(global.Math);
    mockMath.random = () => 1;
    global.Math = mockMath;

    const service = new roundService(playersArray, whiteCards);

    const result = service.getCzar(true);

    expect(result).toStrictEqual(
        {
            username: 'hugs_for_drugs',
            score: 9,
            ID: 5,
            whitecards: [{ text: "Coat hanger abortions.", state: "inPlay" },
            { text: "Man meat.", state: "inPlay" },
            { text: "Autocannibalism.", state: "inPlay" },
            { text: "Vigorous jazz hands.", state: "inPlay" },
            { text: "Flightless birds.", state: "inPlay" },
            { text: "Pictures of boobs.", state: "inPlay" },
            { text: "Doing the right thing.", state: "inPlay" },
            { text: "The violation of our most basic human rights.", state: "inPlay" }]
        });
})

test('if not new game, get next player in array to be czar', () => {

    const service = new roundService(playersArray, whiteCards);
    service.currentCzarNum = 3;

    const result = service.getCzar(false);


    expect(result).toStrictEqual(
        {
            username: 'hugs_for_drugs',
            score: 9,
            ID: 5,
            whitecards: [{ text: "Coat hanger abortions.", state: "inPlay" },
            { text: "Man meat.", state: "inPlay" },
            { text: "Autocannibalism.", state: "inPlay" },
            { text: "Vigorous jazz hands.", state: "inPlay" },
            { text: "Flightless birds.", state: "inPlay" },
            { text: "Pictures of boobs.", state: "inPlay" },
            { text: "Doing the right thing.", state: "inPlay" },
            { text: "The violation of our most basic human rights.", state: "inPlay" }]
        });
})

test('if end of player list, reset to 0', () => {

    const service = new roundService(playersArray, whiteCards);
    service.currentCzarNum = 5;

    const result = service.getCzar(false);


    expect(result).toStrictEqual({
        username: 'shaquille_oatmeal',
        score: 8,
        ID: 1,
        whitecards: [{ text: "Coat hanger abortions.", state: "inPlay" },
        { text: "Man meat.", state: "inPlay" },
        { text: "Autocannibalism.", state: "inPlay" },
        { text: "Vigorous jazz hands.", state: "inPlay" },
        { text: "Flightless birds.", state: "inPlay" },
        { text: "Pictures of boobs.", state: "inPlay" },
        { text: "Doing the right thing.", state: "inPlay" },
        { text: "The violation of our most basic human rights.", state: "inPlay" }]

    });
})

test('check if the user has 10 points, if so they win the game', () => {
    const service = new roundService(players);
    service.player = new player(1,'Jay',10);

    const result = service.checkWin(true);

    expect(result).toBeTruthy()



})
test('If not, start a new round', () => {
    const service = new roundService(players);
    service.player = new player(1,'Jay',8);

    const result = service.checkWin(false);

    expect(result).toBeFalsy()

})

