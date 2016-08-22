(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

var _pub = require('./pub');

var _pub2 = _interopRequireDefault(_pub);

var _sub = require('./sub');

var _sub2 = _interopRequireDefault(_sub);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Init = function () {
  function Init() {
    _classCallCheck(this, Init);

    this.$body = $('body');
    this.$window = $(window);
    this.$document = $(document);
    this.$root = $('html, body');

    this._opts = window._opts;
    this._data = window._data;

    this.utils = new _utils2.default();

    this.init();
  }

  _createClass(Init, [{
    key: 'init',
    value: function init() {
      var _this = this;

      //Jquery ready
      $(function () {
        _this.sub = new _sub2.default(_this, _this.utils);
        _this.pub = new _pub2.default(_this, _this.utils);
      });
    }
  }]);

  return Init;
}();

exports.default = Init;


global.app = new Init();

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./pub":2,"./sub":9,"./utils":16}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _layout = require('./pub/layout');

var _layout2 = _interopRequireDefault(_layout);

var _page = require('./pub/page');

var _page2 = _interopRequireDefault(_page);

var _header = require('./pub/header');

var _header2 = _interopRequireDefault(_header);

var _footer = require('./pub/footer');

var _footer2 = _interopRequireDefault(_footer);

var _home = require('./pub/home');

var _home2 = _interopRequireDefault(_home);

var _elements = require('./pub/elements');

var _elements2 = _interopRequireDefault(_elements);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Pub = function Pub(main, utils) {
  _classCallCheck(this, Pub);

  this.m = main;
  this.u = utils;

  //Basics
  this.u.window.scroll();
  this.u.window.resize();
  this.u.window.load();
  this.u.newsletter.pub();
  this.u.hash.pub();

  this.layout = new _layout2.default(main, utils);
  this.header = new _header2.default(main, utils);
  this.footer = new _footer2.default(main, utils);
  this.elements = new _elements2.default(main, utils);

  //Template specific tests
  if ($('body[data-template="page-index"]').length > 0) this.home = new _home2.default(main, utils);
};

exports.default = Pub;

},{"./pub/elements":3,"./pub/footer":4,"./pub/header":5,"./pub/home":6,"./pub/layout":7,"./pub/page":8}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Layout = function () {
  function Layout(main, utils) {
    _classCallCheck(this, Layout);

    this.m = main;
    this.u = utils;
    this.init();
  }

  _createClass(Layout, [{
    key: 'init',
    value: function init() {

      var contact = {
        $pub: $('[data-pub~="contact/form"]'),
        $error_sub: $('[data-pub~="contact/form"] [data-sub~="contact/error"]')
      };

      radio('elements').broadcast({
        contact: contact
      });

      contact.$pub.on('submit', function (e) {
        var $pub = $(e.target);
        e.preventDefault();
        radio('contact/submit').broadcast({
          $pub: $pub,
          e: e
        });
      });
    }
  }]);

  return Layout;
}();

exports.default = Layout;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Footer = function () {
  function Footer(main, utils) {
    _classCallCheck(this, Footer);

    this.m = main;
    this.u = utils;
    this.footer();
  }

  _createClass(Footer, [{
    key: "footer",
    value: function footer() {}
  }]);

  return Footer;
}();

exports.default = Footer;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Header = function () {
  function Header(main, utils) {
    _classCallCheck(this, Header);

    this.m = main;
    this.u = utils;
    this.header();
  }

  _createClass(Header, [{
    key: 'header',
    value: function header() {
      var $header = $('header.default');
      var $search = $('[data-sub~="search"]');

      this._d = {
        buildings: window._data.buildings,
        search: {
          $toggle_sub: $search,
          $toggle_pub: $header.find('[data-pub~="search-toggle"]'),
          $hide_pub: $header.find('[data-pub~="search-hide"]'),
          $form_pub: $header.find('[data-pub~="search-form"]')
        },
        login: {
          $show_pub: $('[data-pub~="login"]'),
          $submit_pub: $('[data-pub~="login-form"]'),
          action: window._data.t_url + "/login.php",
          template: _.template($('#login_template').html())
        },
        mobile: {
          $menu: $header.find('.menu'),
          $pub: $header.find('[data-pub~="hamburger"]'),
          $sub: $header.find('[data-sub~="hamburger"]')
        }
      };

      radio('header').broadcast(this._d);

      this.search();
      this.login();

      this._d.mobile.$pub.on('click', function (e) {
        radio('header/menu/toggle').broadcast({});
      });
    }
  }, {
    key: 'search',
    value: function search() {
      //Toggle search bar
      this._d.search.$toggle_pub.on('click', function (e) {
        radio('header/search/toggle').broadcast({
          'action': 'toggle'
        });
      });

      //Hide search bar
      this._d.search.$hide_pub.on('click', function (e) {
        radio('header/search/toggle').broadcast({
          'action': 'hide'
        });
      });

      //Submit search form
      this._d.search.$form_pub.on('submit', function (e) {
        radio('header/search/submit').broadcast({
          e: e,
          $form: $(e.currentTarget)
        });
      });
    }
  }, {
    key: 'login',
    value: function login() {
      //Show login template
      this._d.login.$show_pub.on('click', function (e) {
        var select = $(e.currentTarget).attr('data-select');
        radio('header/login/show').broadcast({
          select: select
        });
      });

      //Form submission
      this.m.$body.on('submit', this._d.login.$submit_pub.selector, function (e) {
        var $form = $(e.currentTarget).closest('form');
        var building = $form.find('[name="building"]').val();
        var password = $form.find('[name="password"]').val();
        var url = $form.find('[name="building"] option:selected').attr('data-url');

        e.preventDefault();
        radio('header/login/submit').broadcast({
          building: building,
          password: password,
          url: url
        });
      });
    }
  }]);

  return Header;
}();

exports.default = Header;

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Home = function () {
  function Home(main, utils) {
    _classCallCheck(this, Home);

    this.m = main;
    this.u = utils;

    this.init();
  }

  _createClass(Home, [{
    key: 'init',
    value: function init() {

      this._d = {
        slideshows: {
          $hero_sub: $('[data-sub~="hero-slideshow"]')
        }
      };

      radio('home').broadcast(this._d);

      //Show video
      radio('home/slideshows/hero').broadcast();
    }
  }]);

  return Home;
}();

exports.default = Home;

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Layout = function () {
  function Layout(main, utils) {
    _classCallCheck(this, Layout);

    this.m = main;
    this.u = utils;
    this.setup();
  }

  _createClass(Layout, [{
    key: 'setup',
    value: function setup() {
      var $layout = $('#layout');

      radio('action/layout').broadcast({
        $layout: $layout
      });
    }
  }]);

  return Layout;
}();

exports.default = Layout;

},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//import Press from './page/press';

var Page = function Page(main, utils) {
  _classCallCheck(this, Page);

  this.m = main;
  this.u = utils;

  //this.press = new Press(main, utils);
};

exports.default = Page;

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _layout = require('./sub/layout');

var _layout2 = _interopRequireDefault(_layout);

var _page = require('./sub/page');

var _page2 = _interopRequireDefault(_page);

var _header = require('./sub/header');

var _header2 = _interopRequireDefault(_header);

var _footer = require('./sub/footer');

var _footer2 = _interopRequireDefault(_footer);

var _home = require('./sub/home');

var _home2 = _interopRequireDefault(_home);

var _elements = require('./sub/elements');

var _elements2 = _interopRequireDefault(_elements);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sub = function Sub(main, utils) {
  _classCallCheck(this, Sub);

  this.m = main;
  this.u = utils;

  this.layout = new _layout2.default(main, utils);
  this.header = new _header2.default(main, utils);
  this.elements = new _elements2.default(main, utils);

  this.home = new _home2.default(main, utils);
  this.page = new _page2.default(main, utils);
};

exports.default = Sub;

},{"./sub/elements":10,"./sub/footer":11,"./sub/header":12,"./sub/home":13,"./sub/layout":14,"./sub/page":15}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Elements = function () {
  function Elements(main, utils) {
    var _this = this;

    _classCallCheck(this, Elements);

    this.m = main;
    this.u = utils;
    radio('elements').subscribe(function (data) {
      _this.elements(data);
    });
  }

  _createClass(Elements, [{
    key: 'elements',
    value: function elements(data) {
      var _this2 = this;

      this.contact = data.contact;

      radio('contact/submit').subscribe(function (data) {
        _this2.contactSubmit(data);
      });
    }
  }, {
    key: 'contactSubmit',
    value: function contactSubmit(d) {
      var _this3 = this;

      var e = d.e;
      var $form = d.$pub;
      var $error = this.contact.$error_sub;

      $.post(window.location, $form.serialize() + '&submit=true', function (d) {
        var $html = $(d);

        //Replace forms with contents
        var $pubs = _this3.contact.$pub;
        var $new_pubs = $html.find('[data-pub~="contact/form"]');
        var $new_subs = $html.find('[data-sub~="contact/form"]');

        $pubs.each(function (i, pub) {
          var $pub = $(pub);
          var index = i;

          var $new_pub = $new_pubs.eq(index);
          if ($new_pub.size() == 0) {
            $new_pub = $new_subs.eq(index);
          }

          var new_html = $new_pub.parent().html();

          $pub.parent().html(new_html);
        });
      });
    }
  }]);

  return Elements;
}();

exports.default = Elements;

},{}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Landing = function () {
  function Landing(main, utils) {
    var _this = this;

    _classCallCheck(this, Landing);

    this.m = main;
    this.u = utils;
    radio('action/footer').subscribe(function (data) {
      _this.footer(data);
    });
  }

  _createClass(Landing, [{
    key: 'footer',
    value: function footer(data) {}
  }]);

  return Landing;
}();

