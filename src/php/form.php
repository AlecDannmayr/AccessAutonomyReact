<?php


include('Mail.php');

$host = 'localhost'; 

$username = 'info@intelligentcricket.com';
$password = 'ThisIsIntelligentCricket123!';
$to = 'alec@accessautonomy.com'; // test email
$email = $_POST['email']; 
$from = 'info@intelligentcricket.com'; // do not change
$firstName = $_POST['firstName']; 
$secondName = $_POST['secondName']; 
$subject = $_POST['subject'];
$textArea = $_POST['textArea']; 
$company = $_POST['company'];
$number = $_POST['number']; 
$email = $_POST['email'];

$headers = array (
'From' => $from,
'To' => $to,
'Subject' => $subject); 

$body ="\nQuery Type: ".$subject."\nFrom: ".$name."\nContact Email: ".$email."\nContact Number: ".$number."\n\nMessage:\n\n".$body;

$smtp = Mail::factory('smtp',
array ('host' => $host,
'auth' => false,
'username' => $username,
'password' => $password,
'port' => 25,
)); 

$mail = $smtp->send($to, $headers, $body); 

header("Location: contact-us.html");

?>