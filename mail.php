<?php
include 'db.php';
if (isset($_POST['btn'])) {
    $name = $_POST['user_name'];
    $phone = $_POST['user_phone'];
    $email = $_POST['user_email'];
}
$sql = "INSERT INTO registr(`nam`, `phone`, `email`) VALUES ('$name', '$phone', '$email')";
$res = mysqli_query($db, $sql);


$sql1 = "SELECT * FROM registr WHERE `email` = '$email'";
$ress = mysqli_query($db, $sql1);
$result = mysqli_fetch_assoc($ress);
    
        $ismim = $result['nam'];
        $tell = $result['phone'];
       echo $emails  = $result['email'];
       echo $id = $result['id'];
    

$token = "2020737670:AAHcW7yKVmE-91n_z-CiAnqSXD57fzRxGZc";
$chat_id = "-512453946";
$idi = "ID: ";
$Ismims = "Ismingiz: ";
$TELEF = "Phone: ";
$EMA = "Email";
$arr = [
    $idi => $id,
    $Ismims => $ismim,
    $TELEF => $tell,
    $EMA => $emails
];

foreach ($arr as $key => $value) {
    $txt .= "<b>" . $key . "</b> " . $value . "%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}", "r");

if ($sendToTelegram) {
    header('Location: thankyou.html');
} else {
    echo "Error";
}
?>


<!-- 



// require_once('phpmailer/PHPMailerAutoload.php');
// $mail = new PHPMailer;
// $mail->CharSet = 'utf-8';

// $name = $_POST['user_name'];
// $phone = $_POST['user_phone'];
// $email = $_POST['user_email'];

// $token = "2020737670:AAHcW7yKVmE-91n_z-CiAnqSXD57fzRxGZc";
// $chat_id = "";
// $arr = array(
//     "Имя пользователя: " => $name,
//     "Телефон: " => $phone,
//     "Email" => $email
// );

// foreach ($arr as $key => $value) {
//     $txt .= "<b>" . $key . "</b> " . $value . "%OA";
// };

// $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}
// &parse_mode-html&text={$txt}", "r");

// if ($sendToTelegram) {
//     echo '<h1 >Thank you</h1>';
//     return true;
// } else {
//     header('Location: thank-you.html');
// } -->
