const mockAPIResponse = require('./mockAPI.js')

test('Valid that mockAPIResponse return the right title', () => {
    expect(mockAPIResponse.title).toBe('test json response');
});