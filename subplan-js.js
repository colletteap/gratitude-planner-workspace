// more to come

// add date to top

// input for each white box

// local storage for all inputs

// when title of day clicked on, it changes color

// seating chart will have a click listener to duplicate, a click listener to move, a click listener for double click to type inside

// calendar add Days and Periods

// JavaScript code
document.getElementById("buttonDay").addEventListener("click", function() {
    const MAX_DUPLICATES = 10; // Maximum number of duplicates
  
    const classSchedule = document.getElementById("classSchedule");
    const classScheduleDays = document.getElementById("classScheduleDays");
  
    if (classScheduleDays.children.length < MAX_DUPLICATES) {
      // Clone the original classSchedule div
      const newClassSchedule = classSchedule.cloneNode(true);
      
      // Add a delete button to the cloned div
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete Day";
      deleteButton.classList.add("deleteButton");
      deleteButton.addEventListener("click", function() {
        classScheduleDays.removeChild(newClassSchedule);
      });
      
      newClassSchedule.appendChild(deleteButton);
  
      // Add the cloned div to the classScheduleDays container
      classScheduleDays.appendChild(newClassSchedule);
    }
  });
  

  document.getElementById("buttonPeriod").addEventListener("click", function() {
    const MAX_DUPLICATES = 12; // Maximum number of duplicates
  
    const period = document.getElementById("period");
    const classSchedule = document.getElementById("classSchedule");
  
    if (classSchedule.children.length < MAX_DUPLICATES) {
      // Clone the original classSchedule div
      const newperiod = period.cloneNode(true);
      // Add it to the classScheduleDays container
      classSchedule.appendChild(newperiod);
    }
  });

// Working on getting period button to work on duplicated divs
  
  document.getElementById("buttonPeriod").addEventListener("click", function() {
    const MAX_DUPLICATES = 12; // Maximum number of duplicates
  
    const period = document.getElementById("period");
    const newClassSchedule = document.getElementById("newClassSchedule");
  
    if (newClassSchedule.children.length < MAX_DUPLICATES) {
      // Clone the original classSchedule div
      const newperiod = period.cloneNode(true);
      // Add it to the classScheduleDays container
      newClassSchedule.appendChild(newperiod);
    }
  });
  

