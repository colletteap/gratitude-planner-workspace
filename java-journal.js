function selectJournalPrompt() {
    var prompts = [
        "How am I feeling today?",
        "What do I need today?",
        "What am I grateful for today?",
        "What do I want to accomplish today?",
        "The affirmation that would help me most today is..."
    ];
    
    var randomIndex = Math.floor(Math.random() * prompts.length);
    return prompts[randomIndex];
}

function displayJournalPrompt() {
    var statementElement = document.getElementById("prompts");
    statementElement.textContent = selectJournalPrompt();
}
document.addEventListener("click", function() {
    var clickedPrompt = selectJournalPrompt();
    console.log(clickedPrompt);
});
