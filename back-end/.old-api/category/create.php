<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

    exit(0);
}

include_once '../Database/connection.php';
include_once '../Controller/category.php';
 
$database = new Database();
$db = $database->getConnection();
 
$category = new Category($db);

$data = json_decode(file_get_contents("php://input"));

if(!empty($data->name)) {
    $category->name = $data->name;
    
    if($category->create()) {
        http_response_code(201);
 
        echo json_encode(array("message" => "Category was created."));
    } else {
        http_response_code(503);
 
        echo json_encode(array("message" => "Unable to create category."));
    }
} else {
    http_response_code(400);
 
    echo json_encode(array("message" => "Unable to create product. Data is incomplete."));
}
?>