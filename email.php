<?php
       $name = $_POST['name'];
       $email = $_POST['email'];
       $message = $_POST['message'];
       $to = 'ivrson9@gmail.com';
       $from = $email;
       $subject = 'Apply Online Details from a user as below---';
       $body = $message;
       $headers  = 'MIME-Version: 1.0' . "\r\n";
       $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
       $headers .= "From: $from";
       $ok = mail($to, $subject, $body, $headers);
       if($ok)
           echo '1';
       else
           echo '0';
?>