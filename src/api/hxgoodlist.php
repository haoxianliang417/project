<?php
    include 'connet.php';
    // 设置编码格式
	$conn->set_charset('utf8');

	// 查找所有用户信息
	$sql = "select * from recommend";

	//查询前设置编码，放置输出乱码
    $conn->set_charset('utf8');

    //获取查询结果集
    $result = $conn->query($sql);

    //使用查询结果集
    $row = $result->fetch_all(MYSQLI_ASSOC);

    //释放查询结果集
    $result->close();

    //把结果输出到前台
    echo json_encode($row);

    // 关闭数据库
    $conn->close();

?>