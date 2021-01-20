import {
    checkForName
} from './js/nameChecker'
import {
    handleSubmitForm1,
    handleSubmitForm2
} from './js/formHandlers'
import {
    analyzeArticle
} from './js/analyzeArticle'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/button.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

const fetch = require("node-fetch");

/* Function called by second event listener */

const performAction = async (e) => {
    const newAnalysis = document.getElementById('article').value;
    const data = await getAnalyzedDataFromAPI(newAnalysis);
    postDataToServer(data.main.analysis);
    getRecentEntryData();
}


const getAnalyzedDataFromAPI = async (article) => {

    const res = await fetch(article)

    try {
        const data = await res.json();
        return data;
    } catch (error) {
        console.log("error", error);

        return Promise.reject({
            message: 'Call did not work properly',
            error: error,
        });
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
                analysis: analysis
            })
        });

    try {

        const data = await res.json();

        return data;
    } catch (error) {
        console.log("error", error);

        return Promise.reject({
            message: 'Call did not work properly',
            error: error,
        });
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
        console.log("error", error);

        return Promise.reject({
            message: 'Call did not work properly',
            error: error,
        });
    }
}

// Event listener to add function to existing HTML DOM element
if (document.getElementById('article')) {
    document.getElementById('article').addEventListener('click', performAction);
}

export {
    checkForName,
    handleSubmitForm1,
    handleSubmitForm2,
    analyzeArticle,
    getAnalyzedDataFromAPI,
    postDataToServer,
    getRecentEntryData

}