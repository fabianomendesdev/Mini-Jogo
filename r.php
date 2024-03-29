<?php
	session_start();
	require_once("includes/connection.php");
	include_once("view/head.html");
	require_once("includes/formValidation.php");
	try{
		if(isset($_POST['email'])){
			$email = $_POST['email'];
			$user = $_POST['user'];
			$password = $_POST['password'];
			$queryReturn = $mysqli->query("select email from users where email = '$email'");
			if($_POST['password'] !== $_POST['passwordRepeat']){
				$_POST['password'] = '';
				$_POST['passwordRepeat'] = '';
				throw new FormValidation('As senhas não se batem');
			} else if (mysqli_num_rows($queryReturn) > 0){
				$_POST['email'] = '';
				throw new FormValidation('Este email já está cadastrado');
			}
			$mysqli->query("insert into users values (DEFAULT, '$user', '$email', '$password')");
			unset($Errors['errors']);
			header('Location: login.php');
		}
	} catch(FormValidation $e){
		$Errors['errors']['register'] = [$e->getMessage()];
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
				<?php if(isset($Errors['errors']['register'])): ?>
					<?php foreach($Errors['errors']['register'] as $error): ?>
						<p class="errorText"><?= $error ?></p>
					<?php endforeach?>
				<?php endif ?>
				
				<input type="text" placeholder="Usuário" name="user" id="user" max='20' value="<?= $_POST['user'] ?? ''?>" required>
				
				<input type="email" placeholder="E-mail" name="email" id="email" max='256' value="<?= $_POST['email'] ?? ''?>" required>
				
				<input type="password" placeholder="Senha" name="password" id="password" max='25' value="<?= $_POST['password'] ?? ''?>" required>

				<input type="password" placeholder="Confirme sua senha" name="passwordRepeat" id="passwordRepeat" max='25' value="<?= $_POST['passwordRepeat'] ?? ''?>" required>
				
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