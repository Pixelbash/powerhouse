var js = {};
require([
    'include/main',
    'include/pages',
    'include/handlers',
    'include/update',
    'include/utils',
    'modernizr/modernizr',
    'jquery/jquery'
], function(main, pages, handlers, update, utils, modernizr, jQuery) {

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