<?php 
    session_start();

    if($_COOKIE['user']){
        $_SESSION['user'] = $_COOKIE['user'];
    }

    if(!$_SESSION['user']){
        header('Location: login.php');
    }
?>