var js = {};
require.config({
  /*urlArgs: "bust=" + (new Date()).getTime(),*/
    paths: {
        'jquery': '//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min'
    }
});

require(['jquery'], function(jQuery) { 
  // now we have jquery
  require([
      'include/main',
      'include/handlers',
      'include/update',
      'include/utils',
      'lib/modernizr/modernizr',
  ], function(main, handlers, update, utils, modernizr) {

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
});
