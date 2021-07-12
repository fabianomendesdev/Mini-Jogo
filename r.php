<?php
	require_once("includes/connection.php");
	include_once("view/head.html") 
?>
<link rel="stylesheet" href="assets/css/login-register.css">
<title>Criar conta</title>
</head>
<body class="register">
	<?php include_once("view/headerLoggedOut.html")?>
	<main>
		<section class="main-section section-login-register">
			<form class="form-login" action="#" method="post">
				<p>Criar Conta</p>
				
				<input type="email" placeholder="Digite seu e-mail" name="email" id="email">
				
				<input type="password" placeholder="Digite sua senha" name="senha" id="senha" max='25'>

				<input type="password" placeholder="Repita sua senha" name="senhaRepetição" id="senhaRepeticao" max='25'>
				
				<button class="createAccount">Criar Conta</button>
			</form>
			<div class="createAccount">
				<a href="login.php"><button>Login</button></a>
			</div>
		</section>
	</main>
	<?php include_once("view/footer.html")?>
</body>
</html>