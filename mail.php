<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'info-kazakvezet@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'riviaZYX321'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('info-kazakvezet@mail.ru'); // от кого будет уходить письмо?
$mail->addAddress('kazakvezet@mail.ru');     // Кому будет уходить письмо 

$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка с сайта';
$mail->Body    = '' .$name . ' оставил заявку, его телефон ' .$phone;
$mail->AltBody = '';

if(!$mail->send()) {
	header('Refresh: 7; URL=https://www/index.html');
	echo ('
		<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, user-scalable=0, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0">			<style>
				@font-face {font-family: Medium; src: url(../font/Roboto-Medium.ttf);}
				@font-face {font-family: Regular; src: url(../font/Roboto-Regular.ttf);}
			</style>
		<title>Ошибка</title>
		<link rel="icon" href="img/logo-min.png" type="ico">
		</head>

		<body 
			style="text-align: center;
			margin: 0 auto;
			display: -webkit-flex;
			display: -moz-flex;
			display: -ms-flex;
			display: -o-flex;
			display: flex;
			justify-content: center;
			-ms-align-items: center;
			align-items: center;
			-webkit-flex-direction: column;
			-moz-flex-direction: column;
			-ms-flex-direction: column;
			-o-flex-direction: column;
			flex-direction: column;
			justify-content: center;
			-ms-align-items: center;
			align-items: center;
			height: 100vh;
			background-color: #e9482b;
			color: #fff;
		">
			<h1 style="font-family: Medium;">Ошибка отправки сообщения!</h1>
			<p style="font-family: Regular;">Проверьте правильность заполненных данных или проблемы с сайтом.<br>
			Через 5 секунд вы вернетесь на главную страницу.</p>
		</body>');
	$title = 'Ошибка!';
} else {
	header('Refresh: 7; URL=https://www/index.html');
	echo ('
		<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, user-scalable=0, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0">			<style>
				@font-face {font-family: Medium; src: url(../font/Roboto-Medium.ttf);}
				@font-face {font-family: Regular; src: url(../font/Roboto-Regular.ttf);}
			</style>
		<title>Сообщение отправелно</title>
		<link rel="icon" href="img/logo-min.png" type="ico">
		</head>
		
		<body 
			style="text-align: center;
			margin: 0 auto;
			display: -webkit-flex;
			display: -moz-flex;
			display: -ms-flex;
			display: -o-flex;
			display: flex;
			justify-content: center;
			-ms-align-items: center;
			align-items: center;
			-webkit-flex-direction: column;
			-moz-flex-direction: column;
			-ms-flex-direction: column;
			-o-flex-direction: column;
			flex-direction: column;
			justify-content: center;
			-ms-align-items: center;
			align-items: center;
			height: 100vh;
			background-color: #e9482b;
			color: #fff;
		">
			<h1 style="font-family: Medium;">Спасибо!</h1>
			<h2 style="font-family: Medium;">Ваше сообщение отправлено!</h2>
			<p style="font-family: Regular;">Мы свяжемся с вами в ближайшее время.</p>
		</body>');
	// header('location: index.html#yak');
}
?>