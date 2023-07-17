// Randomly generated affirmations
const phrases = [
  'I know how to bring direction and order into my life',
  'I choose to be kind to all, including myself',
  'I create an environment that supports my well-being',
  'I love myself first so that I may love others',
  'I am loved',
];

const randomIndex = Math.floor(Math.random() * phrases.length);

const randomPhrase = phrases[randomIndex];

const phraseElement = document.getElementById('randomPhrase');
phraseElement.textContent = randomPhrase;

// Summer Countdown
const button = document.querySelector('button');

button.addEventListener('click', summerCountdown);

function summerCountdown() {
  // Set date countdown is to end
  const eventDate = new Date('2023-06-23T15:00:00');

  // Get current date and time
  const currentDate = new Date();

  // Calculate time difference in seconds
  const timeDifference = Math.floor((eventDate - currentDate) / 1000);
  if (timeDifference > 0) {
    // Calculate days, hours, minutes, and seconds
    let days = Math.floor(timeDifference / (60 * 60 * 24));
    let hours = Math.floor((timeDifference % (60 * 60 * 24)) / (60 * 60));
    let minutes = Math.floor((timeDifference % (60 * 60)) / 60);
    let seconds = Math.floor(timeDifference % 60);

    // Display countdown
    const countdownElement = document.getElementById('button');
    countdownElement.textContent = `Summer starts in: ${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;

    // Update countdown every second
    setTimeout(summerCountdown, 1000);
  } else {
    // If event has already occurred
    const countdownElement = document.getElementById('button');
    countdownElement.textContent = 'Enjoy summer break!';
  }
}

//Customize Planner Name
const para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName() {
  const name = prompt('Enter your name');
  para.textContent = `${name} Teacher Planner`;
}

//Give Prompt Options
function selectJournalPrompt() {
  var prompts = [
    'How am I feeling today?',
    'What do I need today?',
    'What am I grateful for today?',
    'What do I want to accomplish today?',
    'The affirmation that would help me most today is...',
  ];

  var randomIndex = Math.floor(Math.random() * prompts.length);
  return prompts[randomIndex];
}

function displayJournalPrompt() {
  var statementElement = document.getElementById('prompts');
  statementElement.textContent = selectJournalPrompt();
}
// document.addEventListener("click", displayJournalPrompt)

//Hide/Show Core Values Div
function showDivById(divId) {
  const divToShow = document.getElementById(divId);
  divToShow.style.display = 'flex';
  divToShow.classList.remove('hidden-div')
  divToShow.scrollIntoView({ behavior: 'smooth' });
}

const para2 = document.querySelector('#journal');
para2.addEventListener('click', () => { showDivById('myJournal') });

//Saving to Local Storage

const dataInput = document.getElementById('input');
const saveButton = document.getElementById('saveButton');
// this is all I had to change to make things work
// there was an error about re-assigning a const (needed to assign the data to the `value` property of the text input)
// once part of the script has an error the remaining code stops executing so that's likely why your changes weren't having any affect
dataInput.value = localStorage.getItem('savedData');
saveButton.addEventListener('click', saveData);

// Function to save input data to local storage
function saveData() {
  // Get the input value
  const data = dataInput.value;

  // Save the data to local storage
  localStorage.setItem('savedData', data);
}

const para3 = document.querySelector('#core-values');
para3.addEventListener('click', () => { showDivById('mycorevalues') });

// List
document.addEventListener('DOMContentLoaded', function () {
  const wordBank = document.querySelectorAll('.word');
  const selectedWords = document.querySelector('.selected-words');
  let order = 1;
  let wordCount = 0;

  wordBank.forEach(function (word) {
    word.addEventListener('click', function () {
      if (wordCount < 6) {
        const selectedWord = document.createElement('div');
        selectedWord.textContent = word.textContent;
        selectedWord.classList.add('word');
        selectedWord.style.order = order;
        selectedWords.appendChild(selectedWord);
        order++;
        wordCount++;

        // Remove selected words to add new
        selectedWord.addEventListener('click', function () {
          selectedWords.removeChild(selectedWord);
          wordCount--;
        });
      }
    });
  });
});
