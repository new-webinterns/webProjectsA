<?php
$link = new mysqli("localhost","root","","account");
if(isset($_POST['submit']))
{
  $title=$_POST['title'];
  $desc=$_POST['description'];
   $sql="INSERT INTO `form`(`title`, `desc`) VALUES ('$title','$desc')";
   echo "$sql";
   mysqli_query($link,$sql);
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
<div style="height: 10vh"></div>
<div class="container">
  
     <div class="col-sm-4 col-md-4 col-lg-4" style="background-color:pink;">
	<form method="POST">
    <div class="form-group">
      <label for="title">Title:</label>
      <input type="text" class="form-control" id="title" placeholder="Enter title" name="title">
    </div>
    <div class="form-group">
      <label for="description">Description:</label>
      <input type="text" class="form-control" id="description" placeholder="Enter description" name="description">
    </div>
    <div class="checkbox">
      <label><input type="checkbox" name="remember"> Remember me</label>
    </div>
    <button type="submit" name="submit" class="btn btn-default">Submit</button>
  </form>
    </div>
    <div class="col-sm-4 col-md-6 col-lg-6">
      <?php include "homepage2.php" ?>
      </div>
  </div>
  
</div>
    
</body>
</html>
