<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
</head>
<body>
<form id="form1" name="form1" method="post" action="" enctype="multipart/form-data" >
  <p>
    <label for="fileField"></label>
    <input type="file" name="ufile[]" id="ufile[]" />
  </p>
  <p>
    <label for="fileField2"></label>
    <input type="file" name="ufile[]" id="ufile[]" />
  </p>
  <p>
    <label for="fileField3"></label>
    <input type="file" name="ufile[]" id="ufile[]" />
  </p>
  <p>
    <input type="file" name="ufile[]" id="ufile[]" />
  </p>
  <p>
    <input type="file" name="ufile[]" id="ufile[]" />
  </p>
  <input type="submit" name="button" id="button" value="Submit" />
  <?php
  if(isset($_POST['button']))
  {
	  include "database.php";
	  $upload="images";
	  foreach($_FILES['ufile']['error'] as $key=>$err)
	  {
		  if($err==UPLOAD_ERR_OK)
		  {
			  $name=$_FILES['ufile']['name'][$key];
			  $tmp_name=$_FILES['ufile']['tmp_name'][$key];
			  move_uploaded_file("$tmp_name","$upload/$name");
			  $sql="insert into album(photoname) values('$name')";
			  mysqli_query($link,$sql);
			  
		  }
	  }
	  mysqli_close($link);
  }
  ?>
</form>
</body>
</html>