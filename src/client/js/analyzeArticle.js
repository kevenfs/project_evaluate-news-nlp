function analyzeArticle(inputText) {
    console.log("::: Running analyzeArticle :::", inputText);
    async (e) => {
        const newAnalysis = document.getElementById('article').value;
        const data = await getAnalyzedDataFromAPI(newAnalysis);
        postDataToServer(data.main.analysis);
        getRecentEntryData();
    }
}


export {
    analyzeArticle
}