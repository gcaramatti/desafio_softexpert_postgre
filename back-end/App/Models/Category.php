<?php

use App\Core\Model;

class Category {
    public $id;
    public $name;

    public function getAll() {
        $sql = "SELECT * FROM categories";

        $stmt = Model::getConn()->prepare($sql);
        $stmt->execute();

        if($stmt->rowCount() > 0) {
            $rows = $stmt->fetchAll(PDO::FETCH_OBJ);

            return $rows;
        } else {
            return null;
        }
            
    }

    public function insert() {
        $sql = "INSERT INTO categories (name) VALUES (?)";

        $stmt = Model::getConn()->prepare($sql);
        $stmt->bindValue(1, $this->name);

        try {
            $stmt->execute();
            $this->id = Model::getConn()->lastInsertId();

            return $this;
        } catch (E) {
            print_r($stmt->errorInfo());
            return null;
        }
    }

    public function show($id) {
        $sql = "SELECT * FROM categories WHERE id = ?";

        $stmt = Model::getConn()->prepare($sql);
        $stmt->bindValue(1, $id);

        if($stmt->execute()) {
            $category = $stmt->fetch(PDO::FETCH_OBJ);

            if(!$category) {
                return null;
            }

            return ['data' => $category];
        } else {
            print_r($stmt->errorInfo());
            return null;
        }
    }

    public function delete($id) {
        $sql = "DELETE FROM categories WHERE id = ?";

        $stmt = Model::getConn()->prepare($sql);
        $stmt->bindValue(1, $id);

        if($stmt->execute()) {
            $category = $stmt->fetch(PDO::FETCH_OBJ);

            if(!$category) {
                return null;
            }

            return ['data' => null];
        } else {
            print_r($stmt->errorInfo());
            return null;
        }
    }
}