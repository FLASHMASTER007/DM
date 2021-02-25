//关闭广告
$(".close-adv").click(function() {
    $(".header-adv").css("display", "none")
})
var intDiff = parseInt(1800); //倒计时总秒数量
function timer(intDiff) {
    window.setInterval(function() {
        // var day = 0,
        //     hour = 0,
        minute = 0,
            second = 0; //时间默认值        
        if (intDiff > 0) {
            // day = Math.floor(intDiff / (60 * 60 * 24));
            // hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
            minute = Math.floor(intDiff / 60);
            second = Math.floor(intDiff) - (minute * 60);
        }
        if (minute <= 9) minute = '0' + minute;
        if (second <= 9) second = '0' + second;
        // $('#day_show').html(day + "天");
        // $('#hour_show').html('<s id="h"></s>' + hour + '时');
        $('.span3-item-bottom-min').html('<s></s>' + minute + '分');
        $('.span3-item-bottom-sec').html('<s></s>' + second + '秒');
        intDiff--;
    }, 1000);
}
$(function() {
    timer(intDiff);
});
//最顶部的导航栏动画
$('.top-nav-a').mouseover(function() {

    $(this).children('.updown').removeClass().addClass("iconfont icon-arrUp-fill-copy-copy updown")
})
$('.top-nav-a').mouseleave(function() {
    $(this).children('.updown').removeClass().addClass("iconfont icon-arrLeft-fill updown")
})

$('.top-nav-service').hover(function() {
    $('.service-list').stop().slideToggle('fast')
})


$('.top-nav-more').hover(function() {
    $('.more-list').stop().slideToggle('fast')
})

$('.top-nav-ewm').hover(function() {
    $('.ewm-list').stop().slideToggle('fast')
});
//导航栏固定
var head = $('#common-header').height()
$(window).scroll(function() {
    var topScr = $(window).scrollTop();
    if (topScr > 180) {
        $(".main-nav").addClass("fixed");
    } else {
        $(".main-nav").removeClass("fixed");
    }

});
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