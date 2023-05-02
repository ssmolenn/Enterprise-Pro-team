<?php
//This is an alternative way of connecting to the database
//Variable containing server name info
$dbServername = "35.189.98.101";
//Variable containing server usernamer info for access
$dbUsername = "root";
//Variable containing server password info for access
$dbPassword = "admin";
//Variable containing database name info
$dbName = "data";
//Runs the connection to the database
$conn = mysqli_connect($dbServername, $dbUsername,$dbPassword,$dbName);

//If not connected, states the following echo on the page
if(!$conn) {
    echo "Connection failed";
}
