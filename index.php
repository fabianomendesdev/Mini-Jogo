<?php
    require_once 'view/header.html';
    $pagina = $_GET['i'] ?? '';

    switch($pagina){
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
    require_once 'view/footer.html';
?>