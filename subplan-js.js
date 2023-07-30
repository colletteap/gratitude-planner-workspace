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
  
// working on seating plan -- drag and disappear issue

document.addEventListener('DOMContentLoaded', function() {
    const seatingPlan = document.getElementById('containerSeating');
    const addSeatBtn = document.getElementById('addSeatBtn');
    const maxSeats = 30;
    let seatCounter = 1;
  
    function startDrag(event) {
        const seat = event.target;
        const initialX = event.clientX;
        const initialY = event.clientY;
        const { top, left } = seat.getBoundingClientRect();
        const offsetX = initialX - left;
        const offsetY = initialY - top;
      
        function handleDrag(event) {
          const newX = event.clientX - offsetX;
          const newY = event.clientY - offsetY;
          seat.style.transform = `translate(${newX}px, ${newY}px)`;
        }
      
        function stopDrag() {
          document.removeEventListener('mousemove', handleDrag);
          document.removeEventListener('mouseup', stopDrag);
        }
      
        document.addEventListener('mousemove', handleDrag);
        document.addEventListener('mouseup', stopDrag);
      }
  
    addSeatBtn.addEventListener('click', function() {
      if (seatCounter >= maxSeats) return;
      const newSeat = document.createElement('div');
      newSeat.className = 'seat';
      newSeat.draggable = true;
      newSeat.innerHTML = '<textarea class="seatName" placeholder="Enter name"></textarea>';
      containerSeating.appendChild(newSeat);
      seatCounter++;
    });
  
    containerSeating.addEventListener('dblclick', duplicateSeat);
    containerSeating.addEventListener('dragstart', handleDragStart);
  });
  
  
