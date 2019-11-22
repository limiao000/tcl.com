require.config({
    paths: {
        jquery: "./jquery.min",
        shopcar: "./lib/shopcar",
        cookie: "./lib/cookie"
    },
    shim: {}
});

require(['jquery', 'shopcar'], function($, shopcar) {
    shopcar.render();
});