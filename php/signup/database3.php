<?php
if(isset($_POST['signup']))
{
    include "database2.php";
    if($_POST['username']==""&& $_POST['password']=="")
    {
        echo "please enter username and password";
    }
    
    
       $username = $_POST['username'];
       $password = $_POST['password'];
       $sql = "INSERT INTO `signup` (`username`,`password`) VALUES ('$username','$password')";
       mysqli_query($link,$sql);
       header("location:login.php");

    
}
?>
<!DOCTYPE html>
<html lang="en">
    <head>
      
        <title>Document</title>
       
    </head>
	<body>
	<form method="POST">
		<input type="text" name="username"/>
		<input type="password" name="password" />
        <input type="submit" name="signup"/>
	 </form>
	</body>
	</html>