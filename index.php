<?php 
	require_once("includes/verification.php");
?>
<link rel="stylesheet" href="assets/css/index.css">
<title>Mini-Jogo</title>
</head>
<body class="index">
	<?php include_once("view/header.html")?>
	<main>
		<section class="main-section">	
			<form class="form-selecao" action="index.php?i=jogo" method="POST">

				<button value="CN" name="A" type="submit">Ciências da Natureza</button>
				<button value="CH" name="A" type="submit">Ciências Humanas</button>
				<button value="LC" name="A" type="submit">Linguagens e Códigos</button>
				<button value="M" name="A" type="submit">Matemática</button>
				<button value="AL" name="A" type="submit">Aleatório</button>

			</form>
		</section>
		</div>
	</main>	
	<?php include_once("view/footer.html")?>
</body>
</html>