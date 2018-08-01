<?php
$_POST['t1'];
$_POST['t2'];
if(isset($_POST['btn'])){
	$t1=$_POST['t1'];
	$t2=$_POST['t2'];
	echo "$t1 /\n";
	echo "$t2 \n";
	$a=$t1/$t2;
	echo "=$a";
	//$print =$_SERVER['t1'];
	//echo "$print";
}
?>	