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

    if (newClassSchedule.children.length < MAX_DUPLICATES) {
        const newperiod = period.cloneNode(true);
        newClassSchedule.appendChild(newperiod);
    }
  });

// Working on getting period button to work on duplicated divs

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
  
// working on seating plan -- drag and disappear issue

document.addEventListener('DOMContentLoaded', function() {
    const seatingChart = document.getElementById('seatingChart');
    const addSeatBtn = document.getElementById('addSeatBtn');
    const maxSeats = 30;
    let seatCounter = 1;
  
    const seat = document.getElementById('seat');
    let offsetX, offsetY;
    let isDragging = false;
    
    seat.addEventListener('mousedown', (e) => {
      isDragging = true;
      offsetX = e.clientX - seat.getBoundingClientRect().left;
      offsetY = e.clientY - seat.getBoundingClientRect().top;
      seat.style.cursor = 'grabbing';
    });
    
    document.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      const x = e.clientX - offsetX;
      const y = e.clientY - offsetY;
      seat.style.left = x + 'px';
      seat.style.top = y + 'px';
    });
    
    document.addEventListener('mouseup', () => {
      isDragging = false;
      seat.style.cursor = 'grab';
    });
  
    addSeatBtn.addEventListener('click', function() {
      if (seatCounter >= maxSeats) return;
      const newSeat = document.createElement('div');
      newSeat.className = 'seat';
      newSeat.draggable = true;
      newSeat.innerHTML = '<textarea class="seatName" placeholder="Enter name"></textarea>';
      seatingChart.appendChild(newSeat);
      seatCounter++;
    });

  });


  // trying new code to get drag to work

  function dragstart_handler(seatingChart) {
    
    seatingChart.dataTransfer.setData("seat", ev.target.id);
    seatingChart.dataTransfer.effectAllowed = "move";
  }
  function dragover_handler(seatingChart) {
    seatingChart.preventDefault();
    seatingChart.dataTransfer.dropEffect = "move";
  }
  function drop_handler(seatingChart) {
    seatingChart.preventDefault();
    
    const data = seatingChart.dataTransfer.getData("seat");
    seatingChart.target.appendChild(document.getElementById(data));
  }
  
// Add New Period Planner

document.getElementById("addPeriodPlanBtn").addEventListener("click", function() {
    const MAX_DUPLICATES = 10;
  
    const period = document.getElementById("periodDiv");
    const containerPlan = document.getElementById("containerPlan");
  
    if (containerPlan.children.length < MAX_DUPLICATES) {
      
      const newperiod = period.cloneNode(true);
      
      containerPlan.appendChild(newperiod);
    }
  });
