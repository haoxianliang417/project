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
	$goodsid = isset($_GET['goodsid']) ? $_GET['goodsid'] : '';

	//$password = md5($password);

	// 查找所有用户信息
	$sql = "select * from recommend where goodsid=".$goodsid;
	//echo $sql;
	$result = $conn->query($sql);

	$row = $result->fetch_all(MYSQLI_ASSOC);

	echo json_encode($row,JSON_UNESCAPED_UNICODE);
	

	//关闭连接
	$conn->close();
?>