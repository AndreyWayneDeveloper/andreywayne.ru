<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$them = $_POST['them'];
$emails = $_POST['email'];
if(isset($_POST['email'])){ $email = $_POST['email']; $mess = "Email: $email"; }

$message = " Тема: $them \n Имя: $name \n Телефон: $phone \n $mess";

mail('wayne.andrey2016@yandex.ru','Сообщение с Мир Пекаря:', $message);
mail($emails,'Сообщение с Мир Пекаря:', 'https://yadi.sk/d/OF9tC27R3QW4uM');

?>
