<?php
$country=$_GET["country"];
if($country== "usa"){
    $cities = array("New York","Los Angeles","Chicago");
}else if($country== "canada"){
    $cities = array("Tornoto","Vancouver","MOntreal");
}else{
    $cities = array();
}
echo json_encode($cities);
?>