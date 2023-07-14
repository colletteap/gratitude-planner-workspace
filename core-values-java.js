// List
document.addEventListener('DOMContentLoaded', function() {
    const wordBank = document.querySelectorAll('.word');
    const selectedWords = document.querySelector('.selected-words');
    let order = 1;
    let wordCount = 0;
  
    wordBank.forEach(function(word) {
      word.addEventListener('click', function() {
        if (wordCount < 6) {
        const selectedWord = document.createElement('div');
        selectedWord.textContent = word.textContent;
        selectedWord.classList.add('word');
        selectedWord.style.order = order;
        selectedWords.appendChild(selectedWord);
        order++;
        wordCount++;

        // Remove selected words to add new
        selectedWord.addEventListener('click', function() {
            selectedWords.removeChild(selectedWord);
            wordCount--;
          });
      }
      });
    });
  }); 