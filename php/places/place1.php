<html>
<head>
<title>Untitled Document</title>
</head>
<body>
<?php
$a=array("Udupi","Manipal","Mangalore","Bangalore","Mysore","Kundapur");
echo "<br>";
print_r($a);
for($i=0;$i<sizeof($a);$i++)
{
    echo "<br>$a[$i]";
}
echo "<br>";
foreach($a as $value)
{
    echo "<br> $value";
}
$b=array(1=>"Sun",2=>"Mon",3=>"Tue",4=>"wed",5=>"Thur",6=>"Fri",7=>"Sat");
echo "<br>";
print_r($b);
foreach($b as $v)
{
    echo "<br> $v";
}
foreach($b as $k => $v)
{
    echo "<br> $k = $v";
}
$c=array("Karnataka"=>"Kannada","Kerala"=>"Malayalam","Andra pradesh"=>"Telugu","Maharastra"=>"Marati","Tamilnadu"=>"Tamil");
echo "<br>";
print_r($c);
foreach($c as $k => $v)
{
    echo "<br> In $k language is $v";
}

?>
</body>
</html>


