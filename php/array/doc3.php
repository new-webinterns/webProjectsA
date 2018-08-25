<html>
<head>
<title>untitled Document</title>
</head>
<body>
<?php
$a=array("Udupi","Manipal","Manglore","Bangalore"," Mysore","Kundapur");
echo"<br>";
print_r($a);
for($i=0; $i<sizeof($a);$i++)
{
	echo"<br>$a[$i]";
}
foreach( $a as $value)
