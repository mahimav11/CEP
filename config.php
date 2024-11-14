<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "campus_care";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
