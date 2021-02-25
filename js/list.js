//轮播商品
$('.slider_four_in_line').EasySlides({
    'autoplay': false,
    'show': 9
})

//获取操作对象
var row = document.querySelector('.row');
var pagination1 = document.querySelector('.pagination');
(async function() {
    var dt = await promiseAjax({
            url: '../php/list.php',
            datatype: 'json'
        })
        //创建分页器对象
    new Pagination(pagination1, {
        pageInfo: {
            pagenum: 1,
            pagesize: 16,
            totalsize: dt.length,
            totalpage: Math.ceil(dt.length / 16)
        },
        textInfo: {
            first: '首页',
            prev: "上一页",
            next: "下一页",
            last: "尾页"
        },
        cb(m) {
            //获取当前页需要显示的数据
            var ar1 = dt.slice((m - 1) * 16, m * 16)
                //创建拼接所有数据的字符串
            var str = ''
                //遍历当前ar1数组中所有的数据
            ar1.forEach(item => {
                    str += `
                    <div class="goods-item">
                    <div class="goods-pic">
                        <a href="#">
                            <img src="${item.images}" alt="">
                        </a>
                    </div>
                    <div class="goods-info">
                        <div class="info-label">
                            <span class="label-box" style="color: red;border: 1px solid red;">${item.tip1}</span>
                            <span class="label-box" style="border:1px solid #c1c1c1;color: #666;">${item.tip2}</span>
                        </div>
                        <a href="#" class="info-name">
                            <h3>${item.title}</h3>
                        </a>
                        <div class="info-price">
                            <span class="price">${item.price}</span>
                        </div>
                        <div class="fly-nav">
                            <div class="fly-nav-item" style="background-color: #00bbd7;color: #fff;border: 1px solid #00bbd7">对比</div>
                            <div class="fly-nav-item"><i class="iconfont icon-shoucang" style="font-size: 14px;"></i></div>
                            <div class="fly-nav-item">有货</div>
                        </div>
                    </div>
                    <div class="discount">减价</div>
                    </div> 
                `
                })
                //把当前拼接好的字符串，添加到row盒子中
            row.innerHTML = str
        }
    })
})()