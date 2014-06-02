define(function() {
    return {
        _browser: false,
        _opts: false,
        _min_height: 400,
        _cur_page: 1,
        setup: function() {
            js._opts = js_opts;
            js._browser = js.utilBrowserTest();
            $(document).ready(function() {

                // setup vars that require doc ready
                js._body = $('body');
                js._window = $(window);
                js._content_wrap = $('.content-wrap');
                js._content = js._content_wrap.find('.content');
                js._window_height = js._window.height();

                js.handlerScreenSize();
            });
        }
    }
});