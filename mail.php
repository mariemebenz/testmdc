<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

$mail = new PHPMailer(true);

// Retrieve form data
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;
    $mail->isSMTP();
    $mail->Host       = 'smtp.google.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'benzha2002@gmail.com';
    $mail->Password   = 'oifguogvtytgfics'; 
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = 465;

    // Sender and recipient
    $mail->setFrom('marieme.benzha@example.com', 'Marieme Benzha');
    $mail->addAddress('benzha2002@gmail.com');

    // Content
    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body    = "Name: $name<br>Phone: $phone<br>Email: $email<br><br>Message: $message";
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>
