<?php
     session_start();
     if(isset($_SESSION['id']))
     {
     header('location:homepage.php');
     }
     if(isset($_POST['login']))
     {
         include "database.php";
         $username=$_POST['username'];
         $password=md5($_POST['password']);
         $sql="SELECT * FROM `login` WHERE username='$username' AND password='$password'";
         $result=mysqli_query($link,$sql);
         while($row=mysqli_fetch_row($result))
         {
             if($row>0){
                echo "hello";
             $id = $row[0];
             $_SESSION['id'] = $id;
             header("location:homepage.php");
             }
             else{
                 echo "login failed";
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
        
		<input type="text" name="username"/>
		<input type="password" name="password" />
        <input type="submit" name="login"/>
	 </form>
	</body>
	</html>
