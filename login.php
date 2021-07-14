<?php
	session_start();
	require("includes/verificationLogged.php");
	require("includes/formValidation.php");
	require_once("includes/connection.php");
	include_once("view/head.html");

	if(isset($_POST['email']) && isset($_POST['password'])){
		$email =  $_POST['email'];
		$password =  $_POST['password'];
		$query = "select * from users where email = '$email' and password = '$password'";
		$queryReturn = $mysqli->query($query);

		if(mysqli_num_rows($queryReturn) > 0) {
			$data = $queryReturn->fetch_array();
			$_SESSION['user'] = $data['user'];
			$_SESSION['email'] = $data['email'];
			$_SESSION['password'] = $data['password'];
			$exp = time() + (60 * 60 * 2);
			setcookie('user', $_SESSION['user'], $exp);
			session_regenerate_id();
			unset($Errors['errors']);
			header('Location: index.php');
		} else {
			try {
				throw new FormValidation('Email ou senha incorretos');
			} catch (FormValidation $e) {
				$Errors['errors']['login'] = [$e->getMessage()];
			}
		}
	}
?>
<link rel="stylesheet" href="assets/css/login-register.css">
<title>Login</title>
</head>
<body class="login">
	<?php include_once("view/headerLoggedOut.html")?>
	<main>		
		<section class="main-section section-login-register">
			<form class="form-login" action="#" method="post">
				<p>Login</p>

				<?php if(isset($Errors['errors']['login'])): ?>
					<?php foreach($Errors['errors']['login'] as $error): ?>
						<p class="errorText"><?= $error ?></p>
					<?php endforeach?>
				<?php endif ?>
				
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