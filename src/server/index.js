require('dotenv').config()

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var bodyParser = require('body-parser')
var cors = require('cors')


const app = express()

app.use(cors())

// to use json
app.use(bodyParser.json())

// to use url encoded values
app.use(bodyParser.urlencoded({
    extended: true
}))

// Initialize the main project folder
app.use(express.static('dist'))

app.post('/addData', addData);
app.get('/all', sendData);
app.post('/sentiment', sentimentAnalysis);

app.get('/', function (req, res) {
    res.sendFile(__dirname + 'dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

const projectData = []

app.get('/test', function (req, res) {
    res.json(mockAPIResponse)
})

// Callback function to complete GET '/all'

function sendData(request, response) {
    response.send(projectData);
};

// Post Function

function addData(request, response) {

    let data = request.body;

    console.log('server side data ', data)

    // analysis -> user's input

    projectData.push(data.analysis);

    response.send(projectData);
}

// Sentiment analysis API (Meaning Cloud)

function sentimentAnalysis(request, response) {
    var https = require('follow-redirects').https;
    var fs = require('fs');

    const text = escape(request.body.formText)

    var options = {
        'method': 'POST',
        'hostname': 'api.meaningcloud.com',
        'path': `/sentiment-2.1?key=${process.env.API_KEY}&lang=en&txt=${text}&model=nlp-project`,
        'headers': {},
        'maxRedirects': 20
    };

    var req = https.request(options, function (res) {
        var chunks = [];

        res.on("data", function (chunk) {
            chunks.push(chunk);
        });

        res.on("end", function (chunk) {
            var body = Buffer.concat(chunks);
            console.log(body.toString());
            response.send(body.toString());
        });

        res.on("error", function (error) {
            console.error(error);
        });
    });

    req.end();

}