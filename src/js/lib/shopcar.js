let baseUrl = "http://localhost:8080/tcl.com";

define(['jquery'], function($) {
    return {
        render: function() {
            var shop = cookie.get('shop');

            if (shop) {
                shop = JSON.parse(shop);
                var idList = shop.map(elm => elm.id).join();
                $.ajax({
                    type: "get",
                    url: "../lib/shop.php",
                    data: {
                        'idList': idList
                    },
                    dataType: "json",
                    success: function(data) {
                        console.log(data)
                            //         var tempstr = '';
                            //         data.forEach(elm => {
                            //             let pic = JSON.parse(elm.pic);
                            //             var arr = shop.filter((val, i) => {
                            //                 return val.id == elm.id;
                    }
                });

            }


        }
    }
});