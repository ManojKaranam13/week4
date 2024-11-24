// Change the background color when the button is clicked
document.getElementById('colorButton').addEventListener('click', function() {
    document.body.style.backgroundColor = getRandomColor();
});

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Handle form submission
document.getElementById('textForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from reloading the page

    // Get the input text
    const inputText = document.getElementById('inputText').value;

    // Display the input text in the message area
    document.getElementById('message').textContent = `You entered: ${inputText}`;

    // Clear the input field
    document.getElementById('inputText').value = '';
});
