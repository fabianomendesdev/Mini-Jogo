<?php
    if(isset($_COOKIE['user'])){
        $_SESSION['user'] = $_COOKIE['user'];
    }
  
    if(isset($_SESSION['user'])){
        header('Location: index.php');
    }
?>