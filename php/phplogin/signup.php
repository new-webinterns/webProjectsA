<?php
if(isset($_POST['signup']))
{
    include "database.php";
    if($_POST['username']==""&& $_POST['password']=="")
    {
        echo "please enter username and password";
    }
    elseif($_POST['password']<1)
    {
        echo "password must be greater than 2";
    }
    else
    {
       $username = $_POST['username'];
       $password = md5($_POST['password']);
       $sql = "INSERT INTO `login` (username, password) VALUES ('$username','$password')";
       mysqli_query($link,$sql);
       header("location:login1.php");

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
        
		<input type="text" name="username"/>
		<input type="password" name="password" />
        <input type="submit" name="signup"/>
	 </form>
	</body>
	</html>