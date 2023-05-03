<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Access-Control-Max-Age: 86400");
header("Content-Type: application/json; charset=UTF-8");
 
include_once '../Database/connection.php';
include_once '../Controller/category.php';
 
$database = new Database();
$db = $database->getConnection();
 
$category = new Category($db);
 
$data = json_decode(file_get_contents("php://input"));
 
$category->id = $data->id;
$category->name = $data->name;
 
if($category->update()){
 
    http_response_code(200);
 
    echo json_encode(array("message" => "Product was updated."));
} else {
    http_response_code(503);
 
    echo json_encode(array("message" => "Unable to update product."));
}
?>