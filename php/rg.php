<?php
header("content-type:text/html;charset=utf-8");
//获取传入的参数
$u=$_GET['userID'];
$p=$_GET['pwd'];
//连接数据库
$link=mysqli_connect("localhost",'root','root','lbw');
//设置编码
mysqli_set_charset($link,"utf8");
//SQL语句
$sql="INSERT INTO `login` VALUES (null,'$u','$p')";
//执行SQL语句，并返回结果集
$result=mysqli_query($link,$sql);
// 告诉前端是否注册成功,我决定如果注册成功就给前端返回{code:1},如果注册失败就给前端返回{code:0}
if($result){
    $result = array('code'=>1);//注册成功
    $json = json_encode($result);
  echo $json;
}else{
    $result = array('code'=>0);//注册失败
    $json = json_encode($result);
  echo $json;
}

//关闭连接
mysqli_close($link);

?>