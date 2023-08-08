// local storage for all inputs - use form

// when title of day clicked on, it changes color

// seating chart will have a click listener to duplicate, a click listener to move, a click listener for double click to type inside

// calendar add Days and Periods




// Hiding Days

const hiddenButton = document.getElementById("hiddenButton");
        const classScheduleDay6 = document.getElementById("classScheduleDay6");

        // Add a click event listener to the button
        hiddenButton.addEventListener("click", function() {
            
            classScheduleDay6.style.display = "none";
        });

// Adding Unhide Button

const unhideButton = document.getElementById("unhideButton");

hiddenButton.addEventListener("click", function () {

  unhideButton.style.display = "block";
});

unhideButton.addEventListener("click", function () {

  classScheduleDay6.style.display = "block";
  unhideButton.style.display = "none";
})



//Looping Student Names 

const studentNamesDiv = document.getElementById('studentNames');

// Looping

for (let i = 1; i <= 30; i++) {
  const textarea = document.createElement('textarea');
  textarea.id = `student-name-${i}`;
  textarea.placeholder = `Student ${i} Name`;
  textarea.style.width = '100%';
  textarea.style.height = '12px';
  textarea.style.border = '1px solid #ccc';
  textarea.style.padding = '5px';
  textarea.style.marginBottom = '5px';
  textarea.style.resize = 'none';
  textarea.style.fontFamily = 'Verdana, Geneva, Tahoma, sans-serif';
  textarea.style.fontSize = '10px';
  textarea.style.overflow = 'hidden';
  studentNamesDiv.appendChild(textarea);
}

// Looping Student Notes
const studentNotesDiv = document.getElementById('studentNotes');

// Looping

for (let i = 1; i <= 30; i++) {
  const textarea = document.createElement('textarea');
  textarea.id = `student-note-${i}`;
  textarea.placeholder = `Student ${i} Notes`;
  textarea.style.width = '100%';
  textarea.style.height = '12px';
  textarea.style.border = '1px solid #ccc';
  textarea.style.padding = '5px';
  textarea.style.marginBottom = '5px';
  textarea.style.marginLeft = '5px';
  textarea.style.resize = 'none';
  textarea.style.fontFamily = 'Verdana, Geneva, Tahoma, sans-serif';
  textarea.style.fontSize = '10px';
  textarea.style.overflow = 'hidden';
  studentNotesDiv.appendChild(textarea);
}




// working on seating plan -- drag and disappear issue

document.addEventListener('DOMContentLoaded', function () {
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

  addSeatBtn.addEventListener('click', function () {
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

document.getElementById("addPeriodPlanBtn").addEventListener("click", function () {
  const MAX_DUPLICATES = 10;

  const period = document.getElementById("periodDiv");
  const containerPlan = document.getElementById("containerPlan");

  if (containerPlan.children.length < MAX_DUPLICATES) {

    const newperiod = period.cloneNode(true);

    containerPlan.appendChild(newperiod);
  }
});

  //Saving to Local Storage
