define(function() {
    var exports = {
        utilGetPosts: function(opts) {
            $.ajax({
                url: js._opts.burl + "/wp-admin/admin-ajax.php",
                type: 'POST',
                data: opts.data,
                dataType: 'json',
                success: function(result) {
                    if (typeof(opts.callback) !== 'undefined') opts.callback(result)
                }
            });
        },
        utilPreloadImages: function(images, callback) {
            if (typeof(js._preload_images) == 'undefined') js._preload_images = images;
            if (typeof(callback) == 'undefined') callback = false;

            var image = js._preload_images.shift();
            if (typeof(image) != 'undefined') {
                js.utilPreloadImage(image, function() {
                    js.utilPreloadImages(js._preload_images, callback);
                    $image = $('img[data-src="' + image + '"]');
                    $image.removeAttr('data-src').attr('src', image).animate({
                        opacity: 1
                    }, 1000);
                });
            } else {
                js.utilPreloadClear();
                if (callback) callback();
            }
        },
        utilPreloadImage: function(src, callback) {
            $preload = $('#preload');
            if ($('#preload').size() < 1) $preload = $('<div id="preload" />').prependTo('body');
            src = src.replace(/\"/g, ' ')

            $preload.append('<img src="' + src + '"  style="display:none;" />');
            $preload.find(' img[src="' + src + '"]').load(function(e) {
                if (typeof(callback) == 'function') callback();
            });

        },
        utilPreloadClear: function() {
            js._preload_images = [];
            $('#preload img').remove();
        },
        utilGetBackgroundImage: function($el) {
            var image = $el.css('background-image');

            return image.slice(4, -1);
        },
        utilObjectSize: function(obj) {
            var size = 0,
                key;
            for (key in obj) {
                if (obj.hasOwnProperty(key)) size++;
            }
            return size;
        },
        utilScrollToEl: function($el) {
            $('html, body').animate({
                scrollTop: $el.offset().top + 5
            }, 500);
        },
        utilGetCookie: function(c_name) {
            var i, x, y, ARRcookies = document.cookie.split(";");
            for (i = 0; i < ARRcookies.length; i++) {
                x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
                y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
                x = x.replace(/^\s+|\s+$/g, "");
                if (x == c_name) {
                    return unescape(y);
                }
            }
            return false;
        },
        utilSetCookie: function(c_name, value, exdays) {
            var exdate = new Date();
            exdate.setDate(exdate.getDate() + exdays);
            var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
            document.cookie = c_name + "=" + c_value;
        },
        utilBrowserTest: function() {
            var N = navigator.appName,
                ua = navigator.userAgent,
                tem;
            var M = ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
            if (M && (tem = ua.match(/version\/([\.\d]+)/i)) != null) M[2] = tem[1];
            M = M ? [M[1], M[2]] : [N, navigator.appVersion, '-?'];

            return M;
        },
        utilDeviceTest: function() {
            var device = false;
            var is_ipad = (navigator.userAgent.match(/(iPad)/g) ? true : false);
            var is_iphone = (navigator.userAgent.match(/(iPhone)/g) ? true : false);

            if (is_ipad) device = 'ipad';
            if (is_iphone) device = 'iphone';

            return device;
        },
        utilCreateLightbox: function(new_options) {
            options = {
                box_class: '',
                box_content: '',
                wrap_css: {
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    width: '100%',
                    height: '100%',
                    background: '#fff',
                    'z-index': 999999
                },
                table_css: {
                    display: 'table',
                    width: '100%',
                    height: '100%'
                },
                row_css: {
                    display: 'table-row'
                },
                cell_css: {
                    display: 'table-cell',
                    'text-align': 'center',
                    'vertical-align': 'middle'
                },
                box_css: {
                    display: 'inline-block',
                    '*display': 'inline',
                    width: 'auto',
                    height: 'auto',
                    position: 'relative',
                    padding: '20px',
                    border: 'none',
                    background: '#fff'
                },
                callback: false
            };

            $.extend(true, options, new_options);

            $lightbox_wrap = $('<div class="lightbox-wrap" />').appendTo('body');
            $lightbox_table = $('<div class="lightbox-table" />').appendTo($lightbox_wrap);
            $lightbox_row = $('<div class="lightbox-row" />').appendTo($lightbox_table);
            $lightbox_cell = $('<div class="lightbox-cell" />').appendTo($lightbox_row);
            $lightbox_box = $('<div class="lightbox-box" />').appendTo($lightbox_cell);

            $lightbox_wrap.css(options.wrap_css);
            $lightbox_table.css(options.table_css);
            $lightbox_row.css(options.row_css);
            $lightbox_cell.css(options.cell_css);
            $lightbox_box.css(options.box_css);

            $lightbox_box.addClass(options.box_class);
            $lightbox_box.html(options.box_content);

            $('.lightbox-cell').on('click', function(e) {
                if (e.target == this) {
                    js.utilRemoveLightbox();
                }
            });

            $('body').keyup(function(e) {
                if (e.which == 27) {
                    js.utilRemoveLightbox();
                }
            });

            if (typeof(options.callback) === 'function') options.callback($lightbox_wrap);
        },
        utilRemoveLightbox: function() {
            $('.lightbox-wrap').fadeOut(1000, function() {
                $('.lightbox-wrap').remove();
                js._handle_lightbox_gallery_size = false;
            });
        }
    }

    return exports;
});