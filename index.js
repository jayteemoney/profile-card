// Display the current time in UTC
function displayCurrentTime() {
    const currentTimeElement = document.getElementById('currentTime');
    setInterval(() => {
        const now = new Date();
        currentTimeElement.textContent = `Current Time (UTC): ${now.toUTCString()}`;
    }, 1000);
}

// Show the contact details sidebar
const contactButton = document.getElementById('contactButton');
const contactSidebar = document.getElementById('contactSidebar');

// Open the contact sidebar
contactButton.addEventListener('click', () => {
    contactSidebar.style.display = 'block'; // Show the sidebar
});

// Close the contact sidebar when "Exit" is clicked
const exitButton = document.getElementById('exitButton');
exitButton.addEventListener('click', () => {
    contactSidebar.style.display = 'none'; // Hide the sidebar
});

// Call the function to display time when the page loads
displayCurrentTime();
