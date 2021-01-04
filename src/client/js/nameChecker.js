function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ]

    if (names.includes(inputText)) {
        alert("Welcome, Captain!")
    } else {
        console.log("error", error);
    }
    // appropriately handle the error
}


export {
    checkForName
}