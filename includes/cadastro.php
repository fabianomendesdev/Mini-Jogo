<?php require_once 'includes/conexao.php'?>
<main>
	<link rel="stylesheet" href="assets/css/login.css">
	<link rel="stylesheet" href="assets/css/style.css">
	
	<div class="container-login">
		<form class="form-login" action="index.php?i=validacao" method="POST">
			<p id="txtAviso"><a href="index.php?i=login">Login</a> / cadastre-se</p>
			
			<input type="email" placeholder="Digite seu e-mail" name="email" id="email" class="inputs">
			
			<input type="text" placeholder="Digite sua senha" name="senha" id="senha" class="inputs" max='25'>

			<input type="text" placeholder="Repita sua senha" name="senhaRepetição" id="senhaRepeticao" class="inputs" max='25'>
			
			<input type="submit" value="Cadastrar" id="submit">	
		</form>
	</div>
</main>