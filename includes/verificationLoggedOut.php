<?php 
    session_start();
    
    if(isset($_COOKIE['user'])){
        $_SESSION['user'] = $_COOKIE['user'];
    }

    if(!isset($_SESSION['user'])){
        header('Location: login.php');
    }
?>