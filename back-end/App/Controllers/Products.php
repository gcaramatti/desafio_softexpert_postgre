<?php

use App\Core\Controller;

class Products extends Controller {
    
    public function index() {
        $model = $this->model("Product");

        $allProducts = $model->getAll();

        if(!$allProducts) {
            http_response_code(204);
            exit;
        }

        echo json_encode(['data' => $allProducts]);
    }

    public function store() {
        $formData = $this->getRequestBody();

        $model = $this->model("Product");
        $model->name = $formData->name;
        $model->description = $formData->description;
        $model->price = $formData->price;
        $model->tax = $formData->tax;
        $model->category_id = $formData->category_id;

        $model = $model->insert();

        if($model) {
            http_response_code(204);
            echo json_encode($model);
        } else {
            http_response_code(500);
            echo json_encode(['error' => "Erro ao inserir categoria"]);
        }
    }

    public function update($id) {
        $formData = $this->getRequestBody();

        $model = $this->model("Product");
        $model->name = $formData->name;
        $model->description = $formData->description;
        $model->price = $formData->price;
        $model->tax = $formData->tax;
        $model->category_id = $formData->category_id;

        $model = $model->update($id);

        if($model) {
            http_response_code(204);
            echo json_encode($model);
        } else {
            http_response_code(500);
            echo json_encode(['error' => "Erro ao inserir categoria"]);
        }
    }

    public function find($id) {
        $model = $this->model("Product");

        $categoryList = $model->show($id);

        if(!$categoryList) {
            http_response_code(204);
            exit;
        }

        echo json_encode(['data' => $categoryList]);
    }

    public function delete($id) {
        $model = $this->model("Product");
        $category = $model->show($id);

        if($category) {
            $deleteCategory = $model->delete($id);

            http_response_code(204);
            echo json_encode(['data' => "Apagado com sucesso"]);
        } else {
            http_response_code(500);
            echo json_encode(['data' => "Erro ao apagar categoria"]);
        }
    }
}