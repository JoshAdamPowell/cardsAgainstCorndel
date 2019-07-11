import roundService from '../services/roundService';

const players = [{
    username: 'shaquille_oatmeal',
    score: 8,
    ID: 1,
    whitecards:[]
}, {
    username: 'dildo_swaggins',
    score: 6,
    ID: 2,
    whitecards:[]
},
{
    username: 'in_jail_out_soon',
    score: 7,
    ID: 3,
    whitecards:[]
},
{
    username: 'kiss - my - axe',
    score: 3,
    ID: 4,
    whitecards:[]
},
{
    username: 'hugs_for_drugs',
    score: 9,
    ID: 5,
    whitecards:[]
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