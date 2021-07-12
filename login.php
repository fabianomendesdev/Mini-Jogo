<?php
	require_once("includes/connection.php");
	include_once("view/head.html");

	$email =  $_POST['email'] ?? '';
	$password =  $_POST['password'] ?? '';

	

?>
<link rel="stylesheet" href="assets/css/login-register.css">
<title>Login</title>
</head>
<body class="login">
	<?php include_once("view/header.html")?>
	<main>		
		<section class="main-section section-login-register">
			<form class="form-login" action="#" method="post">
				<p>Login</p>
				
				<input type="email" placeholder="Digite seu e-mail" name="email">
				
				<input type="password" placeholder="Digite sua senha" name="password">
				
				<button class="enter">Entrar</button>
			</form>

			<div class="forgotPassword">
				<a href="#">Esqueceu a senha?</a>
			</div>
			<div class="createAccount">
				<a href="r.php"><button>Criar nova conta</button></a>
			</div>
		</section>
	</main>
	<?php include_once("view/footer.html")?>
</body>
</html>