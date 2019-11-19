require.config({
    paths: {
        jquery: "./jquery.min",
        shopcar: "./lib/shopcar"
    },
    shim: {}
});

require(['jquery', 'shopcar'], function($, shopcar) {
    shopcar.render();
});