<?php
$country=$_GET["country"];
    if($country=="usa"){
        $cities=array("NewYork","LA","Chicago");
  }
  else if($country=="canada"){
    $cities=array("Tornoto","Montreal","Vancouver");
}else{
    $cities=array();
}
echo_json_encode($cities);
?>