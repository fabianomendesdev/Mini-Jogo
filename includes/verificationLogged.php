<?php
    session_start();
    error_reporting(0);
    if($_SESSION['user']){
        header('Location: index.php');
    }
?>