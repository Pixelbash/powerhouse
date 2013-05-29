var js = js || {
	_browser : false,
	_opts : js_opts,
	setup : function() {
		js.utilBrowserTest();
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
	    if(typeof(options.callback == 'function')) options.callback($lightbox_wrap);
	  }
}

$(document).ready(function() {
	js.setup();
});
