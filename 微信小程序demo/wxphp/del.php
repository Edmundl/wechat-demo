<meta charset="utf-8">
<?php
	$link=mysqli_connect('localhost','root','root','wechatdemo');
			mysqli_query($link,"set names utf8");
			if(!$link){
				die('链接失败!'.mysql_error());
			}else{
				$id=$_GET['id'];
				$sql="delete from wechatdemo.art where id=$id";
					$result=mysqli_query($link,$sql);
					if($result)
						echo "<script>alert('删除成功!');</script>";
					else
						echo "delete faild!";
			}
?>