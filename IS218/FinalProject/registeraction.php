<?php
require('config.php');

$conn_string = "mysql:host=$host;dbname=$database;charset=utf8mb4";
$db = new PDO($conn_string, $username, $password);

$stmt = $db->query("SELECT * FROM TestUsers WHERE username='lew'");
$result = $stmt->fetch();

print_r($result);

/*
$tableName = "LOL";
$createQuery = "CREATE TABLE $tableName (username VARCHAR(16), score INT(16) )";
$db->exec($createQuery);
*/

?>