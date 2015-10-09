<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $tel = $_POST['tel'];
    $product = $_POST['product'];
    $select = $_POST['select'];


	
    require 'class.phpmailer.php';
    $thm = "Вам отправлено сообщение с " . $_SERVER['SERVER_NAME'];
    $msg = "<strong>Имя:</strong> $name<br/>";
    if(isset($tel)){$msg .= "<strong>Телефон:</strong> $tel <br/>";}
    if(isset($product)){$msg .= "<strong>Продукт:</strong> $product <br/>";}
    if(isset($select)){$msg .= "<strong>Продукт:</strong> $select <br/>";}


    $mail = new PHPMailer();
    $mail->From = 'noreply@'. $_SERVER['SERVER_NAME']; // от кого
    $mail->FromName = $_SERVER['SERVER_NAME']; // от кого
    $mail->AddAddress('zakaz@bodyapp.ru', ''); // кому - адрес, Имя

    $mail->IsHTML(true); // выставляем формат письма HTML
    $mail->Subject = $thm; // тема письма
    $mail->Body = $msg;

    if (!$mail->Send()) die('Mailer Error: ' . $mail->ErrorInfo);

    header("Location: " . $_SERVER["PHP_SELF"]);
    exit;
}
?>