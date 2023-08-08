document.getElementById("buttonDay").addEventListener("click", function() {
    const MAX_DUPLICATES_DAY = 10; // Maximum number of day duplicates
    const MAX_DUPLICATES_PERIOD = 12; // Maximum number of period duplicates
  
    const classSchedule = document.getElementById("classSchedule");
    const classScheduleDays = document.getElementById("classScheduleDays");
  
    if (classScheduleDays.children.length < MAX_DUPLICATES_DAY) {
      // Clone the original classSchedule div
      newClassSchedule = classSchedule.cloneNode(true);
  
      // Add a delete button to the cloned div
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete Day";
      deleteButton.classList.add("deleteButton");
      deleteButton.addEventListener("click", function() {
        classScheduleDays.removeChild(newClassSchedule);
      });
  
      newClassSchedule.appendChild(deleteButton);
  
      // Add the cloned div to the classScheduleDays container
      // change id
      classScheduleDays.appendChild(newClassSchedule);
    }

    if (document.getElementById("buttonPeriod").addEventListener) ("click", function() {
        const MAX_DUPLICATES_PERIOD = 12; // Maximum number of period duplicates
      
        const classSchedule = document.getElementById("classSchedule");
        const period = document.getElementById("period");
      
        if (classSchedule.children.length < MAX_DUPLICATES_PERIOD) {
          // Clone the original period div
          const newPeriod = period.cloneNode(true);
          // Add it to the classScheduleDays container
          classSchedule.appendChild(newPeriod);
        }
  })});
  

