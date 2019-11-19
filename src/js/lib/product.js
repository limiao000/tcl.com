let baseUrl = "http://localhost:8080/tcl.com";

define(['jquery', 'cookie'], function($, cookie) {
    return {
        render: function(callback) {
            let id = location.search.split('=')[1];
            console.log(id)
            $.ajax({
                url: `../lib/getitem.php`,
                type: 'get',
                data: {
                    id: id
                },
                dataType: 'json',
                success: function(res) {
                    console.log(res)
                    let pic = JSON.parse(res.pic);
                    // console.log(pic[0].src)
                    let tempstr = `
                     <div class="product-1">
                    <img src="..${pic[0].src}" alt="">
               <ul class="img-list">
                <li><img src="..${pic[0].src}" alt=""></li>
                <li><img src="..${pic[1].src}" alt=""></li>
                <li><img src="..${pic[2].src}" alt=""></li>
                <li><img src="..${pic[3].src}" alt=""></li>
                </ul>
                </div>
        
                        <div class="product-2">
                        <h1>${res.title}</h1>
                        <div class="purc-item">
                            <p>TCL 75V2 75英寸大屏/95.9%屏占比/AI人工智能语音/64位32核/75吋/热销榜单</p>
                            <span>可获取积分：4799</span>
                        </div>
            
                        <div class="price">
                            <span class="yuan">促销价：</span>${res.price}
                        </div>
                        <div class="serie">
                            <div class="sele">v2系列</div>
                            <div class="options">
                                <span>75吋v2</span>
                                <span>65吋v2</span>
                                <span>55吋v2</span>
                            </div>
                        </div>
                        <div class="add">
                            <input class="num" type="number" min="1" max="${res.num}" value="1">
                            <a href="#">立即购买</a>
                            <a href="#">加入购物车</a>
            
                        </div>
                    </div>
                </div>
                    `;
                    console.log(tempstr)
                    $('.product').append(tempstr);
                    callback && callback(res.id, res.price);
                    $('.img-list>li>img').on('click', function(ev) {
                        var url = ev.target.src
                        $('.product-1>img')[0].src = url
                    })
                }
            })
        },
        addItem: function(id, price, num) {
            let shop = cookie.get('shop');


            let product = {
                id: id,
                price: price,
                num: num
            };

            if (shop) {
                shop = JSON.parse(shop);
                if (shop.some(elm => elm.id == id)) {
                    shop.forEach(elm => {
                        elm.id == id ? elm.num = num : null;
                    });
                } else {
                    shop.push(product);
                }
            } else {
                shop = [];
                shop.push(product);
            }
            cookie.set('shop', JSON.stringify(shop), 1);
        }
    }
});