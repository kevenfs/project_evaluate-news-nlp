import {
    checkForName
} from './nameChecker'

function getAnswerFromName(name) {
    var answer = "Sorry, your name is not in the list"

    if (checkForName(name)) {
        answer = "Welcome captain! Your name is in the list"
    }

    return answer
}


function handleSubmitForm1(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    var result = getAnswerFromName(formText)

    document.getElementById('name_list').innerHTML = result

    return result
}

function handleSubmitForm2(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('article').value

    Client.analyzeArticle(formText)

    console.log("::: Form Submitted :::")

    fetch('http://localhost:8081/test')
        .then(res => {
            return res.json()
        })
        .then(function (data) {
            document.getElementById('sentiment_analysis').innerHTML = data.message
        })
}

export {
    handleSubmitForm1,
    handleSubmitForm2,
    getAnswerFromName
}