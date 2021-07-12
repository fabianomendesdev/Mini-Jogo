<?php 
	require_once("includes/verificationLoggedOut.php");
	require_once("includes/connection.php");
	include_once("view/head.html");
?>
<link rel="stylesheet" href="assets/css/index.css">
<title>Mini-Jogo</title>
</head>
<body class="index">
	<?php include_once("includes/headerLogged.php")?>
	<main>
		<section class="main-section section-index">	
			<form class="form-index" action="#" method="post">
				<button value="CN" name="A">Ciências da Natureza</button>
				<button value="CH" name="A">Ciências Humanas</button>
				<button value="LC" name="A">Linguagens e Códigos</button>
				<button value="M" name="A">Matemática</button>
				<button value="AL" name="A">Aleatório</button>

			</form>
		</section>
		</div>
	</main>	
	<?php include_once("view/footer.html")?>
</body>
</html>