//注册格式验证
var userID = document.getElementById('userID')
userID.onchange = function() {
    var text = this.value;
    var reg1 = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    var reg2 = /^1\d{10}$/;
    var reg3 = /^[a-z_]\w{5,17}$/i;
    if (reg1.test(text) || reg2.test(text) || reg3.test(text)) {
        alert("格式正确");

    } else {
        alert("格式不正确");
        userID.focus()
        userID.value = ""
    }
}
var password = document.getElementById('pwd')
password.onchange = function() {
    var pwdtext = this.value;
    var reg4 = /^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]{6,20}$/;
    if (reg4.test(pwdtext)) {
        alert("格式正确");

    } else {
        alert("格式不正确");
        password.focus()
        password.value = ""
    }
}
var checkpwd = document.getElementById('checkpwd')
checkpwd.onchange = function() {
        var checkpwdtext = this.value;
        if (checkpwdtext != password.value) {
            alert("两次密码不相同");
            checkpwd.focus()
            checkpwd.value = ""

        }
    }
    //密码显示隐藏
$('.look').on('mousedown', function() {
    $(this).prev().attr('type', 'text')
})
$('.look').on('mouseup', function() {
    $(this).prev().attr('type', 'password')
})

//注册ajax
$('.reg-button').click(function() {
    var u1 = userID.value
    var p1 = pwd.value
    console.log(u1, p1);
    //调用ajax发送请求
    Ajax({
        url: '../php/rg.php',
        data: `userID=${u1}&pwd=${p1}`,
        success: function() {
            location.href = "../login.html"
        },
        error: function() {
            alert("注册失败，请输入有效账号")
        }
    })
});