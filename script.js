// Simple comment functionality
function addComment() {
    const commentInput = document.getElementById('comment-input').value;
    const commentSection = document.getElementById('comment-section');
    if (commentInput.trim()) {
        const comment = document.createElement('p');
        comment.textContent = commentInput;
        commentSection.appendChild(comment);
        document.getElementById('comment-input').value = ''; // Clear input
    }
}
// Simple comment functionality
function addComment() {
    const commentInput = document.getElementById('comment-input').value;
    const commentSection = document.getElementById('comment-section');
    if (commentInput.trim()) {
        const comment = document.createElement('p');
        comment.textContent = commentInput;
        commentSection.appendChild(comment);
        document.getElementById('comment-input').value = ''; // Clear input
    }
}

// Quiz answer check with highlight
function checkAnswer() {
    const quizForm = document.forms['quiz-form'];
    const userAnswer = quizForm.cam.value;
    const resultElement = document.getElementById('quiz-result');

    // Correct answer is "c"
    const correctAnswer = "c";

    // Get all the radio inputs and labels
    const options = quizForm.cam;
    const labels = quizForm.querySelectorAll('label');

    // Loop through all options to check if they are correct or incorrect
    for (let i = 0; i < options.length; i++) {
        const optionValue = options[i].value;

        // Find the corresponding label
        const label = labels[i];

        // Highlight the correct answer in green and incorrect ones in red
        if (optionValue === correctAnswer) {
            label.style.color = "green";
        } else {
            label.style.color = "red";
        }
    }

    // Display result text
    if (userAnswer === correctAnswer) {
        resultElement.textContent = "Correct! Cylindrical cams are also known as Drum cams.";
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = "Incorrect. The correct answer is 'c) Drum'.";
        resultElement.style.color = "red";
    }
}
