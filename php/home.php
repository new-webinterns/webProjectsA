<?php
if(isset($_POST['logout'])){
    header("location:logout.php");
}


?>


<!DOCTYPE html>
<html>
   <head>
      <title> document</title>
    </head>
    <body>
      <form method="POST"  >
      <input type="submit" value="logout" name="logout" />
    
      
     </form>
    </body>
</html>
