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

const handleSubmitForm2 = async (event) => {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('article').value

    console.log("::: Form Submitted :::")


    const res = await fetch('http://localhost:8081/sentiment', {
        method: "POST",
        credentials: 'same-origin',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            formText: formText
        })
    });

    try {

        const data = await res.json();

        console.log(data)

        document.getElementById('sentiment_analysis').innerHTML = `
            Subjectivity = ${data.subjectivity} </br>
            Agreement = ${data.agreement} </br>
            Confidence= ${data.confidence} </br>
            Irony= ${data.irony} </br>
        `

        return data;

    } catch (error) {
        console.log("error", error);

        return Promise.reject({
            message: 'Call did not work properly',
            error: error
        });
    }

}

export {
    handleSubmitForm1,
    handleSubmitForm2,
    getAnswerFromName
}