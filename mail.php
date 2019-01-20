<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$_message = "Имя: $name\nE-mail: $email\nТелефон: $phone\nСообщение: $message"

mail('wayne.andrey2016@yandex.ru','Новая заявка на заказ:', $message);

?>
