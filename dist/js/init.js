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
  }

  _createClass(Init, [{
    key: 'init',
    value: function init() {
      console.log('initialising');
      this.sub = new _sub2.default(this, this.utils);
      this.pub = new _pub2.default(this, this.utils);
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

    radio('home').subscribe(function (data) {
      _this.init(data);
    });
  }

  _createClass(Home, [{
    key: 'init',
    value: function init(d) {
      var _this2 = this;

      this._d = d;

      radio('home/slideshows/hero').subscribe(function (data) {
        _this2.hero(data);
      });
    }
  }, {
    key: 'hero',
    value: function hero(d) {
      var $sub = this._d.slideshows.$hero_sub;

      //TODO: Use a non bxslider slideshow
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

var _hash = require('./utils/helpers/hash');

var _hash2 = _interopRequireDefault(_hash);

var _preload = require('./utils/preload/preload');

var _preload2 = _interopRequireDefault(_preload);

var _pub = require('./utils/window/pub');

var _pub2 = _interopRequireDefault(_pub);

var _mailchimp = require('./utils/newsletter/mailchimp');

var _mailchimp2 = _interopRequireDefault(_mailchimp);

var _fixes = require('./utils/helpers/fixes');

var _fixes2 = _interopRequireDefault(_fixes);

var _legacy = require('./utils/lbox/legacy');

var _legacy2 = _interopRequireDefault(_legacy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Utils = function Utils() {
  _classCallCheck(this, Utils);

  this.fixes = new _fixes2.default();
  this.preload = new _preload2.default();
  this.newsletter = new _mailchimp2.default();
  this.helpers = new _helpers2.default();
  this.hash = new _hash2.default();
  this.lightbox = new _legacy2.default();
  this.window = new _pub2.default();
};

exports.default = Utils;

},{"./utils/helpers/fixes":17,"./utils/helpers/hash":18,"./utils/helpers/helpers":19,"./utils/lbox/legacy":20,"./utils/newsletter/mailchimp":21,"./utils/preload/preload":22,"./utils/window/pub":23}],17:[function(require,module,exports){
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
  }]);

  return Fixes;
}();

exports.default = Fixes;

},{}],18:[function(require,module,exports){
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

},{}],19:[function(require,module,exports){
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
  }, {
    key: 'getCookie',
    value: function getCookie(c_name) {
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
    key: 'setCookie',
    value: function setCookie(c_name, value, exhours) {
      var time = new Date();
      var offset = time.getTime();
      offset += 3600 * 1000 * exhours;
      time.setTime(offset);

      document.cookie = c_name + "=" + escape(value) + "; expires=" + time.toGMTString();
    }
  }]);

  return Helpers;
}();

exports.default = Helpers;

},{}],20:[function(require,module,exports){
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
        fade_in: true,
        box_class: '',
        box_content: '',
        wrap_css: {
          position: 'fixed',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(244,239,232,0.92)',
          'z-index': 999999,
          opacity: 0
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

      //Remove any existing lightboxes
      $('.lightbox-wrap').remove();

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

      if (options.fade_in == true) {
        $lightbox_wrap.animate({
          opacity: 1
        }, 500, function () {
          //close conditions
          $('.lightbox-cell .close').on('click', function (e) {
            _this.remove();
          });
          $('.lightbox-cell').on('click', function (e) {
            if ($(e.target).hasClass('lightbox-cell')) _this.remove();
          });
        });
      } else {
        $lightbox_wrap.css({
          opacity: 1
        });
        //close conditions
        $('.lightbox-cell .close').on('click', function (e) {
          _this.remove();
        });
        $('.lightbox-cell').on('click', function (e) {
          if ($(e.target).hasClass('lightbox-cell')) _this.remove();
        });
      }

      $('body').keyup(function (e) {
        if (e.which == 27) {
          _this.remove();
        }
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
  }, {
    key: 'loading',
    value: function loading() {
      this.create({
        box_class: 'lightbox-loading',
        box_content: 'Loading...',
        box_css: {
          background: 'none'
        }
      });
    }
  }]);

  return Main;
}();

exports.default = Main;

},{}],21:[function(require,module,exports){
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

},{}],22:[function(require,module,exports){
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

},{}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Pub = function () {
  function Pub() {
    _classCallCheck(this, Pub);

    this.$window = $(window);
    // this.scroll();
    // this.resize();
    // this.load();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZXM2L2luaXQuanMiLCJzcmMvZXM2L3B1Yi5qcyIsInNyYy9lczYvcHViL2VsZW1lbnRzLmpzIiwic3JjL2VzNi9wdWIvZm9vdGVyLmpzIiwic3JjL2VzNi9wdWIvaGVhZGVyLmpzIiwic3JjL2VzNi9wdWIvaG9tZS5qcyIsInNyYy9lczYvcHViL2xheW91dC5qcyIsInNyYy9lczYvcHViL3BhZ2UuanMiLCJzcmMvZXM2L3N1Yi5qcyIsInNyYy9lczYvc3ViL2VsZW1lbnRzLmpzIiwic3JjL2VzNi9zdWIvZm9vdGVyLmpzIiwic3JjL2VzNi9zdWIvaGVhZGVyLmpzIiwic3JjL2VzNi9zdWIvaG9tZS5qcyIsInNyYy9lczYvc3ViL2xheW91dC5qcyIsInNyYy9lczYvc3ViL3BhZ2UuanMiLCJzcmMvZXM2L3V0aWxzLmpzIiwic3JjL2VzNi91dGlscy9oZWxwZXJzL2ZpeGVzLmpzIiwic3JjL2VzNi91dGlscy9oZWxwZXJzL2hhc2guanMiLCJzcmMvZXM2L3V0aWxzL2hlbHBlcnMvaGVscGVycy5qcyIsInNyYy9lczYvdXRpbHMvbGJveC9sZWdhY3kuanMiLCJzcmMvZXM2L3V0aWxzL25ld3NsZXR0ZXIvbWFpbGNoaW1wLmpzIiwic3JjL2VzNi91dGlscy9wcmVsb2FkL3ByZWxvYWQuanMiLCJzcmMvZXM2L3V0aWxzL3dpbmRvdy9wdWIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUNBQTs7OztBQUVBOzs7O0FBQ0E7Ozs7Ozs7O0lBRXFCLEk7QUFDbkIsa0JBQWM7QUFBQTs7QUFFWixTQUFLLEtBQUwsR0FBaUIsRUFBRSxNQUFGLENBQWpCO0FBQ0EsU0FBSyxPQUFMLEdBQWlCLEVBQUUsTUFBRixDQUFqQjtBQUNBLFNBQUssU0FBTCxHQUFpQixFQUFFLFFBQUYsQ0FBakI7QUFDQSxTQUFLLEtBQUwsR0FBaUIsRUFBRSxZQUFGLENBQWpCOztBQUVB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UixFQURzQjtBQUUvQixnQkFBUyxRQUFRLE1BQVI7QUFGc0IsT0FBakM7QUFJRDs7OzJCQUVNO0FBQ0wsVUFBSSxVQUFVLEtBQUssT0FBbkI7O0FBRUEsY0FBUSxFQUFSLENBQVcsTUFBWCxFQUFtQixZQUFNO0FBQ3ZCLGNBQU0sYUFBTixFQUFxQixTQUFyQixDQUErQjtBQUM3QixpQkFBUyxRQUFRLEtBQVIsRUFEb0I7QUFFN0Isa0JBQVMsUUFBUSxNQUFSLEVBRm9CO0FBRzdCLHFCQUFZLFFBQVEsU0FBUjtBQUhpQixTQUEvQjtBQUtELE9BTkQ7QUFPRDs7Ozs7O2tCQWpEa0IsRyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgVXRpbHMgZnJvbSAnLi91dGlscyc7XHJcblxyXG5pbXBvcnQgUHViIGZyb20gJy4vcHViJztcclxuaW1wb3J0IFN1YiBmcm9tICcuL3N1Yic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbml0IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICB0aGlzLiRib2R5ICAgICA9ICQoJ2JvZHknKTtcclxuICAgIHRoaXMuJHdpbmRvdyAgID0gJCh3aW5kb3cpO1xyXG4gICAgdGhpcy4kZG9jdW1lbnQgPSAkKGRvY3VtZW50KTtcclxuICAgIHRoaXMuJHJvb3QgICAgID0gJCgnaHRtbCwgYm9keScpO1xyXG5cclxuICAgIHRoaXMuX29wdHMgPSB3aW5kb3cuX29wdHM7XHJcbiAgICB0aGlzLl9kYXRhID0gd2luZG93Ll9kYXRhO1xyXG5cclxuICAgIHRoaXMudXRpbHMgPSBuZXcgVXRpbHMoKTtcclxuICB9IFxyXG5cclxuICBpbml0KCkge1xyXG4gICAgY29uc29sZS5sb2coJ2luaXRpYWxpc2luZycpO1xyXG4gICAgdGhpcy5zdWIgPSBuZXcgU3ViKHRoaXMsIHRoaXMudXRpbHMpO1xyXG4gICAgdGhpcy5wdWIgPSBuZXcgUHViKHRoaXMsIHRoaXMudXRpbHMpOyBcclxuICB9XHJcbn1cclxuXHJcbmdsb2JhbC5hcHAgPSBuZXcgSW5pdCgpOyAgICIsImltcG9ydCBMYXlvdXQgZnJvbSAnLi9wdWIvbGF5b3V0JztcclxuaW1wb3J0IFBhZ2UgZnJvbSAnLi9wdWIvcGFnZSc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9wdWIvaGVhZGVyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL3B1Yi9mb290ZXInO1xyXG5pbXBvcnQgSG9tZSBmcm9tICcuL3B1Yi9ob21lJztcclxuaW1wb3J0IEVsZW1lbnRzIGZyb20gJy4vcHViL2VsZW1lbnRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFB1YiB7XHJcbiAgY29uc3RydWN0b3IobWFpbix1dGlscykge1xyXG4gICAgdGhpcy5tID0gbWFpbjtcclxuICAgIHRoaXMudSA9IHV0aWxzO1xyXG4gICAgXHJcbiAgICB0aGlzLmxheW91dCA9IG5ldyBMYXlvdXQobWFpbiwgdXRpbHMpO1xyXG4gICAgdGhpcy5oZWFkZXIgPSBuZXcgSGVhZGVyKG1haW4sIHV0aWxzKTtcclxuICAgIHRoaXMuZm9vdGVyID0gbmV3IEZvb3RlcihtYWluLCB1dGlscyk7XHJcbiAgICB0aGlzLmVsZW1lbnRzID0gbmV3IEVsZW1lbnRzKG1haW4sIHV0aWxzKTtcclxuXHJcbiAgICAvL1RlbXBsYXRlIHNwZWNpZmljIHRlc3RzXHJcbiAgICBpZigkKCdib2R5W2RhdGEtdGVtcGxhdGU9XCJwYWdlLWluZGV4XCJdJykubGVuZ3RoID4gMCkgdGhpcy5ob21lID0gbmV3IEhvbWUobWFpbiwgdXRpbHMpO1xyXG4gIH1cclxufSAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBMYXlvdXQge1xyXG4gIGNvbnN0cnVjdG9yKG1haW4sdXRpbHMpIHtcclxuICAgIHRoaXMubSA9IG1haW47XHJcbiAgICB0aGlzLnUgPSB1dGlscztcclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIFxyXG4gICAgdmFyIGNvbnRhY3QgPSB7XHJcbiAgICAgICRwdWIgOiAkKCdbZGF0YS1wdWJ+PVwiY29udGFjdC9mb3JtXCJdJyksXHJcbiAgICAgICRlcnJvcl9zdWIgOiAkKCdbZGF0YS1wdWJ+PVwiY29udGFjdC9mb3JtXCJdIFtkYXRhLXN1Yn49XCJjb250YWN0L2Vycm9yXCJdJylcclxuICAgIH07XHJcblxyXG4gICAgcmFkaW8oJ2VsZW1lbnRzJykuYnJvYWRjYXN0KHtcclxuICAgICAgY29udGFjdDpjb250YWN0XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb250YWN0LiRwdWIub24oJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICAgIHZhciAkcHViID0gJChlLnRhcmdldCk7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgcmFkaW8oJ2NvbnRhY3Qvc3VibWl0JykuYnJvYWRjYXN0KHtcclxuICAgICAgICAkcHViOiRwdWIsXHJcbiAgICAgICAgZTplXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIH0pO1xyXG4gIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3RlciB7XHJcbiAgY29uc3RydWN0b3IobWFpbix1dGlscykge1xyXG4gICAgdGhpcy5tID0gbWFpbjtcclxuICAgIHRoaXMudSA9IHV0aWxzO1xyXG4gICAgdGhpcy5mb290ZXIoKTtcclxuICB9XHJcblxyXG4gIGZvb3RlcigpIHtcclxuICB9XHJcbn0gICIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciB7XHJcbiAgY29uc3RydWN0b3IobWFpbix1dGlscykge1xyXG4gICAgdGhpcy5tID0gbWFpbjtcclxuICAgIHRoaXMudSA9IHV0aWxzO1xyXG4gICAgdGhpcy5oZWFkZXIoKTtcclxuICB9XHJcblxyXG4gIGhlYWRlcigpIHtcclxuICAgIHZhciAkaGVhZGVyID0gJCgnaGVhZGVyLmRlZmF1bHQnKTtcclxuICAgIHZhciAkc2VhcmNoID0gJCgnW2RhdGEtc3Vifj1cInNlYXJjaFwiXScpO1xyXG5cclxuICAgIHRoaXMuX2QgPSB7XHJcbiAgICAgIGJ1aWxkaW5nczogd2luZG93Ll9kYXRhLmJ1aWxkaW5ncyxcclxuICAgICAgc2VhcmNoIDoge1xyXG4gICAgICAgICR0b2dnbGVfc3ViOiAkc2VhcmNoLFxyXG4gICAgICAgICR0b2dnbGVfcHViOiAkaGVhZGVyLmZpbmQoJ1tkYXRhLXB1Yn49XCJzZWFyY2gtdG9nZ2xlXCJdJyksXHJcbiAgICAgICAgJGhpZGVfcHViOiAkaGVhZGVyLmZpbmQoJ1tkYXRhLXB1Yn49XCJzZWFyY2gtaGlkZVwiXScpLFxyXG4gICAgICAgICRmb3JtX3B1YjogJGhlYWRlci5maW5kKCdbZGF0YS1wdWJ+PVwic2VhcmNoLWZvcm1cIl0nKSxcclxuICAgICAgfSxcclxuICAgICAgbG9naW46IHtcclxuICAgICAgICAkc2hvd19wdWI6ICQoJ1tkYXRhLXB1Yn49XCJsb2dpblwiXScpLFxyXG4gICAgICAgICRzdWJtaXRfcHViOiAkKCdbZGF0YS1wdWJ+PVwibG9naW4tZm9ybVwiXScpLFxyXG4gICAgICAgIGFjdGlvbjogd2luZG93Ll9kYXRhLnRfdXJsICsgXCIvbG9naW4ucGhwXCIsXHJcbiAgICAgICAgdGVtcGxhdGU6IF8udGVtcGxhdGUoJCgnI2xvZ2luX3RlbXBsYXRlJykuaHRtbCgpKVxyXG4gICAgICB9LFxyXG4gICAgICBtb2JpbGU6IHtcclxuICAgICAgICAkbWVudTogJGhlYWRlci5maW5kKCcubWVudScpLFxyXG4gICAgICAgICRwdWI6ICRoZWFkZXIuZmluZCgnW2RhdGEtcHVifj1cImhhbWJ1cmdlclwiXScpLFxyXG4gICAgICAgICRzdWI6ICRoZWFkZXIuZmluZCgnW2RhdGEtc3Vifj1cImhhbWJ1cmdlclwiXScpLFxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmFkaW8oJ2hlYWRlcicpLmJyb2FkY2FzdCh0aGlzLl9kKTtcclxuXHJcbiAgICB0aGlzLnNlYXJjaCgpO1xyXG4gICAgdGhpcy5sb2dpbigpO1xyXG5cclxuICAgIHRoaXMuX2QubW9iaWxlLiRwdWIub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgcmFkaW8oJ2hlYWRlci9tZW51L3RvZ2dsZScpLmJyb2FkY2FzdCh7XHJcblxyXG4gICAgICB9KVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZWFyY2goKSB7XHJcbiAgICAvL1RvZ2dsZSBzZWFyY2ggYmFyXHJcbiAgICB0aGlzLl9kLnNlYXJjaC4kdG9nZ2xlX3B1Yi5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICByYWRpbygnaGVhZGVyL3NlYXJjaC90b2dnbGUnKS5icm9hZGNhc3Qoe1xyXG4gICAgICAgICdhY3Rpb24nOid0b2dnbGUnXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9IaWRlIHNlYXJjaCBiYXJcclxuICAgIHRoaXMuX2Quc2VhcmNoLiRoaWRlX3B1Yi5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICByYWRpbygnaGVhZGVyL3NlYXJjaC90b2dnbGUnKS5icm9hZGNhc3Qoe1xyXG4gICAgICAgICdhY3Rpb24nOidoaWRlJ1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vU3VibWl0IHNlYXJjaCBmb3JtXHJcbiAgICB0aGlzLl9kLnNlYXJjaC4kZm9ybV9wdWIub24oJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICAgIHJhZGlvKCdoZWFkZXIvc2VhcmNoL3N1Ym1pdCcpLmJyb2FkY2FzdCh7XHJcbiAgICAgICAgZTplLFxyXG4gICAgICAgICRmb3JtOiQoZS5jdXJyZW50VGFyZ2V0KVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbG9naW4oKSB7XHJcbiAgICAvL1Nob3cgbG9naW4gdGVtcGxhdGVcclxuICAgIHRoaXMuX2QubG9naW4uJHNob3dfcHViLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIHZhciBzZWxlY3QgPSAkKGUuY3VycmVudFRhcmdldCkuYXR0cignZGF0YS1zZWxlY3QnKTtcclxuICAgICAgcmFkaW8oJ2hlYWRlci9sb2dpbi9zaG93JykuYnJvYWRjYXN0KHtcclxuICAgICAgICBzZWxlY3Q6c2VsZWN0XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9Gb3JtIHN1Ym1pc3Npb25cclxuICAgIHRoaXMubS4kYm9keS5vbignc3VibWl0Jyx0aGlzLl9kLmxvZ2luLiRzdWJtaXRfcHViLnNlbGVjdG9yLChlKSA9PiB7XHJcbiAgICAgIHZhciAkZm9ybSA9ICQoZS5jdXJyZW50VGFyZ2V0KS5jbG9zZXN0KCdmb3JtJyk7XHJcbiAgICAgIHZhciBidWlsZGluZyA9ICRmb3JtLmZpbmQoJ1tuYW1lPVwiYnVpbGRpbmdcIl0nKS52YWwoKTtcclxuICAgICAgdmFyIHBhc3N3b3JkID0gJGZvcm0uZmluZCgnW25hbWU9XCJwYXNzd29yZFwiXScpLnZhbCgpO1xyXG4gICAgICB2YXIgdXJsID0gJGZvcm0uZmluZCgnW25hbWU9XCJidWlsZGluZ1wiXSBvcHRpb246c2VsZWN0ZWQnKS5hdHRyKCdkYXRhLXVybCcpO1xyXG5cclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICByYWRpbygnaGVhZGVyL2xvZ2luL3N1Ym1pdCcpLmJyb2FkY2FzdCh7XHJcbiAgICAgICAgYnVpbGRpbmc6YnVpbGRpbmcsXHJcbiAgICAgICAgcGFzc3dvcmQ6cGFzc3dvcmQsXHJcbiAgICAgICAgdXJsOnVybFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxufSAgIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSB7XHJcbiAgY29uc3RydWN0b3IobWFpbix1dGlscykge1xyXG4gICAgdGhpcy5tID0gbWFpbjtcclxuICAgIHRoaXMudSA9IHV0aWxzO1xyXG5cclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuXHJcbiAgICB0aGlzLl9kID0ge1xyXG4gICAgICBzbGlkZXNob3dzOiB7XHJcbiAgICAgICAgJGhlcm9fc3ViOiAkKCdbZGF0YS1zdWJ+PVwiaGVyby1zbGlkZXNob3dcIl0nKSxcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByYWRpbygnaG9tZScpLmJyb2FkY2FzdCh0aGlzLl9kKTtcclxuXHJcbiAgICAvL1Nob3cgdmlkZW9cclxuICAgIHJhZGlvKCdob21lL3NsaWRlc2hvd3MvaGVybycpLmJyb2FkY2FzdCgpOyBcclxuICB9XHJcbn0gXHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIExheW91dCB7XHJcbiAgY29uc3RydWN0b3IobWFpbix1dGlscykge1xyXG4gICAgdGhpcy5tID0gbWFpbjtcclxuICAgIHRoaXMudSA9IHV0aWxzO1xyXG4gICAgdGhpcy5zZXR1cCgpO1xyXG4gIH1cclxuXHJcbiAgc2V0dXAoKSB7XHJcbiAgICB2YXIgJGxheW91dCA9ICQoJyNsYXlvdXQnKTtcclxuXHJcbiAgICByYWRpbygnYWN0aW9uL2xheW91dCcpLmJyb2FkY2FzdCh7XHJcbiAgICAgICRsYXlvdXQgOiAkbGF5b3V0XHJcbiAgICB9KTtcclxuICB9XHJcbn0iLCIvL2ltcG9ydCBQcmVzcyBmcm9tICcuL3BhZ2UvcHJlc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZSB7XHJcbiAgY29uc3RydWN0b3IobWFpbix1dGlscykge1xyXG4gICAgdGhpcy5tID0gbWFpbjtcclxuICAgIHRoaXMudSA9IHV0aWxzO1xyXG5cclxuICAgIC8vdGhpcy5wcmVzcyA9IG5ldyBQcmVzcyhtYWluLCB1dGlscyk7XHJcbiAgfVxyXG59ICIsImltcG9ydCBMYXlvdXQgZnJvbSAnLi9zdWIvbGF5b3V0JztcclxuaW1wb3J0IFBhZ2UgZnJvbSAnLi9zdWIvcGFnZSc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9zdWIvaGVhZGVyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL3N1Yi9mb290ZXInO1xyXG5pbXBvcnQgSG9tZSBmcm9tICcuL3N1Yi9ob21lJztcclxuaW1wb3J0IEVsZW1lbnRzIGZyb20gJy4vc3ViL2VsZW1lbnRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1YiB7XHJcbiAgY29uc3RydWN0b3IobWFpbix1dGlscykge1xyXG4gICAgdGhpcy5tID0gbWFpbjtcclxuICAgIHRoaXMudSA9IHV0aWxzO1xyXG5cclxuICAgIHRoaXMubGF5b3V0ID0gbmV3IExheW91dChtYWluLCB1dGlscyk7XHJcbiAgICB0aGlzLmhlYWRlciA9IG5ldyBIZWFkZXIobWFpbiwgdXRpbHMpO1xyXG4gICAgdGhpcy5lbGVtZW50cyA9IG5ldyBFbGVtZW50cyhtYWluLCB1dGlscyk7XHJcblxyXG5cclxuICAgIHRoaXMuaG9tZSAgICAgICAgPSBuZXcgSG9tZShtYWluLCB1dGlscyk7XHJcbiAgICB0aGlzLnBhZ2UgICAgICAgID0gbmV3IFBhZ2UobWFpbiwgdXRpbHMpO1xyXG4gIH1cclxufSAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFbGVtZW50cyB7XHJcbiAgY29uc3RydWN0b3IobWFpbix1dGlscykge1xyXG4gICAgdGhpcy5tID0gbWFpbjtcclxuICAgIHRoaXMudSA9IHV0aWxzO1xyXG4gICAgcmFkaW8oJ2VsZW1lbnRzJykuc3Vic2NyaWJlKChkYXRhKSA9PiB7dGhpcy5lbGVtZW50cyhkYXRhKTt9KTtcclxuICB9XHJcblxyXG4gIGVsZW1lbnRzKGRhdGEpIHtcclxuICAgIHRoaXMuY29udGFjdCA9IGRhdGEuY29udGFjdDtcclxuXHJcbiAgICByYWRpbygnY29udGFjdC9zdWJtaXQnKS5zdWJzY3JpYmUoKGRhdGEpID0+IHt0aGlzLmNvbnRhY3RTdWJtaXQoZGF0YSk7fSk7XHJcbiAgfVxyXG5cclxuICBjb250YWN0U3VibWl0KGQpIHtcclxuICAgIHZhciBlICAgICAgPSBkLmU7XHJcbiAgICB2YXIgJGZvcm0gID0gZC4kcHViO1xyXG4gICAgdmFyICRlcnJvciA9IHRoaXMuY29udGFjdC4kZXJyb3Jfc3ViO1xyXG5cclxuICAgICQucG9zdCggd2luZG93LmxvY2F0aW9uICwgJGZvcm0uc2VyaWFsaXplKCkgKyAnJnN1Ym1pdD10cnVlJyAsIChkKSA9PiB7XHJcbiAgICAgIHZhciAkaHRtbCA9ICQoZCk7XHJcblxyXG4gICAgICAvL1JlcGxhY2UgZm9ybXMgd2l0aCBjb250ZW50c1xyXG4gICAgICB2YXIgJHB1YnMgPSB0aGlzLmNvbnRhY3QuJHB1YjtcclxuICAgICAgdmFyICRuZXdfcHVicyA9ICRodG1sLmZpbmQoJ1tkYXRhLXB1Yn49XCJjb250YWN0L2Zvcm1cIl0nKTtcclxuICAgICAgdmFyICRuZXdfc3VicyA9ICRodG1sLmZpbmQoJ1tkYXRhLXN1Yn49XCJjb250YWN0L2Zvcm1cIl0nKTtcclxuXHJcbiAgICAgICRwdWJzLmVhY2goKGkscHViKSA9PiB7XHJcbiAgICAgICAgdmFyICRwdWIgPSAkKHB1Yik7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gaTtcclxuXHJcbiAgICAgICAgdmFyICRuZXdfcHViID0gJG5ld19wdWJzLmVxKGluZGV4KTtcclxuICAgICAgICBpZigkbmV3X3B1Yi5zaXplKCkgPT0gMCkge1xyXG4gICAgICAgICAgJG5ld19wdWIgPSAkbmV3X3N1YnMuZXEoaW5kZXgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIG5ld19odG1sID0gJG5ld19wdWIucGFyZW50KCkuaHRtbCgpO1xyXG5cclxuICAgICAgICAkcHViLnBhcmVudCgpLmh0bWwobmV3X2h0bWwpO1xyXG4gICAgICB9KVxyXG4gICAgfSk7XHJcbiAgfVxyXG59ICAgIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGFuZGluZyB7XHJcbiAgY29uc3RydWN0b3IobWFpbix1dGlscykge1xyXG4gICAgdGhpcy5tID0gbWFpbjtcclxuICAgIHRoaXMudSA9IHV0aWxzO1xyXG4gICAgcmFkaW8oJ2FjdGlvbi9mb290ZXInKS5zdWJzY3JpYmUoKGRhdGEpID0+IHt0aGlzLmZvb3RlcihkYXRhKTt9KTtcclxuICB9XHJcblxyXG4gIGZvb3RlcihkYXRhKSB7XHJcbiAgfVxyXG59ICAgICIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciB7XHJcbiAgY29uc3RydWN0b3IobWFpbix1dGlscykge1xyXG4gICAgdGhpcy5tID0gbWFpbjtcclxuICAgIHRoaXMudSA9IHV0aWxzO1xyXG5cclxuICAgIHJhZGlvKCdoZWFkZXInKS5zdWJzY3JpYmUoKGQpID0+IHt0aGlzLmluaXQoZCk7fSk7XHJcbiAgfVxyXG5cclxuICBpbml0KGQpIHtcclxuICAgIHRoaXMuX2QgPSBkO1xyXG5cclxuICAgIHJhZGlvKCdoZWFkZXIvc2VhcmNoL3RvZ2dsZScpLnN1YnNjcmliZSgoZCkgPT4ge3RoaXMuc2VhcmNoVG9nZ2xlKGQpO30pO1xyXG4gICAgcmFkaW8oJ2hlYWRlci9zZWFyY2gvc3VibWl0Jykuc3Vic2NyaWJlKChkKSA9PiB7dGhpcy5zZWFyY2hTdWJtaXQoZCk7fSk7XHJcbiAgICByYWRpbygnaGVhZGVyL2xvZ2luL3Nob3cnKS5zdWJzY3JpYmUoKGQpID0+IHt0aGlzLmxvZ2luU2hvdyhkKTt9KTtcclxuICAgIHJhZGlvKCdoZWFkZXIvbG9naW4vc3VibWl0Jykuc3Vic2NyaWJlKChkKSA9PiB7dGhpcy5sb2dpblN1Ym1pdChkKTt9KTtcclxuXHJcblxyXG4gICAgcmFkaW8oJ2hlYWRlci9tZW51L3RvZ2dsZScpLnN1YnNjcmliZSgoZCkgPT4ge3RoaXMubWVudShkKTt9KTtcclxuICB9XHJcblxyXG4gIHNlYXJjaFRvZ2dsZShkKSB7XHJcbiAgICB2YXIgYWN0aW9uID0gZC5hY3Rpb247XHJcblxyXG4gICAgaWYoYWN0aW9uID09ICd0b2dnbGUnKSB7XHJcbiAgICAgIHRoaXMuX2Quc2VhcmNoLiR0b2dnbGVfc3ViLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgIH0gZWxzZSBpZihhY3Rpb24gPT0gJ3Nob3cnKSB7XHJcbiAgICAgIHRoaXMuX2Quc2VhcmNoLiR0b2dnbGVfc3ViLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgIH0gZWxzZSBpZihhY3Rpb24gPT0gJ2hpZGUnKSB7XHJcbiAgICAgIHRoaXMuX2Quc2VhcmNoLiR0b2dnbGVfc3ViLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNlYXJjaFN1Ym1pdChkKSB7XHJcbiAgICB2YXIgZSA9IGQuZTtcclxuXHJcbiAgICAvL2UucHJldmVudERlZmF1bHQoKTtcclxuICB9XHJcblxyXG4gIGxvZ2luU2hvdyhkKSB7XHJcbiAgICB0aGlzLnUubGlnaHRib3guY3JlYXRlKHtcclxuICAgICAgYm94X2NvbnRlbnQ6dGhpcy5fZC5sb2dpbi50ZW1wbGF0ZSh7XHJcbiAgICAgICAgYnVpbGRpbmdzOnRoaXMuX2QuYnVpbGRpbmdzXHJcbiAgICAgIH0pLFxyXG4gICAgICBib3hfY2xhc3M6ICdsaWdodGJveC1sb2dpbicsXHJcbiAgICAgIGJveF9jc3M6IHtcclxuICAgICAgICBwYWRkaW5nOic0MHB4IDgwcHgnXHJcbiAgICAgIH0sXHJcbiAgICAgIHdyYXBfY3NzOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDoncmdiYSgwLDAsMCwwLjYpJ1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgbG9naW5TdWJtaXQoZCkge1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgdXJsOndpbmRvdy5fZGF0YS5hX3VybCxcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICAnYWN0aW9uJzogJ2Zvcm1sb2dpbicsXHJcbiAgICAgICAgJ2RhdGEnIDogZFxyXG4gICAgICB9LFxyXG4gICAgICAnZGF0YVR5cGUnIDonanNvbicsXHJcbiAgICAgIGNvbXBsZXRlOiAocikgPT4ge1xyXG4gICAgICAgIGlmKHIucmVzcG9uc2VUZXh0ICE9IDApIHtcclxuICAgICAgICAgIHRoaXMudS5jb29raWVzLnNldCgnbG9naW4nLHIucmVzcG9uc2VUZXh0LDEpO1xyXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gZC51cmw7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGFsZXJ0KCdQbGVhc2UgY2hlY2sgdGhlIHBhc3N3b3JkIGlzIGNvcnJlY3QnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBtZW51KGQpIHtcclxuICAgIHZhciAkcHViID0gdGhpcy5fZC5tb2JpbGUuJHB1YjtcclxuICAgIHZhciAkc3ViID0gdGhpcy5fZC5tb2JpbGUuJHN1YjtcclxuXHJcbiAgICAvL0lzIGFscmVhZHkgYWN0aXZlP1xyXG4gICAgdmFyIGlzX2FjdGl2ZSA9ICRwdWIuaGFzQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuICAgIGlmKGlzX2FjdGl2ZSkge1xyXG4gICAgICAkcHViLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgJHN1Yi5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkcHViLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgJHN1Yi5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59ICAgICIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUge1xyXG4gIGNvbnN0cnVjdG9yKG1haW4sdXRpbHMpIHtcclxuICAgIHRoaXMubSA9IG1haW47XHJcbiAgICB0aGlzLnUgPSB1dGlscztcclxuXHJcbiAgICByYWRpbygnaG9tZScpLnN1YnNjcmliZSgoZGF0YSkgPT4ge3RoaXMuaW5pdChkYXRhKTt9KTtcclxuICB9XHJcblxyXG4gIGluaXQoZCkge1xyXG4gICAgdGhpcy5fZCA9IGQ7XHJcblxyXG4gICAgcmFkaW8oJ2hvbWUvc2xpZGVzaG93cy9oZXJvJykuc3Vic2NyaWJlKChkYXRhKSA9PiB7dGhpcy5oZXJvKGRhdGEpO30pOyAgICAgICAgICAgIFxyXG4gIH1cclxuXHJcbiAgaGVybyhkKSB7XHJcbiAgICB2YXIgJHN1YiA9IHRoaXMuX2Quc2xpZGVzaG93cy4kaGVyb19zdWI7XHJcblxyXG4gICAgLy9UT0RPOiBVc2UgYSBub24gYnhzbGlkZXIgc2xpZGVzaG93XHJcbiAgfVxyXG59ICBcclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF5b3V0IHtcclxuICBjb25zdHJ1Y3RvcihtYWluLHV0aWxzKSB7XHJcbiAgICB0aGlzLm0gPSBtYWluO1xyXG4gICAgdGhpcy51ID0gdXRpbHM7XHJcbiAgICByYWRpbygnYWN0aW9uL2xheW91dCcpLnN1YnNjcmliZSgoZGF0YSkgPT4ge3RoaXMubGF5b3V0KGRhdGEpO30pO1xyXG4gIH1cclxuXHJcbiAgbGF5b3V0KGRhdGEpIHtcclxuICAgIHRoaXMuJGxheW91dCA9IGRhdGEuJGxheW91dDtcclxuXHJcbiAgICAvL3N1YnNjcmlwdGlvbnNcclxuICAgIHJhZGlvKCd3aW5kb3cvcmVzaXplJykuc3Vic2NyaWJlKChzdWJfZGF0YSkgPT4ge3RoaXMucmVzaXplKHN1Yl9kYXRhKTt9KTtcclxuICB9XHJcblxyXG4gIHJlc2l6ZShkYXRhKSB7XHJcbiAgICBjb25zb2xlLmxvZygndXBkYXRlIGxheW91dCBoZWlnaHQnKTtcclxuICAgIHRoaXMud2luZG93X2hlaWdodCA9IHRoaXMubS4kd2luZG93LmhlaWdodCgpO1xyXG5cclxuICAgIHRoaXMuJGxheW91dC5jc3MoeyBcclxuICAgICAgJ21pbi1oZWlnaHQnOiB0aGlzLndpbmRvd19oZWlnaHRcclxuICAgIH0pO1xyXG5cclxuICAgIC8vUmVtb3ZlIGxvYWRpbmcgY2xhc3NcclxuICAgIGlmKHRoaXMuJGxheW91dC5oYXNDbGFzcygnbG9hZGluZycpKSB7XHJcbiAgICAgIHRoaXMuJGxheW91dC5yZW1vdmVDbGFzcygnbG9hZGluZycpXHJcbiAgICB9XHJcbiAgfVxyXG59ICAgIiwiLy9pbXBvcnQgUHJlc3MgZnJvbSAnLi9wYWdlL3ByZXNzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2Uge1xyXG4gIGNvbnN0cnVjdG9yKG1haW4sdXRpbHMpIHtcclxuICAgIHRoaXMubSA9IG1haW47XHJcbiAgICB0aGlzLnUgPSB1dGlscztcclxuXHJcbiAgICAvL3RoaXMucHJlc3MgPSBuZXcgUHJlc3MobWFpbiwgdXRpbHMpO1xyXG4gIH1cclxufSAgICIsImltcG9ydCBIZWxwZXJzIGZyb20gJy4vdXRpbHMvaGVscGVycy9oZWxwZXJzJztcclxuaW1wb3J0IEhhc2ggZnJvbSAnLi91dGlscy9oZWxwZXJzL2hhc2gnO1xyXG5cclxuaW1wb3J0IFByZWxvYWQgZnJvbSAnLi91dGlscy9wcmVsb2FkL3ByZWxvYWQnO1xyXG5pbXBvcnQgV2luZG93IGZyb20gJy4vdXRpbHMvd2luZG93L3B1Yic7XHJcbmltcG9ydCBOZXdzbGV0dGVyIGZyb20gJy4vdXRpbHMvbmV3c2xldHRlci9tYWlsY2hpbXAnO1xyXG5pbXBvcnQgRml4ZXMgZnJvbSAnLi91dGlscy9oZWxwZXJzL2ZpeGVzJztcclxuaW1wb3J0IExpZ2h0Ym94IGZyb20gJy4vdXRpbHMvbGJveC9sZWdhY3knO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXRpbHMge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgIHRoaXMuZml4ZXMgICAgICA9IG5ldyBGaXhlcygpOyBcclxuICAgIHRoaXMucHJlbG9hZCAgICA9IG5ldyBQcmVsb2FkKCk7XHJcbiAgICB0aGlzLm5ld3NsZXR0ZXIgPSBuZXcgTmV3c2xldHRlcigpO1xyXG4gICAgdGhpcy5oZWxwZXJzICAgID0gbmV3IEhlbHBlcnMoKTtcclxuICAgIHRoaXMuaGFzaCAgICAgICA9IG5ldyBIYXNoKCk7IFxyXG4gICAgdGhpcy5saWdodGJveCAgID0gbmV3IExpZ2h0Ym94KCk7XHJcbiAgICB0aGlzLndpbmRvdyAgICAgPSBuZXcgV2luZG93KCk7XHJcbiAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRml4ZXMge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5jb25zb2xlKCk7ICAvL0F2b2lkIG5vIGNvbnNvbGUgZXJyb3JzXHJcbiAgfVxyXG5cclxuICBjb25zb2xlKCkgeyBcclxuICAgIChmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIG1ldGhvZDtcclxuICAgICAgdmFyIG5vb3AgPSBmdW5jdGlvbigpIHt9O1xyXG4gICAgICB2YXIgbWV0aG9kcyA9IFtcclxuICAgICAgJ2Fzc2VydCcsICdjbGVhcicsICdjb3VudCcsICdkZWJ1ZycsICdkaXInLCAnZGlyeG1sJywgJ2Vycm9yJyxcclxuICAgICAgJ2V4Y2VwdGlvbicsICdncm91cCcsICdncm91cENvbGxhcHNlZCcsICdncm91cEVuZCcsICdpbmZvJywgJ2xvZycsXHJcbiAgICAgICdtYXJrVGltZWxpbmUnLCAncHJvZmlsZScsICdwcm9maWxlRW5kJywgJ3RhYmxlJywgJ3RpbWUnLCAndGltZUVuZCcsXHJcbiAgICAgICd0aW1lU3RhbXAnLCAndHJhY2UnLCAnd2FybidcclxuICAgICAgXTtcclxuICAgICAgdmFyIGxlbmd0aCA9IG1ldGhvZHMubGVuZ3RoO1xyXG4gICAgICB2YXIgY29uc29sZSA9ICh3aW5kb3cuY29uc29sZSA9IHdpbmRvdy5jb25zb2xlIHx8IHt9KTtcclxuXHJcbiAgICAgIHdoaWxlIChsZW5ndGgtLSkge1xyXG4gICAgICAgIG1ldGhvZCA9IG1ldGhvZHNbbGVuZ3RoXTtcclxuXHJcbiAgICAgICAgLy8gT25seSBzdHViIHVuZGVmaW5lZCBtZXRob2RzLlxyXG4gICAgICAgIGlmICghY29uc29sZVttZXRob2RdKSB7XHJcbiAgICAgICAgICBjb25zb2xlW21ldGhvZF0gPSBub29wO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSgpKTtcclxuICB9XHJcbn0gIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGFzaCB7XHJcbiAgcHViKCkge1xyXG4gICAgJCh3aW5kb3cpLmJpbmQoICdsb2FkIGhhc2hjaGFuZ2UnLCAoZSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygncHViIGhhc2ggY2hhbmdlJyk7XHJcbiAgICAgIHJhZGlvKCd3aW5kb3cvaGFzaC9jaGFuZ2UnKS5icm9hZGNhc3Qoe1xyXG4gICAgICAgIGU6ZSxcclxuICAgICAgICBoYXNoOmxvY2F0aW9uLmhhc2guc2xpY2UoMSlcclxuICAgICAgfSk7XHJcbiAgICB9KTsgXHJcbiAgfVxyXG59ICIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlbHBlcnMge1xyXG4gIHNsdWdpZnkodGV4dCkge1xyXG4gICAgcmV0dXJuIHRleHQudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bXlxcdyBdKy9nLCcnKS5yZXBsYWNlKC8gKy9nLCctJyk7XHJcbiAgfVxyXG4gIGdldENvb2tpZShjX25hbWUpIHtcclxuICAgICAgdmFyIGksIHgsIHksIEFSUmNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoXCI7XCIpO1xyXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgQVJSY29va2llcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHggPSBBUlJjb29raWVzW2ldLnN1YnN0cigwLCBBUlJjb29raWVzW2ldLmluZGV4T2YoXCI9XCIpKTtcclxuICAgICAgICB5ID0gQVJSY29va2llc1tpXS5zdWJzdHIoQVJSY29va2llc1tpXS5pbmRleE9mKFwiPVwiKSArIDEpO1xyXG4gICAgICAgIHggPSB4LnJlcGxhY2UoL15cXHMrfFxccyskL2csIFwiXCIpO1xyXG4gICAgICAgIGlmICh4ID09IGNfbmFtZSkge1xyXG4gICAgICAgICAgcmV0dXJuIHVuZXNjYXBlKHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBzZXRDb29raWUoY19uYW1lLCB2YWx1ZSwgZXhob3Vycykge1xyXG4gICAgdmFyIHRpbWUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgdmFyIG9mZnNldCA9IHRpbWUuZ2V0VGltZSgpO1xyXG4gICAgb2Zmc2V0ICs9ICgzNjAwICogMTAwMCkgKiBleGhvdXJzO1xyXG4gICAgdGltZS5zZXRUaW1lKG9mZnNldCk7XHJcblxyXG4gICAgZG9jdW1lbnQuY29va2llID0gY19uYW1lICsgXCI9XCIgKyBlc2NhcGUodmFsdWUpICsgXCI7IGV4cGlyZXM9XCIgKyB0aW1lLnRvR01UU3RyaW5nKCk7XHJcbiAgfVxyXG59ICIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW4ge1xyXG4gIGNyZWF0ZShuZXdfb3B0aW9ucykge1xyXG4gICAgdmFyIG9wdGlvbnMgPSB7XHJcbiAgICAgIGZhZGVfaW46IHRydWUsXHJcbiAgICAgIGJveF9jbGFzczogJycsXHJcbiAgICAgIGJveF9jb250ZW50OiAnJyxcclxuICAgICAgd3JhcF9jc3M6IHtcclxuICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcclxuICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgIHRvcDogMCxcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgIGJhY2tncm91bmQ6ICdyZ2JhKDI0NCwyMzksMjMyLDAuOTIpJyxcclxuICAgICAgICAnei1pbmRleCc6IDk5OTk5OSxcclxuICAgICAgICBvcGFjaXR5OjBcclxuICAgICAgfSxcclxuICAgICAgdGFibGVfY3NzOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ3RhYmxlJyxcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIGhlaWdodDogJzEwMCUnXHJcbiAgICAgIH0sXHJcbiAgICAgIHJvd19jc3M6IHtcclxuICAgICAgICBkaXNwbGF5OiAndGFibGUtcm93J1xyXG4gICAgICB9LFxyXG4gICAgICBjZWxsX2Nzczoge1xyXG4gICAgICAgIGRpc3BsYXk6ICd0YWJsZS1jZWxsJyxcclxuICAgICAgICAndGV4dC1hbGlnbic6ICdjZW50ZXInLFxyXG4gICAgICAgICd2ZXJ0aWNhbC1hbGlnbic6ICdtaWRkbGUnXHJcbiAgICAgIH0sXHJcbiAgICAgIGJveF9jc3M6IHtcclxuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuICAgICAgICAnKmRpc3BsYXknOiAnaW5saW5lJyxcclxuICAgICAgICB3aWR0aDogJ2F1dG8nLFxyXG4gICAgICAgIGhlaWdodDogJ2F1dG8nLFxyXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgIHBhZGRpbmc6ICcyMHB4JyxcclxuICAgICAgICBib3JkZXI6ICdub25lJyxcclxuICAgICAgICBiYWNrZ3JvdW5kOiAnI2ZmZidcclxuICAgICAgfSxcclxuICAgICAgY2FsbGJhY2s6IGZhbHNlXHJcbiAgICB9O1xyXG5cclxuICAgICQuZXh0ZW5kKHRydWUsIG9wdGlvbnMsIG5ld19vcHRpb25zKTtcclxuXHJcbiAgICAvL1JlbW92ZSBhbnkgZXhpc3RpbmcgbGlnaHRib3hlc1xyXG4gICAgJCgnLmxpZ2h0Ym94LXdyYXAnKS5yZW1vdmUoKTtcclxuXHJcbiAgICB2YXIgJGxpZ2h0Ym94X3dyYXAgID0gJCgnPGRpdiBjbGFzcz1cImxpZ2h0Ym94LXdyYXBcIiAvPicpLmFwcGVuZFRvKCdib2R5Jyk7XHJcbiAgICB2YXIgJGxpZ2h0Ym94X3RhYmxlID0gJCgnPGRpdiBjbGFzcz1cImxpZ2h0Ym94LXRhYmxlXCIgLz4nKS5hcHBlbmRUbygkbGlnaHRib3hfd3JhcCk7XHJcbiAgICB2YXIgJGxpZ2h0Ym94X3JvdyAgID0gJCgnPGRpdiBjbGFzcz1cImxpZ2h0Ym94LXJvd1wiIC8+JykuYXBwZW5kVG8oJGxpZ2h0Ym94X3RhYmxlKTtcclxuICAgIHZhciAkbGlnaHRib3hfY2VsbCAgPSAkKCc8ZGl2IGNsYXNzPVwibGlnaHRib3gtY2VsbFwiIC8+JykuYXBwZW5kVG8oJGxpZ2h0Ym94X3Jvdyk7XHJcbiAgICB2YXIgJGxpZ2h0Ym94X2JveCAgID0gJCgnPGRpdiBjbGFzcz1cImxpZ2h0Ym94LWJveFwiIC8+JykuYXBwZW5kVG8oJGxpZ2h0Ym94X2NlbGwpO1xyXG5cclxuICAgICRsaWdodGJveF93cmFwLmNzcyhvcHRpb25zLndyYXBfY3NzKTtcclxuICAgICRsaWdodGJveF90YWJsZS5jc3Mob3B0aW9ucy50YWJsZV9jc3MpO1xyXG4gICAgJGxpZ2h0Ym94X3Jvdy5jc3Mob3B0aW9ucy5yb3dfY3NzKTtcclxuICAgICRsaWdodGJveF9jZWxsLmNzcyhvcHRpb25zLmNlbGxfY3NzKTtcclxuICAgICRsaWdodGJveF9ib3guY3NzKG9wdGlvbnMuYm94X2Nzcyk7XHJcblxyXG4gICAgJGxpZ2h0Ym94X2JveC5hZGRDbGFzcyhvcHRpb25zLmJveF9jbGFzcyk7XHJcbiAgICAkbGlnaHRib3hfYm94Lmh0bWwob3B0aW9ucy5ib3hfY29udGVudCk7XHJcblxyXG4gICAgaWYob3B0aW9ucy5mYWRlX2luID09IHRydWUpIHtcclxuICAgICAgJGxpZ2h0Ym94X3dyYXAuYW5pbWF0ZSh7XHJcbiAgICAgICAgb3BhY2l0eToxXHJcbiAgICAgIH0sNTAwLCgpID0+IHtcclxuICAgICAgICAvL2Nsb3NlIGNvbmRpdGlvbnNcclxuICAgICAgICAkKCcubGlnaHRib3gtY2VsbCAuY2xvc2UnKS5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5yZW1vdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcubGlnaHRib3gtY2VsbCcpLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICBpZigkKGUudGFyZ2V0KS5oYXNDbGFzcygnbGlnaHRib3gtY2VsbCcpKSB0aGlzLnJlbW92ZSgpO1xyXG4gICAgICAgIH0pOyBcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkbGlnaHRib3hfd3JhcC5jc3Moe1xyXG4gICAgICAgIG9wYWNpdHk6MVxyXG4gICAgICB9KTtcclxuICAgICAgLy9jbG9zZSBjb25kaXRpb25zXHJcbiAgICAgICQoJy5saWdodGJveC1jZWxsIC5jbG9zZScpLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmUoKTtcclxuICAgICAgfSk7XHJcbiAgICAgICQoJy5saWdodGJveC1jZWxsJykub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBpZigkKGUudGFyZ2V0KS5oYXNDbGFzcygnbGlnaHRib3gtY2VsbCcpKSB0aGlzLnJlbW92ZSgpO1xyXG4gICAgICB9KTtcclxuICAgIH0gXHJcblxyXG4gICAgJCgnYm9keScpLmtleXVwKChlKSA9PiAge1xyXG4gICAgICBpZiAoZS53aGljaCA9PSAyNykge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmICh0eXBlb2Yob3B0aW9ucy5jYWxsYmFjaykgPT09ICdmdW5jdGlvbicpIG9wdGlvbnMuY2FsbGJhY2soJGxpZ2h0Ym94X3dyYXApO1xyXG4gIH1cclxuICBcclxuICByZW1vdmUoKSB7XHJcbiAgICAkKCcubGlnaHRib3gtd3JhcCcpLmZhZGVPdXQoMTAwMCwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICQoJy5saWdodGJveC13cmFwJykucmVtb3ZlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGxvYWRpbmcoKSB7XHJcbiAgICB0aGlzLmNyZWF0ZSh7XHJcbiAgICAgIGJveF9jbGFzczogJ2xpZ2h0Ym94LWxvYWRpbmcnLFxyXG4gICAgICBib3hfY29udGVudCA6ICdMb2FkaW5nLi4uJyxcclxuICAgICAgYm94X2NzcyA6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOidub25lJ1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdzbGV0dGVyIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8vdGhpcy5wdWIoKTtcclxuICB9XHJcbiAgXHJcbiAgcHViKCkge1xyXG4gICAgdmFyICRmb3JtID0gJCgnI25ld3NsZXR0ZXInKTtcclxuXHJcbiAgICAvL09uIGNsaWNrIHNlbmQgb3BlbiAnY2FzdFxyXG4gICAgJGZvcm0ub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICBjb25zb2xlLmxvZygnYnJvYWRjYXN0IG5ld3NsZXR0ZXIgc2lnbnVwJyk7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgcmFkaW8oJ2FjdGlvbi9uZXdzbGV0dGVyJykuYnJvYWRjYXN0KHtcclxuICAgICAgICBhY3Rpb24gOiAnc2lnbnVwJyxcclxuICAgICAgICBldmVudCA6IGUsXHJcbiAgICAgICAgJGZvcm0gOiAkZm9ybVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBcclxuICBzdWIoKSB7XHJcbiAgICByYWRpbygnYWN0aW9uL25ld3NsZXR0ZXInKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcclxuICAgICAgdmFyICRmb3JtICAgID0gZGF0YS4kZm9ybTtcclxuICAgICAgdmFyICRzdWNjZXNzID0gJGZvcm0uZmluZCgnLnN1Y2Nlc3MnKTtcclxuICAgICAgdmFyICRlcnJvciAgID0gJGZvcm0uZmluZCgnLmVycm9yJyk7XHJcblxyXG4gICAgICB2YXIgYWN0aW9uID0gU3RyaW5nKCRmb3JtLmF0dHIoJ2FjdGlvbicpKTtcclxuXHJcbiAgICAgICRlcnJvci5oaWRlKCk7XHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogJGZvcm0uYXR0cignbWV0aG9kJyksXHJcbiAgICAgICAgdXJsOiBhY3Rpb24sXHJcbiAgICAgICAgZGF0YTogJGZvcm0uc2VyaWFsaXplKCksXHJcbiAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbihlcnIpIHtcclxuICAgICAgICAgIGFsZXJ0KFwiQ291bGQgbm90IGNvbm5lY3QgdG8gdGhlIHJlZ2lzdHJhdGlvbiBzZXJ2ZXIuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICBpZiAoZGF0YS5yZXN1bHQgIT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICAgICAgLy8gU29tZXRoaW5nIHdlbnQgd3JvbmcsIGRvIHNvbWV0aGluZyB0byBub3RpZnkgdGhlIHVzZXIuIG1heWJlIGFsZXJ0KGRhdGEubXNnKTtcclxuICAgICAgICAgICAgJGVycm9yLnRleHQoJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3MnKS5zaG93KCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBJdCB3b3JrZWQsIGNhcnJ5IG9uLi4uXHJcbiAgICAgICAgICAgICRmb3JtLmZpbmQoJ2lucHV0JykudmFsKCcnKTtcclxuICAgICAgICAgICAgJHN1Y2Nlc3Muc2hvdygpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcmVsb2FkIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuX2ZpbGVzID0gW107XHJcblxyXG4gICAgLy9DcmVhdGUgcHJlbG9hZCBkaXZcclxuICAgIGlmICghJCgnI3ByZWxvYWQnKS5pcygnKicpKSB7XHJcbiAgICAgIHRoaXMuJHByZWxvYWQgPSAkKCc8ZGl2IGlkPVwicHJlbG9hZFwiIC8+JykuYXBwZW5kVG8oJ2JvZHknKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuJHByZWxvYWQgPSAkKCcjcHJlbG9hZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuJHByZWxvYWQuaGlkZSgpO1xyXG4gIH1cclxuXHJcbiAgZmlsZXMob3B0cykge1xyXG4gICAgdGhpcy5fZmlsZXMgPSBvcHRzLnNyYztcclxuXHJcbiAgICB2YXIgZmlsZSA9IHRoaXMuX2ZpbGVzLnNoaWZ0KCk7XHJcbiAgICBpZiAodHlwZW9mKGZpbGUpICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIHRoaXMuZmlsZSh7XHJcbiAgICAgICAgc3JjOmZpbGUsXHJcbiAgICAgICAgY2FsbGJhY2s6IChkKSA9PiB7XHJcbiAgICAgICAgICAvL0dvIHRvIHRoZSBuZXh0IGZpbGVcclxuICAgICAgICAgIHRoaXMuZmlsZXMoe1xyXG4gICAgICAgICAgICBzcmM6IHRoaXMuX2ZpbGVzLCBcclxuICAgICAgICAgICAgY2FsbGJhY2s6IG9wdHMuY2FsbGJhY2tcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZygncnVuIGNhbGxiYWNrIScpO1xyXG4gICAgICB0aGlzLmNsZWFyKCk7XHJcbiAgICAgIGlmKHR5cGVvZihvcHRzLmNhbGxiYWNrKSAhPSAndW5kZWZpbmVkJykgb3B0cy5jYWxsYmFjaygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZmlsZShvcHRzKSB7XHJcbiAgICB2YXIgc3JjICAgID0gb3B0cy5zcmMucmVwbGFjZSgvXFxcIi9nLCAnICcpO1xyXG4gICAgdmFyIHR5cGUgICA9IHRoaXMuZ2V0RmlsZVR5cGUob3B0cy5zcmMpO1xyXG4gICAgdmFyICRwICAgICA9IHRoaXMuJHByZWxvYWQ7XHJcbiAgICB2YXIgaGFzX2NiID0gKHR5cGVvZihvcHRzLmNhbGxiYWNrKSAhPSAndW5kZWZpbmVkJyk7XHJcblxyXG4gICAgLy9CYWlsIGlmIHdlIGRvbid0IHJlY29nbmlzZSB0aGUgdHlwZVxyXG4gICAgaWYodHlwZSA9PSBmYWxzZSkge1xyXG4gICAgICBvcHRzLmNhbGxiYWNrKGQpOyBcclxuICAgIC8vSGFuZGxlIHR5cGVzXHJcbiAgICB9IGVsc2UgaWYodHlwZSA9PSAnaW1nJykge1xyXG4gICAgICB2YXIgJGZpbGUgPSAkKCc8aW1nIC8+JylcclxuICAgICAgICAuYXR0cignc3JjJywgc3JjKVxyXG4gICAgICAgIC5hcHBlbmRUbygkcCk7XHJcblxyXG4gICAgICBpZihoYXNfY2IpIHtcclxuICAgICAgICAkZmlsZS5sb2FkKChkKSA9PiB7XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdsb2FkZWQgaW1hZ2UnKTtcclxuICAgICAgICAgICBvcHRzLmNhbGxiYWNrKGQpOyBcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmKHR5cGUgPT0gJ2pzJykge1xyXG4gICAgICAkLmdldFNjcmlwdCggc3JjLCAoZCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdsb2FkZWQganMnKTtcclxuICAgICAgICBpZihoYXNfY2IpIG9wdHMuY2FsbGJhY2soZCk7IFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSBpZih0eXBlID09ICdjc3MnKSB7XHJcbiAgICAgIHZhciAkZmlsZSA9ICQoJzxsaW5rIC8+JylcclxuICAgICAgICAuYXR0cignaHJlZicsIHNyYylcclxuICAgICAgICAuYXR0cigncmVsJywgJ3N0eWxlc2hlZXQnKVxyXG4gICAgICAgIC5hcHBlbmRUbygkcCk7XHJcblxyXG4gICAgICBpZihoYXNfY2IpIHtcclxuICAgICAgICAkZmlsZS5sb2FkKChkKSA9PiB7XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdsb2FkZWQgY3NzJyk7XHJcbiAgICAgICAgICAgb3B0cy5jYWxsYmFjayhkKTsgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGltYWdlKG9wdHMpIHtcclxuICAgIHRoaXMuZmlsZShvcHRzKTtcclxuICB9XHJcblxyXG4gIGltYWdlcyhvcHRzKSB7XHJcbiAgICB0aGlzLmZpbGVzKG9wdHMpO1xyXG4gIH1cclxuXHJcbiAgY2xlYXIoKSB7XHJcbiAgICB0aGlzLl9pbWFnZXMgPSBbXTtcclxuICAgICQoJyNwcmVsb2FkIGltZycpLnJlbW92ZSgpO1xyXG4gICAgJCgnI3ByZWxvYWQgc2NyaXB0JykucmVtb3ZlKCk7XHJcbiAgICAkKCcjcHJlbG9hZCBzdHlsZScpLnJlbW92ZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RmlsZVR5cGUoc3JjKSB7XHJcbiAgICB2YXIgZXh0ID0gc3JjLnN1YnN0cigoc3JjLmxhc3RJbmRleE9mKCcuJykgKzEpKTtcclxuICAgIGlmKC8oanMpJC9pZy50ZXN0KGV4dCkpIHtcclxuICAgICAgcmV0dXJuICdqcyc7XHJcbiAgICB9IGVsc2UgaWYgKC8oY3NzKSQvaWcudGVzdChleHQpKSB7XHJcbiAgICAgIHJldHVybiAnY3NzJztcclxuICAgIH0gZWxzZSBpZiAoLyhqcGd8cG5nfGdpZikkL2lnLnRlc3QoZXh0KSkge1xyXG4gICAgICByZXR1cm4gJ2ltZyc7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFB1YiB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLiR3aW5kb3cgPSAkKHdpbmRvdyk7XHJcbiAgICAvLyB0aGlzLnNjcm9sbCgpO1xyXG4gICAgLy8gdGhpcy5yZXNpemUoKTtcclxuICAgIC8vIHRoaXMubG9hZCgpO1xyXG4gIH1cclxuICBcclxuICBzY3JvbGwoKSB7XHJcbiAgICB2YXIgJHdpbmRvdyA9IHRoaXMuJHdpbmRvdztcclxuXHJcbiAgICAkd2luZG93Lm9uKCdsb2FkIHNjcm9sbCcsICgpID0+IHtcclxuICAgICAgdGhpcy5zY3JvbGxQdWIoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVzaXplKCkge1xyXG4gICAgdmFyICR3aW5kb3cgPSB0aGlzLiR3aW5kb3c7XHJcblxyXG4gICAgJHdpbmRvdy5vbignbG9hZCByZXNpemUnLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMucmVzaXplUHViKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNjcm9sbFB1YigpIHtcclxuICAgIHZhciAkd2luZG93ID0gdGhpcy4kd2luZG93O1xyXG4gICAgcmFkaW8oJ3dpbmRvdy9zY3JvbGwnKS5icm9hZGNhc3Qoe1xyXG4gICAgICBzY3JvbGxUb3AgOiAkd2luZG93LnNjcm9sbFRvcCgpXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlc2l6ZVB1YigpIHtcclxuICAgIHZhciAkd2luZG93ID0gdGhpcy4kd2luZG93O1xyXG4gICAgcmFkaW8oJ3dpbmRvdy9yZXNpemUnKS5icm9hZGNhc3Qoe1xyXG4gICAgICB3aWR0aCAgOiAkd2luZG93LndpZHRoKCksXHJcbiAgICAgIGhlaWdodCA6ICR3aW5kb3cuaGVpZ2h0KClcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbG9hZCgpIHtcclxuICAgIHZhciAkd2luZG93ID0gdGhpcy4kd2luZG93O1xyXG5cclxuICAgICR3aW5kb3cub24oJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICAgIHJhZGlvKCd3aW5kb3cvbG9hZCcpLmJyb2FkY2FzdCh7XHJcbiAgICAgICAgd2lkdGggIDogJHdpbmRvdy53aWR0aCgpLFxyXG4gICAgICAgIGhlaWdodCA6ICR3aW5kb3cuaGVpZ2h0KCksXHJcbiAgICAgICAgc2Nyb2xsVG9wIDogJHdpbmRvdy5zY3JvbGxUb3AoKVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=
