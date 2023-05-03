<?php

namespace App\Core;

class Model {

    private static $connection;

    public static function getConn(){

        if(!isset(self::$connection)){
            self::$connection = new \PDO("mysql:host=localhost;port=3306;dbname=desafio_softexpert;", "root", "root");
        }

        return self::$connection;
    }

}