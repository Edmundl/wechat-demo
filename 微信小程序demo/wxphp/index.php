<?php
	$link=mysqli_connect('localhost','root','root','wechatdemo');
			mysqli_query($link,"set names utf8");
			if(!$link){
				die('链接失败!'.mysql_error());
			}else{
				$sql="SELECT * FROM wechatdemo.art";
					$result=mysqli_query($link,$sql);
					$list=array();
					while ($a=mysqli_fetch_assoc($result)) {
						array_push($list,$a);
					}
					echo json_encode($list);
			}
?>