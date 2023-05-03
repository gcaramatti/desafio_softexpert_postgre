<?php

use App\Core\Model;

class Product {
    public $id; 
    public $name; 
    public $description; 
    public $price; 
    public $category_id; 
    public $tax;

    public function getAll() {
        $sql = "SELECT p.*, c.name as category_name FROM products p JOIN categories c ON p.category_id = c.id";

        $stmt = Model::getConn()->prepare($sql);
        $stmt->execute();

        if($stmt->rowCount() > 0) {
            $rows = $stmt->fetchAll(PDO::FETCH_OBJ);

            return $rows;
        } 
            
        return null;
    }

    public function show($id) {
        $sql = "SELECT p.*, c.name as category_name FROM products p JOIN categories c ON p.category_id = c.id WHERE p.id = " . $id;

        $stmt = Model::getConn()->prepare($sql);
        $stmt->execute();

        if($stmt->rowCount() > 0) {
            $rows = $stmt->fetch(PDO::FETCH_OBJ);

            return $rows;
        } 
            
        return null;
    }

    public function insert() {
        $sql = "INSERT INTO products (name, description, price, tax, category_id) VALUES (?, ?, ?, ?, ?)";

        $stmt = Model::getConn()->prepare($sql);
        $stmt->bindValue(1, $this->name);
        $stmt->bindValue(2, $this->description);
        $stmt->bindValue(3, $this->price);
        $stmt->bindValue(4, $this->tax);
        $stmt->bindValue(5, $this->category_id);

        try {
            $stmt->execute();
            $this->id = Model::getConn()->lastInsertId();

            return $this;
        } catch (E) {
            print_r($stmt->errorInfo());
            return null;
        }
    }

    public function delete($id) {
        $sql = "DELETE FROM products WHERE id = ?";

        $stmt = Model::getConn()->prepare($sql);
        $stmt->bindValue(1, $id);

        if($stmt->execute()) {
            $category = $stmt->fetch(PDO::FETCH_OBJ);

            if(!$category) {
                return null;
            }

            return 'success';
        } else {
            print_r($stmt->errorInfo());
            return null;
        }
    }

}