// Personal API Key for MeaningCloud API
/* Function to GET Web API Analysis */
const accessAPI = {
    'method': 'POST',
    'hostname': 'api.meaningcloud.com',
    'path': '/sentiment-2.1?key=5de29e783641a0b64374707ebc8f4b5e&lang=en&txt=<text>&model=Random',
    'headers': {},
    'maxRedirects': 20
};

/* Function called by event listener */
const performAction = async (e) => {
    const newEntry = document.getElementById('entry').value;
    const data = await getEntryAnalyzedByAPI(accessAPI, apiKey, lang, newEntry, model);
    postDataToServer(data.main.temp);
    getRecentEntryData();
}

const getEntryAnalyzedByAPI = async (accessAPI, key, lang, txt, model) => {

    const res = await fetch(accessAPI + key + lang + entry + model)
    try {

        const data = await res.json();
        console.log(data)
        return data;
    } catch (error) {
        console.log("error", error);
        // appropriately handle the error
    }
}

/* const postDataToServer = async (temp) => {

    const res = await fetch('http://localhost:8000/addData',

        {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                date: newDate,
                temp: temp,
                feeling: document.getElementById('feelings').value
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

    const request = await fetch('http://localhost:8000/all');
    try {
        const allData = await request.json();
        console.log('All data is :');
        console.log(allData);
        document.getElementById('date').innerHTML = allData.date;
        document.getElementById('temp').innerHTML = allData.temp;
        document.getElementById('content').innerHTML = allData.feel;
    } catch (error) {
        console.log('Error', error);
    }
}

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction); */
}