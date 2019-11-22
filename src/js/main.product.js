require.config({
    paths: {
        jquery: "./jquery.min",
        product: "./lib/product",
        cookie: "./lib/cookie"
    },
    shim: {}
});


require(['jquery', 'product'], function($, product) {
    product.render(function(id, price) {
        $('.add1').on('click', function() {
            product.addItem(id, price, $('.num').val());
        });
    });
});