<?php require_once 'includes/conexao.php';
    $email = $_POST['email'];
    $senha = $_POST['senha'];
    
    $createTable = "create table if not exists pessoa( id int auto_increment, email varchar(256) not null unique, senha varchar(25) not null, primary key(id) )default charset = 'utf8'";
	$mysqli->query($createTable) or die ($mysqli->error);
    $consulta = "insert into pessoa values (default, '{$email}', '{$senha}')";
	$con = $mysqli->query($consulta) or die ($mysqli->error);
?>
<main>
    <div class="container-validacao">
        <?php
            if(!$mysqli->error){
                echo "<p>Cadastrado com sucesso</p>";
            }
        ?>
        <h1>Validação</h1>
    </div>    
</main>