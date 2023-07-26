// more to come

// add date to top

// input for each white box

// local storage for all inputs

// when title of day clicked on, it changes color

// seating chart will have a click listener to duplicate, a click listener to move, a click listener for double click to type inside

// calendar add Days and Periods

const maxDivs = 10;
let currentDivCount = 1;

document.getElementById("buttonDay").addEventListener("click", function() {
  if (currentDivCount < maxDivs) {
    currentDivCount++;
    const originalDiv = document.getElementById("classSchedule");
    const newDiv = originalDiv.cloneNode(true);
    newDiv.textContent = "Class Schedule " + currentDivCount;
    newDiv.id = "classSchedule" + currentDivCount;
    document.getElementById("classScheduleDays").appendChild(newDiv);
  }
});

calendar.addEventListener("click", (event) => {
    if (event.target.classList.contains("addPeriodButton")) {
        const dayDiv = event.target.parentNode;
        const periodsDiv = dayDiv.querySelector(".periods");
        if (periodsDiv.children.length < maxPeriods) {
            const newPeriod = document.createElement("div");
            newPeriod.classList.add("period");
            newPeriod.innerHTML = `<h3>Period ${periodsDiv.children.length + 1}</h3>`;
            periodsDiv.appendChild(newPeriod);
        }
    }
});