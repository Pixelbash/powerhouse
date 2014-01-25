var js = {};
require.config({
    paths: {
        'jquery': '//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min'
    }
});

require([
    'include/main',
    'include/pages',
    'include/handlers',
    'include/update',
    'include/utils',
    'modernizr/modernizr'
], function(main, pages, handlers, update, utils, modernizr) {

    // much slick
    // very quick
    // wow


    $.extend(true, js, main);
    $.extend(true, js, pages);
    $.extend(true, js, handlers);
    $.extend(true, js, update);
    $.extend(true, js, utils);

    js.setup();
});