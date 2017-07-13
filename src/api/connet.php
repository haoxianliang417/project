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
	$servername = 'localhost';
	$username = 'root';
	$password = '';
	$database = 'zhongjiu';

	// 连接数据库
	$conn = new mysqli($servername,$username,$password,$database);
	if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
	}

	// 设置编码格式
	$conn->set_charset('utf8');


?>