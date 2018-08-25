<?php
SESSION_START();
if(isset($_POST["signup"]));
{
	include "database2.php";
	$username=$_POST['user'];
	echo "$username";
	$sql="SELECT * FROM `signup` WHERE username='$username'";
	$result= mysqli_query($link,$sql);
	while($row=mysqli_fetch_array($result))
	{
		if($row>0){
		$id=$row[0];
		$_SESSION=$id;
	
		header("location:homepage.php");
		}
		
	}
	
    }
	
	?>
	
	<!DOCTYPE html>
<html lang="en">
    <head>
      
        <title>Document</title>
       
    </head>
	<body>
	<form method="POST">
		<input type="text" name="user">
		<input type="password" name="password" />
        <input type="submit" name="signup"/>
	 </form>
	</body>
	</html>