const checkForName = require('./checkForName');

test('Keven', () => {
    expect('Keven').not.toMatch(/Picard/);
});

test('Archer', () => {
    expect('Archer').toMatch(/Archer/);
});