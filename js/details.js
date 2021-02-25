//加减功能
var del = $('.num-list-top')
var num = $('.num-list-middle').val()
var add = $('.num-list-bottom')
add.click(function() {
    num++
    $('.num-list-middle').val(num)
    del.removeAttr("disabled")
})
del.click(function() {
    if (num > 1) { //判断数量值大于1时才可以减少    
        num--
        $('.num-list-middle').val(num)
    } else {
        del.attr("disabled", "disabled") //当num为1时，del不可读状态 
    }
})

//放大镜
var box = document.querySelector('#good')
var smallBox = document.querySelector('.pic-box')
var bigBox = document.querySelector('.big-pic-box')
var mask = document.querySelector('.mask')
var bigImg = document.querySelector('.big-good-pic')
smallBox.onmouseenter = function() {
    mask.style.display = 'block'
    bigBox.style.display = 'block'
}
smallBox.onmouseleave = function() {
    mask.style.display = 'none'
    bigBox.style.display = 'none'
}
smallBox.onmousemove = function(e) {
    e = e || window.event;
    var x = e.pageX - box.offsetLeft - mask.offsetWidth / 2;
    var y = e.pageY - box.offsetTop - mask.offsetHeight / 2;
    //获取mask的最大的left和top值
    var maxL = smallBox.offsetWidth - mask.offsetWidth;
    var maxT = smallBox.offsetHeight - mask.offsetHeight;
    console.log(box.offsetTop);
    //边界处理
    x = x < 0 ? 0 : (x > maxL ? maxL : x);
    y = y < 0 ? 0 : (y > maxT ? maxT : y);
    mask.style.left = x + "px";
    mask.style.top = y + "px";
    var bigImgLeft = x * bigImg.offsetWidth / smallBox.offsetWidth;
    var bigImgTop = y * bigImg.offsetHeight / smallBox.offsetHeight;
    //设置大图的移动
    bigImg.style.left = -bigImgLeft + "px";
    bigImg.style.top = -bigImgTop + "px";
}

$(".pic-slider-item")

//回到顶部

$(window).scroll(function() {
    if ($(this).scrollTop() > 450) {
        // 显示回到顶部按钮
        $('.slide-nav').css('display', 'block')
    }
    if ($(this).scrollTop() <= 450) {
        // 隐藏回到顶部按钮
        $('.slide-nav').css('display', 'none')
    }
    if ($(this).scrollTop() > 450) {
        // 显示回到顶部按钮
        $('.go-top').css('display', 'block')
    }
    if ($(this).scrollTop() <= 450) {
        // 隐藏回到顶部按钮
        $('.slide-nav').css('display', 'none')
    }
})
$('.go-top').click(function() {
    $(window).scrollTop(0)
})
$(".reg-btn").click(function() {
    location.href = "../rg.html"
})
$(".login-btn").click(function() {
    location.href = "../login.html"
})