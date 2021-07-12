<?php 
	include_once 'includes/conexao.php';
	$email = $_POST['email'];
	$senha = $_POST['senha'];

	$createTable = "create table if not exists pessoa( id int auto_increment, email varchar(256) not null unique, senha varchar(25) not null, primary key(id) )default charset = 'utf8'";
	$mysqli->query($createTable) or die ($mysqli->error);
	$consulta = "select * from pessoa where email = '{$email}' and senha = '{$senha}'";
	$con = $mysqli->query($consulta) or die ($mysqli->error);

	if(mysqli_num_rows($con) > 0){
		echo 'Está cadastrado';
	} else{
		echo 'Não está cadastrado';
		header('Status: 301 Moved Permanently', false, 301);
        header('Location: index.php?i=login');
	}
?>


<main>
	<link rel="stylesheet" href="assets/css/selecao.css">
	<link rel="stylesheet" href="assets/css/style.css">
	<div class="container-selecao" style="color: white;">
		
		<form class="form-selecao" action="index.php?i=jogo" method="POST">

			<button value="CN" name="A" type="submit">Ciências da Natureza</button>
			<button value="CH" name="A" type="submit">Ciências Humanas</button>
			<button value="LC" name="A" type="submit">Linguagens e Códigos</button>
			<button value="M" name="A" type="submit">Matemática</button>
			<button value="AL" name="A" type="submit">Aleatório</button>

		</form>

	</div>
</main>