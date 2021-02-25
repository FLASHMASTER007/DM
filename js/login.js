//登录格式验证
var userID = document.getElementById('userID')
var pwd = document.getElementById('pwd')
userID.onchange = function() {
    var text = this.value;
    var reg1 = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    var reg2 = /^1\d{10}$/;
    var reg3 = /^[a-z_]\w{5,17}$/i;
    if (reg1.test(text) || reg2.test(text) || reg3.test(text)) {
        alert("请输入密码")
    } else {
        alert("格式不正确");
        userID.focus()
        userID.value = ""
    }
}
pwd.onchange = function() {
    var text1 = this.value;
    var reg4 = /^[a-z_]\w{5,17}$/i;
    if (reg4.test(text1)) {
        console.log("密码正确")
    } else {
        alert("密码错误！");
        pwd.focus()
        pwd.value = ""
    }
}

$("#userID").focus(function() {
    $(this).attr("style", "border:1px solid #00BAD6")
})
$("#userID").blur(function() {
    $(this).attr("style", "border:1px solid #ccc")
})
$("#pwd").focus(function() {
    $(this).attr("style", "border:1px solid #00BAD6")
})
$("#pwd").blur(function() {
    $(this).attr("style", "border:1px solid #ccc")
})
$("#input").focus(function() {
    $(this).attr("style", "border:1px solid #00BAD6")
})
$("#input").blur(function() {
        $(this).attr("style", "border:1px solid #ccc")
    })
    //验证码验证
function change() {
    code = $("#code");
    // 验证码组成库
    var arrays = new Array(
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
        'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
        'u', 'v', 'w', 'x', 'y', 'z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
        'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
        'U', 'V', 'W', 'X', 'Y', 'Z'
    );
    codes = ''; // 重新初始化验证码
    for (var i = 0; i < 4; i++) {
        // 随机获取一个数组的下标
        var r = parseInt(Math.random() * arrays.length);
        codes += arrays[r];
    }
    // 验证码添加到input里
    code.val(codes);
}
change();
code.click(change);
//单击验证
$("#check").click(function() {
    var inputCode = $("#input").val().toUpperCase(); //取得输入的验证码并转化为大写 
    console.log(inputCode);
    if (inputCode.length == 0) { //若输入的验证码长度为0
        alert("请输入验证码！"); //则弹出请输入验证码
    } else if (inputCode != codes.toUpperCase()) { //若输入的验证码与产生的验证码不一致时

        change(); //刷新验证码
        $("#input").val(""); //清空文本框
    } else { //输入正确时
        console.log("验证码正确"); //弹出^-^
    }
});
//密码显示隐藏
$('.look').on('mousedown', function() {
    $(this).prev().attr('type', 'text')
})
$('.look').on('mouseup', function() {
    $(this).prev().attr('type', 'password')
})

//登录ajax
$('.login-button').click(function() {
    var u1 = userID.value
    var p1 = pwd.value
    console.log(u1, p1);
    //调用ajax发送请求
    Ajax({
        url: '../php/login.php',
        data: `userID=${u1}&pwd=${p1}`,
        success: function(dt) {
            //判断当前返回值是否等于1
            if (dt == 1) {
                location.href = "../index.html"
            } else {
                alert("登录失败")
            }
        }
    })
});