<?php
//$_POST['t1'];
//$_POST['t2'];
if(isset($_POST['btn'])){
	$t1=$_POST['t1'];
	//$t2=$_POST['t2'];
	echo "$t1";
	//echo "$t2 \n";
	//$a=$t1/$t2;
	//echo "=$a";
	//$print =$_SERVER['t1'];
	//echo "$print";
}
?>	
<html>
<head>
<title>Document</title>
</head>
<body>
<form method="POST" >
      <input type="text" value="<?php echo $t1 ?>" name="t1" />
	  <input type="text" name="t2" />
	  <td><input type="submit" name="btn" />
	  
</form>
</body>
</html>	  
	  