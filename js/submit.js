document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");
    form.setAttribute("action", "https://formspree.io/f/movaqynd");

    form.addEventListener("submit", function (event) {
        event.preventDefault();


        const name = form.querySelector('input[name="name"]').value.trim();
        const email = form.querySelector('input[name="_replyto"]').value.trim();
        const message = form.querySelector('textarea[name="message"]').value.trim();

        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }


        if (!isValidEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        const formData = new FormData();
        formData.append("name", name);
        formData.append("_replyto", email);
        formData.append("message", message);

        fetch("https://formspree.io/f/movaqynd", {
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
                form.reset();
            })
            .catch(error => {
                console.error("Error:", error);
                alert("There was an error submitting the form.");
            });
    });

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    const inputs = form.querySelectorAll('input[type="text"], input[type="email"], textarea');
    inputs.forEach(input => {
        input.setAttribute("autocomplete", "off");
    });
});