exports.default = Landing;

},{}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Header = function () {
  function Header(main, utils) {
    var _this = this;

    _classCallCheck(this, Header);

    this.m = main;
    this.u = utils;

    radio('header').subscribe(function (d) {
      _this.init(d);
    });
  }

  _createClass(Header, [{
    key: 'init',
    value: function init(d) {
      var _this2 = this;

      this._d = d;

      radio('header/search/toggle').subscribe(function (d) {
        _this2.searchToggle(d);
      });
      radio('header/search/submit').subscribe(function (d) {
        _this2.searchSubmit(d);
      });
      radio('header/login/show').subscribe(function (d) {
        _this2.loginShow(d);
      });
      radio('header/login/submit').subscribe(function (d) {
        _this2.loginSubmit(d);
      });

      radio('header/menu/toggle').subscribe(function (d) {
        _this2.menu(d);
      });
    }
  }, {
    key: 'searchToggle',
    value: function searchToggle(d) {
      var action = d.action;

      if (action == 'toggle') {
        this._d.search.$toggle_sub.toggleClass('active');
      } else if (action == 'show') {
        this._d.search.$toggle_sub.addClass('active');
      } else if (action == 'hide') {
        this._d.search.$toggle_sub.removeClass('active');
      }
    }
  }, {
    key: 'searchSubmit',
    value: function searchSubmit(d) {
      var e = d.e;

      //e.preventDefault();
    }
  }, {
    key: 'loginShow',
    value: function loginShow(d) {
      this.u.lightbox.create({
        box_content: this._d.login.template({
          buildings: this._d.buildings
        }),
        box_class: 'lightbox-login',
        box_css: {
          padding: '40px 80px'
        },
        wrap_css: {
          background: 'rgba(0,0,0,0.6)'
        }
      });
    }
  }, {
    key: 'loginSubmit',
    value: function loginSubmit(d) {
      var _this3 = this;

      $.ajax({
        url: window._data.a_url,
        method: 'POST',
        data: {
          'action': 'formlogin',
          'data': d
        },
        'dataType': 'json',
        complete: function complete(r) {
          if (r.responseText != 0) {
            _this3.u.cookies.set('login', r.responseText, 1);
            window.location = d.url;
          } else {
            alert('Please check the password is correct');
          }
        }
      });
    }
  }, {
    key: 'menu',
    value: function menu(d) {
      var $pub = this._d.mobile.$pub;
      var $sub = this._d.mobile.$sub;

      //Is already active?
      var is_active = $pub.hasClass('active');

      if (is_active) {
        $pub.removeClass('active');
        $sub.removeClass('active');
      } else {
        $pub.addClass('active');
        $sub.addClass('active');
      }
    }
  }]);

  return Header;
}();

exports.default = Header;

},{}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Home = function () {
  function Home(main, utils) {
    var _this = this;

    _classCallCheck(this, Home);

    this.m = main;
    this.u = utils;

    console.log('sub home');

    radio('home').subscribe(function (data) {
      _this.init(data);
    });
  }

  _createClass(Home, [{
    key: 'init',
    value: function init(d) {
      var _this2 = this;

      this._d = d;

      console.log(this._d);

      radio('home/slideshows/hero').subscribe(function (data) {
        _this2.hero(data);
      });
    }
  }, {
    key: 'hero',
    value: function hero(d) {
      var $sub = this._d.slideshows.$hero_sub;
      $sub.find('>div').show();
      $sub.bxSlider();
    }
  }]);

  return Home;
}();

exports.default = Home;

},{}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Layout = function () {
  function Layout(main, utils) {
    var _this = this;

    _classCallCheck(this, Layout);

    this.m = main;
    this.u = utils;
    radio('action/layout').subscribe(function (data) {
      _this.layout(data);
    });
  }

  _createClass(Layout, [{
    key: 'layout',
    value: function layout(data) {
      var _this2 = this;

      this.$layout = data.$layout;

      //subscriptions
      radio('window/resize').subscribe(function (sub_data) {
        _this2.resize(sub_data);
      });
    }
  }, {
    key: 'resize',
    value: function resize(data) {
      console.log('update layout height');
      this.window_height = this.m.$window.height();

      this.$layout.css({
        'min-height': this.window_height
      });

      //Remove loading class
      if (this.$layout.hasClass('loading')) {
        this.$layout.removeClass('loading');
      }
    }
  }]);

  return Layout;
}();

exports.default = Layout;

},{}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//import Press from './page/press';

var Page = function Page(main, utils) {
  _classCallCheck(this, Page);

  this.m = main;
  this.u = utils;

  //this.press = new Press(main, utils);
};

exports.default = Page;

},{}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = require('./utils/helpers/helpers');

var _helpers2 = _interopRequireDefault(_helpers);

var _vectors = require('./utils/helpers/vectors');

var _vectors2 = _interopRequireDefault(_vectors);

var _cookies = require('./utils/helpers/cookies');

var _cookies2 = _interopRequireDefault(_cookies);

var _hash = require('./utils/helpers/hash');

var _hash2 = _interopRequireDefault(_hash);

var _main = require('./utils/lightbox/main');

var _main2 = _interopRequireDefault(_main);

var _preload = require('./utils/preload/preload');

var _preload2 = _interopRequireDefault(_preload);

var _pub = require('./utils/window/pub');

var _pub2 = _interopRequireDefault(_pub);

var _mailchimp = require('./utils/newsletter/mailchimp');

var _mailchimp2 = _interopRequireDefault(_mailchimp);

var _fixes = require('./utils/helpers/fixes');

var _fixes2 = _interopRequireDefault(_fixes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Utils = function Utils() {
  _classCallCheck(this, Utils);

  this.preload = new _preload2.default();
  this.newsletter = new _mailchimp2.default();
  this.helpers = new _helpers2.default();
  this.vectors = new _vectors2.default();
  this.cookies = new _cookies2.default();
  this.hash = new _hash2.default();
  this.lightbox = new _main2.default();
  this.window = new _pub2.default();

  //Fixes
  this.fixes = new _fixes2.default();
};

exports.default = Utils;

},{"./utils/helpers/cookies":17,"./utils/helpers/fixes":18,"./utils/helpers/hash":19,"./utils/helpers/helpers":20,"./utils/helpers/vectors":21,"./utils/lightbox/main":22,"./utils/newsletter/mailchimp":23,"./utils/preload/preload":24,"./utils/window/pub":25}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cookies = function () {
  function Cookies() {
    _classCallCheck(this, Cookies);
  }

  _createClass(Cookies, [{
    key: "get",
    value: function get(c_name) {
      var i,
          x,
          y,
          ARRcookies = document.cookie.split(";");
      for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == c_name) {
          return unescape(y);
        }
      }
      return false;
    }
  }, {
    key: "set",
    value: function set(c_name, value, exhours) {
      var time = new Date();
      var offset = time.getTime();
      offset += 3600 * 1000 * exhours;
      time.setTime(offset);

      document.cookie = c_name + "=" + escape(value) + "; expires=" + time.toGMTString();
    }
  }]);

  return Cookies;
}();

exports.default = Cookies;

},{}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Fixes = function () {
  function Fixes() {
    _classCallCheck(this, Fixes);

    this.console(); //Avoid no console errors
    // this.hovertap(); //Fix double tapping on mobile webkit
  }

  _createClass(Fixes, [{
    key: 'console',
    value: function console() {
      (function () {
        var method;
        var noop = function noop() {};
        var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
        var length = methods.length;
        var console = window.console = window.console || {};

        while (length--) {
          method = methods[length];

          // Only stub undefined methods.
          if (!console[method]) {
            console[method] = noop;
          }
        }
      })();
    }
  }, {
    key: 'hovertap',
    value: function hovertap() {
      $('body').on('touchend', 'a, span, button, input', function (e) {
        $(e.currentTarget).trigger('click');
      });
    }
  }]);

  return Fixes;
}();

exports.default = Fixes;

},{}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Hash = function () {
  function Hash() {
    _classCallCheck(this, Hash);
  }

  _createClass(Hash, [{
    key: 'pub',
    value: function pub() {
      $(window).bind('load hashchange', function (e) {
        console.log('pub hash change');
        radio('window/hash/change').broadcast({
          e: e,
          hash: location.hash.slice(1)
        });
      });
    }
  }]);

  return Hash;
}();

exports.default = Hash;

},{}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Helpers = function () {
  function Helpers() {
    _classCallCheck(this, Helpers);
  }

  _createClass(Helpers, [{
    key: 'slugify',
    value: function slugify(text) {
      return text.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');
    }
  }]);

  return Helpers;
}();

exports.default = Helpers;

},{}],21:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vectors = function () {
  function Vectors() {
    _classCallCheck(this, Vectors);
  }

  _createClass(Vectors, [{
    key: "add",


    //Add vectors
    value: function add(p1, p2) {
      return {
        x: p1.x + p2.x,
        y: p1.y + p2.y
      };
    }

    //Multiply vector

  }, {
    key: "multiply",
    value: function multiply(p1, val) {
      return {
        x: p1.x * val,
        y: p1.y * val
      };
    }

    //Normalizes the vector to values between -1 and 1

  }, {
    key: "normalise",
    value: function normalise(p1, newLength) {
      var l = this.length(p1);

      return {
        x: p1.x / l * newLength,
        y: p1.y / l * newLength
      };
    }

    //Returns the vector between two points.

  }, {
    key: "between",
    value: function between(p1, p2) {
      return {
        x: p1.x - p2.x,
        y: p1.y - p2.y
      };
    }

    //Get length of vector

  }, {
    key: "length",
    value: function length(p) {
      return Math.sqrt(p.x * p.x + p.y * p.y);
    }
  }]);

  return Vectors;
}();

exports.default = Vectors;

},{}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Main = function () {
  function Main() {
    _classCallCheck(this, Main);
  }

  _createClass(Main, [{
    key: 'create',
    value: function create(new_options) {
      var _this = this;

      var options = {
        box_class: '',
        box_html: '',
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

      var $lightbox_wrap = $('<div class="lightbox-wrap" />').appendTo('body');
      var $lightbox_table = $('<div class="lightbox-table" />').appendTo($lightbox_wrap);
      var $lightbox_row = $('<div class="lightbox-row" />').appendTo($lightbox_table);
      var $lightbox_cell = $('<div class="lightbox-cell" />').appendTo($lightbox_row);
      var $lightbox_box = $('<div class="lightbox-box" />').appendTo($lightbox_cell);

      $lightbox_wrap.css(options.wrap_css);
      $lightbox_table.css(options.table_css);
      $lightbox_row.css(options.row_css);
      $lightbox_cell.css(options.cell_css);
      $lightbox_box.css(options.box_css);

      $lightbox_box.addClass(options.box_class);
      $lightbox_box.html(options.box_content);

      //close conditions
      $('.lightbox-cell').find('.close, [data-pub=close]').on('click', function (e) {
        _this.remove();
      });

      $('body').keyup(function (e) {
        if (e.which == 27) {
          _this.remove();
        }
      });

      $('.lightbox-cell').on('click', function (e) {
        if ($(e.target).hasClass('lightbox-cell')) _this.remove();
      });

      if (typeof options.callback === 'function') options.callback($lightbox_wrap);
    }
  }, {
    key: 'remove',
    value: function remove() {
      $('.lightbox-wrap').fadeOut(1000, function () {
        $('.lightbox-wrap').remove();
      });
    }
  }]);

  return Main;
}();

exports.default = Main;

},{}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Newsletter = function () {
  function Newsletter() {
    //this.pub();

    _classCallCheck(this, Newsletter);
  }

  _createClass(Newsletter, [{
    key: 'pub',
    value: function pub() {
      var $form = $('#newsletter');

      //On click send open 'cast
      $form.on('submit', function (e) {
        console.log('broadcast newsletter signup');
        e.preventDefault();
        radio('action/newsletter').broadcast({
          action: 'signup',
          event: e,
          $form: $form
        });
      });
    }
  }, {
    key: 'sub',
    value: function sub() {
      radio('action/newsletter').subscribe(function (data) {
        var $form = data.$form;
        var $success = $form.find('.success');
        var $error = $form.find('.error');

        var action = String($form.attr('action'));

        $error.hide();
        $.ajax({
          type: $form.attr('method'),
          url: action,
          data: $form.serialize(),
          cache: false,
          dataType: 'json',
          contentType: "application/json; charset=utf-8",
          error: function error(err) {
            alert("Could not connect to the registration server. Please try again later.");
          },
          success: function success(data) {
            console.log(data);
            if (data.result != "success") {
              // Something went wrong, do something to notify the user. maybe alert(data.msg);
              $error.text('Please enter a valid email address').show();
            } else {
              // It worked, carry on...
              $form.find('input').val('');
              $success.show();
            }
          }
        });
      });
    }
  }]);

  return Newsletter;
}();

