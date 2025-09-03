// File: /college-website/src/js/main.js

document.addEventListener("DOMContentLoaded", function() {
    // Example of form validation
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            if (!name || !email) {
                event.preventDefault();
                alert("Please fill in all fields.");
            }
        });
    }

    // Dynamic content loading example
    const facilitiesLink = document.getElementById("facilities-link");
    if (facilitiesLink) {
        facilitiesLink.addEventListener("click", function(event) {
            event.preventDefault();
            loadFacilities();
        });
    }

    function loadFacilities() {
        fetch("pages/facilities.html")
            .then(response => response.text())
            .then(data => {
                document.getElementById("content").innerHTML = data;
            })
            .catch(error => console.error("Error loading facilities:", error));
    }
});