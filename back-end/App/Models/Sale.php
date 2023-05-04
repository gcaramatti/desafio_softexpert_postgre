<?php

use App\Core\Model;

class Sale {
    public $id; 
    public $created_at;

    public function getGeneralData() {
        $sql = "SELECT sales.*, 
            SUM(sale_items.quantity) AS total_items,
            SUM(sale_items.total_product) AS total_sale, 
            SUM(sale_items.total_tax) AS total_tax_sale 
            FROM sales 
            JOIN sale_items 
            ON sales.id = sale_items.sale_id 
            GROUP BY sales.id
            ORDER BY sales.id DESC";

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
        $sql = "INSERT INTO sales (created_at) VALUES (?)";

        $createdAt = date("Y-m-d H:i:s");

        $stmt = Model::getConn()->prepare($sql);
        $stmt->bindValue(1, $createdAt);

        try {
            $stmt->execute();
            $this->id = Model::getConn()->lastInsertId();

            return $this->id;
        } catch (E) {
            print_r($stmt->errorInfo());
            return null;
        }
    }

    public function getSaleDetails($id) {
        $sql = "SELECT si.*, s.created_at, p.name AS product_name, p.description 
        FROM sale_items si 
        JOIN sales s 
        ON si.sale_id = s.id 
        JOIN products p 
        ON p.id = si.product_id 
        WHERE s.id = " . $id;

        $stmt = Model::getConn()->prepare($sql);
        $stmt->execute();

        if($stmt->rowCount() > 0) {
            $rows = $stmt->fetchAll(PDO::FETCH_OBJ);

            return $rows;
        } else {
            return null;
        }
    }

}