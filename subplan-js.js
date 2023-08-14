// local storage for all inputs - use form

// when title of day clicked on, it changes color

// seating chart will have a click listener to duplicate, a click listener to move, a click listener for double click to type inside

// calendar add Days and Periods

//Saving to Local Storage

const inputsAndTextareas = document.querySelectorAll('input, textarea');

inputsAndTextareas.forEach((element, index) => {
  element.value = localStorage.getItem(`savedData_${index}`);
});

const saveButton = document.getElementById('saveButton');
if (saveButton) {
  saveButton.addEventListener('click', () => saveData(inputsAndTextareas));
}

function saveData(elements) {
  elements.forEach((element, index) => {
    localStorage.setItem(`savedData_${index}`, element.value);
  });
}



// Add Period Button

document.addEventListener('DOMContentLoaded', function () {
  const addPeriodButton = document.getElementById('buttonPeriod');
  const classScheduleContainer = document.querySelector('.classScheduleDays');
  const periodDiv = document.getElementById('period');
  let clonedPeriodCount = 0;

  addPeriodButton.addEventListener('click', function () {
    if (clonedPeriodCount < 5) {
      const clonedPeriod = periodDiv.cloneNode(true);

      classScheduleContainer.querySelectorAll('.day-container').forEach(dayContainer => {
        dayContainer.appendChild(clonedPeriod.cloneNode(true));
      });
      clonedPeriodCount++;
    } else {
      alert('If you have more than 10 periods in a day, please see your administrator... something went wrong.');
    }
  });

  // Delete Period Button
  
 const deletePeriodButton = document.getElementById('buttonPeriodDelete')
 deletePeriodButton.addEventListener('click', function (){
  const allDays = document.querySelectorAll('.day-container');
  allDays.forEach ((elementEachDay)=> {
    if (elementEachDay.childElementCount < 7) {
      alert('Max number of periods deleted!');
      return;
    }
  elementEachDay.lastElementChild.remove();
  })
 })
});







// Hiding Days - hiding day 6

const hiddenButton6 = document.getElementById("hiddenButton6");
const classScheduleDay6 = document.getElementById("classScheduleDay6");

// Add a click event listener to the button
hiddenButton6.addEventListener("click", function () {

  classScheduleDay6.style.display = "none";
});

// Adding Unhide Button

const unhideButton6 = document.getElementById("unhideButton6");

hiddenButton6.addEventListener("click", function () {

  unhideButton6.style.display = "flex";
});

unhideButton6.addEventListener("click", function () {

  classScheduleDay6.style.display = "flex";
  unhideButton6.style.display = "none";
})

// Hide/Unhide Day 7

const hiddenButton7 = document.getElementById("hiddenButton7");
const classScheduleDay7 = document.getElementById("classScheduleDay7");

// Add a click event listener to the button
hiddenButton7.addEventListener("click", function () {

  classScheduleDay7.style.display = "none";
});

// Adding Unhide Button

const unhideButton7 = document.getElementById("unhideButton7");

hiddenButton7.addEventListener("click", function () {

  unhideButton7.style.display = "flex";
});

unhideButton7.addEventListener("click", function () {

  classScheduleDay7.style.display = "flex";
  unhideButton7.style.display = "none";
})

// Hide/Unhide Day 8

const hiddenButton8 = document.getElementById("hiddenButton8");
const classScheduleDay8 = document.getElementById("classScheduleDay8");

// Add a click event listener to the button
hiddenButton8.addEventListener("click", function () {

  classScheduleDay8.style.display = "none";
});

// Adding Unhide Button

const unhideButton8 = document.getElementById("unhideButton8");

hiddenButton8.addEventListener("click", function () {

  unhideButton8.style.display = "flex";
});

unhideButton8.addEventListener("click", function () {

  classScheduleDay8.style.display = "flex";
  unhideButton8.style.display = "none";
})

// Hide/Unhide Day 9

const hiddenButton9 = document.getElementById("hiddenButton9");
const classScheduleDay9 = document.getElementById("classScheduleDay9");

// Add a click event listener to the button
hiddenButton9.addEventListener("click", function () {

  classScheduleDay9.style.display = "none";
});

