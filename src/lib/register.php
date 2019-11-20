<?php
    include('./conn.php');
    // var_dump($mysqli)

    $username = $_REQUEST['userName'];
    $password = $_REQUEST['userPassword'];
    $tel = $_REQUEST['userTel'];

    // echo "$username,$password,$tel";
  
    $sql = "select * from users where u_name='$username'";  

    $result = $mysqli->query($sql);
    if($result->num_rows > 0){
        // echo 'alert("用户名已存在");';
        // echo 'location.href="../html/register.html";';
        echo 1;
        $mysqli->close();
        die; 
    }

    $insSql = "insert into users(u_name,u_pass,u_tel) values ('$username','$password','$tel')";
   
    $res = $mysqli->query($insSql);

    if($res){
        // echo 'alert("注册成功");';
        // echo 'location.href="../html/login.html";';
        echo 2;
    }

    $mysqli->close();

?>