import TestService from '../services/testService';
import roundService from '../services/roundService';

test('adds two positive integers', () => {
    // ARRANGE
    const service = new TestService();

    // ACT
    const result = service.sum(1,3);
    
    // ASSERT
    expect(result).toBe(4)
})

test('if new game, get a random player to be czar', () => {
    const mockMath = Object.create(global.Math);
    mockMath.random = () => 1;
    global.Math = mockMath;
    
    const service = new roundService();

    const result = service.getCzar(true);

    expect(result).toStrictEqual(
        {
            username: 'hugs_for_drugs',
            score: 9,
            ID: 5
        });
})

test('if not new game, get next player in array to be czar', () => {
    
    const service = new roundService();
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
    
    const service = new roundService();
    service.currentCzarNum = 5;

    const result = service.getCzar(false);


    expect(result).toStrictEqual(
        {
            username: 'shaquille_oatmeal',
            score: 8,
            ID: 1
        });
})