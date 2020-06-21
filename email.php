<?php
		header("Content-type: application/json; charset=utf-8");

		$nameFrom = $_POST['name'];
		$mailFrom = $_POST['email'];
		$nameTo = "WonseokCha";
		$mailTo = "ivrson9@gmail.com";
		$cc = "참조";
		$bcc = "숨은참조";
		$subject = "Requect Contact";
		$content = $_POST['message'];
		
		$charset = "UTF-8";
		$nameFrom = "=?$charset?B?" . base64_encode($nameFrom) . "?=";
		$nameTo = "=?$charset?B?" . base64_encode($nameTo) . "?=";
		$subject = "=?$charset?B?" . base64_encode($subject) . "?=";
		$header = "Content-Type: text/html; charset=utf-8\r\n";
		$header.= "MIME-Version: 1.0\r\n";
		$header.= "Return-Path: <" . $mailFrom . ">\r\n";
		$header.= "From: " . $nameFrom . " <" . $mailFrom . ">\r\n";
		$header.= "Reply-To: <" . $mailFrom . ">\r\n";

		if ($cc) $header.= "Cc: " . $cc . "\r\n";
		if ($bcc) $header.= "Bcc: " . $bcc . "\r\n";

		$result = mail($mailTo, $subject, $content, $header, $mailFrom);

		if (!$result) {
			$result = array('rst_code'=>'false', 'rst_msg'=>'전송실패');
		} else {
			$result = array('rst_code'=>'false', 'rst_msg'=>'전송성공');
		}

		// echo json_encode($result); //
		echo json_encode($result, JSON_UNESCAPED_UNICODE);
?>