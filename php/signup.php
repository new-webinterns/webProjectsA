<?php
$link=new mysqli("localhost","root","","account");

if(isset($_POST['signup'])){
    if($_POST['username']==""&& $_POST['password'==""])
     {
      echo "please enter the username and password";
     }
    elseif($_POST['password']<8)
     {
        echo "password must be greater than 8";
     }
    else{
        //echo "hello";
    $username=$_POST['username'];
    $password=md5($_POST['password']);
    $sql1="INSERT INTO `student` (`username`, `password`) VALUES ('$username','$password')";
    mysqli_query($link,$sql1);
    header ("location:login.php");
    }
}
?>
<!DOCTYPE html>
<html>
   <head>
      <title> document</title>
    </head>
    <body>
      <form method="POST"  >
      <input type="text" name="username" />
      <input type="password"  name="password" />
      <input type="submit" name="signup" value="sign up" />
    
      
     </form>
    </body>
</html>
