<?php
    $pagina = $_GET['i'] ?? '';

    switch($pagina){
        case 'login':
            include 'includes/login.php';
            break;
        
        case 'cadastro':
            include 'includes/cadastro.php';
            break;
        
        case 'validacao':
            include 'includes/validacao.php';
            break;

        case 'selecao':
            include 'includes/selecao.php';
            break;

        case 'jogo':
            include 'includes/jogo.php';
            break;

        case 'final':
            include 'includes/final.php';
            break;

        default:
            header('Status: 301 Moved Permanently', false, 301);
            header('Location: index.php?i=login');
    }
?>