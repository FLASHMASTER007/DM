//增减数量
var del = $('.num-list-top')
var num = $('.num-list-middle')
var add = $('.num-list-bottom')
add.click(function() {
    num.val(parseInt(num.val()) + 1)
    del.removeAttr("disabled"); //当按加1时，解除del不可读状态    
    console.log(1);
})
del.click(function() {
    if (parseInt(num.val()) > 1) { //判断数量值大于1时才可以减少    
        num.val(parseInt(num.val()) - 1)
    } else {
        del.attr("disabled", "disabled") //当num为1时，del不可读状态    
    }
})
$('.tab5-li5').click(function() {
    $('.tab5-ul').remove()
    console.log(1);
})
$('.tab7-order').click(function() {
        $('.tab5-ul').remove()

    })
    //结算倒计时
var intDiff = parseInt(900); //倒计时总秒数量
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
        $('.tab7-countdown-min').html('<s></s>' + minute + '分');
        $('.tab7-countdown-sec').html('<s></s>' + second + '秒');
        intDiff--;
    }, 1000);
}
$(function() {
    timer(intDiff);
});