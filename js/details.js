console.log($('.num-list-middle').html());
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