exports.default = Newsletter;

},{}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Preload = function () {
  function Preload() {
    _classCallCheck(this, Preload);

    this._files = [];

    //Create preload div
    if (!$('#preload').is('*')) {
      this.$preload = $('<div id="preload" />').appendTo('body');
    } else {
      this.$preload = $('#preload');
    }

    this.$preload.hide();
  }

  _createClass(Preload, [{
    key: 'files',
    value: function files(opts) {
      var _this = this;

      this._files = opts.src;

      var file = this._files.shift();
      if (typeof file != 'undefined') {
        this.file({
          src: file,
          callback: function callback(d) {
            //Go to the next file
            _this.files({
              src: _this._files,
              callback: opts.callback
            });
          }
        });
      } else {
        console.log('run callback!');
        this.clear();
        if (typeof opts.callback != 'undefined') opts.callback();
      }
    }
  }, {
    key: 'file',
    value: function file(opts) {
      var src = opts.src.replace(/\"/g, ' ');
      var type = this.getFileType(opts.src);
      var $p = this.$preload;
      var has_cb = typeof opts.callback != 'undefined';

      //Bail if we don't recognise the type
      if (type == false) {
        opts.callback(d);
        //Handle types
      } else if (type == 'img') {
        var $file = $('<img />').attr('src', src).appendTo($p);

        if (has_cb) {
          $file.load(function (d) {
            //console.log('loaded image');
            opts.callback(d);
          });
        }
      } else if (type == 'js') {
        $.getScript(src, function (d) {
          console.log('loaded js');
          if (has_cb) opts.callback(d);
        });
      } else if (type == 'css') {
        var $file = $('<link />').attr('href', src).attr('rel', 'stylesheet').appendTo($p);

        if (has_cb) {
          $file.load(function (d) {
            //console.log('loaded css');
            opts.callback(d);
          });
        }
      }
    }
  }, {
    key: 'image',
    value: function image(opts) {
      this.file(opts);
    }
  }, {
    key: 'images',
    value: function images(opts) {
      this.files(opts);
    }
  }, {
    key: 'clear',
    value: function clear() {
      this._images = [];
      $('#preload img').remove();
      $('#preload script').remove();
      $('#preload style').remove();
    }
  }, {
    key: 'getFileType',
    value: function getFileType(src) {
      console.log(src);
      var ext = src.substr(src.lastIndexOf('.') + 1);
      if (/(js)$/ig.test(ext)) {
        return 'js';
      } else if (/(css)$/ig.test(ext)) {
        return 'css';
      } else if (/(jpg|png|gif)$/ig.test(ext)) {
        return 'img';
      }
    }
  }]);

  return Preload;
}();

exports.default = Preload;

},{}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Pub = function () {
  function Pub() {
    _classCallCheck(this, Pub);

    // this.scroll();
    // this.resize();
    // this.load();
    this.$window = $(window);
  }

  _createClass(Pub, [{
    key: 'scroll',
    value: function scroll() {
      var _this = this;

      var $window = this.$window;

      $window.on('load scroll', function () {
        _this.scrollPub();
      });
    }
  }, {
    key: 'resize',
    value: function resize() {
      var _this2 = this;

      var $window = this.$window;

      $window.on('load resize', function () {
        _this2.resizePub();
      });
    }
  }, {
    key: 'scrollPub',
    value: function scrollPub() {
      var $window = this.$window;
      radio('window/scroll').broadcast({
        scrollTop: $window.scrollTop()
      });
    }
  }, {
    key: 'resizePub',
    value: function resizePub() {
      var $window = this.$window;
      radio('window/resize').broadcast({
        width: $window.width(),
        height: $window.height()
      });
    }
  }, {
    key: 'load',
    value: function load() {
      var $window = this.$window;

      $window.on('load', function () {
        radio('window/load').broadcast({
          width: $window.width(),
          height: $window.height(),
          scrollTop: $window.scrollTop()
        });
      });
    }
  }]);

  return Pub;
}();

