var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var bodyParser = require('body-parser')
var cors = require('cors')

var json = {
    'title': 'test json response',
    'message': 'this is a message',
    'time': 'now'
}

const app = express()
app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
    extended: true
}))

// Initialize the main project folder
app.use(express.static(__dirname + 'dist'))

app.post('/addData', addData);
app.get('/all', sendData);

console.log(JSON.stringify(mockAPIResponse))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

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

    projectData["analysis"] = data.analysis;

    response.send(projectData);
}

// Sentiment analysis API (Meaning Cloud)
var https = require('follow-redirects').https;
var fs = require('fs');

var options = {
    'method': 'POST',
    'hostname': 'api.meaningcloud.com',
    'path': '/sentiment-2.1?key=5de29e783641a0b64374707ebc8f4b5e&lang=en&txt=<text>&model=nlp-project',
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
    });

    res.on("error", function (error) {
        console.error(error);
    });
});

req.end();