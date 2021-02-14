<?php

include('config.php');


$sql = "SELECT * FROM customers WHERE Age = '18' ";


if($result = $mysqli->query($sql)) {
  $rows = array();
  while($r = mysqli_fetch_assoc($result)) {
    $rows[] = $r;
  }
}

echo json_encode($rows);

?>