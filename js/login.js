var code; //定义一个变量，用来保存验证码
//生成验证码
function createCode() {
    code = "";
    var codeLength = 6; //验证码的长度
    var checkCode = document.getElementById("checkCode");
    var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //所有候选组成验证码的字符，当然也可以用中文的
    for (var i = 0; i < codeLength; i++) {
        var charNum = Math.floor(Math.random() * 61);
        code += codeChars[charNum];
    }
    if (checkCode) {
        checkCode.innerHTML = code;
    }
}
//校验验证码
function validateCode() {
    var inputCode = document.getElementById("inputCode").value;
    console.log(inputCode);
    if (inputCode.length <= 0) {
        alert("请输入验证码！");
    }
    //toUpperCase() 方法用于把字符串转换为大写
    //toLowerCase（）方法用于把字符串转换为小写
    else if (inputCode.toUpperCase() != code.toUpperCase()) {
        alert("验证码输入有误！");
        createCode();
    } else {
        alert("验证码正确！");
    }
}
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