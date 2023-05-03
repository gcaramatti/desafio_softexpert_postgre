<?php

use App\Core\Model;

class SaleItems {
    public $id; 
    public $sale_id; 
    public $product_id; 
    public $quantity; 
    public $unit_price;
    public $total_product; 
    public $total_tax; 
    public $tax;

    public function insert($sale_id) {
        $sql = "INSERT INTO sale_items (sale_id, product_id, quantity, unit_price, total_product, total_tax, tax) VALUES (?, ?, ?, ?, ?, ?, ?)";

        $stmt = Model::getConn()->prepare($sql);
        $stmt->bindValue(1, $sale_id);
        $stmt->bindValue(2, $this->product_id);
        $stmt->bindValue(3, $this->quantity);
        $stmt->bindValue(4, $this->unit_price);
        $stmt->bindValue(5, $this->total_product);
        $stmt->bindValue(6, $this->total_tax);
        $stmt->bindValue(7, $this->tax);

        try {
            $stmt->execute();
            $this->id = Model::getConn()->lastInsertId();

            return $this;
        } catch (E) {
            print_r($stmt->errorInfo());
            return null;
        }
    }

}