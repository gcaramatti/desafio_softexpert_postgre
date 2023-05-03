<?php

    require_once("../vendor/autoload.php");
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: *');
    header('Content-Type: application/json');

    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
            
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            header("Access-Control-Allow-Methods: *");
        
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
    
        exit(0);
    }

    date_default_timezone_set("America/Sao_Paulo");

    new App\Core\Router();