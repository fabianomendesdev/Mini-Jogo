<?php
	session_start();
	require_once("includes/connection.php");
	include_once("view/head.html");
	require_once("includes/formValidation.php");
	try{
		if(isset($_POST['email'])){
			$email = $_POST['email'];
			$queryReturn = $mysqli->query("select email from users where email = '$email'");
			if($_POST['password'] !== $_POST['passwordRepeat']){
				throw new FormValidation('As senhas não se batem');
			} else if (mysqli_num_rows($queryReturn) > 0){
				throw new FormValidation('Este email já está cadastrado');
			}
		}
	} catch(FormValidation $e){
		$_SESSION['errors'] = [$e->getMessage()];
	}

	if(!isset($_SESSION['errors'])){
		echo "Não teve erros";
	}
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
				<?php if(isset($_SESSION['errors'])): ?>
					<?php foreach($_SESSION['errors'] as $error): ?>
						<p class="errorText"><?= $error ?></p>
					<?php endforeach?>
				<?php endif ?>
				
				<input type="text" placeholder="Usuário" name="user" id="user" max='20' required>
				
				<input type="email" placeholder="E-mail" name="email" id="email" max='256' required>
				
				<input type="password" placeholder="Senha" name="password" id="password" max='25' required>

				<input type="password" placeholder="Confirme sua senha" name="passwordRepeat" id="passwordRepeat" max='25' required>
				
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