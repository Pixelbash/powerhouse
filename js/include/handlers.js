define(function() {
    var exports = {
        handlerScreenSize: function() {
            js.updateScreenSize();
            js._window.bind("load resize", function() {
                js.updateScreenSize();
            });
        },
    }

    return exports;
});