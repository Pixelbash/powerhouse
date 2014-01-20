define(function() {
    var exports = {
        updateScreenSize: function() {
            js._window_height = js._window.height();

            //var mps = js._handle_main_page_size;

            // if (mps) js.updateMainPageSize();
        }
    }

    return exports;
});