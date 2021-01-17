const fetch = require("node-fetch");
const mockAPIResponse = require('./mockAPI.js')

test('check if name is in the list', async () => {
    const request = await fetch('http://localhost:8081/test');
    expect(await request.json()).toStrictEqual(mockAPIResponse);
});