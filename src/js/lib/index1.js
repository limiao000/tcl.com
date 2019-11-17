let baseUrl = "http://localhost:8080/tcl.com";

define(['jquery'], function($) {
    return {
        render: function() {
            $.ajax({
                type: "get",
                url: `../../lib/getall.php`,
                dataType: "json",
                success: function(data) {
                    let temp = '';
                    data.forEach((elm, i) => {
                        let pic = JSON.parse(elm.pic);
                        let picsrc = `..` + pic[0].src
                        console.log(picsrc)
                        temp += `
                        <li class="item">
                            <a href="product.html?id=${elm.id}">
                                <div class="p-pic">
                                    <img  src="${picsrc}" alt="${pic[0].title}" class="lazy">
                                </div>
                                <div class="p-title">
                                    ${elm.title}
                                </div>
                                <div class="p-price">
                                    <span class="yuan">￥</span>${elm.price}<span>元</span>
                                </div>
                            </a>
                        </li>
                        `;
                    });
                    $('.list').append(temp);
                }
            })
        }
    }
});