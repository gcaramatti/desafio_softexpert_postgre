<?php

namespace App\Core;

class Model {

    private static $connection;

    public static function getConn(){

        if(!isset(self::$connection)){
            self::$connection = new \PDO("pgsql:host=localhost;port=5432;dbname=desafio_softexpert;", "postgres", "root");
        }

        return self::$connection;
    }

}