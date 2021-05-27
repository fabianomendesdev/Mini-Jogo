<?php require_once 'includes/conexao.php'?>
<main>
	<link rel="stylesheet" href="css/login.css">
	<link rel="stylesheet" href="css/style.css">
	
	<div class="container-login">
		<form class="form-login" action="index.php?i=selecao" method="POST">
			<p id="txtAviso">Login / <a href="#"> cadastre-se</a></p>
			
			<input type="email" placeholder="Digite seu e-mail" name="email" id="email" class="inputs">
			
			<input type="text" placeholder="Digite sua senha" name="senha" id="senha" class="inputs">
			
			<input type="submit" value="Enviar" id="submit">	
		</form>
	</div>
</main>