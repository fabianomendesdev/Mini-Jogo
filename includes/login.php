<?php require_once 'includes/conexao.php'?>
<main>
	<link rel="stylesheet" href="assets/css/login.css">
	<link rel="stylesheet" href="assets/css/style.css">
	
	<section class="main-section section-login">
		<form class="form-login" action="#" method="post">
			<p>Login</p>
			
			<input type="email" placeholder="Digite seu e-mail" name="email" class="inputs">
			
			<input type="password" placeholder="Digite sua senha" name="password" class="inputs">
			
			<button class="enter">Entrar</button>
		</form>

		<div class="forgotPassword">
			<p>Esqueceu a senha?</p>
		</div>
		<div class="createAccount">
			<button>Criar nova conta</button>
		</div>
	</section>
</main>