<?php
	/*
		与用户相关的所有操作
		* 增 insert
		* 删 delete
		* 查 select
		* 改 update
	 */
	
	// 第一步
	// 配置信息
	include 'connet.php';

	// 设置编码格式
	$conn->set_charset('utf8');

	// 用户名
	$account = isset($_GET['account']) ? $_GET['account'] : '';
	$password = isset($_GET['password']) ? $_GET['password'] : '';

	$password = md5($password);

	// 查找所有用户信息
	$sql = "update userinfo set password='$password' where account='$account'";

	$result = $conn->query($sql);

	if($result){
		echo true;
	}

	//关闭连接
	$conn->close();
?>