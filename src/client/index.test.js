const fetch = require("node-fetch");
const {
    postDataToServer
} = require('./index.js')

let testArticle = {
    'title': 'test title for post',
    'message': 'test message for post',
    'time': 'test time for post'
}

test('Valid that the post article is working', async () => {
    const data = await postDataToServer(testArticle);
    expect(data[0]).toStrictEqual(testArticle);
});