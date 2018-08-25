<?php
$link = new mysqli("localhost","root","","table");
$uid=$_GET['id'];
if(isset($_POST['update']))
{
	$utitle=$_POST['utitle'];
	$udesc=$_POST['udesc'];
	$sql4="UPDATE `form` SET title='utitle$', desp='udesc' WHERE id=$uid'";
	mysqli_query($link,$sql4);
	?>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<body>
   <div class="container-fluid">
    <div class="col-sm-9 col-md-6 col-lg-6" style="background-color:pink;">
	<form method="POST">
    <div class="form-group">
      <label for="title">Title:</label>
      <input type="text" class="form-control" id="title" placeholder="Enter title" name="utitle">
    </div>
    <div class="form-group">
      <label for="description">Description:</label>
      <input type="text" class="form-control" id="description" placeholder="Enter description" name="udesc">
    </div>
    <div class="checkbox">
      <label><input type="checkbox" name="remember"> Remember me</label>
    </div>
    <button type="submit" name="update"class="btn btn-default">Submit</button>
  </form>
    </div>
   
  
</div>
    
</body>
</html>

</html>
