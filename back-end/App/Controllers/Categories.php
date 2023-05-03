<?php

use App\Core\Controller;

class Categories extends Controller {
    public function index() {
        $model = $this->model("Category");

        $categoryList = $model->getAll();

        if(!$categoryList) {
            http_response_code(204);
            exit;
        }

        echo json_encode(['data' => $categoryList]);
    }

    public function store() {
        $formData = $this->getRequestBody();

        $model = $this->model("Category");
        $model->name = $formData->name;

        $model = $model->insert();

        if($model) {
            http_response_code(204);
            echo json_encode($model);
        } else {
            http_response_code(500);
            echo json_encode(['error' => "Erro ao inserir categoria"]);
        }
    }

    public function find($id) {
        $model = $this->model("Category");

        $categoryList = $model->show($id);

        if(!$categoryList) {
            http_response_code(204);
            exit;
        }

        echo json_encode(['data' => $categoryList]);
    }

    public function delete($id) {
        $model = $this->model("Category");
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