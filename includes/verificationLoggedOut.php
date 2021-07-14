<?php  
    if(isset($_COOKIE['user'])){
        $_SESSION['user'] = $_COOKIE['user'];
    }

    if(!isset($_SESSION['user'])){
        $exp = time() + (60 * 60 * 2);
        setcookie('user', $_SESSION['user'], $exp);
        session_regenerate_id();
        header('Location: login.php');
    }
?>