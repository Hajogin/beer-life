<?php

define('MAILING_LIST', 'atlantidu@gmail.com');

function output($data, $code = 200) {
  http_response_code($code);
  print $data;
  exit;
}

foreach ($_POST as $key => $value) {
  $$key = trim($value);
}

empty($name) and output('Не указано имя', 400);
(empty($email) or !filter_var($email, FILTER_VALIDATE_EMAIL)) and output('Неправльный адрес эл. почты', 400);
empty($phone) and output('Не указан телефон', 400);
empty($subject) and output('Не указана тема обращения', 400);
empty($message) and output('Не указан текст обращения', 400);

file_put_contents('/home/user/Workspace/beer-life/result.txt', 'sadf');
if (!empty(MAILING_LIST)) {
  mail(MAILING_LIST, $subject, $message);
}

output('');
