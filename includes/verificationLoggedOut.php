<?php 
    session_start();
    error_reporting(0);
    if($_COOKIE['user']){
        $_SESSION['user'] = $_COOKIE['user'];
    }

    if(!$_SESSION['user']){
        header('Location: login.php');
    }
?>