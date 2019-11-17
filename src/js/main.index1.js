require.config({
    paths: {
        jquery: "./jquery.min",
        index1: "./lib/index1"
    },
    shim: {}
});

require(['jquery', 'index1'], function($, index1) {
    index1.render();
});