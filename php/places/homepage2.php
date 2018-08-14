<?php
$link = new mysqli("localhost","root","","account");
if(isset($_POST['delete']))
{
    $delete=$_POST['delete'];
    $sql3="DELETE FROM `form` WHERE id='$delete'";
    mysqli_query($link,$sql3);
}
    $sql1="SELECT * FROM `form`";
    $result=mysqli_query($link,$sql1);

   
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
    <form method="GET">
    <div class="form-group">
        <input type="search" style="float:left; width:35vw"  class="form-control" placeholder="search....." name="search">
        <input type="submit" value="search" name="searchsub" class="btn btn-primary">
        </div>
        </form><br>
            <table class="table table-bordered">
    <tr>
        <th>Title</th>
        <th>Description</th>
        <th>Action</th>
    </tr>
    <?php
      if(isset($_GET['searchsub'])){
        $search=$_GET['search'];
       $sql5= "SELECT * FROM `form`WHERE `title` LIKE '%$search'";
       $result5=mysqli_query($link,$sql5);
       while($row=mysqli_fetch_array($result5)){
           echo "
           <td>$row[1]</td>
           <td>$row[2]</td>
           <td>
               <form method='POST'><button class ='btn btn-danger' name='delete' value='$row[0]' type='submit'>delete</button>
               <button  type ='submit' class='btn btn-success '> 
                   <a style='color:white!important' href='update.php?id=$row[0]'>update</a>
               </form>
           </td>";
       }
    }
    else{
    while($array=mysqli_fetch_array($result)){
        echo "
        <tr>
            <td>$array[1]</td>
            <td>$array[2]</td>
            <td>
                <form method='POST'><button class ='btn btn-danger' name='delete' value='$array[0]' type='submit'>delete</button>
                <button  type ='submit' class='btn btn-success '> 
                    <a style='color:white!important' href='update.php?id=$array[0]'>update</a>
                </form>
            </td>
        </tr>
        ";
    }
}
    ?>
    </table>
    </body>
    </html>


