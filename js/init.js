var js = js || {
	_browser : false,
	_opts : false,
	setup : function() {
		js._opts = js_opts;
		js.utilBrowserTest();
	},
	utilEnableSliderKeyboard : function($slider) {
		$(document.documentElement).keyup(function (event) {
			if (event.keyCode == 37) {
				$slider.goToNextSlide();
			} else if (event.keyCode == 39) {
				$slider.goToPrevSlide();
			}
		});
	},
	utilScrollTo : function($selector, callback) {
		var duration = 3000;
		var easing = 'swing';
		var dist_top = $selector.offset().top;


		$("html, body").animate({
			scrollTop: dist_top
		}, function() {
			if(typeof(callback) == 'function') callback();
		});
	},
	utilObjectSize : function(obj) {
	    var size = 0, key;
	    for (key in obj) {
	        if (obj.hasOwnProperty(key)) size++;
	    }
	    return size;
	},
	utilSetCookie : function(c_name, value, exdays) {
		var exdate = new Date();
		exdate.setDate(exdate.getDate() + exdays);
		var c_value = escape(value) + ((exdays==null) ? "" : "; expires=" + exdate.toUTCString());
		document.cookie = c_name + "=" + c_value;
	},
	utilGetCookie : function(c_name) {
		var i,x,y,ARRcookies=document.cookie.split(";");
		for (i=0;i<ARRcookies.length;i++) {
			x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
			y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
			x=x.replace(/^\s+|\s+$/g,""); 
			if (x==c_name) {
				return unescape(y);
			}
		}
		return false;
	},
	utilIsEmail : function(email) {
	  var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	  return regex.test(email);
	},
	utilBrowserTest : function() {
		var N= navigator.appName, ua= navigator.userAgent, tem;
	    var M= ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
	    if(M && (tem= ua.match(/version\/([\.\d]+)/i))!= null) M[2]= tem[1];
	    M= M? [M[1], M[2]]: [N, navigator.appVersion, '-?'];

	    js._browser = M;
	},
	utilHashManager : function(callback) {
		//lets assume control of all # links for now
		$('a[href^=#]').click(function(e){
			//e.preventDefault();
		});

		if (window.location.hash) js.utilHashChange(callback);
		
		$(window).bind('hashchange', function () {
			if (window.location.hash) js.utilHashChange(callback);
		});
		
	},
	utilHashChange : function(callback) {
		var hash = window.location.hash.replace('#', '');
		
		if(typeof(callback) == 'function') callback(hash);
	},
	utilDeviceTest : function() {
		var device = false;
		var is_ipad    = ( navigator.userAgent.match(/(iPad)/g) ? true : false );
		var is_iphone = ( navigator.userAgent.match(/(iPhone)/g) ? true : false );

		if(is_ipad) device = 'ipad';
		if(is_iphone) device = 'iphone';

	    jc._device = device;
	},
	utilCreateLightbox : function(new_options) {
		options = {
			box_class : '',
			box_content : '',
			wrap_css : {
				position : 'fixed',
				left : 0,
				top : 0,
				width : '100%',
				height : '100%',
				background : '#000',
				background : 'rgba(255,255,255,0.9)',
				'z-index' : 999999
			},
			table_css : {
				display : 'table',
				width : '100%',
				height : '100%'
			},
			row_css : {
				display : 'table-row'
			},
			cell_css : {
				display : 'table-cell',
				'text-align' : 'center',
				'vertical-align' : 'middle'
			},
			box_css : {
				display : 'inline-block',
				'*display' : 'inline',
				width : 'auto',
				height : 'auto',
				position : 'relative',
				padding : '20px',
				border : '1px solid #e6e6e6',
				background : '#fff'
			},
			callback : false
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
	      if(e.target == this){
	        $('.lightbox-wrap').fadeOut(1000, function() {
	          $('.lightbox-wrap').remove();
	        });
	      }
	    });

		$('body').keyup(function(e){
		    if(e.which == 27){
		        $lightbox_wrap.fadeOut(1000, function() {
					$lightbox_wrap.remove();
				});
		    }
		});

	    if(typeof(options.callback == 'function')) options.callback($lightbox_wrap);
	  }
}

$(document).ready(function() {
	js.setup();
});

// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
