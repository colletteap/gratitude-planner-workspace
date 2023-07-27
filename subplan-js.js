// more to come

// add date to top

// input for each white box

// local storage for all inputs

// when title of day clicked on, it changes color

// seating chart will have a click listener to duplicate, a click listener to move, a click listener for double click to type inside

// calendar add Days and Periods

document.getElementById("buttonDay").addEventListener("click", function() {
    const MAX_DUPLICATES = 10; // Maximum number of duplicates
  
    const classSchedule = document.getElementById("classSchedule");
    const classScheduleDays = document.getElementById("classScheduleDays");
  
    if (classScheduleDays.children.length < MAX_DUPLICATES) {
      // Clone the original classSchedule div
      const newClassSchedule = classSchedule.cloneNode(true);
      // Add it to the classScheduleDays container
      classScheduleDays.appendChild(newClassSchedule);
    }
  });

  

const maxPeriods = 10

calendar.addEventListener("click", (event) => {
    if (event.target.classList.contains("periodButton")) {
        const dayDiv = event.target.parentNode;
        const periodsDiv = dayDiv.querySelector("period");
        if (periodsDiv.children.length < maxPeriods) {
            const newPeriod = document.createElement("div");
            newPeriod.classList.add("period");
            newPeriod.innerHTML = `<h3>Period ${periodsDiv.children.length + 1}</h3>`;
            periodsDiv.appendChild(newPeriod);
        }
    }
});