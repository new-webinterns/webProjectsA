<?php

if(isset($_POST['logout']))
{
	include "logout.php";
	header("location:logout.php");
}
?>

<!DOCTYPE html>
<html lang="en">
    <head>
      
        <title>Document</title>
       
    </head>
	<body>
	<form method="POST">
	<input type="button" name="logout"/>
	</form>
	</body>
	</html>