// Adding Unhide Button

const unhideButton9 = document.getElementById("unhideButton9");

hiddenButton9.addEventListener("click", function () {

  unhideButton9.style.display = "flex";
});

unhideButton9.addEventListener("click", function () {

  classScheduleDay9.style.display = "flex";
  unhideButton9.style.display = "none";
})

// Hide/Unhide Day 10

const hiddenButton10 = document.getElementById("hiddenButton10");
const classScheduleDay10 = document.getElementById("classScheduleDay10");

// Add a click event listener to the button
hiddenButton10.addEventListener("click", function () {

  classScheduleDay10.style.display = "none";
});

// Adding Unhide Button

const unhideButton10 = document.getElementById("unhideButton10");

hiddenButton10.addEventListener("click", function () {

  unhideButton10.style.display = "flex";
});

unhideButton10.addEventListener("click", function () {

  classScheduleDay10.style.display = "flex";
  unhideButton10.style.display = "none";
})


//Looping Student Names 

const studentNamesDiv = document.getElementById('studentNames');

// Looping


for (let i = 1; i <= 30; i++) {
  const textarea = document.createElement('textarea');
  textarea.id = `student-name-${i}`;
  textarea.placeholder = `Student ${i} Name`;
  textarea.className = 'student-name';
  studentNamesDiv.appendChild(textarea);
}

// Looping Student Notes
const studentNotesDiv = document.getElementById('studentNotes');

// Looping

for (let i = 1; i <= 30; i++) {
  const textarea = document.createElement('textarea');
  textarea.id = `student-note-${i}`;
  textarea.placeholder = `Student ${i} Notes`;
  textarea.className = 'student-notes';
  studentNotesDiv.appendChild(textarea);
}

// working on seating plan -- drag and disappear issue

document.addEventListener('DOMContentLoaded', function () {
  const seatingChart = document.getElementById('seatingChart');
  const addSeatBtn = document.getElementById('addSeatBtn');
  const maxSeats = 30;
  let seatCounter = 1;

  // Add Seat Button Code

  addSeatBtn.addEventListener('click', function () {
    if (seatCounter >= maxSeats) return;
    const newSeat = document.createElement('div');
    newSeat.className = 'seat';
    newSeat.id = 'seat';
    newSeat.style.cursor = "move";
    newSeat.draggable = true;
    newSeat.innerHTML = '<textarea class="seatName" placeholder="Enter name"></textarea>';
    seatingChart.appendChild(newSeat);
    seatCounter++;
  });
});

// dragging and dropping
var isDragging = false;
var dragOffsetX = 0;
var dragOffsetY = 0;

var draggableSeat = document.getElementById("addSeatBtn");

// Function to start dragging
function startDrag(e) {
  isDragging = true;
  var rect = draggableSeat.getBoundingClientRect();
  dragOffsetX = e.clientX - rect.left;
  dragOffsetY = e.clientY - rect.top;
}

// Function to stop dragging
function stopDrag() {
  isDragging = false;
}

// Function to move the div
function drag(e) {
  if (!isDragging) return;
  draggableSeat.style.left = (e.clientX - dragOffsetX) + "px";
  draggableSeat.style.top = (e.clientY - dragOffsetY) + "px";
}

// Attach event listeners
draggableSeat.addEventListener("mousedown", startDrag);
document.addEventListener("mouseup", stopDrag);
document.addEventListener("mousemove", drag);

// Add Period Plan Button

document.addEventListener('DOMContentLoaded', function () {
  const addPeriodPlanBtn = document.getElementById('addPeriodPlanBtn');
  const containerPlan = document.querySelector('.containerPlan');
  const parentPeriodDiv = document.getElementById('periodDiv');
  let clonedPeriodCount = 0;

  addPeriodPlanBtn.addEventListener('click', function () {
    if (clonedPeriodCount < 5) {
      const clonedPeriod = parentPeriodDiv.cloneNode(true);

      containerPlan.appendChild(clonedPeriod);
      clonedPeriodCount++;
    } else {
      alert('Seriously, if you have more than 10 periods.. your problem is bigger than needing a planner');
    }
  });
});

  //Saving to Local Storage
