document.querySelector('.hamburger-menu').addEventListener('click', function() {
    const nav = document.querySelector('header nav ul');
    nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
});

// Function to simulate page loading progress
function simulatePageLoadProgress() {
    let progressBar = document.getElementById('pageProgress');
    let value = 0;

    let interval = setInterval(function() {
        value += 5;  // Increase progress by 5% every 100ms
        progressBar.value = value;

        // Stop when it reaches 100%
        if (value >= 100) {
            clearInterval(interval);
        }
    }, 100);
}

// Call the function to simulate progress
window.onload = simulatePageLoadProgress;

