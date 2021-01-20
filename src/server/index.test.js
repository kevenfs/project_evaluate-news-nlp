const fetch = require("node-fetch");
const mockAPIResponse = require('./mockAPI.js')

test('Valid that the call to test is working', async () => {
    const request = await fetch('http://localhost:8081/test');
    expect(await request.json()).toStrictEqual(mockAPIResponse);
});