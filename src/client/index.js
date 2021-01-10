import {
    checkForName
} from './js/nameChecker'
import {
    handleSubmitForm1
} from './js/formHandler'
import {
    handleSubmitForm2
} from './js/formHandler2'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/button.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

console.log(checkForName);

alert("I EXIST")

export {
    checkForName,
    handleSubmitForm1,
    handleSubmitForm2
}

/* Function called by second event listener */
const performAction = async (e) => {
    const newAnalysis = document.getElementById('analysis').value;
    const data = await getAnalyzedDataFromAPI(newAnalysis);
    postDataToServer(data.main.analysis);
    getRecentEntryData();
}

const getAnalyzedDataFromAPI = async (article) => {

    const res = await fetch(article)
    try {

        const data = await res.json();
        console.log(data)
        return data;
    } catch (error) {
        console.log("error", error);
        // appropriately handle the error
    }
}

const postDataToServer = async (analysis) => {

    const res = await fetch('http://localhost:8081/addData',

        {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                analysis: document.getElementById('analysis').value
            })
        });
    try {

        const data = await res.json();
        console.log(data)
        return data;
    } catch (error) {
        console.log("error", error);
        // appropriately handle the error
    }
}

const getRecentEntryData = async () => {

    const request = await fetch('http://localhost:8081/all');
    try {
        const allData = await request.json();
        console.log('All data is :');
        console.log(allData);
        document.getElementById('content').innerHTML = allData.analysis;
    } catch (error) {
        console.log('Error', error);
    }
}

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);