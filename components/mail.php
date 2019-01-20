<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['message'];


mail('wayne.andrey2016@yandex.ru','Тест', $name);

?>
