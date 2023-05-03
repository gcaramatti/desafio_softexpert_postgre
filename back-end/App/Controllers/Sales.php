<?php

use App\Core\Controller;

class Sales extends Controller {
    public function index() {
        $model = $this->model("Sale");

        $categoryList = $model->getGeneralData();

        if(!$categoryList) {
            http_response_code(204);
            exit;
        }

        echo json_encode(['data' => $categoryList]);
    }

    public function store() {
        $formData = $this->getRequestBody();

        $salesModel = $this->model("Sale");
        //Cria uma nova venda e pega o ultimo id dela *Ja ta funcionando*
        $idSale = $salesModel->insert();

        $saleItemsModel = $this->model("SaleItems");

        foreach($formData as $sale) {
            $saleItemsModel->sale_id = $idSale; 
            $saleItemsModel->product_id = $sale->product_id; 
            $saleItemsModel->quantity = $sale->quantity; 
            $saleItemsModel->unit_price = $sale->price; 
            $saleItemsModel->total_product = $sale->total_product; 
            $saleItemsModel->total_tax = $sale->total_tax; 
            $saleItemsModel->tax = $sale->total_product;

            $saleItemsModel = $saleItemsModel->insert($idSale);
        }

        if($saleItemsModel) {
            http_response_code(204);
            echo json_encode($model);
        } else {
            http_response_code(500);
            echo json_encode(['error' => "Erro ao inserir categoria"]);
        }
    }

    public function find($id) {
        $model = $this->model("Sale");

        $categoryList = $model->show($id);

        if(!$categoryList) {
            http_response_code(204);
            exit;
        }

        echo json_encode(['data' => $categoryList]);
    }
}