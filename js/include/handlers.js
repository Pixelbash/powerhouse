define(function() {
    var exports = {
        handlerPageLoad: function() {
            js._window.bind('load', function() {
                console.log('page loaded');
            });
        }
    }

    return exports;
});