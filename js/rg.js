$('#rg-button').click(function() {
    console.log(1);
    var name = $("#username").val();
    var pwd = $("#pwd").val();
    console.log(name, pwd);
    if (name == "") {
        alert('请输入账号名')
    }
    if (pwd == "") {
        alert('请输入密码')
    }
    $.ajax({
        url: 'http://localhost/DM/a.json',
        type: 'post',
        data: { 'name': name, 'pwd': pwd },
        dataType: 'json',
        success: function(data) {　　　　　　　　　　
            location.href = 'http://localhost/DM/login.html';
        }
    })
});