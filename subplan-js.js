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

  });




// Hiding Days - hiding day 6

const hiddenButton6 = document.getElementById("hiddenButton6");
        const classScheduleDay6 = document.getElementById("classScheduleDay6");

        // Add a click event listener to the button
        hiddenButton6.addEventListener("click", function() {
            
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
        hiddenButton7.addEventListener("click", function() {
            
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
        hiddenButton8.addEventListener("click", function() {
            
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
        hiddenButton9.addEventListener("click", function() {
            
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
        hiddenButton10.addEventListener("click", function() {
            
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
