<?php
include "database.php";
SESSION_START();
if(isset($_POST['login'])){
    echo "hello";
    $username=$_POST['username'];
    $sql="SELECT * FROM `student` WHERE username='$username'";
    echo "$sql";
    $result=mysqli_query($link,$sql);
    while($row=mysqli_fetch_array($result))
    {
        if($row>0){
        $id=$row[0];
        $_SESSION['id']=$id;
        header("location:home.php");
        }
        

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
      <input type="submit" name="login" value="login"  />
    
      
     </form>
    </body>
</html>
