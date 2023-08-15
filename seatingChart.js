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