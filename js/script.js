
const timerBoxes = document.querySelectorAll('.timer .box');
const inputFields = document.querySelectorAll('.timer input[type="text"]');
const setTimerBtn = document.querySelector('.settimer');
const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const resetBtn = document.querySelector('.reset');

let countdownInterval;
let days = 0, hours = 0, minutes = 0, seconds = 0; // Initialize timer values

// Function to update the timer display
function updateTimerDisplay() {
  timerBoxes.forEach((box, index) => {
    const timeElement = box.querySelector('.time');
    let value = '';

    switch (index) {
      case 0:
        value = String(days).padStart(2, '0');
        break;
      case 1:
        value = String(hours).padStart(2, '0');
        break;
      case 2:
        value = String(minutes).padStart(2, '0');
        break;
      case 3:
        value = String(seconds).padStart(2, '0');
        break;
    }

    timeElement.textContent = value;
  });
}

// Function to start the timer
function startTimer() {
  countdownInterval = setInterval(() => {
    if (seconds > 0) {
      seconds--;
    } else {
      if (minutes > 0) {
        minutes--;
        seconds = 59;
      } else {
        if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          if (days > 0) {
            days--;
            hours = 23;
            minutes = 59;
            seconds = 59;
          } else {
            // Timer has reached 0, perform any desired action here
            clearInterval(countdownInterval);
            console.log('Timer finished!');
            return;
          }
        }
      }
    }
    // Update the timer display after each second
    updateTimerDisplay();
  }, 1000);
}

// Function to pause the timer
function pauseTimer() {
  clearInterval(countdownInterval);
}

// Function to reset the timer values
function resetTimer() {
  clearInterval(countdownInterval);
  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;
  updateTimerDisplay();
}

// Event listener for the "Set Timer" button
setTimerBtn.addEventListener('click', () => {
  days = parseInt(inputFields[0].value) || 0;
  hours = parseInt(inputFields[1].value) || 0;
  minutes = parseInt(inputFields[2].value) || 0;
  seconds = parseInt(inputFields[3].value) || 0;
  updateTimerDisplay();
});

// Event listener for the "Start/Resume" button
startBtn.addEventListener('click', () => {
  startTimer();
});

// Event listener for the "Pause" button
pauseBtn.addEventListener('click', () => {
  pauseTimer();
});

// Event listener for the "Reset" button
resetBtn.addEventListener('click', () => {
  resetTimer();
});
