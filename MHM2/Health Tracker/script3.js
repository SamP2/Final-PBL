document.getElementById('logMood').addEventListener('click', function() {
    var selectedMood = document.getElementById('mood').value;
    // You can store the mood data in localStorage or send it to a server
    console.log('Logged mood: ' + selectedMood);
});

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get form inputs
    const moodInput = document.getElementById('mood').value;
    const stressInput = document.getElementById('stress').value;
    const sleepInput = document.getElementById('sleep').value;

    // Create an object to store the data
    const healthData = {
        mood: moodInput,
        stress: stressInput,
        sleep: sleepInput
    };

    // Store the data in local storage
    localStorage.setItem('healthData', JSON.stringify(healthData));

    // Display success message (you can customize this as needed)
    alert('Health data submitted successfully!');
}

// Event listener for form submission
const form = document.getElementById('healthForm');
form.addEventListener('submit', handleSubmit);
