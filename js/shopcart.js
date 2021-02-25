$(function() {
    //购物车全选功能：
    $(".check-all").change(function() {
        $(".check-one").prop("checked", $(this).prop("checked"))
        getSum()
    })
    $(".check-one").change(function() {
        if ($(".check-one:checked").length === $(".check-one").length) {
            $(".check-all").prop("checked", true)
        } else {
            $(".check-all").prop("checked", false)
        }
        getSum()
    })

    //购物车商品数量加减以及价格小计：
    $(".num-add").click(function() {
        var n = $(this).siblings(".num-text").val()
        n++
        $(this).siblings(".num-text").val(n)
        var m = $(this).parents(".num").siblings().children(".price-text").html()
        m = n * m
        m = m.toFixed(2)
        $(this).parents(".num").siblings().children(".small-all-text").html(m)
        getSum()
    })
    $(".num-reduce").click(function() {
        var n = $(this).siblings(".num-text").val()
        if (n == 1) {
            return false
        }
        n--
        $(this).siblings(".num-text").val(n)
        var m = $(this).parent().parent().siblings().children(".price-text").html()
        m = n * m
        m = m.toFixed(2)
        $(this).parent().parent().siblings().children(".small-all-text").html(m)
        getSum()
    })
    $(".num-text").change(function() {
        var p = $(this).val()
        var m = $(this).parent().parent().siblings().children(".price-text").html()
        m = p * m
        m = m.toFixed(2)
        $(this).parents(".num").siblings().children(".small-all-text").html(m)
    })

    //计算商品总件数和总价
    function getSum() {
        var num = 0
        var snum = 0

        //全部商品数量
        $(".num-text").each(function(i, ele) {
            num += parseInt($(ele).val())
        })
        $(".all-change-num").html(num)

        //被选中商品数量
        $(".check-one:checked").each(function(i, ele) {
            console.log(ele);
            snum += parseFloat($(ele).parent().siblings(".num").find(".num-text").html())
        })
        $(".select-change-num").html(snum)
            //计算被选中商品总价
        var money = 0
        $(".check-one:checked").each(function(i, ele) {
            money += parseFloat($(ele).parent().siblings(".small-all").find(".small-all-text").html())
        })
        $(".change-price").html(money.toFixed(2))


    }

    //删除操作
    $(".delete").click(function() {
        $(this).parents(".cart-item").remove()
    })
    $(".check-items-del").click(function() {
        $(".check-one:checked").parents(".cart-item").remove()
    })



})