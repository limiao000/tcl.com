let baseUrl = "http://localhost:8080/tcl.com";

define(['jquery'], function($) {
    return {
        render: function(callback) {
            let id = location.search.split('=')[1];
            console.log(id)
                //     $.ajax({
                //         url: `${baseUrl}/lib/getitem.php`,
                //         type: 'get',
                //         data: {
                //             id: id
                //         },
                //         dataType: 'json',
                //         success: function(res) {
                //             let pic = JSON.parse(res.pic);
                //             let tempstr = `
                //                 <h1>${res.title}</h1>
                //                 <div>
                //                     <img src="${baseUrl}/src/${pic[1].src}" alt="${pic[1].title}">
                //                 </div>
                //                 <div>
                //                     <span class="yuan">￥</span>${res.price}
                //                 </div>
                //                 <div>
                //                     <span>${res.num}</span>
                //                 </div>
                //                 <input class="num" type="number" min="1" max="${res.num}" value="1">
                //                 <input type="button" value="加入购物车" class="add">
                //                 <div>${res.details}</div>
                //             `;
                //             $('body').append(tempstr);
                //             callback && callback(res.id, res.price);
                //         }
                //     })
                // },
                // addItem: function(id, price, num) {
                //     let shop = cookie.get('shop');
                //     let product = {
                //         id: id,
                //         price: price,
                //         num: num
                //     };

            //     if (shop) {
            //         shop = JSON.parse(shop);
            //         if (shop.some(elm => elm.id == id)) {
            //             shop.forEach(elm => {
            //                 elm.id == id ? elm.num = num : null;
            //             });
            //         } else {
            //             shop.push(product);
            //         }
            //     } else {
            //         shop = [];
            //         shop.push(product);
            //     }
            //     cookie.set('shop', JSON.stringify(shop), 1);
        }
    }
});