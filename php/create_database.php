<!DOCTYPE html>
    <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!--FONTS-->
    <link href="https://fonts.googleapis.com/css?family=PT+Sans+Narrow&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Abel|Assistant|News+Cycle&display=swap" rel="stylesheet">

    <style>
        .errorMessage{
            font-family: 'Abel', sans-serif;
            color: white;
        }
    </style>

<?php
$database_name = $_POST["create_db_name"];
// Create Connection
$conn = mysqli_connect("localhost", "root", "");
// Check Connection
if (!$conn){
    die("Connection Failed" . mysqli_connect_error());
}

//Create Database
$sql = "CREATE DATABASE $database_name";
if (mysqli_query($conn, $sql)) {
    echo "Database created successfully";
    createGraphicTable($database_name);
} else {
    echo "?> 



<p class=".errorMessage">Error creating database: </p>

<?php" . mysqli_error($conn);
}
mysqli_close($conn);


function createGraphicTable($database_name){
    $database_name = $_POST["create_db_name"];
    // Create Connection
    $conn = mysqli_connect("localhost", "root", "", $database_name);
    // Check Connection
    if (!$conn){
        die("Connection Failed" . mysqli_connect_error());
    }    

    // sql to create table
    $sql = "CREATE TABLE MyGuests (
        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
        firstname VARCHAR(30) NOT NULL,
        lastname VARCHAR(30) NOT NULL,
        email VARCHAR(50),
        reg_date TIMESTAMP
        )";

    if ($conn->query($sql) === TRUE) {
        echo "Table MyGuests created successfully";
    } else {
        echo "Error creating table: " . $conn->error;
    }
}

?>


</html>
