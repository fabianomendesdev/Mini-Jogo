<?php
    $hostname = 'localhost';
    $usuario = 'root';
    $senha = '';
    $bd = 'minijogo';

    $mysqli = new mysqli($hostname,$usuario,$senha,$bd);

    if($mysqli->connect_errno){
        echo "Erro na conexão: (".$mysqli->connect_errno.") ".$mysqli->connect_error;
    }
?>