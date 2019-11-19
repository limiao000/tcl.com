let baseUrl = "http://localhost:8080/tcl.com";

define(['jquery'], function($) {
    return {
        render: function() {
            $.ajax({
                type: "get",
                url: `../lib/getall.php`,
                dataType: "json",
                success: function(data) {
                    let temp = '';
                    data.forEach((elm, i) => {
                        console.log(elm)
                        let pic = JSON.parse(elm.pic);
                        // let picsrc = `..pic[0].src`
                        // console.log(elm)
                        // console.log(pic)
                        temp += `
                        <li class="item">
                        <a href="product.html?id=1">
                            <div class="p-pic">
                                <img src="../images/sp1.png" alt="small">
                            </div>
                            <div class="p-title">
                                TCL 75V2 75英寸AI超智慧巨幕4K电视
                            </div>
                            <div class="p-price">
                                <span class="yuan">￥</span>4999.00
                            </div>
                        </a>
                    </li>
                            `;
                    });
                    console.log(temp)
                    $('.list').append(temp);
                }
            })
        }
    }
});