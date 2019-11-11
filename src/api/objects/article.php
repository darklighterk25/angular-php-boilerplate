<?php

include_once($_SERVER["DOCUMENT_ROOT"] . '/api/config/database.php');

use MongoDB\BSON\ObjectId;
use MongoDB\BSON\UTCDateTime;

class Article
{

  private $client;
  private $col;
  private $db;

  public $_id;
  public $name;
  public $description;
  public $cost;
  public $stock;
  public $photo;
  public $dateAdded;
  public $active;
  public $res;

  public function __construct()
  {
    $db_config = new DatabaseConfig();
    $this->client = new MongoDB\Client($db_config->conn);
    $this->db = $db_config->getDB($this->client);
    $this->col = $this->db->articles;
  }

  function add()
  {
    if (
    isset(
      $this->name,
      $this->description,
      $this->cost,
      $this->stock
    )
    ) {
      $curDate = new UTCDateTime();
      $curDate->toDateTime()->format('Y-m-d H:i:s');
      $insert = $this->col->insertOne([
        'name' => $this->name,
        'description' => $this->description,
        'cost' => $this->cost,
        'stock' => $this->stock,
        'photo' => 'http://dummyimage.com/250x250.png/5fa2dd/ffffff',
        'dateAdded' => $curDate,
        'active' => true
      ]);
      if ($insert != null) {
        $_id = $insert->getInsertedId();
        $this->res = $this->col->findOne(['_id' => $_id]);
        return true;
      } else {
        return false;
      }
    }
  }

  function delete()
  {
    if (isset($this->_id)) {
      $this->res = $this->col->updateOne(
        ['_id' => new ObjectId($this->_id)],
        ['$set' => ['active' => false]]
      );
      if ($this->res != null) {
        return true;
      } else {
        return false;
      }
    }
  }

  function edit()
  {
    if (isset(
      $this->_id,
      $this->name,
      $this->description,
      $this->cost,
      $this->stock
    )) {
      $update = $this->col->updateOne(
        ['_id' => new ObjectId($this->_id)],
        ['$set' => [
          'name' => $this->name,
          'description' => $this->description,
          'cost' => $this->cost,
          'stock' => $this->stock,
          'active' => true
        ]
        ]
      );
      if ($update != null) {
        $this->res = $this->col->findOne(['_id' => new ObjectId($this->_id)]);
        if ($this->res != null) {
          return true;
        }
      }
      return false;
    }
  }

  function get()
  {
    $cursor = $this->col->find(['active' => true]);
    if ($cursor != null) {
      $this->res = iterator_to_array($cursor);
      return true;
    } else {
      return false;
    }
  }

  function getOne()
  {
    $this->res = $this->col->findOne(['_id' => new ObjectId($this->_id), 'active' => true]);
    if ($this->res != null) {
      return true;
    } else {
      return false;
    }
  }

}

?>
