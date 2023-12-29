<?php


$conn = mysqli_connect('localhost','root','','db_porto') or die('connection failed');

if ($conn->connect_error) {
    die("Koneksi Gagal: " . $conn->connect_error);
}

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$sql = "INSERT INTO messages (name, email, subject, message) VALUES ('$name', '$email', '$subject', '$message')";

if ($conn->query($sql) === TRUE) {
    echo "Pesan berhasil disimpan.";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
