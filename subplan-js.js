// more to come

// add date to top

// input for each white box

// local storage for all inputs

// when title of day clicked on, it changes color

// seating chart will have a click listener to duplicate, a click listener to move, a click listener for double click to type inside

// calendar add Days and Periods

const maxDays = 10;
const maxPeriods = 10;
let currentDay = 1;

const addDayButton = document.getElementById("addDayButton");
const calendar = document.getElementById("calendar");

addDayButton.addEventListener("click", () => {
    if (currentDay <= maxDays) {
        const newDay = document.createElement("div");
        newDay.classList.add("day");
        newDay.innerHTML = `
            <h2>Day ${currentDay}</h2>
            <button class="addPeriodButton">Add Period</button>
            <div class="periods"></div>
        `;
        calendar.appendChild(newDay);
        currentDay++;
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