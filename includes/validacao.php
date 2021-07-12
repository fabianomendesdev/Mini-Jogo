<?php require_once 'includes/conexao.php';
    $email = $_POST['email'];
    $senha = $_POST['senha'];
    
    $createTable = "create table if not exists pessoa( id int auto_increment, email varchar(256) not null unique, senha varchar(25) not null, primary key(id) )default charset = 'utf8'";
	$mysqli->query($createTable) or die ($mysqli->error);
    $consulta = "select email from pessoa where email = '$email'";
    $con = $mysqli->query($consulta) or die ($mysqli->error); 

    if(mysqli_num_rows($con) > 0){
        echo "<p>Esse email já está cadastrado</p>";
    }else{
        $consulta = "insert into pessoa values (default, '$email', '$senha')";
	    $con = $mysqli->query($consulta) or die ($mysqli->error);
        echo "<p>Cadastrado com sucesso</p>";
    }
?>
<main>
    <div class="container-validacao">
        <a href="index.php?i=login">Login</a>
        <h1>Validação</h1>
    </div>    
</main>