<?php
// Replace with your email address
$recipient = "albatularts@gmail.com";

// Get form data
$name = $_POST["name"];
$email = $_POST["_replyto"];
$message = $_POST["message"];

// Subject and email body
$subject = "Form Submission from Your Website";
$body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

// Set headers (important for security)
$headers = "From: $email\r\nReply-To: $email\r\nContent-Type: text/plain; charset=UTF-8";

// Send email using PHP mail function
if (mail($recipient, $subject, $body, $headers)) {
    echo "Your message has been sent successfully!";
} else {
    echo "There was an error sending the message. Please try again.";
}