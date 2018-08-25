<?php
include "database.php";
if(isset($_POST['sub'])){
            $title=$_POST['title'];
            $desc=$_POST['desc'];
            $sql="INSERT INTO `form`(`title`, `desc`) VALUES ('$title','$desc')";
            mysqli_query($con,$sql);
        }


?>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
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
      <input type="text" class="form-control" id="email" placeholder="Enter title" name="title">
    </div>
    <div class="form-group">
      <label for="pwd">Description:</label>
      <input type="text" class="form-control" id="pwd" placeholder="Enter description" name="desc">
    </div>
    <div class="checkbox">
      <label><input type="checkbox" name="remember"> Remember me</label>
    </div>
    <button type="submit" class="btn btn-default" name='sub'>Submit</button>
  </form>
    </div>
     <div class="col-sm-9 col-md-6 col-lg-6">
        <?php
       include "table.php";
        ?>
    </div>
  </div>
  
</div>
    
</body>
</html>
