<?php
include 'db.php';
if (isset($_POST['btn'])) {
    $name = $_POST['user_name'];
    $phone = $_POST['user_phone'];
    $email = $_POST['user_email'];
}
$sql = "INSERT INTO registr(`nam`, `phone`, `email`) VALUES ('$name', '$phone', '$email')";
$res = mysqli_query($db, $sql);

?>