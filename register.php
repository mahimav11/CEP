<?php
require 'config.php'; // Make sure to include your database connection

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT);
    $role = $_POST['role'];
    $stream = $_POST['stream'];
    $department = $_POST['department'] ?? null;
    $designation = $_POST['designation'] ?? null;

    // Check if email already exists
    $checkEmail = $conn->prepare("SELECT * FROM users WHERE email = ?");
    $checkEmail->bind_param("s", $email);
    $checkEmail->execute();
    $result = $checkEmail->get_result();

    if ($result->num_rows > 0) {
        echo 'Email already exists.';
    } else {
        // Insert new user into the database
        $stmt = $conn->prepare("INSERT INTO users (name, email, password, role, stream, department, designation) VALUES (?, ?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("sssssss", $name, $email, $password, $role, $stream, $department, $designation);

        if ($stmt->execute()) {
            echo 'success'; // Return success message
        } else {
            echo 'Error: ' . $stmt->error;
        }
        $stmt->close();
    }

    $conn->close();
}
?>
