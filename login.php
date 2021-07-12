<?php
	require("includes/verificationLogged.php");
	require_once("includes/connection.php");
	include_once("view/head.html");

	$email =  $_POST['email'] ?? '';
	$password =  $_POST['password'] ?? '';

	$query = "select * from users where email = '$email' and password = '$password'";
	$queryReturn = $mysqli->query($query) or die ($mysqli->error);

	if(mysqli_num_rows($queryReturn) > 0) {
		$data = $queryReturn->fetch_array();
		$_SESSION['user'] = $data['user'];
		$_SESSION['email'] = $data['email'];
		$_SESSION['password'] = $data['password'];
		unset($_SESSION['errors']);
		$exp = time() + 60 * 60;
		setcookie('user', $_SESSION['user'], $exp);
		header('Location: index.php');
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

				<?php if(isset($_SESSION['errors']['login'])): ?>
					<?php foreach($_SESSION['errors']['login'] as $error): ?>
						<p><?= $error ?></p>
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