exports.default = Pub;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZXM2L2luaXQuanMiLCJzcmMvZXM2L3B1Yi5qcyIsInNyYy9lczYvcHViL2VsZW1lbnRzLmpzIiwic3JjL2VzNi9wdWIvZm9vdGVyLmpzIiwic3JjL2VzNi9wdWIvaGVhZGVyLmpzIiwic3JjL2VzNi9wdWIvaG9tZS5qcyIsInNyYy9lczYvcHViL2xheW91dC5qcyIsInNyYy9lczYvcHViL3BhZ2UuanMiLCJzcmMvZXM2L3N1Yi5qcyIsInNyYy9lczYvc3ViL2VsZW1lbnRzLmpzIiwic3JjL2VzNi9zdWIvZm9vdGVyLmpzIiwic3JjL2VzNi9zdWIvaGVhZGVyLmpzIiwic3JjL2VzNi9zdWIvaG9tZS5qcyIsInNyYy9lczYvc3ViL2xheW91dC5qcyIsInNyYy9lczYvc3ViL3BhZ2UuanMiLCJzcmMvZXM2L3V0aWxzLmpzIiwic3JjL2VzNi91dGlscy9oZWxwZXJzL2Nvb2tpZXMuanMiLCJzcmMvZXM2L3V0aWxzL2hlbHBlcnMvZml4ZXMuanMiLCJzcmMvZXM2L3V0aWxzL2hlbHBlcnMvaGFzaC5qcyIsInNyYy9lczYvdXRpbHMvaGVscGVycy9oZWxwZXJzLmpzIiwic3JjL2VzNi91dGlscy9oZWxwZXJzL3ZlY3RvcnMuanMiLCJzcmMvZXM2L3V0aWxzL2xpZ2h0Ym94L21haW4uanMiLCJzcmMvZXM2L3V0aWxzL25ld3NsZXR0ZXIvbWFpbGNoaW1wLmpzIiwic3JjL2VzNi91dGlscy9wcmVsb2FkL3ByZWxvYWQuanMiLCJzcmMvZXM2L3V0aWxzL3dpbmRvdy9wdWIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUNBQTs7OztBQUVBOzs7O0FBQ0E7Ozs7Ozs7O0lBRXFCLEk7QUFDbkIsa0JBQWM7QUFBQTs7QUFDWixTQUFLLEtBQUwsR0FBaUIsRUFBRSxNQUFGLENBQWpCO0FBQ0EsU0FBSyxPQUFMLEdBQWlCLEVBQUUsTUFBRixDQUFqQjtBQUNBLFNB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QXFCLFNBQXJCLENBQStCO0FBQzdCLGlCQUFTLFFBQVEsS0FBUixFQURvQjtBQUU3QixrQkFBUyxRQUFRLE1BQVIsRUFGb0I7QUFHN0IscUJBQVksUUFBUSxTQUFSO0FBSGlCLFNBQS9CO0FBS0QsT0FORDtBQU9EOzs7Ozs7a0JBakRrQixHIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBVdGlscyBmcm9tICcuL3V0aWxzJztcclxuXHJcbmltcG9ydCBQdWIgZnJvbSAnLi9wdWInO1xyXG5pbXBvcnQgU3ViIGZyb20gJy4vc3ViJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluaXQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy4kYm9keSAgICAgPSAkKCdib2R5Jyk7XHJcbiAgICB0aGlzLiR3aW5kb3cgICA9ICQod2luZG93KTtcclxuICAgIHRoaXMuJGRvY3VtZW50ID0gJChkb2N1bWVudCk7XHJcbiAgICB0aGlzLiRyb290ICAgICA9ICQoJ2h0bWwsIGJvZHknKTtcclxuXHJcbiAgICB0aGlzLl9vcHRzID0gd2luZG93Ll9vcHRzO1xyXG4gICAgdGhpcy5fZGF0YSA9IHdpbmRvdy5fZGF0YTtcclxuXHJcbiAgICB0aGlzLnV0aWxzID0gbmV3IFV0aWxzKCk7XHJcblxyXG4gICAgdGhpcy5pbml0KCk7XHJcbiAgfSBcclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIC8vSnF1ZXJ5IHJlYWR5XHJcbiAgICAkKCgpID0+IHsgXHJcbiAgICAgIHRoaXMuc3ViID0gbmV3IFN1Yih0aGlzLCB0aGlzLnV0aWxzKTtcclxuICAgICAgdGhpcy5wdWIgPSBuZXcgUHViKHRoaXMsIHRoaXMudXRpbHMpOyBcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZ2xvYmFsLmFwcCA9IG5ldyBJbml0KCk7ICAgIiwiaW1wb3J0IExheW91dCBmcm9tICcuL3B1Yi9sYXlvdXQnO1xyXG5pbXBvcnQgUGFnZSBmcm9tICcuL3B1Yi9wYWdlJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL3B1Yi9oZWFkZXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vcHViL2Zvb3Rlcic7XHJcbmltcG9ydCBIb21lIGZyb20gJy4vcHViL2hvbWUnO1xyXG5pbXBvcnQgRWxlbWVudHMgZnJvbSAnLi9wdWIvZWxlbWVudHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHViIHtcclxuICBjb25zdHJ1Y3RvcihtYWluLHV0aWxzKSB7XHJcbiAgICB0aGlzLm0gPSBtYWluO1xyXG4gICAgdGhpcy51ID0gdXRpbHM7XHJcblxyXG4gICAgLy9CYXNpY3NcclxuICAgIHRoaXMudS53aW5kb3cuc2Nyb2xsKCk7XHJcbiAgICB0aGlzLnUud2luZG93LnJlc2l6ZSgpO1xyXG4gICAgdGhpcy51LndpbmRvdy5sb2FkKCk7XHJcbiAgICB0aGlzLnUubmV3c2xldHRlci5wdWIoKTtcclxuICAgIHRoaXMudS5oYXNoLnB1YigpO1xyXG4gICAgXHJcbiAgICB0aGlzLmxheW91dCA9IG5ldyBMYXlvdXQobWFpbiwgdXRpbHMpO1xyXG4gICAgdGhpcy5oZWFkZXIgPSBuZXcgSGVhZGVyKG1haW4sIHV0aWxzKTtcclxuICAgIHRoaXMuZm9vdGVyID0gbmV3IEZvb3RlcihtYWluLCB1dGlscyk7XHJcbiAgICB0aGlzLmVsZW1lbnRzID0gbmV3IEVsZW1lbnRzKG1haW4sIHV0aWxzKTtcclxuXHJcbiAgICAvL1RlbXBsYXRlIHNwZWNpZmljIHRlc3RzXHJcbiAgICBpZigkKCdib2R5W2RhdGEtdGVtcGxhdGU9XCJwYWdlLWluZGV4XCJdJykubGVuZ3RoID4gMCkgdGhpcy5ob21lID0gbmV3IEhvbWUobWFpbiwgdXRpbHMpO1xyXG4gIH1cclxufSAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBMYXlvdXQge1xyXG4gIGNvbnN0cnVjdG9yKG1haW4sdXRpbHMpIHtcclxuICAgIHRoaXMubSA9IG1haW47XHJcbiAgICB0aGlzLnUgPSB1dGlscztcclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIFxyXG4gICAgdmFyIGNvbnRhY3QgPSB7XHJcbiAgICAgICRwdWIgOiAkKCdbZGF0YS1wdWJ+PVwiY29udGFjdC9mb3JtXCJdJyksXHJcbiAgICAgICRlcnJvcl9zdWIgOiAkKCdbZGF0YS1wdWJ+PVwiY29udGFjdC9mb3JtXCJdIFtkYXRhLXN1Yn49XCJjb250YWN0L2Vycm9yXCJdJylcclxuICAgIH07XHJcblxyXG4gICAgcmFkaW8oJ2VsZW1lbnRzJykuYnJvYWRjYXN0KHtcclxuICAgICAgY29udGFjdDpjb250YWN0XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb250YWN0LiRwdWIub24oJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICAgIHZhciAkcHViID0gJChlLnRhcmdldCk7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgcmFkaW8oJ2NvbnRhY3Qvc3VibWl0JykuYnJvYWRjYXN0KHtcclxuICAgICAgICAkcHViOiRwdWIsXHJcbiAgICAgICAgZTplXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIH0pO1xyXG4gIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3RlciB7XHJcbiAgY29uc3RydWN0b3IobWFpbix1dGlscykge1xyXG4gICAgdGhpcy5tID0gbWFpbjtcclxuICAgIHRoaXMudSA9IHV0aWxzO1xyXG4gICAgdGhpcy5mb290ZXIoKTtcclxuICB9XHJcblxyXG4gIGZvb3RlcigpIHtcclxuICB9XHJcbn0gICIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciB7XHJcbiAgY29uc3RydWN0b3IobWFpbix1dGlscykge1xyXG4gICAgdGhpcy5tID0gbWFpbjtcclxuICAgIHRoaXMudSA9IHV0aWxzO1xyXG4gICAgdGhpcy5oZWFkZXIoKTtcclxuICB9XHJcblxyXG4gIGhlYWRlcigpIHtcclxuICAgIHZhciAkaGVhZGVyID0gJCgnaGVhZGVyLmRlZmF1bHQnKTtcclxuICAgIHZhciAkc2VhcmNoID0gJCgnW2RhdGEtc3Vifj1cInNlYXJjaFwiXScpO1xyXG5cclxuICAgIHRoaXMuX2QgPSB7XHJcbiAgICAgIGJ1aWxkaW5nczogd2luZG93Ll9kYXRhLmJ1aWxkaW5ncyxcclxuICAgICAgc2VhcmNoIDoge1xyXG4gICAgICAgICR0b2dnbGVfc3ViOiAkc2VhcmNoLFxyXG4gICAgICAgICR0b2dnbGVfcHViOiAkaGVhZGVyLmZpbmQoJ1tkYXRhLXB1Yn49XCJzZWFyY2gtdG9nZ2xlXCJdJyksXHJcbiAgICAgICAgJGhpZGVfcHViOiAkaGVhZGVyLmZpbmQoJ1tkYXRhLXB1Yn49XCJzZWFyY2gtaGlkZVwiXScpLFxyXG4gICAgICAgICRmb3JtX3B1YjogJGhlYWRlci5maW5kKCdbZGF0YS1wdWJ+PVwic2VhcmNoLWZvcm1cIl0nKSxcclxuICAgICAgfSxcclxuICAgICAgbG9naW46IHtcclxuICAgICAgICAkc2hvd19wdWI6ICQoJ1tkYXRhLXB1Yn49XCJsb2dpblwiXScpLFxyXG4gICAgICAgICRzdWJtaXRfcHViOiAkKCdbZGF0YS1wdWJ+PVwibG9naW4tZm9ybVwiXScpLFxyXG4gICAgICAgIGFjdGlvbjogd2luZG93Ll9kYXRhLnRfdXJsICsgXCIvbG9naW4ucGhwXCIsXHJcbiAgICAgICAgdGVtcGxhdGU6IF8udGVtcGxhdGUoJCgnI2xvZ2luX3RlbXBsYXRlJykuaHRtbCgpKVxyXG4gICAgICB9LFxyXG4gICAgICBtb2JpbGU6IHtcclxuICAgICAgICAkbWVudTogJGhlYWRlci5maW5kKCcubWVudScpLFxyXG4gICAgICAgICRwdWI6ICRoZWFkZXIuZmluZCgnW2RhdGEtcHVifj1cImhhbWJ1cmdlclwiXScpLFxyXG4gICAgICAgICRzdWI6ICRoZWFkZXIuZmluZCgnW2RhdGEtc3Vifj1cImhhbWJ1cmdlclwiXScpLFxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmFkaW8oJ2hlYWRlcicpLmJyb2FkY2FzdCh0aGlzLl9kKTtcclxuXHJcbiAgICB0aGlzLnNlYXJjaCgpO1xyXG4gICAgdGhpcy5sb2dpbigpO1xyXG5cclxuICAgIHRoaXMuX2QubW9iaWxlLiRwdWIub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgcmFkaW8oJ2hlYWRlci9tZW51L3RvZ2dsZScpLmJyb2FkY2FzdCh7XHJcblxyXG4gICAgICB9KVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZWFyY2goKSB7XHJcbiAgICAvL1RvZ2dsZSBzZWFyY2ggYmFyXHJcbiAgICB0aGlzLl9kLnNlYXJjaC4kdG9nZ2xlX3B1Yi5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICByYWRpbygnaGVhZGVyL3NlYXJjaC90b2dnbGUnKS5icm9hZGNhc3Qoe1xyXG4gICAgICAgICdhY3Rpb24nOid0b2dnbGUnXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9IaWRlIHNlYXJjaCBiYXJcclxuICAgIHRoaXMuX2Quc2VhcmNoLiRoaWRlX3B1Yi5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICByYWRpbygnaGVhZGVyL3NlYXJjaC90b2dnbGUnKS5icm9hZGNhc3Qoe1xyXG4gICAgICAgICdhY3Rpb24nOidoaWRlJ1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vU3VibWl0IHNlYXJjaCBmb3JtXHJcbiAgICB0aGlzLl9kLnNlYXJjaC4kZm9ybV9wdWIub24oJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICAgIHJhZGlvKCdoZWFkZXIvc2VhcmNoL3N1Ym1pdCcpLmJyb2FkY2FzdCh7XHJcbiAgICAgICAgZTplLFxyXG4gICAgICAgICRmb3JtOiQoZS5jdXJyZW50VGFyZ2V0KVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbG9naW4oKSB7XHJcbiAgICAvL1Nob3cgbG9naW4gdGVtcGxhdGVcclxuICAgIHRoaXMuX2QubG9naW4uJHNob3dfcHViLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIHZhciBzZWxlY3QgPSAkKGUuY3VycmVudFRhcmdldCkuYXR0cignZGF0YS1zZWxlY3QnKTtcclxuICAgICAgcmFkaW8oJ2hlYWRlci9sb2dpbi9zaG93JykuYnJvYWRjYXN0KHtcclxuICAgICAgICBzZWxlY3Q6c2VsZWN0XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9Gb3JtIHN1Ym1pc3Npb25cclxuICAgIHRoaXMubS4kYm9keS5vbignc3VibWl0Jyx0aGlzLl9kLmxvZ2luLiRzdWJtaXRfcHViLnNlbGVjdG9yLChlKSA9PiB7XHJcbiAgICAgIHZhciAkZm9ybSA9ICQoZS5jdXJyZW50VGFyZ2V0KS5jbG9zZXN0KCdmb3JtJyk7XHJcbiAgICAgIHZhciBidWlsZGluZyA9ICRmb3JtLmZpbmQoJ1tuYW1lPVwiYnVpbGRpbmdcIl0nKS52YWwoKTtcclxuICAgICAgdmFyIHBhc3N3b3JkID0gJGZvcm0uZmluZCgnW25hbWU9XCJwYXNzd29yZFwiXScpLnZhbCgpO1xyXG4gICAgICB2YXIgdXJsID0gJGZvcm0uZmluZCgnW25hbWU9XCJidWlsZGluZ1wiXSBvcHRpb246c2VsZWN0ZWQnKS5hdHRyKCdkYXRhLXVybCcpO1xyXG5cclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICByYWRpbygnaGVhZGVyL2xvZ2luL3N1Ym1pdCcpLmJyb2FkY2FzdCh7XHJcbiAgICAgICAgYnVpbGRpbmc6YnVpbGRpbmcsXHJcbiAgICAgICAgcGFzc3dvcmQ6cGFzc3dvcmQsXHJcbiAgICAgICAgdXJsOnVybFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxufSAgIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSB7XHJcbiAgY29uc3RydWN0b3IobWFpbix1dGlscykge1xyXG4gICAgdGhpcy5tID0gbWFpbjtcclxuICAgIHRoaXMudSA9IHV0aWxzO1xyXG5cclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuXHJcbiAgICB0aGlzLl9kID0ge1xyXG4gICAgICBzbGlkZXNob3dzOiB7XHJcbiAgICAgICAgJGhlcm9fc3ViOiAkKCdbZGF0YS1zdWJ+PVwiaGVyby1zbGlkZXNob3dcIl0nKSxcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByYWRpbygnaG9tZScpLmJyb2FkY2FzdCh0aGlzLl9kKTtcclxuXHJcbiAgICAvL1Nob3cgdmlkZW9cclxuICAgIHJhZGlvKCdob21lL3NsaWRlc2hvd3MvaGVybycpLmJyb2FkY2FzdCgpOyBcclxuICB9XHJcbn0gXHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIExheW91dCB7XHJcbiAgY29uc3RydWN0b3IobWFpbix1dGlscykge1xyXG4gICAgdGhpcy5tID0gbWFpbjtcclxuICAgIHRoaXMudSA9IHV0aWxzO1xyXG4gICAgdGhpcy5zZXR1cCgpO1xyXG4gIH1cclxuXHJcbiAgc2V0dXAoKSB7XHJcbiAgICB2YXIgJGxheW91dCA9ICQoJyNsYXlvdXQnKTtcclxuXHJcbiAgICByYWRpbygnYWN0aW9uL2xheW91dCcpLmJyb2FkY2FzdCh7XHJcbiAgICAgICRsYXlvdXQgOiAkbGF5b3V0XHJcbiAgICB9KTtcclxuICB9XHJcbn0iLCIvL2ltcG9ydCBQcmVzcyBmcm9tICcuL3BhZ2UvcHJlc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZSB7XHJcbiAgY29uc3RydWN0b3IobWFpbix1dGlscykge1xyXG4gICAgdGhpcy5tID0gbWFpbjtcclxuICAgIHRoaXMudSA9IHV0aWxzO1xyXG5cclxuICAgIC8vdGhpcy5wcmVzcyA9IG5ldyBQcmVzcyhtYWluLCB1dGlscyk7XHJcbiAgfVxyXG59ICIsImltcG9ydCBMYXlvdXQgZnJvbSAnLi9zdWIvbGF5b3V0JztcclxuaW1wb3J0IFBhZ2UgZnJvbSAnLi9zdWIvcGFnZSc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9zdWIvaGVhZGVyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL3N1Yi9mb290ZXInO1xyXG5pbXBvcnQgSG9tZSBmcm9tICcuL3N1Yi9ob21lJztcclxuaW1wb3J0IEVsZW1lbnRzIGZyb20gJy4vc3ViL2VsZW1lbnRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1YiB7XHJcbiAgY29uc3RydWN0b3IobWFpbix1dGlscykge1xyXG4gICAgdGhpcy5tID0gbWFpbjtcclxuICAgIHRoaXMudSA9IHV0aWxzO1xyXG5cclxuICAgIHRoaXMubGF5b3V0ID0gbmV3IExheW91dChtYWluLCB1dGlscyk7XHJcbiAgICB0aGlzLmhlYWRlciA9IG5ldyBIZWFkZXIobWFpbiwgdXRpbHMpO1xyXG4gICAgdGhpcy5lbGVtZW50cyA9IG5ldyBFbGVtZW50cyhtYWluLCB1dGlscyk7XHJcblxyXG5cclxuICAgIHRoaXMuaG9tZSAgICAgICAgPSBuZXcgSG9tZShtYWluLCB1dGlscyk7XHJcbiAgICB0aGlzLnBhZ2UgICAgICAgID0gbmV3IFBhZ2UobWFpbiwgdXRpbHMpO1xyXG4gIH1cclxufSAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFbGVtZW50cyB7XHJcbiAgY29uc3RydWN0b3IobWFpbix1dGlscykge1xyXG4gICAgdGhpcy5tID0gbWFpbjtcclxuICAgIHRoaXMudSA9IHV0aWxzO1xyXG4gICAgcmFkaW8oJ2VsZW1lbnRzJykuc3Vic2NyaWJlKChkYXRhKSA9PiB7dGhpcy5lbGVtZW50cyhkYXRhKTt9KTtcclxuICB9XHJcblxyXG4gIGVsZW1lbnRzKGRhdGEpIHtcclxuICAgIHRoaXMuY29udGFjdCA9IGRhdGEuY29udGFjdDtcclxuXHJcbiAgICByYWRpbygnY29udGFjdC9zdWJtaXQnKS5zdWJzY3JpYmUoKGRhdGEpID0+IHt0aGlzLmNvbnRhY3RTdWJtaXQoZGF0YSk7fSk7XHJcbiAgfVxyXG5cclxuICBjb250YWN0U3VibWl0KGQpIHtcclxuICAgIHZhciBlICAgICAgPSBkLmU7XHJcbiAgICB2YXIgJGZvcm0gID0gZC4kcHViO1xyXG4gICAgdmFyICRlcnJvciA9IHRoaXMuY29udGFjdC4kZXJyb3Jfc3ViO1xyXG5cclxuICAgICQucG9zdCggd2luZG93LmxvY2F0aW9uICwgJGZvcm0uc2VyaWFsaXplKCkgKyAnJnN1Ym1pdD10cnVlJyAsIChkKSA9PiB7XHJcbiAgICAgIHZhciAkaHRtbCA9ICQoZCk7XHJcblxyXG4gICAgICAvL1JlcGxhY2UgZm9ybXMgd2l0aCBjb250ZW50c1xyXG4gICAgICB2YXIgJHB1YnMgPSB0aGlzLmNvbnRhY3QuJHB1YjtcclxuICAgICAgdmFyICRuZXdfcHVicyA9ICRodG1sLmZpbmQoJ1tkYXRhLXB1Yn49XCJjb250YWN0L2Zvcm1cIl0nKTtcclxuICAgICAgdmFyICRuZXdfc3VicyA9ICRodG1sLmZpbmQoJ1tkYXRhLXN1Yn49XCJjb250YWN0L2Zvcm1cIl0nKTtcclxuXHJcbiAgICAgICRwdWJzLmVhY2goKGkscHViKSA9PiB7XHJcbiAgICAgICAgdmFyICRwdWIgPSAkKHB1Yik7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gaTtcclxuXHJcbiAgICAgICAgdmFyICRuZXdfcHViID0gJG5ld19wdWJzLmVxKGluZGV4KTtcclxuICAgICAgICBpZigkbmV3X3B1Yi5zaXplKCkgPT0gMCkge1xyXG4gICAgICAgICAgJG5ld19wdWIgPSAkbmV3X3N1YnMuZXEoaW5kZXgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIG5ld19odG1sID0gJG5ld19wdWIucGFyZW50KCkuaHRtbCgpO1xyXG5cclxuICAgICAgICAkcHViLnBhcmVudCgpLmh0bWwobmV3X2h0bWwpO1xyXG4gICAgICB9KVxyXG4gICAgfSk7XHJcbiAgfVxyXG59ICAgIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGFuZGluZyB7XHJcbiAgY29uc3RydWN0b3IobWFpbix1dGlscykge1xyXG4gICAgdGhpcy5tID0gbWFpbjtcclxuICAgIHRoaXMudSA9IHV0aWxzO1xyXG4gICAgcmFkaW8oJ2FjdGlvbi9mb290ZXInKS5zdWJzY3JpYmUoKGRhdGEpID0+IHt0aGlzLmZvb3RlcihkYXRhKTt9KTtcclxuICB9XHJcblxyXG4gIGZvb3RlcihkYXRhKSB7XHJcbiAgfVxyXG59ICAgICIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciB7XHJcbiAgY29uc3RydWN0b3IobWFpbix1dGlscykge1xyXG4gICAgdGhpcy5tID0gbWFpbjtcclxuICAgIHRoaXMudSA9IHV0aWxzO1xyXG5cclxuICAgIHJhZGlvKCdoZWFkZXInKS5zdWJzY3JpYmUoKGQpID0+IHt0aGlzLmluaXQoZCk7fSk7XHJcbiAgfVxyXG5cclxuICBpbml0KGQpIHtcclxuICAgIHRoaXMuX2QgPSBkO1xyXG5cclxuICAgIHJhZGlvKCdoZWFkZXIvc2VhcmNoL3RvZ2dsZScpLnN1YnNjcmliZSgoZCkgPT4ge3RoaXMuc2VhcmNoVG9nZ2xlKGQpO30pO1xyXG4gICAgcmFkaW8oJ2hlYWRlci9zZWFyY2gvc3VibWl0Jykuc3Vic2NyaWJlKChkKSA9PiB7dGhpcy5zZWFyY2hTdWJtaXQoZCk7fSk7XHJcbiAgICByYWRpbygnaGVhZGVyL2xvZ2luL3Nob3cnKS5zdWJzY3JpYmUoKGQpID0+IHt0aGlzLmxvZ2luU2hvdyhkKTt9KTtcclxuICAgIHJhZGlvKCdoZWFkZXIvbG9naW4vc3VibWl0Jykuc3Vic2NyaWJlKChkKSA9PiB7dGhpcy5sb2dpblN1Ym1pdChkKTt9KTtcclxuXHJcblxyXG4gICAgcmFkaW8oJ2hlYWRlci9tZW51L3RvZ2dsZScpLnN1YnNjcmliZSgoZCkgPT4ge3RoaXMubWVudShkKTt9KTtcclxuICB9XHJcblxyXG4gIHNlYXJjaFRvZ2dsZShkKSB7XHJcbiAgICB2YXIgYWN0aW9uID0gZC5hY3Rpb247XHJcblxyXG4gICAgaWYoYWN0aW9uID09ICd0b2dnbGUnKSB7XHJcbiAgICAgIHRoaXMuX2Quc2VhcmNoLiR0b2dnbGVfc3ViLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgIH0gZWxzZSBpZihhY3Rpb24gPT0gJ3Nob3cnKSB7XHJcbiAgICAgIHRoaXMuX2Quc2VhcmNoLiR0b2dnbGVfc3ViLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgIH0gZWxzZSBpZihhY3Rpb24gPT0gJ2hpZGUnKSB7XHJcbiAgICAgIHRoaXMuX2Quc2VhcmNoLiR0b2dnbGVfc3ViLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNlYXJjaFN1Ym1pdChkKSB7XHJcbiAgICB2YXIgZSA9IGQuZTtcclxuXHJcbiAgICAvL2UucHJldmVudERlZmF1bHQoKTtcclxuICB9XHJcblxyXG4gIGxvZ2luU2hvdyhkKSB7XHJcbiAgICB0aGlzLnUubGlnaHRib3guY3JlYXRlKHtcclxuICAgICAgYm94X2NvbnRlbnQ6dGhpcy5fZC5sb2dpbi50ZW1wbGF0ZSh7XHJcbiAgICAgICAgYnVpbGRpbmdzOnRoaXMuX2QuYnVpbGRpbmdzXHJcbiAgICAgIH0pLFxyXG4gICAgICBib3hfY2xhc3M6ICdsaWdodGJveC1sb2dpbicsXHJcbiAgICAgIGJveF9jc3M6IHtcclxuICAgICAgICBwYWRkaW5nOic0MHB4IDgwcHgnXHJcbiAgICAgIH0sXHJcbiAgICAgIHdyYXBfY3NzOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDoncmdiYSgwLDAsMCwwLjYpJ1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgbG9naW5TdWJtaXQoZCkge1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgdXJsOndpbmRvdy5fZGF0YS5hX3VybCxcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICAnYWN0aW9uJzogJ2Zvcm1sb2dpbicsXHJcbiAgICAgICAgJ2RhdGEnIDogZFxyXG4gICAgICB9LFxyXG4gICAgICAnZGF0YVR5cGUnIDonanNvbicsXHJcbiAgICAgIGNvbXBsZXRlOiAocikgPT4ge1xyXG4gICAgICAgIGlmKHIucmVzcG9uc2VUZXh0ICE9IDApIHtcclxuICAgICAgICAgIHRoaXMudS5jb29raWVzLnNldCgnbG9naW4nLHIucmVzcG9uc2VUZXh0LDEpO1xyXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gZC51cmw7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGFsZXJ0KCdQbGVhc2UgY2hlY2sgdGhlIHBhc3N3b3JkIGlzIGNvcnJlY3QnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBtZW51KGQpIHtcclxuICAgIHZhciAkcHViID0gdGhpcy5fZC5tb2JpbGUuJHB1YjtcclxuICAgIHZhciAkc3ViID0gdGhpcy5fZC5tb2JpbGUuJHN1YjtcclxuXHJcbiAgICAvL0lzIGFscmVhZHkgYWN0aXZlP1xyXG4gICAgdmFyIGlzX2FjdGl2ZSA9ICRwdWIuaGFzQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuICAgIGlmKGlzX2FjdGl2ZSkge1xyXG4gICAgICAkcHViLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgJHN1Yi5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkcHViLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgJHN1Yi5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59ICAgICIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUge1xyXG4gIGNvbnN0cnVjdG9yKG1haW4sdXRpbHMpIHtcclxuICAgIHRoaXMubSA9IG1haW47XHJcbiAgICB0aGlzLnUgPSB1dGlscztcclxuXHJcbiAgICBjb25zb2xlLmxvZygnc3ViIGhvbWUnKTtcclxuXHJcbiAgICByYWRpbygnaG9tZScpLnN1YnNjcmliZSgoZGF0YSkgPT4ge3RoaXMuaW5pdChkYXRhKTt9KTtcclxuICB9XHJcblxyXG4gIGluaXQoZCkge1xyXG4gICAgdGhpcy5fZCA9IGQ7XHJcblxyXG4gICAgY29uc29sZS5sb2codGhpcy5fZCk7XHJcblxyXG4gICAgcmFkaW8oJ2hvbWUvc2xpZGVzaG93cy9oZXJvJykuc3Vic2NyaWJlKChkYXRhKSA9PiB7dGhpcy5oZXJvKGRhdGEpO30pOyAgICAgICAgICAgIFxyXG4gIH1cclxuXHJcbiAgaGVybyhkKSB7XHJcbiAgICB2YXIgJHN1YiA9IHRoaXMuX2Quc2xpZGVzaG93cy4kaGVyb19zdWI7XHJcbiAgICAkc3ViLmZpbmQoJz5kaXYnKS5zaG93KCk7XHJcbiAgICAkc3ViLmJ4U2xpZGVyKCk7XHJcbiAgfVxyXG59ICBcclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF5b3V0IHtcclxuICBjb25zdHJ1Y3RvcihtYWluLHV0aWxzKSB7XHJcbiAgICB0aGlzLm0gPSBtYWluO1xyXG4gICAgdGhpcy51ID0gdXRpbHM7XHJcbiAgICByYWRpbygnYWN0aW9uL2xheW91dCcpLnN1YnNjcmliZSgoZGF0YSkgPT4ge3RoaXMubGF5b3V0KGRhdGEpO30pO1xyXG4gIH1cclxuXHJcbiAgbGF5b3V0KGRhdGEpIHtcclxuICAgIHRoaXMuJGxheW91dCA9IGRhdGEuJGxheW91dDtcclxuXHJcbiAgICAvL3N1YnNjcmlwdGlvbnNcclxuICAgIHJhZGlvKCd3aW5kb3cvcmVzaXplJykuc3Vic2NyaWJlKChzdWJfZGF0YSkgPT4ge3RoaXMucmVzaXplKHN1Yl9kYXRhKTt9KTtcclxuICB9XHJcblxyXG4gIHJlc2l6ZShkYXRhKSB7XHJcbiAgICBjb25zb2xlLmxvZygndXBkYXRlIGxheW91dCBoZWlnaHQnKTtcclxuICAgIHRoaXMud2luZG93X2hlaWdodCA9IHRoaXMubS4kd2luZG93LmhlaWdodCgpO1xyXG5cclxuICAgIHRoaXMuJGxheW91dC5jc3MoeyBcclxuICAgICAgJ21pbi1oZWlnaHQnOiB0aGlzLndpbmRvd19oZWlnaHRcclxuICAgIH0pO1xyXG5cclxuICAgIC8vUmVtb3ZlIGxvYWRpbmcgY2xhc3NcclxuICAgIGlmKHRoaXMuJGxheW91dC5oYXNDbGFzcygnbG9hZGluZycpKSB7XHJcbiAgICAgIHRoaXMuJGxheW91dC5yZW1vdmVDbGFzcygnbG9hZGluZycpXHJcbiAgICB9XHJcbiAgfVxyXG59ICAgIiwiLy9pbXBvcnQgUHJlc3MgZnJvbSAnLi9wYWdlL3ByZXNzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2Uge1xyXG4gIGNvbnN0cnVjdG9yKG1haW4sdXRpbHMpIHtcclxuICAgIHRoaXMubSA9IG1haW47XHJcbiAgICB0aGlzLnUgPSB1dGlscztcclxuXHJcbiAgICAvL3RoaXMucHJlc3MgPSBuZXcgUHJlc3MobWFpbiwgdXRpbHMpO1xyXG4gIH1cclxufSAgICIsImltcG9ydCBIZWxwZXJzIGZyb20gJy4vdXRpbHMvaGVscGVycy9oZWxwZXJzJztcclxuaW1wb3J0IFZlY3RvcnMgZnJvbSAnLi91dGlscy9oZWxwZXJzL3ZlY3RvcnMnO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICcuL3V0aWxzL2hlbHBlcnMvY29va2llcyc7XHJcbmltcG9ydCBIYXNoIGZyb20gJy4vdXRpbHMvaGVscGVycy9oYXNoJztcclxuaW1wb3J0IExpZ2h0Ym94IGZyb20gJy4vdXRpbHMvbGlnaHRib3gvbWFpbic7XHJcblxyXG5pbXBvcnQgUHJlbG9hZCBmcm9tICcuL3V0aWxzL3ByZWxvYWQvcHJlbG9hZCc7XHJcbmltcG9ydCBXaW5kb3cgZnJvbSAnLi91dGlscy93aW5kb3cvcHViJztcclxuaW1wb3J0IE5ld3NsZXR0ZXIgZnJvbSAnLi91dGlscy9uZXdzbGV0dGVyL21haWxjaGltcCc7XHJcbmltcG9ydCBGaXhlcyBmcm9tICcuL3V0aWxzL2hlbHBlcnMvZml4ZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXRpbHMge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgIHRoaXMucHJlbG9hZCAgICA9IG5ldyBQcmVsb2FkKCk7XHJcbiAgICB0aGlzLm5ld3NsZXR0ZXIgPSBuZXcgTmV3c2xldHRlcigpO1xyXG4gICAgdGhpcy5oZWxwZXJzICAgID0gbmV3IEhlbHBlcnMoKTtcclxuICAgIHRoaXMudmVjdG9ycyAgICA9IG5ldyBWZWN0b3JzKCk7XHJcbiAgICB0aGlzLmNvb2tpZXMgICAgPSBuZXcgQ29va2llcygpO1xyXG4gICAgdGhpcy5oYXNoICAgICAgID0gbmV3IEhhc2goKTsgXHJcbiAgICB0aGlzLmxpZ2h0Ym94ICAgPSBuZXcgTGlnaHRib3goKTtcclxuICAgIHRoaXMud2luZG93ICAgICA9IG5ldyBXaW5kb3coKTtcclxuXHJcbiAgICAvL0ZpeGVzXHJcbiAgICB0aGlzLmZpeGVzICAgICAgPSBuZXcgRml4ZXMoKTsgXHJcbiAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29va2llcyB7XHJcbiAgZ2V0KGNfbmFtZSkge1xyXG4gICAgICB2YXIgaSwgeCwgeSwgQVJSY29va2llcyA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjtcIik7XHJcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBBUlJjb29raWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgeCA9IEFSUmNvb2tpZXNbaV0uc3Vic3RyKDAsIEFSUmNvb2tpZXNbaV0uaW5kZXhPZihcIj1cIikpO1xyXG4gICAgICAgIHkgPSBBUlJjb29raWVzW2ldLnN1YnN0cihBUlJjb29raWVzW2ldLmluZGV4T2YoXCI9XCIpICsgMSk7XHJcbiAgICAgICAgeCA9IHgucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgXCJcIik7XHJcbiAgICAgICAgaWYgKHggPT0gY19uYW1lKSB7XHJcbiAgICAgICAgICByZXR1cm4gdW5lc2NhcGUoeSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHNldChjX25hbWUsIHZhbHVlLCBleGhvdXJzKSB7XHJcbiAgICB2YXIgdGltZSA9IG5ldyBEYXRlKCk7XHJcbiAgICB2YXIgb2Zmc2V0ID0gdGltZS5nZXRUaW1lKCk7XHJcbiAgICBvZmZzZXQgKz0gKDM2MDAgKiAxMDAwKSAqIGV4aG91cnM7XHJcbiAgICB0aW1lLnNldFRpbWUob2Zmc2V0KTtcclxuXHJcbiAgICBkb2N1bWVudC5jb29raWUgPSBjX25hbWUgKyBcIj1cIiArIGVzY2FwZSh2YWx1ZSkgKyBcIjsgZXhwaXJlcz1cIiArIHRpbWUudG9HTVRTdHJpbmcoKTtcclxuICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGaXhlcyB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmNvbnNvbGUoKTsgIC8vQXZvaWQgbm8gY29uc29sZSBlcnJvcnNcclxuICAgIC8vIHRoaXMuaG92ZXJ0YXAoKTsgLy9GaXggZG91YmxlIHRhcHBpbmcgb24gbW9iaWxlIHdlYmtpdFxyXG4gIH1cclxuXHJcbiAgY29uc29sZSgpIHsgXHJcbiAgICAoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIG1ldGhvZDtcclxuICAgICAgICB2YXIgbm9vcCA9IGZ1bmN0aW9uKCkge307XHJcbiAgICAgICAgdmFyIG1ldGhvZHMgPSBbXHJcbiAgICAgICAgICAgICdhc3NlcnQnLCAnY2xlYXInLCAnY291bnQnLCAnZGVidWcnLCAnZGlyJywgJ2RpcnhtbCcsICdlcnJvcicsXHJcbiAgICAgICAgICAgICdleGNlcHRpb24nLCAnZ3JvdXAnLCAnZ3JvdXBDb2xsYXBzZWQnLCAnZ3JvdXBFbmQnLCAnaW5mbycsICdsb2cnLFxyXG4gICAgICAgICAgICAnbWFya1RpbWVsaW5lJywgJ3Byb2ZpbGUnLCAncHJvZmlsZUVuZCcsICd0YWJsZScsICd0aW1lJywgJ3RpbWVFbmQnLFxyXG4gICAgICAgICAgICAndGltZVN0YW1wJywgJ3RyYWNlJywgJ3dhcm4nXHJcbiAgICAgICAgXTtcclxuICAgICAgICB2YXIgbGVuZ3RoID0gbWV0aG9kcy5sZW5ndGg7XHJcbiAgICAgICAgdmFyIGNvbnNvbGUgPSAod2luZG93LmNvbnNvbGUgPSB3aW5kb3cuY29uc29sZSB8fCB7fSk7XHJcblxyXG4gICAgICAgIHdoaWxlIChsZW5ndGgtLSkge1xyXG4gICAgICAgICAgICBtZXRob2QgPSBtZXRob2RzW2xlbmd0aF07XHJcblxyXG4gICAgICAgICAgICAvLyBPbmx5IHN0dWIgdW5kZWZpbmVkIG1ldGhvZHMuXHJcbiAgICAgICAgICAgIGlmICghY29uc29sZVttZXRob2RdKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlW21ldGhvZF0gPSBub29wO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSgpKTtcclxuICB9XHJcblxyXG4gIGhvdmVydGFwKCkge1xyXG4gICAgJCgnYm9keScpLm9uKCd0b3VjaGVuZCcsJ2EsIHNwYW4sIGJ1dHRvbiwgaW5wdXQnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICQoZS5jdXJyZW50VGFyZ2V0KS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59ICIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhhc2gge1xyXG4gIHB1YigpIHtcclxuICAgICQod2luZG93KS5iaW5kKCAnbG9hZCBoYXNoY2hhbmdlJywgKGUpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ3B1YiBoYXNoIGNoYW5nZScpO1xyXG4gICAgICByYWRpbygnd2luZG93L2hhc2gvY2hhbmdlJykuYnJvYWRjYXN0KHtcclxuICAgICAgICBlOmUsXHJcbiAgICAgICAgaGFzaDpsb2NhdGlvbi5oYXNoLnNsaWNlKDEpXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7IFxyXG4gIH1cclxufSAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBIZWxwZXJzIHtcclxuICBzbHVnaWZ5KHRleHQpIHtcclxuICAgIHJldHVybiB0ZXh0LnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvW15cXHcgXSsvZywnJykucmVwbGFjZSgvICsvZywnLScpO1xyXG4gIH1cclxufSAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBWZWN0b3JzIHtcclxuXHJcbiAgLy9BZGQgdmVjdG9yc1xyXG4gIGFkZChwMSxwMikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgeDpwMS54ICsgcDIueCxcclxuICAgICAgeTpwMS55ICsgcDIueVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8vTXVsdGlwbHkgdmVjdG9yXHJcbiAgbXVsdGlwbHkocDEsdmFsKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB4OiBwMS54ICogdmFsLFxyXG4gICAgICB5OiBwMS55ICogdmFsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLy9Ob3JtYWxpemVzIHRoZSB2ZWN0b3IgdG8gdmFsdWVzIGJldHdlZW4gLTEgYW5kIDFcclxuICBub3JtYWxpc2UocDEsIG5ld0xlbmd0aCkge1xyXG4gICAgdmFyIGwgPSB0aGlzLmxlbmd0aChwMSk7XHJcbiAgICBcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHg6IChwMS54IC8gbCkgKiBuZXdMZW5ndGgsXHJcbiAgICAgIHk6IChwMS55IC8gbCkgKiBuZXdMZW5ndGhcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAvL1JldHVybnMgdGhlIHZlY3RvciBiZXR3ZWVuIHR3byBwb2ludHMuXHJcbiAgYmV0d2VlbihwMSxwMikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgeDogcDEueCAtIHAyLngsXHJcbiAgICAgIHk6IHAxLnkgLSBwMi55XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLy9HZXQgbGVuZ3RoIG9mIHZlY3RvclxyXG4gIGxlbmd0aChwKSB7IFxyXG4gICAgcmV0dXJuIE1hdGguc3FydChwLnggKiBwLnggKyBwLnkgKiBwLnkpO1xyXG4gIH1cclxufSAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluIHtcclxuICBjcmVhdGUobmV3X29wdGlvbnMpIHtcclxuICAgIHZhciBvcHRpb25zID0ge1xyXG4gICAgICBib3hfY2xhc3M6ICcnLFxyXG4gICAgICBib3hfaHRtbDogJycsXHJcbiAgICAgIHdyYXBfY3NzOiB7XHJcbiAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgICAgICAgbGVmdDogMCxcclxuICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICBiYWNrZ3JvdW5kOiAnI2ZmZicsXHJcbiAgICAgICAgJ3otaW5kZXgnOiA5OTk5OTlcclxuICAgICAgfSxcclxuICAgICAgdGFibGVfY3NzOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ3RhYmxlJyxcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIGhlaWdodDogJzEwMCUnXHJcbiAgICAgIH0sXHJcbiAgICAgIHJvd19jc3M6IHtcclxuICAgICAgICBkaXNwbGF5OiAndGFibGUtcm93J1xyXG4gICAgICB9LFxyXG4gICAgICBjZWxsX2Nzczoge1xyXG4gICAgICAgIGRpc3BsYXk6ICd0YWJsZS1jZWxsJyxcclxuICAgICAgICAndGV4dC1hbGlnbic6ICdjZW50ZXInLFxyXG4gICAgICAgICd2ZXJ0aWNhbC1hbGlnbic6ICdtaWRkbGUnXHJcbiAgICAgIH0sXHJcbiAgICAgIGJveF9jc3M6IHtcclxuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuICAgICAgICAnKmRpc3BsYXknOiAnaW5saW5lJyxcclxuICAgICAgICB3aWR0aDogJ2F1dG8nLFxyXG4gICAgICAgIGhlaWdodDogJ2F1dG8nLFxyXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgIHBhZGRpbmc6ICcyMHB4JyxcclxuICAgICAgICBib3JkZXI6ICdub25lJyxcclxuICAgICAgICBiYWNrZ3JvdW5kOiAnI2ZmZidcclxuICAgICAgfSxcclxuICAgICAgY2FsbGJhY2s6IGZhbHNlXHJcbiAgICB9O1xyXG5cclxuICAgICQuZXh0ZW5kKHRydWUsIG9wdGlvbnMsIG5ld19vcHRpb25zKTtcclxuXHJcbiAgICB2YXIgJGxpZ2h0Ym94X3dyYXAgPSAkKCc8ZGl2IGNsYXNzPVwibGlnaHRib3gtd3JhcFwiIC8+JykuYXBwZW5kVG8oJ2JvZHknKTtcclxuICAgIHZhciAkbGlnaHRib3hfdGFibGUgPSAkKCc8ZGl2IGNsYXNzPVwibGlnaHRib3gtdGFibGVcIiAvPicpLmFwcGVuZFRvKCRsaWdodGJveF93cmFwKTtcclxuICAgIHZhciAkbGlnaHRib3hfcm93ID0gJCgnPGRpdiBjbGFzcz1cImxpZ2h0Ym94LXJvd1wiIC8+JykuYXBwZW5kVG8oJGxpZ2h0Ym94X3RhYmxlKTtcclxuICAgIHZhciAkbGlnaHRib3hfY2VsbCA9ICQoJzxkaXYgY2xhc3M9XCJsaWdodGJveC1jZWxsXCIgLz4nKS5hcHBlbmRUbygkbGlnaHRib3hfcm93KTtcclxuICAgIHZhciAkbGlnaHRib3hfYm94ID0gJCgnPGRpdiBjbGFzcz1cImxpZ2h0Ym94LWJveFwiIC8+JykuYXBwZW5kVG8oJGxpZ2h0Ym94X2NlbGwpO1xyXG5cclxuICAgICRsaWdodGJveF93cmFwLmNzcyhvcHRpb25zLndyYXBfY3NzKTtcclxuICAgICRsaWdodGJveF90YWJsZS5jc3Mob3B0aW9ucy50YWJsZV9jc3MpO1xyXG4gICAgJGxpZ2h0Ym94X3Jvdy5jc3Mob3B0aW9ucy5yb3dfY3NzKTtcclxuICAgICRsaWdodGJveF9jZWxsLmNzcyhvcHRpb25zLmNlbGxfY3NzKTtcclxuICAgICRsaWdodGJveF9ib3guY3NzKG9wdGlvbnMuYm94X2Nzcyk7XHJcblxyXG4gICAgJGxpZ2h0Ym94X2JveC5hZGRDbGFzcyhvcHRpb25zLmJveF9jbGFzcyk7XHJcbiAgICAkbGlnaHRib3hfYm94Lmh0bWwob3B0aW9ucy5ib3hfY29udGVudCk7XHJcblxyXG5cclxuICAgIC8vY2xvc2UgY29uZGl0aW9uc1xyXG4gICAgJCgnLmxpZ2h0Ym94LWNlbGwnKS5maW5kKCcuY2xvc2UsIFtkYXRhLXB1Yj1jbG9zZV0nKS5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICB0aGlzLnJlbW92ZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnYm9keScpLmtleXVwKChlKSA9PiAge1xyXG4gICAgICBpZiAoZS53aGljaCA9PSAyNykge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5saWdodGJveC1jZWxsJykub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgaWYoJChlLnRhcmdldCkuaGFzQ2xhc3MoJ2xpZ2h0Ym94LWNlbGwnKSkgdGhpcy5yZW1vdmUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICh0eXBlb2Yob3B0aW9ucy5jYWxsYmFjaykgPT09ICdmdW5jdGlvbicpIG9wdGlvbnMuY2FsbGJhY2soJGxpZ2h0Ym94X3dyYXApO1xyXG4gIH1cclxuICBcclxuICByZW1vdmUoKSB7XHJcbiAgICAkKCcubGlnaHRib3gtd3JhcCcpLmZhZGVPdXQoMTAwMCwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICQoJy5saWdodGJveC13cmFwJykucmVtb3ZlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdzbGV0dGVyIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8vdGhpcy5wdWIoKTtcclxuICB9XHJcbiAgXHJcbiAgcHViKCkge1xyXG4gICAgdmFyICRmb3JtID0gJCgnI25ld3NsZXR0ZXInKTtcclxuXHJcbiAgICAvL09uIGNsaWNrIHNlbmQgb3BlbiAnY2FzdFxyXG4gICAgJGZvcm0ub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICBjb25zb2xlLmxvZygnYnJvYWRjYXN0IG5ld3NsZXR0ZXIgc2lnbnVwJyk7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgcmFkaW8oJ2FjdGlvbi9uZXdzbGV0dGVyJykuYnJvYWRjYXN0KHtcclxuICAgICAgICBhY3Rpb24gOiAnc2lnbnVwJyxcclxuICAgICAgICBldmVudCA6IGUsXHJcbiAgICAgICAgJGZvcm0gOiAkZm9ybVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBcclxuICBzdWIoKSB7XHJcbiAgICByYWRpbygnYWN0aW9uL25ld3NsZXR0ZXInKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcclxuICAgICAgdmFyICRmb3JtICAgID0gZGF0YS4kZm9ybTtcclxuICAgICAgdmFyICRzdWNjZXNzID0gJGZvcm0uZmluZCgnLnN1Y2Nlc3MnKTtcclxuICAgICAgdmFyICRlcnJvciAgID0gJGZvcm0uZmluZCgnLmVycm9yJyk7XHJcblxyXG4gICAgICB2YXIgYWN0aW9uID0gU3RyaW5nKCRmb3JtLmF0dHIoJ2FjdGlvbicpKTtcclxuXHJcbiAgICAgICRlcnJvci5oaWRlKCk7XHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogJGZvcm0uYXR0cignbWV0aG9kJyksXHJcbiAgICAgICAgdXJsOiBhY3Rpb24sXHJcbiAgICAgICAgZGF0YTogJGZvcm0uc2VyaWFsaXplKCksXHJcbiAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbihlcnIpIHtcclxuICAgICAgICAgIGFsZXJ0KFwiQ291bGQgbm90IGNvbm5lY3QgdG8gdGhlIHJlZ2lzdHJhdGlvbiBzZXJ2ZXIuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICBpZiAoZGF0YS5yZXN1bHQgIT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICAgICAgLy8gU29tZXRoaW5nIHdlbnQgd3JvbmcsIGRvIHNvbWV0aGluZyB0byBub3RpZnkgdGhlIHVzZXIuIG1heWJlIGFsZXJ0KGRhdGEubXNnKTtcclxuICAgICAgICAgICAgJGVycm9yLnRleHQoJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3MnKS5zaG93KCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBJdCB3b3JrZWQsIGNhcnJ5IG9uLi4uXHJcbiAgICAgICAgICAgICRmb3JtLmZpbmQoJ2lucHV0JykudmFsKCcnKTtcclxuICAgICAgICAgICAgJHN1Y2Nlc3Muc2hvdygpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcmVsb2FkIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuX2ZpbGVzID0gW107XHJcblxyXG4gICAgLy9DcmVhdGUgcHJlbG9hZCBkaXZcclxuICAgIGlmICghJCgnI3ByZWxvYWQnKS5pcygnKicpKSB7XHJcbiAgICAgIHRoaXMuJHByZWxvYWQgPSAkKCc8ZGl2IGlkPVwicHJlbG9hZFwiIC8+JykuYXBwZW5kVG8oJ2JvZHknKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuJHByZWxvYWQgPSAkKCcjcHJlbG9hZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuJHByZWxvYWQuaGlkZSgpO1xyXG4gIH1cclxuXHJcbiAgZmlsZXMob3B0cykge1xyXG4gICAgdGhpcy5fZmlsZXMgPSBvcHRzLnNyYztcclxuXHJcbiAgICB2YXIgZmlsZSA9IHRoaXMuX2ZpbGVzLnNoaWZ0KCk7XHJcbiAgICBpZiAodHlwZW9mKGZpbGUpICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIHRoaXMuZmlsZSh7XHJcbiAgICAgICAgc3JjOmZpbGUsXHJcbiAgICAgICAgY2FsbGJhY2s6IChkKSA9PiB7XHJcbiAgICAgICAgICAvL0dvIHRvIHRoZSBuZXh0IGZpbGVcclxuICAgICAgICAgIHRoaXMuZmlsZXMoe1xyXG4gICAgICAgICAgICBzcmM6IHRoaXMuX2ZpbGVzLCBcclxuICAgICAgICAgICAgY2FsbGJhY2s6IG9wdHMuY2FsbGJhY2tcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZygncnVuIGNhbGxiYWNrIScpO1xyXG4gICAgICB0aGlzLmNsZWFyKCk7XHJcbiAgICAgIGlmKHR5cGVvZihvcHRzLmNhbGxiYWNrKSAhPSAndW5kZWZpbmVkJykgb3B0cy5jYWxsYmFjaygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZmlsZShvcHRzKSB7XHJcbiAgICB2YXIgc3JjICAgID0gb3B0cy5zcmMucmVwbGFjZSgvXFxcIi9nLCAnICcpO1xyXG4gICAgdmFyIHR5cGUgICA9IHRoaXMuZ2V0RmlsZVR5cGUob3B0cy5zcmMpO1xyXG4gICAgdmFyICRwICAgICA9IHRoaXMuJHByZWxvYWQ7XHJcbiAgICB2YXIgaGFzX2NiID0gKHR5cGVvZihvcHRzLmNhbGxiYWNrKSAhPSAndW5kZWZpbmVkJyk7XHJcblxyXG4gICAgLy9CYWlsIGlmIHdlIGRvbid0IHJlY29nbmlzZSB0aGUgdHlwZVxyXG4gICAgaWYodHlwZSA9PSBmYWxzZSkge1xyXG4gICAgICBvcHRzLmNhbGxiYWNrKGQpOyBcclxuICAgIC8vSGFuZGxlIHR5cGVzXHJcbiAgICB9IGVsc2UgaWYodHlwZSA9PSAnaW1nJykge1xyXG4gICAgICB2YXIgJGZpbGUgPSAkKCc8aW1nIC8+JylcclxuICAgICAgICAuYXR0cignc3JjJywgc3JjKVxyXG4gICAgICAgIC5hcHBlbmRUbygkcCk7XHJcblxyXG4gICAgICBpZihoYXNfY2IpIHtcclxuICAgICAgICAkZmlsZS5sb2FkKChkKSA9PiB7XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdsb2FkZWQgaW1hZ2UnKTtcclxuICAgICAgICAgICBvcHRzLmNhbGxiYWNrKGQpOyBcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmKHR5cGUgPT0gJ2pzJykge1xyXG4gICAgICAkLmdldFNjcmlwdCggc3JjLCAoZCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdsb2FkZWQganMnKTtcclxuICAgICAgICBpZihoYXNfY2IpIG9wdHMuY2FsbGJhY2soZCk7IFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSBpZih0eXBlID09ICdjc3MnKSB7XHJcbiAgICAgIHZhciAkZmlsZSA9ICQoJzxsaW5rIC8+JylcclxuICAgICAgICAuYXR0cignaHJlZicsIHNyYylcclxuICAgICAgICAuYXR0cigncmVsJywgJ3N0eWxlc2hlZXQnKVxyXG4gICAgICAgIC5hcHBlbmRUbygkcCk7XHJcblxyXG4gICAgICBpZihoYXNfY2IpIHtcclxuICAgICAgICAkZmlsZS5sb2FkKChkKSA9PiB7XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdsb2FkZWQgY3NzJyk7XHJcbiAgICAgICAgICAgb3B0cy5jYWxsYmFjayhkKTsgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGltYWdlKG9wdHMpIHtcclxuICAgIHRoaXMuZmlsZShvcHRzKTtcclxuICB9XHJcblxyXG4gIGltYWdlcyhvcHRzKSB7XHJcbiAgICB0aGlzLmZpbGVzKG9wdHMpO1xyXG4gIH1cclxuXHJcbiAgY2xlYXIoKSB7XHJcbiAgICB0aGlzLl9pbWFnZXMgPSBbXTtcclxuICAgICQoJyNwcmVsb2FkIGltZycpLnJlbW92ZSgpO1xyXG4gICAgJCgnI3ByZWxvYWQgc2NyaXB0JykucmVtb3ZlKCk7XHJcbiAgICAkKCcjcHJlbG9hZCBzdHlsZScpLnJlbW92ZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RmlsZVR5cGUoc3JjKSB7XHJcbiAgICBjb25zb2xlLmxvZyhzcmMpO1xyXG4gICAgdmFyIGV4dCA9IHNyYy5zdWJzdHIoKHNyYy5sYXN0SW5kZXhPZignLicpICsxKSk7XHJcbiAgICBpZigvKGpzKSQvaWcudGVzdChleHQpKSB7XHJcbiAgICAgIHJldHVybiAnanMnO1xyXG4gICAgfSBlbHNlIGlmICgvKGNzcykkL2lnLnRlc3QoZXh0KSkge1xyXG4gICAgICByZXR1cm4gJ2Nzcyc7XHJcbiAgICB9IGVsc2UgaWYgKC8oanBnfHBuZ3xnaWYpJC9pZy50ZXN0KGV4dCkpIHtcclxuICAgICAgcmV0dXJuICdpbWcnO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQdWIge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLy8gdGhpcy5zY3JvbGwoKTtcclxuICAgIC8vIHRoaXMucmVzaXplKCk7XHJcbiAgICAvLyB0aGlzLmxvYWQoKTtcclxuICAgIHRoaXMuJHdpbmRvdyA9ICQod2luZG93KTtcclxuICB9XHJcbiAgXHJcbiAgc2Nyb2xsKCkge1xyXG4gICAgdmFyICR3aW5kb3cgPSB0aGlzLiR3aW5kb3c7XHJcblxyXG4gICAgJHdpbmRvdy5vbignbG9hZCBzY3JvbGwnLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2Nyb2xsUHViKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlc2l6ZSgpIHtcclxuICAgIHZhciAkd2luZG93ID0gdGhpcy4kd2luZG93O1xyXG5cclxuICAgICR3aW5kb3cub24oJ2xvYWQgcmVzaXplJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLnJlc2l6ZVB1YigpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzY3JvbGxQdWIoKSB7XHJcbiAgICB2YXIgJHdpbmRvdyA9IHRoaXMuJHdpbmRvdztcclxuICAgIHJhZGlvKCd3aW5kb3cvc2Nyb2xsJykuYnJvYWRjYXN0KHtcclxuICAgICAgc2Nyb2xsVG9wIDogJHdpbmRvdy5zY3JvbGxUb3AoKVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXNpemVQdWIoKSB7XHJcbiAgICB2YXIgJHdpbmRvdyA9IHRoaXMuJHdpbmRvdztcclxuICAgIHJhZGlvKCd3aW5kb3cvcmVzaXplJykuYnJvYWRjYXN0KHtcclxuICAgICAgd2lkdGggIDogJHdpbmRvdy53aWR0aCgpLFxyXG4gICAgICBoZWlnaHQgOiAkd2luZG93LmhlaWdodCgpXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGxvYWQoKSB7XHJcbiAgICB2YXIgJHdpbmRvdyA9IHRoaXMuJHdpbmRvdztcclxuXHJcbiAgICAkd2luZG93Lm9uKCdsb2FkJywgKCkgPT4ge1xyXG4gICAgICByYWRpbygnd2luZG93L2xvYWQnKS5icm9hZGNhc3Qoe1xyXG4gICAgICAgIHdpZHRoICA6ICR3aW5kb3cud2lkdGgoKSxcclxuICAgICAgICBoZWlnaHQgOiAkd2luZG93LmhlaWdodCgpLFxyXG4gICAgICAgIHNjcm9sbFRvcCA6ICR3aW5kb3cuc2Nyb2xsVG9wKClcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19
