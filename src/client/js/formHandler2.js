function handleSubmitForm2(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('article').value

    Client.nameChecker(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
        .then(res => {
            return res.json()
        })
        .then(function (data) {
            document.getElementById('content').innerHTML = data.message
        })
}

export {
    handleSubmitForm2
}