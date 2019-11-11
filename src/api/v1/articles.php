<?php

require $_SERVER["DOCUMENT_ROOT"] . '/api/vendor/autoload.php';

include_once $_SERVER["DOCUMENT_ROOT"] . '/api/objects/article.php';

if (isset($_SERVER['HTTP_ORIGIN'])) {
  header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
  header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
  header("Access-Control-Max-Age: 3600");
  header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
}

if ($_SERVER['REQUEST_METHOD'] == 'GET' || $_SERVER['REQUEST_METHOD'] == 'POST' || $_SERVER['REQUEST_METHOD'] == 'PUT' || $_SERVER['REQUEST_METHOD'] == 'DELETE') {

  $article = new Article();

  switch ($_SERVER['REQUEST_METHOD']) {

    case 'GET';

      if (isset($_GET['_id'])) {

        $article->_id = $_GET['_id'];

        if ($article->getOne()) {
          header('Content-Type: application/json; charset=UTF-8', true, 200); // OK.
          echo json_encode($article->res);
        } else {
          header('Content-Type: application/json; charset=UTF-8', true, 404); // Not Found.
          echo json_encode(array("status" => "Not Found"));
        }

      } else {

        if ($article->get()) {
          header('Content-Type: application/json; charset=UTF-8', true, 200); // OK.
          echo json_encode($article->res);
        } else {
          header('Content-Type: application/json; charset=UTF-8', true, 404); // Not Found.
          echo json_encode(array("status" => "Not Found"));
        }

      }

      break;

    case 'POST';

      $body = trim(file_get_contents('php://input'));
      $data = json_decode($body);
      $article->name = $data->name;
      $article->description = $data->description;
      $article->cost = $data->cost;
      $article->stock = $data->stock;

      if ($article->add()) {
        header('Content-Type: application/json; charset=UTF-8', true, 201); // Created.
        echo json_encode($article->res);
      } else {
        header('Content-Type: application/json; charset=UTF-8', true, 400); // Bad Request.
        echo json_encode(array("status" => "Bad Request"));
      }

      break;

    case 'PUT';

      if (isset($_GET['_id'])) {
        $article->_id = $_GET['_id'];
      }

      $body = trim(file_get_contents('php://input'));
      $data = json_decode($body);
      $article->name = $data->name;
      $article->description = $data->description;
      $article->cost = $data->cost;
      $article->stock = $data->stock;

      if ($article->edit()) {
        header('Content-Type: application/json; charset=UTF-8', true, 200); // OK.
        echo json_encode($article->res);
      } else {
        header('Content-Type: application/json; charset=UTF-8', true, 400); // Bad Request.
        echo json_encode(array("status" => "Bad Request", "body" => $body));
      }

      break;

    case 'DELETE';

      if (isset($_GET['_id'])) {
        $article->_id = $_GET['_id'];
      }

      if ($article->delete()) {
        header('Content-Type: application/json; charset=UTF-8', true, 200); // OK.
        echo json_encode(array("status" => "OK"));
      } else {
        header('Content-Type: application/json; charset=UTF-8', true, 400); // Bad Request.
        echo json_encode(array("status" => "Bad Request"));
      }

      break;

    default:

      header('Content-Type: application/json; charset=UTF-8', true, 400); // Bad Request.
      echo json_encode(array("status" => "Bad Request"));

      break;
  }

}

?>
