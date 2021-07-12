<?php
    session_start();
    session_destroy();
    unset($_COOKIE['user']);
    setcookie('user', '');
    header('Location: login.php');
?>