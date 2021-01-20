import {
    validString
} from './analyzeArticle'

test('Check if inputText is is String', () => {
    expect(validString('Kirk')).toBe(true);
});