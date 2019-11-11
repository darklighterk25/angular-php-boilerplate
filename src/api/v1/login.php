<?php

include_once($_SERVER["DOCUMENT_ROOT"] . '/api/config/database.php');

include_once $_SERVER["DOCUMENT_ROOT"] . '/api/config/core.php';
require $_SERVER["DOCUMENT_ROOT"] . '/api/vendor/autoload.php';

use Firebase\JWT\JWT;

if (isset($_SERVER['HTTP_ORIGIN'])) {
  header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
  header("Access-Control-Allow-Methods: POST");
  header("Access-Control-Max-Age: 3600");
  header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

  $body = json_decode(file_get_contents("php://input"));
  $db_config = new DatabaseConfig();
  $client = new MongoDB\Client($db_config->conn);
  $db = $client->boilerplateApp;
  $col = $db->users;

  if (isset($body->username) && isset($body->password)) {

    $result = $col->findOne(['username' => $body->username, 'password' => hash("sha256", $body->password)]);

    if ($result != null) {

      $token = array(
        "iss" => $iss,
        "aud" => $aud,
        "iat" => $iat,
        "nbf" => $nbf,
        "exp" => $exp,
        "data" => array(
          "id" => $result->_id->__toString(),
          "username" => $result->username
        )
      );
      $jwt = JWT::encode($token, $key);

      header('Content-Type: application/json; charset=UTF-8', true, 200); // OK.
      echo json_encode(array("status" => "OK", "token" => $jwt));

    } else {

      header('Content-Type: application/json; charset=UTF-8', true, 404); // Not found.
      echo json_encode(array("status" => "Bad Request", "result" => $result, "body" => $body->username, "password" => $body->password));

    }

  } else {
    header('Content-Type: application/json; charset=UTF-8', true, 400); // Bad Request.
    echo json_encode(array("status" => "Bad Request"));
  }

}

?>
