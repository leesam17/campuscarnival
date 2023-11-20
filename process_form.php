<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $age = $_POST["age"];
    $status = $_POST["status"];
    $ladokite = $_POST["ladokite"];
    $spending = $_POST["spending"];
    $feedback = $_POST["feedback"];

    $to = "carnivalcampus@gmail.com";
    $subject = "Campus Carnival Feedback";
    $message = "Age: $age\nStatus: $status\nLadokite: $ladokite\nSpending: $spending\nFeedback: $feedback";

    // You can add additional headers if needed
    $headers = "From: carnivalcampus@gmail.com";

    // Send the email
    if (mail($to, $subject, $message, $headers)) {
        echo "Email sent successfully.";
    } else {
        echo "Error sending email.";
    }
}
?>
