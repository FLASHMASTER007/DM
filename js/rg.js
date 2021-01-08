$('#login-button').click(function() {
    var name = $("#username").val();
    var pwd = $("#pwd").val();
    console.log(name, pwd);
    $.ajax({
        url: 'http://localhost/DM/a.json',
        type: 'post',
        data: { 'name': name, 'pwd': pwd },
        dataType: 'json',
        success: function(data) {
            if (data.code == 1) {　　　　　　　　　　　　
                location.href = 'http://localhost/DM/login.html';
            } else {
                alert("注册失败");
            }
        },
        error: function() {
            console.log('请求出错！');
        }
    })
});