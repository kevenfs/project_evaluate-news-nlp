function handleSubmitForm1(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    fetch('http://localhost:8081/test', {
        method: "POST",
        credentials: 'same-origin',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            formText: formText
        }),

    });

    Client.checkForName(formText)

    console.log("::: Form Submitted :::")

    fetch('http://localhost:8081/test')
        .then(res => {
            return res.json()
        })
        .then(function (data) {
            document.getElementById('name_list').innerHTML = data.message
        })
}

function handleSubmitForm2(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('article').value

    fetch('http://localhost:8081/test', {
        method: "POST",
        credentials: 'same-origin',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            formText: formText
        }),

    });

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
    handleSubmitForm2
}