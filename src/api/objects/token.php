<?php

include_once($_SERVER["DOCUMENT_ROOT"] . '/api/config/core.php');

use Firebase\JWT\JWT;

class Token
{

  public function __construct()
  {

  }

  function validate($token)
  {

    // if jwt is not empty
    if ($token) {
      // if decode succeed, show user details
      try {
        // decode jwt
        include($_SERVER["DOCUMENT_ROOT"] . '/api/config/core.php');
        $decoded = JWT::decode($token, $key, array('HS256'));
        // show user details
        return array(
          "validated" => true,
          "message" => "Access granted.",
          "data" => $decoded->data
        );

      } // if decode fails, it means jwt is invalid
      catch (Exception $e) {
        // tell the user access denied  & show error message
        return array(
          "validated" => false,
          "message" => "Access denied.",
          "error" => $e->getMessage()
        );
      }
    } else {
      // tell the user access denied
      return array("validated" => false,
        "message" => "Access denied.");
    }
  }

  function getAuthorizationHeader()
  {
    $headers = null;
    if (isset($_SERVER['Authorization'])) {
      $headers = trim($_SERVER["Authorization"]);
    } else if (isset($_SERVER['HTTP_AUTHORIZATION'])) { //Nginx or fast CGI
      $headers = trim($_SERVER["HTTP_AUTHORIZATION"]);
    } elseif (function_exists('apache_request_headers')) {
      $requestHeaders = apache_request_headers();
      // Server-side fix for bug in old Android versions (a nice side-effect of this fix means we don't care about capitalization for Authorization)
      $requestHeaders = array_combine(array_map('ucwords', array_keys($requestHeaders)), array_values($requestHeaders));
      //print_r($requestHeaders);
      if (isset($requestHeaders['Authorization'])) {
        $headers = trim($requestHeaders['Authorization']);
      }
    }
    return $headers;
  }

  /**
   * get access token from header
   * */
  function getBearerToken()
  {
    $headers = $this->getAuthorizationHeader();
    // HEADER: Get the access token from the header
    if (!empty($headers)) {
      if (preg_match('/Bearer\s(\S+)/', $headers, $matches)) {
        return $matches[1];
      }
    }
    return null;
  }

}

?>
