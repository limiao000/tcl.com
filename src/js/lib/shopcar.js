let baseUrl = "http://localhost:8080/tcl.com";

define(['jquery', 'cookie'], function($, cookie) {
    return {
        render: function() {
            let shop = cookie.get('shop');
            if (shop) {
                shop = JSON.parse(shop);
                let idList = shop.map(elm => elm.id).join();
                $.ajax({
                    url: `../lib/shop.php`,
                    type: 'get',
                    data: {
                        idlist: idList
                    },
                    dataType: 'json',
                    success: function(res) {
                        // console.log(res);
                        let tempstr = '';
                        res.forEach(elm => {
                            let pic = JSON.parse(elm.pic);
                            // console.log(pic)
                            let arr = shop.filter((val, i) => {
                                return val.id == elm.id;
                            });

                            tempstr += `
                          
                            <li class="item">
                            <div class="c-box">
                                <input type="checkbox" id="p1">
                            </div>
                            <div class="p-img">
                                <img src="..${pic[0].src}" alt="${pic[0].title}">
                            </div>
                            <div class="p-title">
                               ${elm.title}
                            </div>
                            <div class="p-num">
                                数量：<input type="number" value="${arr[0].num}" min="1" max="${elm.num}" class="num11">
                            </div>
                            <div class="p-price">
                                促销价:<span class="price1">${elm.price}</span>
                            </div>
                            <div class="p-sum">
                                总价:￥<span class="price2">${(arr[0].num*elm.price).toFixed(2)}</span>
                            </div>
                            <div class="del"><a href="#">删除</a></div>
                        </li>
                          `;
                            if (cookie) {
                                $('.replace').hide();
                                $('.pay').removeAttr('disabled');

                            }
                        });
                        $('.itemlist').append(tempstr);
                        //计算单价
                        $('input.num11').on('click', function() {
                            var ll = $(this).parents('.p-num').siblings('.p-sum').find('span.price2')
                                // console.log($(this).parents('.p-num').siblings('.p-sum').find('span.price2'))
                                // console.log($('input.num11').val())
                            var ss = $(this).val() * $(this).parents('.p-num').siblings('.p-price').find('.price1').html()
                                // var ss =
                            console.log(ss)

                            console.log($('.price2').html())
                            ll.html(ss)
                            count()

                        });
                        // 全选
                        $('.all').on('click', function() {
                            $('input').prop('checked', $(this).prop('checked'));
                            count()
                        });
                        // 单独勾选
                        $('input:not(.all)').on('click', function() {
                            count()
                        })

                        // 删除行
                        $('.del').on('click', function() {
                            var i = $('.del').index($(this));
                            var shop = cookie.get('shop')
                            var k = JSON.parse(shop);
                            delete k[i];
                            var arr = [];
                            for (var j = 0; j < k.length; j++) {
                                if (k[j] != null) {
                                    arr.push(k[j]);
                                }
                            }
                            arr = JSON.stringify(arr);
                            cookie.set('shop', arr);
                            $('.item')[i].remove();
                            if (cookie) {
                                $('.replace').hide();
                                $('.pay').removeAttr('disabled');
                            } else {
                                $('.replace').show();

                            }
                            window.location.reload();
                            count();

                        });
                        // 计算input变化
                        $('.itemlist').on('change', '.num', function(e) {
                            var i = $('.num').index($(this))
                            $('.add').eq(i).html(($('.num').eq(i).val() * $('.pri').eq(i).html()).toFixed(2))
                            count()
                        });

                        // 计算总价+件数
                        function count() {
                            var sum = 0;
                            $('.jian').html(null)
                            $('.SUM1').html(null)
                            $('input:checked:not(.all)').parents('.c-box').siblings('.p-sum').find('.price2').text(function(i, val) {
                                sum += parseInt(val);
                            })
                            console.log($('input:checked:not(.all)'))
                            var ge = $('input:checked:not(.all)').length;
                            console.log(ge);
                            $('.jian').html(ge);
                            $('.SUM1').html(sum.toFixed(2))

                        }

                        //结算之后清空购物车
                        $('.pay').on('click', function() {
                            cookie.remove('shop');
                            setTimeout(function() {
                                window.location.reload();
                            }, 5000);
                        })
                    }
                });
            }





        }
    }
});