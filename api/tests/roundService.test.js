import roundService from '../services/roundService';
import player from '../Objects/player';

const players = [{
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
]
test('if new game, get a random player to be czar', () => {
    const mockMath = Object.create(global.Math);
    mockMath.random = () => 1;
    global.Math = mockMath;

    const service = new roundService(players);

    const result = service.getCzar(true);

    expect(result).toStrictEqual(
        {
            username: 'hugs_for_drugs',
            score: 9,
            ID: 5
        });
})

test('if not new game, get next player in array to be czar', () => {

    const service = new roundService(players);
    service.currentCzarNum = 3;

    const result = service.getCzar(false);


    expect(result).toStrictEqual(
        {
            username: 'hugs_for_drugs',
            score: 9,
            ID: 5
        });
})

test('if end of player list, reset to 0', () => {

    const service = new roundService(players);
    service.currentCzarNum = 5;

    const result = service.getCzar(false);


    expect(result).toStrictEqual(
        {
            username: 'shaquille_oatmeal',
            score: 8,
            ID: 1
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

