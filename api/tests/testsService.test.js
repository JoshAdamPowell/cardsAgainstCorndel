import TestService from '../services/testService';

test('adds two positive integers', () => {
    // ARRANGE
    const service = new TestService();

    // ACT
    const result = service.sum(1,3);
    
    // ASSERT
    expect(result).toBe(4)
})