<?php
    $to = "nso-osnova@yandex.ru"; //емайл получателя
    $tema = "Запись на экскурсию"; //Тема
    $message = "Ваше имя: ".$_POST['name']."<br>";//присвоить переменной значение, полученное из формы name=name
    $message .= "Номер телефона: ".$_POST['phone']."<br>"; //полученное из формы name=phone
    $headers  = 'MIME-Version: 1.0' . "\r\n"; // заголовок соответствует формату плюс символ перевода строки
      $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n"; // указывает на тип посылаемого контента
    mail($to, $tema, $message, $headers); //отправляет получателю на емайл значения переменных
    header('Location: http://xn----8sbebnynsibzgi1k.xn--p1ai/')
?>
