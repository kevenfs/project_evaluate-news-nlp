function validString(inputText) {
    return typeof (inputText) == "string"
}

function analyzeArticle(inputText) {
    console.log("::: Running analyzeArticle :::", inputText);

    if (validString(inputText)) {

        async (e) => {
            const newAnalysis = document.getElementById('article').value;
            const data = await getAnalyzedDataFromAPI(newAnalysis);
            postDataToServer(data.main.analysis);
            getRecentEntryData();
        }
    }

}

export {
    analyzeArticle,
    validString
}