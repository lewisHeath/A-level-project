<?php
ini_set('display_startup_errors',1);
ini_set('display_errors',1);
error_reporting(-1);

$hostname = "mysql.hostinger.com";
$username = "u228297678_lewi";
$password = "gamerman";
$database = "u228297678_lewi";

$mysqli = new mysqli($hostname, $username, $password, $database);

if (mysqli_connect_errno()){
  printf("Connection failed");
  exit();
}
?>