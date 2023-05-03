<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");
 
include_once '../Database/connection.php';
include_once '../Controller/category.php';
 
$database = new Database();
$db = $database->getConnection();
 
$category = new Category($db);
 
$stmt = $category->index();
$num = $stmt->rowCount();
 
if($num > 0) {
 
    $categories_arr = array();
    $categories_arr["data"] = array();
 

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        extract($row);
 
        $category_item=array(
            "id" => $id,
            "name" => $name
        );
 
        array_push($categories_arr["data"], $category_item);
    }
 
    http_response_code(200);
 
    echo json_encode($categories_arr);
} else {
    http_response_code(404);
 
    echo json_encode(
        array("message" => "No categories found.")
    );
}
