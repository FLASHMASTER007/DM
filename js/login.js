$('#login-button').click(function() {
    var name = $("#username").val();
    var pwd = $("#pwd").val();
    if (name == "") {
        alert('请输入账号名')
    }
    if (pwd == "") {
        alert('请输入密码')
    }
    console.log(name, pwd);
    $.ajax({
        url: 'http://localhost/DM/a.json',
        type: 'post',
        data: { 'name': name, 'pwd': pwd },
        dataType: 'json',
        success: function(data) {
            if (data.code == 1) {　　　　　　　　　　　　
                location.href = 'http://localhost/DM/index.html';
            } else {
                alert("登录失败");
            }
        },
        error: function() {
            console.log('请求出错！');
        }
    })
});