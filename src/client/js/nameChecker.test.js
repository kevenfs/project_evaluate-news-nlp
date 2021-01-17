import {
    checkForName
} from './nameChecker'

test('check if name is in the list', () => {
    expect(checkForName('Kirk')).toBe(true);
});