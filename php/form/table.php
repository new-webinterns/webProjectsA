<?php
    $con = new mysqli("localhost","root","","table");

    if(isset($_POST['del'])){
        $del=$_POST['del'];
        $sql3="DELETE FROM `form` WHERE id='$del'";
        mysqli_query($con,$sql3);
    }
    $sql1="SELECT * FROM `form`";
    $result=mysqli_query($con,$sql1);
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
  <table class="table table-bordered">
<tr>
<th>Title</th>
<th>Description</th>
<th>Action</th>
</tr>
<?php
while($array=mysqli_fetch_array($result)){
    echo "
<tr>
<td> $array[1]</td>
<td> $array[2]</td>
<td><form method='POST'><button class='btn btn-danger' style='background: linear-gradient(#227de6,#210235)' value='$array[0]' name='del' type='submit'>delete</button>
<button class='btn btn-success' style='background: linear-gradient(#227de6,#210235)' name='update' type='submit'><a style ='color:white!important' href='update.php?id=$array[0]'</a> update</button>
</form></td>
</tr>

";
}
?>

</table> 
  </body>
  </html>

