const monthYearElement = document.getElementById("monthYear");
const prevMonthButton = document.getElementById("prevMonth");
const nextMonthButton = document.getElementById("nextMonth");
const daysContainer = document.querySelector(".days");

const currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

function updateCalendar() {
  monthYearElement.textContent = new Date(currentYear, currentMonth).toLocaleDateString('en-CA', { month: 'long', year: 'numeric' });

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  daysContainer.innerHTML = '';

  for (let i = 0; i < firstDayOfMonth; i++) {
    const emptyDay = document.createElement("div");
    daysContainer.appendChild(emptyDay);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const dayElement = document.createElement("div");
    dayElement.classList.add("day");
    dayElement.textContent = day;

    const toDoContainer = document.createElement("div");
    toDoContainer.classList.add("calendarToDoContainer");

    const toDoInput = document.createElement("textarea");
    toDoInput.classList.add("calendarToDoInput");
    toDoInput.placeholder = "Enter to-do items...";
    toDoInput.value = localStorage.getItem(`toDo-${currentYear}-${currentMonth}-${day}`) || '';
    toDoInput.addEventListener("input", function() {
      localStorage.setItem(`toDo-${currentYear}-${currentMonth}-${day}`, toDoInput.value);
    });

    const specialEventsContainer = document.createElement("div");
    specialEventsContainer.classList.add("calendarSpecialEventsContainer");

    const specialEventsInput = document.createElement("textarea");
    specialEventsInput.classList.add("calendarSpecialEventsInput");
    specialEventsInput.placeholder = "Enter special events...";
    specialEventsInput.value = localStorage.getItem(`specialEvents-${currentYear}-${currentMonth}-${day}`) || '';
    specialEventsInput.addEventListener("input", function() {
      localStorage.setItem(`specialEvents-${currentYear}-${currentMonth}-${day}`, specialEventsInput.value);
    })

    const notesContainer = document.createElement ("div");
    notesContainer.classList.add ("calendarNotesContainer");

    const notesInput = document.createElement ("textarea");
    notesInput.classList.add ("calendarNotesInput");
    notesInput.placeholder = "Enter notes...";
    notesInput.value = localStorage.getItem (`notes-${currentYear}-${currentMonth}-${day}`) || '';
    notesInput.addEventListener("input", function() {
        localStorage.setItem(`notes-${currentYear}-${currentMonth}-${day}`, notesInput.value);
    })

    toDoContainer.appendChild(toDoInput);
    specialEventsContainer.appendChild(specialEventsInput);
    notesContainer.appendChild(notesInput)
    dayElement.appendChild(toDoContainer);
    dayElement.appendChild(specialEventsContainer);
    dayElement.appendChild(notesContainer);

    daysContainer.appendChild(dayElement);
  }
}

updateCalendar();

prevMonthButton.addEventListener("click", () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  updateCalendar();
});

nextMonthButton.addEventListener("click", () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  updateCalendar();
});

// Local Storage for input on each day with class=day

//Automatically update the div up top with sections of To-Do and Special Events