<?php
include "database.php";
$uid=$_GET['id'];
if(isset($_POST['update'])){
            $tit=$_POST['tit'];
            $des=$_POST['des'];
            $sql4="UPDATE `form` SET `title`='$tit',`desc`= '$des' WHERE id='$uid'";
            mysqli_query($con,$sql4);
            header("location:homepage.php");
        }


?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
  <title>table</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  </head>
  <body>


<div class="container-fluid">
    <div class="col-sm-9 col-md-6 col-lg-6" style="background: linear-gradient(#227de6,#210235)">
	<form method="POST">
    <div class="form-group">
      <label for="email">Title:</label>
      <input type="text" class="form-control" id="email" placeholder="Enter title" name="tit">
    </div>
    <div class="form-group">
      <label for="pwd">Description:</label>
      <input type="text" class="form-control" id="pwd" placeholder="Enter description" name="des">
    </div>
    <button type="submit" class="btn btn-default" name='update'>UPDATE</button>
  </form>
    </div>
     <div class="col-sm-9 col-md-6 col-lg-6">
    </div>
  </div>
  <?php
  include "table.php";
  ?>
</div>
    
</body>
</html>
