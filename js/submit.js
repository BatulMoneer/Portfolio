// script.js

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");
    form.setAttribute("action", config.formspreeEndpoint);

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting normally

        // Optionally, you can perform client-side validation here

        // Get form data
        const formData = new FormData(this);

        // Submit the form data using Fetch API
        fetch(config.formspreeEndpoint, {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json"
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => {
                alert("Form submitted successfully!");
                // Optionally, clear form fields or perform other actions
                form.reset();
            })
            .catch(error => {
                console.error("Error:", error);
                alert("There was an error submitting the form.");
            });
    });
});
