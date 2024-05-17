// script.js
document.addEventListener('DOMContentLoaded', function() {
    console.log('Document is fully loaded and parsed');

    // Example: Change the text of the heading when clicked
    const heading = document.querySelector('.heading h1');
    heading.addEventListener('click', function() {
        heading.textContent = 'Enjoy Your Journey with Us';
    });

    // Example: Display an alert when a booking link is clicked
    const bookingLinks = document.querySelectorAll('.places a');
    bookingLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default link action
            alert('Booking feature coming soon!');
        });
    });
});
