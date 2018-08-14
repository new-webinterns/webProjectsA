<?php
$link = new mysqli("localhost","root","","account");
$uid=$_GET['id'];
if(isset($_POST['update']))
{
    $utitle=$_POST['utitle'];
    $udescription=$_POST['udescription'];
    $sql4="UPDATE `form` SET `title`='$utitle', `desc`='$udescription' WHERE `id`='$uid';";
    mysqli_query($link,$sql4);
    header("location:homepage2.php");
}

?><!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
  <title>table</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<body>
<div style="height: 10vh"></div>
<div class="container">
  
     <div class="col-sm-12 col-md-12 col-lg-12" >
	<form method="POST">
    <div class="form-group">
      <label for="title">Title:</label>
      <input type="text" class="form-control" id="title" placeholder="Enter title" name="utitle">
    </div>
    <div class="form-group">
      <label for="description">Description:</label>
      <input type="text" class="form-control" id="description" placeholder="Enter description" name="udescription">
    </div>
   
    <button type="submit" name="update" class="btn btn-primary">update</button>
  </form>
    </div>
   
 
</body>
</html>