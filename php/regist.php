<?php 
    header("Access-Control-Allow-Origin:*");
	$uname = $_GET["username"];
	$upwd = $_GET["password"];
	$upwd1 = $_GET["password1"];
	// echo '<meta charset="utf-8">';
	// echo "获取的用户名与密码为：$uname ，$upwd"; 
	/************************************/
	// 连接数据库服务器
	$conn = mysql_connect("localhost:3306", "root", "");
	// 选择数据库
	mysql_select_db("jiangshuai", $conn);
	// 编写插入的SQL语句
	$sql = "INSERT INTO users (username, password,password1) VALUES ('$uname', '$upwd','$upwd1')";
	// 执行SQL语句
	$result = mysql_query($sql, $conn);
	// 判断执行结果
	if ($result) {
		echo '{"status":1,"message":"success"}';
	} else {
		echo '{"status":0,"message":"failed"}';
	}
	// 关闭数据库连接
	mysql_close($conn);
 ?>