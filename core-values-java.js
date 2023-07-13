// Save to Local Storage
const cvdataInput1 = document.getElementById("cvinput1");
const cvsaveButton = document.getElementById("cvButton");

cvdataInput1.value = localStorage.getItem("cvinput1");
cvsaveButton.addEventListener("click", savecvData);

// Function to save input data to local storage
function savecvData() {
    
    // Save the data to local storage
    localStorage.setItem('cvinput1', cvdataInput1.value);
    
}