
<?php
if(isset($_POST['btn'])){
	include"database.php";
	$a=$_POST['t1'];
	$sqli="INSERT INTO thread(data) VALUES('$a')";
	mysqli_query($link,$sqli);
	$sql1="SELECT *FROM thread(data) VALUES";
	$result=mysqli_query($link,$sql1);
	$row=mysqli_fetch_array($result);
	echo"$row[1]";
}
if(isset($_POST['delete'])){
	include "database.php";
	$sql2="DELETE FROM thread WHERE id='1'";
	mysqli_query($link,$sql2);
}
if(isset($_POST['update'])){
	include "database.php";
    $t1=$_POST['t1'];
	$t2=$_POST['t2'];
	$sql3="UPDATE thread SET data='$t2' WHERE id='$t1'";
	mysqli_query($link,$sql3);
}
	
?>
<!DOCTYPE html>
<html lang="en">
    <head>
      
        <title>Document</title>
       
    </head>
	<body>
	<form method="POST">
	    <input type="number" value="<?php echo "$t1"?>  name="t1"/>
		<input type="submit" name="btn"/>
		<form method="POST">
		<input type="submit" name="delete"/>
		<form method="POST">
		<input type="number"  name="t1"/>
		<input type="text"  name="t2"/>
		<input type="submit" name="üpdate"/>
		 </form>
    </form>
	    </form>
	</body>
	</html>
