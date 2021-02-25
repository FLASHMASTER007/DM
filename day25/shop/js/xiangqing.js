//获取当前地址栏中的参数信息
var search=location.search
//获取大盒子对象
var box=document.querySelector(".panel")
//判断当前search对象中是否有值
if(search){
    //分割search字符串
    var id=search.split('=')[1];

    (async function(){
        var dt=await promiseAjax({
            url:'../php/xiangqing.php',
            data:'id='+id,
            datatype:'json'
        })
        //创建拼接所有内容的字符串
        var str=`
        <div class="panel-heading">品详细信息</div>
        <div class="panel-body">
            <div class="media">
                <div class="media-left media-middle">
                <a href="#">
                    <img class="media-object" src="${dt.goods_small_logo}" alt="...">
                </a>
                </div>
                <div class="media-body">
                <h3 class="media-heading">${dt.goods_name}</h3>
                <h2>￥${dt.goods_price}</h2>
                <div class="btn-group" role="group" aria-label="...">
                    <button type="button" class="btn btn-default">XL</button>
                    <button type="button" class="btn btn-default">L</button>
                    <button type="button" class="btn btn-default">M</button>
                    <button type="button" class="btn btn-default">XM</button>
                    <button type="button" class="btn btn-default">XS</button>
                </div>
                <br/><br/>
                <a href="./cart.html" class="btn btn-info">立即购买</a>
                <a href="" class="btn btn-success">加入购物车</a>
                </div>
            </div>
            <ul class="nav nav-tabs">
                <li role="presentation" class="active"><a href="#">Home</a></li>
                <li role="presentation"><a href="#">Profile</a></li>
                <li role="presentation"><a href="#">Messages</a></li>
            </ul>
            ${dt.goods_introduce}
        </div>
        `
        //把当前内容添加到大盒子中
        box.innerHTML=str;
    })()

}else{
    alert("你还没选中商品")
    location="./list.html"
}