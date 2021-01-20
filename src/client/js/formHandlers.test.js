import {
    getAnswerFromName
} from './formHandlers'

test("See if name's answer works properly", () => {
    expect(getAnswerFromName('Kirk')).toBe("Welcome captain! Your name is in the list");
});