<script>
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Display a confirmation popup
        alert('Thank you for contacting us! We will get back to you soon.');

        // Optionally, you can also clear the form after submission
        this.reset();
    });
</script>
