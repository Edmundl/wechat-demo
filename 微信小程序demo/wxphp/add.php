<meta charset="utf-8">
<?php
	$link=mysqli_connect('localhost','root','root','wechatdemo');
			mysqli_query($link,"set names utf8");
			if(!$link){
				die('链接失败!'.mysql_error());
			}else{
				$text=$_GET['txt'];
				$sql="insert into art(text) values ('$text')";
					$result=mysqli_query($link,$sql);
					if($result){
						echo "<script>alert('添加成功!');</script>";
					}
					else
						echo "insert faild!";
			}
?>