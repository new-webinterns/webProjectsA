<?php
session_start();
if(!isset($_SESSION['id']))
{
    header("location:login1.php");
}
if(isset($_POST['logout']))
{
  
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
	
		<input type="submit"  value="logout" name="logout"/>
		
	 </form>
	</body>
	</html>