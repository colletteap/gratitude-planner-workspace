// Save to Local Storage
const cvdataInput = document.getElementById("cvinput");
const cvsaveButton = document.getElementById("cvButton");

cvdataInput.value = localStorage.getItem("savedcvData");

// Function to save input data to local storage
function savecvData() {
    // Get the input value
    const cvdata = cvdataInput.value;

    // Save the data to local storage
    localStorage.setItem('savedcvData', cvdata);

    // Function to retrieve and display data from local storage
    function retrievecvData() {
        // Retrieve the data from local storage
        const inputData = localStorage.getItem('savedcvData');
    }};