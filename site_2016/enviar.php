<?php

//Variaveis



$name     = $_POST["name"];

$email   = $_POST["email"];

$message  = $_POST["message"];

$data_envio = date('d/m/Y');

$hora_envio = date('H:i:s');

$ip        = $_SERVER['REMOTE_ADDR'];           //função para pegar o ip do usuário

$navegador = $_SERVER['HTTP_USER_AGENT'];       //função para pegar o navegador do visitante





// -------------



// Compo E-mail



	

	$arquivo = "

	<style type='text/css'>

	body {

	margin:0px;

	font-family:arial;

	font-size:14px;

	color: #000;

	}

	a{

	color: #000;

	text-decoration: none;

	}

	a:hover {

	color: #666;

	text-decoration: none;

	}

	</style>

	

	

      

    <html>

	<meta charset='utf-8'>

        <table width='610' border='1' cellpadding='1' cellspacing='1'>

            <tr>

              <td>

			    <tr>

                 <td width='600'><b>Nome:</b>$name</td>

                </tr>

                <tr>

                  <td width='420'><b>E-mail:</b>$email</td>

	            </tr>

				<tr>

                  <td width='420'><b>Mensagem:</b>$message</td>

                </tr>			

	       	   

            </td>

          </tr>  

          <tr>

            <td>Este e-mail foi enviado em <b>$data_envio</b> &agrave;s <b>$hora_envio</b></td>

          </tr>

		  <tr>

            <td>Número do IP: <b>$ip</b> | Navegador:<b>$navegador</b></td>

          </tr>

        </table>

    </html>

	";



// -------------------------



//enviar

	

	// emails para quem será enviado o formulário

	$destino = "josemar_fla@hotmail.com";

	$assunto = "Contato | Josemar dos Santos";



	// É necessário indicar que o formato do e-mail é html

	$headers  = 'MIME-Version: 1.0' . "\r\n"; 

    $headers .= 'Content-type: text/html;charset=utf-8;';

    $headers .= "From: 'Contato | Portfolio <contato@josemardossantos.com>'";

    

	

	//$headers .= "Bcc: $EmailPadrao\r\n";

	

	$enviaremail = mail($destino, $assunto, $arquivo, $headers);

	if($enviaremail){

	$mgm = "E-MAIL ENVIADO COM SUCESSO! <br> O link será enviado para o e-mail fornecido no formulário";

	echo "<script type=\"text/javascript\"> alert('Obrigado $nome, Seu Recado Foi Enviado Com sucesso!!!') </script>";

	 

	}



?>