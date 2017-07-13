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
	}else{
		// 设置编码格式
	$conn->set_charset('utf8');

	// 用户名
	$account = isset($_GET['account']) ? $_GET['account'] : '';
	$password = isset($_GET['password']) ? $_GET['password'] : '123456';

	// md5加密密码
	$password = md5($password);

	// 查找某个用户的密码
	$sql = "select password from userinfo";

	// 查找指定name信息
	if($account){
		$sql .= " where account='$account'";
	}

	// 查询数据库
	$result = $conn->query($sql)or die("查询失败");

	//使用查询结果	
	$row = $result->fetch_all(MYSQLI_ASSOC);
	$val = $row[0]["password"];
	//$json = json_encode($row,JSON_UNESCAPED_UNICODE); 
	//$selPw = json_decode($json, true)
	//print_r($result) ;
	if($password==$val){
		echo true;
		//echo 111;
	}else{
		echo false;
		//echo 222;
	}
	//echo json_encode($row);
	//echo $password." ".$val;
	//echo $val;
	//print_r($selPw);
	} 

	//关闭连接
	$conn->close();
?>