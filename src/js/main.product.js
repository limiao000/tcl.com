require.config({
    paths: {
        jquery: "./jquery.min",
        product: "./lib/product",
        cookie: "./cookie"
    },
    shim: {}
});


require(['jquery', 'product'], function($, product) {
    product.render()
        // product.render(function(id, price) {
        //     $('.add').on('click', function() {
        //         product.addItem(id, price, $('.num').val());
        //     });
        // });
});