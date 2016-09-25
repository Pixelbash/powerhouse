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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZXM2L2luaXQuanMiLCJzcmMvZXM2L3B1Yi5qcyIsInNyYy9lczYvcHViL2VsZW1lbnRzLmpzIiwic3JjL2VzNi9wdWIvZm9vdGVyLmpzIiwic3JjL2VzNi9wdWIvaGVhZGVyLmpzIiwic3JjL2VzNi9wdWIvaG9tZS5qcyIsInNyYy9lczYvcHViL2xheW91dC5qcyIsInNyYy9lczYvcHViL3BhZ2UuanMiLCJzcmMvZXM2L3N1Yi5qcyIsInNyYy9lczYvc3ViL2VsZW1lbnRzLmpzIiwic3JjL2VzNi9zdWIvZm9vdGVyLmpzIiwic3JjL2VzNi9zdWIvaGVhZGVyLmpzIiwic3JjL2VzNi9zdWIvaG9tZS5qcyIsInNyYy9lczYvc3ViL2xheW91dC5qcyIsInNyYy9lczYvc3ViL3BhZ2UuanMiLCJzcmMvZXM2L3V0aWxzLmpzIiwic3JjL2VzNi91dGlscy9oZWxwZXJzL2ZpeGVzLmpzIiwic3JjL2VzNi91dGlscy9oZWxwZXJzL2hhc2guanMiLCJzcmMvZXM2L3V0aWxzL2hlbHBlcnMvaGVscGVycy5qcyIsInNyYy9lczYvdXRpbHMvbGJveC9sZWdhY3kuanMiLCJzcmMvZXM2L3V0aWxzL25ld3NsZXR0ZXIvbWFpbGNoaW1wLmpzIiwic3JjL2VzNi91dGlscy9wcmVsb2FkL3ByZWxvYWQuanMiLCJzcmMvZXM2L3V0aWxzL3dpbmRvdy9wdWIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUNBQTs7OztBQUVBOzs7O0FBQ0E7Ozs7Ozs7O0lBRXFCLEk7QUFDbkIsa0JBQWM7QUFBQTs7QUFDWixTQUFLLEtBQUwsR0FBaUIsRUFBRSxNQUFGLENBQWpCO0FBQ0EsU0FBSyxPQUFMLEdBQWlCLEVBQUUsTUFBRixDQUFqQjtBQUNBLFNBQUssU0FBTCxHQUFpQixFQUFFLFFBQUYsQ0FBakI7QUFDQSxTQUFLLEtBQUwsR0FBaUIsRUFBRSxZQUFGLENBQWpCOztBQUVB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O0FBRG1CLE9BQWpDO0FBR0Q7OztnQ0FFVztBQUNWLFVBQUksVUFBVSxLQUFLLE9BQW5CO0FBQ0EsWUFBTSxlQUFOLEVBQXVCLFNBQXZCLENBQWlDO0FBQy9CLGVBQVMsUUFBUSxLQUFSLEVBRHNCO0FBRS9CLGdCQUFTLFFBQVEsTUFBUjtBQUZzQixPQUFqQztBQUlEOzs7MkJBRU07QUFDTCxVQUFJLFVBQVUsS0FBSyxPQUFuQjs7QUFFQSxjQUFRLEVBQVIsQ0FBVyxNQUFYLEVBQW1CLFlBQU07QUFDdkIsY0FBTSxhQUFOLEVBQXFCLFNBQXJCLENBQStCO0FBQzdCLGlCQUFTLFFBQVEsS0FBUixFQURvQjtBQUU3QixrQkFBUyxRQUFRLE1BQVIsRUFGb0I7QUFHN0IscUJBQVksUUFBUSxTQUFSO0FBSGlCLFNBQS9CO0FBS0QsT0FORDtBQU9EOzs7Ozs7a0JBakRrQixHIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBVdGlscyBmcm9tICcuL3V0aWxzJztcclxuXHJcbmltcG9ydCBQdWIgZnJvbSAnLi9wdWInO1xyXG5pbXBvcnQgU3ViIGZyb20gJy4vc3ViJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluaXQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy4kYm9keSAgICAgPSAkKCdib2R5Jyk7XHJcbiAgICB0aGlzLiR3aW5kb3cgICA9ICQod2luZG93KTtcclxuICAgIHRoaXMuJGRvY3VtZW50ID0gJChkb2N1bWVudCk7XHJcbiAgICB0aGlzLiRyb290ICAgICA9ICQoJ2h0bWwsIGJvZHknKTtcclxuXHJcbiAgICB0aGlzLl9vcHRzID0gd2luZG93Ll9vcHRzO1xyXG4gICAgdGhpcy5fZGF0YSA9IHdpbmRvdy5fZGF0YTtcclxuXHJcbiAgICB0aGlzLnV0aWxzID0gbmV3IFV0aWxzKCk7XHJcbiAgfSBcclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdpbml0aWFsaXNpbmcnKTtcclxuICAgIHRoaXMuc3ViID0gbmV3IFN1Yih0aGlzLCB0aGlzLnV0aWxzKTtcclxuICAgIHRoaXMucHViID0gbmV3IFB1Yih0aGlzLCB0aGlzLnV0aWxzKTsgXHJcbiAgfVxyXG59XHJcblxyXG5nbG9iYWwuYXBwID0gbmV3IEluaXQoKTsgICAiLCJpbXBvcnQgTGF5b3V0IGZyb20gJy4vcHViL2xheW91dCc7XHJcbmltcG9ydCBQYWdlIGZyb20gJy4vcHViL3BhZ2UnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vcHViL2hlYWRlcic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9wdWIvZm9vdGVyJztcclxuaW1wb3J0IEhvbWUgZnJvbSAnLi9wdWIvaG9tZSc7XHJcbmltcG9ydCBFbGVtZW50cyBmcm9tICcuL3B1Yi9lbGVtZW50cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQdWIge1xyXG4gIGNvbnN0cnVjdG9yKG1haW4sdXRpbHMpIHtcclxuICAgIHRoaXMubSA9IG1haW47XHJcbiAgICB0aGlzLnUgPSB1dGlscztcclxuICAgIFxyXG4gICAgdGhpcy5sYXlvdXQgPSBuZXcgTGF5b3V0KG1haW4sIHV0aWxzKTtcclxuICAgIHRoaXMuaGVhZGVyID0gbmV3IEhlYWRlcihtYWluLCB1dGlscyk7XHJcbiAgICB0aGlzLmZvb3RlciA9IG5ldyBGb290ZXIobWFpbiwgdXRpbHMpO1xyXG4gICAgdGhpcy5lbGVtZW50cyA9IG5ldyBFbGVtZW50cyhtYWluLCB1dGlscyk7XHJcblxyXG4gICAgLy9UZW1wbGF0ZSBzcGVjaWZpYyB0ZXN0c1xyXG4gICAgaWYoJCgnYm9keVtkYXRhLXRlbXBsYXRlPVwicGFnZS1pbmRleFwiXScpLmxlbmd0aCA+IDApIHRoaXMuaG9tZSA9IG5ldyBIb21lKG1haW4sIHV0aWxzKTtcclxuICB9XHJcbn0gIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF5b3V0IHtcclxuICBjb25zdHJ1Y3RvcihtYWluLHV0aWxzKSB7XHJcbiAgICB0aGlzLm0gPSBtYWluO1xyXG4gICAgdGhpcy51ID0gdXRpbHM7XHJcbiAgICB0aGlzLmluaXQoKTtcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICBcclxuICAgIHZhciBjb250YWN0ID0ge1xyXG4gICAgICAkcHViIDogJCgnW2RhdGEtcHVifj1cImNvbnRhY3QvZm9ybVwiXScpLFxyXG4gICAgICAkZXJyb3Jfc3ViIDogJCgnW2RhdGEtcHVifj1cImNvbnRhY3QvZm9ybVwiXSBbZGF0YS1zdWJ+PVwiY29udGFjdC9lcnJvclwiXScpXHJcbiAgICB9O1xyXG5cclxuICAgIHJhZGlvKCdlbGVtZW50cycpLmJyb2FkY2FzdCh7XHJcbiAgICAgIGNvbnRhY3Q6Y29udGFjdFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29udGFjdC4kcHViLm9uKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgICB2YXIgJHB1YiA9ICQoZS50YXJnZXQpO1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHJhZGlvKCdjb250YWN0L3N1Ym1pdCcpLmJyb2FkY2FzdCh7XHJcbiAgICAgICAgJHB1YjokcHViLFxyXG4gICAgICAgIGU6ZVxyXG4gICAgICB9KTtcclxuXHJcbiAgICB9KTtcclxuICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGb290ZXIge1xyXG4gIGNvbnN0cnVjdG9yKG1haW4sdXRpbHMpIHtcclxuICAgIHRoaXMubSA9IG1haW47XHJcbiAgICB0aGlzLnUgPSB1dGlscztcclxuICAgIHRoaXMuZm9vdGVyKCk7XHJcbiAgfVxyXG5cclxuICBmb290ZXIoKSB7XHJcbiAgfVxyXG59ICAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIge1xyXG4gIGNvbnN0cnVjdG9yKG1haW4sdXRpbHMpIHtcclxuICAgIHRoaXMubSA9IG1haW47XHJcbiAgICB0aGlzLnUgPSB1dGlscztcclxuICAgIHRoaXMuaGVhZGVyKCk7XHJcbiAgfVxyXG5cclxuICBoZWFkZXIoKSB7XHJcbiAgICB2YXIgJGhlYWRlciA9ICQoJ2hlYWRlci5kZWZhdWx0Jyk7XHJcbiAgICB2YXIgJHNlYXJjaCA9ICQoJ1tkYXRhLXN1Yn49XCJzZWFyY2hcIl0nKTtcclxuXHJcbiAgICB0aGlzLl9kID0ge1xyXG4gICAgICBidWlsZGluZ3M6IHdpbmRvdy5fZGF0YS5idWlsZGluZ3MsXHJcbiAgICAgIHNlYXJjaCA6IHtcclxuICAgICAgICAkdG9nZ2xlX3N1YjogJHNlYXJjaCxcclxuICAgICAgICAkdG9nZ2xlX3B1YjogJGhlYWRlci5maW5kKCdbZGF0YS1wdWJ+PVwic2VhcmNoLXRvZ2dsZVwiXScpLFxyXG4gICAgICAgICRoaWRlX3B1YjogJGhlYWRlci5maW5kKCdbZGF0YS1wdWJ+PVwic2VhcmNoLWhpZGVcIl0nKSxcclxuICAgICAgICAkZm9ybV9wdWI6ICRoZWFkZXIuZmluZCgnW2RhdGEtcHVifj1cInNlYXJjaC1mb3JtXCJdJyksXHJcbiAgICAgIH0sXHJcbiAgICAgIGxvZ2luOiB7XHJcbiAgICAgICAgJHNob3dfcHViOiAkKCdbZGF0YS1wdWJ+PVwibG9naW5cIl0nKSxcclxuICAgICAgICAkc3VibWl0X3B1YjogJCgnW2RhdGEtcHVifj1cImxvZ2luLWZvcm1cIl0nKSxcclxuICAgICAgICBhY3Rpb246IHdpbmRvdy5fZGF0YS50X3VybCArIFwiL2xvZ2luLnBocFwiLFxyXG4gICAgICAgIHRlbXBsYXRlOiBfLnRlbXBsYXRlKCQoJyNsb2dpbl90ZW1wbGF0ZScpLmh0bWwoKSlcclxuICAgICAgfSxcclxuICAgICAgbW9iaWxlOiB7XHJcbiAgICAgICAgJG1lbnU6ICRoZWFkZXIuZmluZCgnLm1lbnUnKSxcclxuICAgICAgICAkcHViOiAkaGVhZGVyLmZpbmQoJ1tkYXRhLXB1Yn49XCJoYW1idXJnZXJcIl0nKSxcclxuICAgICAgICAkc3ViOiAkaGVhZGVyLmZpbmQoJ1tkYXRhLXN1Yn49XCJoYW1idXJnZXJcIl0nKSxcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJhZGlvKCdoZWFkZXInKS5icm9hZGNhc3QodGhpcy5fZCk7XHJcblxyXG4gICAgdGhpcy5zZWFyY2goKTtcclxuICAgIHRoaXMubG9naW4oKTtcclxuXHJcbiAgICB0aGlzLl9kLm1vYmlsZS4kcHViLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIHJhZGlvKCdoZWFkZXIvbWVudS90b2dnbGUnKS5icm9hZGNhc3Qoe1xyXG5cclxuICAgICAgfSlcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2VhcmNoKCkge1xyXG4gICAgLy9Ub2dnbGUgc2VhcmNoIGJhclxyXG4gICAgdGhpcy5fZC5zZWFyY2guJHRvZ2dsZV9wdWIub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgcmFkaW8oJ2hlYWRlci9zZWFyY2gvdG9nZ2xlJykuYnJvYWRjYXN0KHtcclxuICAgICAgICAnYWN0aW9uJzondG9nZ2xlJ1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vSGlkZSBzZWFyY2ggYmFyXHJcbiAgICB0aGlzLl9kLnNlYXJjaC4kaGlkZV9wdWIub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgcmFkaW8oJ2hlYWRlci9zZWFyY2gvdG9nZ2xlJykuYnJvYWRjYXN0KHtcclxuICAgICAgICAnYWN0aW9uJzonaGlkZSdcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL1N1Ym1pdCBzZWFyY2ggZm9ybVxyXG4gICAgdGhpcy5fZC5zZWFyY2guJGZvcm1fcHViLm9uKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgICByYWRpbygnaGVhZGVyL3NlYXJjaC9zdWJtaXQnKS5icm9hZGNhc3Qoe1xyXG4gICAgICAgIGU6ZSxcclxuICAgICAgICAkZm9ybTokKGUuY3VycmVudFRhcmdldClcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGxvZ2luKCkge1xyXG4gICAgLy9TaG93IGxvZ2luIHRlbXBsYXRlXHJcbiAgICB0aGlzLl9kLmxvZ2luLiRzaG93X3B1Yi5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICB2YXIgc2VsZWN0ID0gJChlLmN1cnJlbnRUYXJnZXQpLmF0dHIoJ2RhdGEtc2VsZWN0Jyk7XHJcbiAgICAgIHJhZGlvKCdoZWFkZXIvbG9naW4vc2hvdycpLmJyb2FkY2FzdCh7XHJcbiAgICAgICAgc2VsZWN0OnNlbGVjdFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vRm9ybSBzdWJtaXNzaW9uXHJcbiAgICB0aGlzLm0uJGJvZHkub24oJ3N1Ym1pdCcsdGhpcy5fZC5sb2dpbi4kc3VibWl0X3B1Yi5zZWxlY3RvciwoZSkgPT4ge1xyXG4gICAgICB2YXIgJGZvcm0gPSAkKGUuY3VycmVudFRhcmdldCkuY2xvc2VzdCgnZm9ybScpO1xyXG4gICAgICB2YXIgYnVpbGRpbmcgPSAkZm9ybS5maW5kKCdbbmFtZT1cImJ1aWxkaW5nXCJdJykudmFsKCk7XHJcbiAgICAgIHZhciBwYXNzd29yZCA9ICRmb3JtLmZpbmQoJ1tuYW1lPVwicGFzc3dvcmRcIl0nKS52YWwoKTtcclxuICAgICAgdmFyIHVybCA9ICRmb3JtLmZpbmQoJ1tuYW1lPVwiYnVpbGRpbmdcIl0gb3B0aW9uOnNlbGVjdGVkJykuYXR0cignZGF0YS11cmwnKTtcclxuXHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgcmFkaW8oJ2hlYWRlci9sb2dpbi9zdWJtaXQnKS5icm9hZGNhc3Qoe1xyXG4gICAgICAgIGJ1aWxkaW5nOmJ1aWxkaW5nLFxyXG4gICAgICAgIHBhc3N3b3JkOnBhc3N3b3JkLFxyXG4gICAgICAgIHVybDp1cmxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn0gICIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUge1xyXG4gIGNvbnN0cnVjdG9yKG1haW4sdXRpbHMpIHtcclxuICAgIHRoaXMubSA9IG1haW47XHJcbiAgICB0aGlzLnUgPSB1dGlscztcclxuXHJcbiAgICB0aGlzLmluaXQoKTtcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcblxyXG4gICAgdGhpcy5fZCA9IHtcclxuICAgICAgc2xpZGVzaG93czoge1xyXG4gICAgICAgICRoZXJvX3N1YjogJCgnW2RhdGEtc3Vifj1cImhlcm8tc2xpZGVzaG93XCJdJyksXHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmFkaW8oJ2hvbWUnKS5icm9hZGNhc3QodGhpcy5fZCk7XHJcblxyXG4gICAgLy9TaG93IHZpZGVvXHJcbiAgICByYWRpbygnaG9tZS9zbGlkZXNob3dzL2hlcm8nKS5icm9hZGNhc3QoKTsgXHJcbiAgfVxyXG59IFxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBMYXlvdXQge1xyXG4gIGNvbnN0cnVjdG9yKG1haW4sdXRpbHMpIHtcclxuICAgIHRoaXMubSA9IG1haW47XHJcbiAgICB0aGlzLnUgPSB1dGlscztcclxuICAgIHRoaXMuc2V0dXAoKTtcclxuICB9XHJcblxyXG4gIHNldHVwKCkge1xyXG4gICAgdmFyICRsYXlvdXQgPSAkKCcjbGF5b3V0Jyk7XHJcblxyXG4gICAgcmFkaW8oJ2FjdGlvbi9sYXlvdXQnKS5icm9hZGNhc3Qoe1xyXG4gICAgICAkbGF5b3V0IDogJGxheW91dFxyXG4gICAgfSk7XHJcbiAgfVxyXG59IiwiLy9pbXBvcnQgUHJlc3MgZnJvbSAnLi9wYWdlL3ByZXNzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2Uge1xyXG4gIGNvbnN0cnVjdG9yKG1haW4sdXRpbHMpIHtcclxuICAgIHRoaXMubSA9IG1haW47XHJcbiAgICB0aGlzLnUgPSB1dGlscztcclxuXHJcbiAgICAvL3RoaXMucHJlc3MgPSBuZXcgUHJlc3MobWFpbiwgdXRpbHMpO1xyXG4gIH1cclxufSAiLCJpbXBvcnQgTGF5b3V0IGZyb20gJy4vc3ViL2xheW91dCc7XHJcbmltcG9ydCBQYWdlIGZyb20gJy4vc3ViL3BhZ2UnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vc3ViL2hlYWRlcic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9zdWIvZm9vdGVyJztcclxuaW1wb3J0IEhvbWUgZnJvbSAnLi9zdWIvaG9tZSc7XHJcbmltcG9ydCBFbGVtZW50cyBmcm9tICcuL3N1Yi9lbGVtZW50cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdWIge1xyXG4gIGNvbnN0cnVjdG9yKG1haW4sdXRpbHMpIHtcclxuICAgIHRoaXMubSA9IG1haW47XHJcbiAgICB0aGlzLnUgPSB1dGlscztcclxuXHJcbiAgICB0aGlzLmxheW91dCA9IG5ldyBMYXlvdXQobWFpbiwgdXRpbHMpO1xyXG4gICAgdGhpcy5oZWFkZXIgPSBuZXcgSGVhZGVyKG1haW4sIHV0aWxzKTtcclxuICAgIHRoaXMuZWxlbWVudHMgPSBuZXcgRWxlbWVudHMobWFpbiwgdXRpbHMpO1xyXG5cclxuXHJcbiAgICB0aGlzLmhvbWUgICAgICAgID0gbmV3IEhvbWUobWFpbiwgdXRpbHMpO1xyXG4gICAgdGhpcy5wYWdlICAgICAgICA9IG5ldyBQYWdlKG1haW4sIHV0aWxzKTtcclxuICB9XHJcbn0gIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWxlbWVudHMge1xyXG4gIGNvbnN0cnVjdG9yKG1haW4sdXRpbHMpIHtcclxuICAgIHRoaXMubSA9IG1haW47XHJcbiAgICB0aGlzLnUgPSB1dGlscztcclxuICAgIHJhZGlvKCdlbGVtZW50cycpLnN1YnNjcmliZSgoZGF0YSkgPT4ge3RoaXMuZWxlbWVudHMoZGF0YSk7fSk7XHJcbiAgfVxyXG5cclxuICBlbGVtZW50cyhkYXRhKSB7XHJcbiAgICB0aGlzLmNvbnRhY3QgPSBkYXRhLmNvbnRhY3Q7XHJcblxyXG4gICAgcmFkaW8oJ2NvbnRhY3Qvc3VibWl0Jykuc3Vic2NyaWJlKChkYXRhKSA9PiB7dGhpcy5jb250YWN0U3VibWl0KGRhdGEpO30pO1xyXG4gIH1cclxuXHJcbiAgY29udGFjdFN1Ym1pdChkKSB7XHJcbiAgICB2YXIgZSAgICAgID0gZC5lO1xyXG4gICAgdmFyICRmb3JtICA9IGQuJHB1YjtcclxuICAgIHZhciAkZXJyb3IgPSB0aGlzLmNvbnRhY3QuJGVycm9yX3N1YjtcclxuXHJcbiAgICAkLnBvc3QoIHdpbmRvdy5sb2NhdGlvbiAsICRmb3JtLnNlcmlhbGl6ZSgpICsgJyZzdWJtaXQ9dHJ1ZScgLCAoZCkgPT4ge1xyXG4gICAgICB2YXIgJGh0bWwgPSAkKGQpO1xyXG5cclxuICAgICAgLy9SZXBsYWNlIGZvcm1zIHdpdGggY29udGVudHNcclxuICAgICAgdmFyICRwdWJzID0gdGhpcy5jb250YWN0LiRwdWI7XHJcbiAgICAgIHZhciAkbmV3X3B1YnMgPSAkaHRtbC5maW5kKCdbZGF0YS1wdWJ+PVwiY29udGFjdC9mb3JtXCJdJyk7XHJcbiAgICAgIHZhciAkbmV3X3N1YnMgPSAkaHRtbC5maW5kKCdbZGF0YS1zdWJ+PVwiY29udGFjdC9mb3JtXCJdJyk7XHJcblxyXG4gICAgICAkcHVicy5lYWNoKChpLHB1YikgPT4ge1xyXG4gICAgICAgIHZhciAkcHViID0gJChwdWIpO1xyXG4gICAgICAgIHZhciBpbmRleCA9IGk7XHJcblxyXG4gICAgICAgIHZhciAkbmV3X3B1YiA9ICRuZXdfcHVicy5lcShpbmRleCk7XHJcbiAgICAgICAgaWYoJG5ld19wdWIuc2l6ZSgpID09IDApIHtcclxuICAgICAgICAgICRuZXdfcHViID0gJG5ld19zdWJzLmVxKGluZGV4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBuZXdfaHRtbCA9ICRuZXdfcHViLnBhcmVudCgpLmh0bWwoKTtcclxuXHJcbiAgICAgICAgJHB1Yi5wYXJlbnQoKS5odG1sKG5ld19odG1sKTtcclxuICAgICAgfSlcclxuICAgIH0pO1xyXG4gIH1cclxufSAgICIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIExhbmRpbmcge1xyXG4gIGNvbnN0cnVjdG9yKG1haW4sdXRpbHMpIHtcclxuICAgIHRoaXMubSA9IG1haW47XHJcbiAgICB0aGlzLnUgPSB1dGlscztcclxuICAgIHJhZGlvKCdhY3Rpb24vZm9vdGVyJykuc3Vic2NyaWJlKChkYXRhKSA9PiB7dGhpcy5mb290ZXIoZGF0YSk7fSk7XHJcbiAgfVxyXG5cclxuICBmb290ZXIoZGF0YSkge1xyXG4gIH1cclxufSAgICAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIge1xyXG4gIGNvbnN0cnVjdG9yKG1haW4sdXRpbHMpIHtcclxuICAgIHRoaXMubSA9IG1haW47XHJcbiAgICB0aGlzLnUgPSB1dGlscztcclxuXHJcbiAgICByYWRpbygnaGVhZGVyJykuc3Vic2NyaWJlKChkKSA9PiB7dGhpcy5pbml0KGQpO30pO1xyXG4gIH1cclxuXHJcbiAgaW5pdChkKSB7XHJcbiAgICB0aGlzLl9kID0gZDtcclxuXHJcbiAgICByYWRpbygnaGVhZGVyL3NlYXJjaC90b2dnbGUnKS5zdWJzY3JpYmUoKGQpID0+IHt0aGlzLnNlYXJjaFRvZ2dsZShkKTt9KTtcclxuICAgIHJhZGlvKCdoZWFkZXIvc2VhcmNoL3N1Ym1pdCcpLnN1YnNjcmliZSgoZCkgPT4ge3RoaXMuc2VhcmNoU3VibWl0KGQpO30pO1xyXG4gICAgcmFkaW8oJ2hlYWRlci9sb2dpbi9zaG93Jykuc3Vic2NyaWJlKChkKSA9PiB7dGhpcy5sb2dpblNob3coZCk7fSk7XHJcbiAgICByYWRpbygnaGVhZGVyL2xvZ2luL3N1Ym1pdCcpLnN1YnNjcmliZSgoZCkgPT4ge3RoaXMubG9naW5TdWJtaXQoZCk7fSk7XHJcblxyXG5cclxuICAgIHJhZGlvKCdoZWFkZXIvbWVudS90b2dnbGUnKS5zdWJzY3JpYmUoKGQpID0+IHt0aGlzLm1lbnUoZCk7fSk7XHJcbiAgfVxyXG5cclxuICBzZWFyY2hUb2dnbGUoZCkge1xyXG4gICAgdmFyIGFjdGlvbiA9IGQuYWN0aW9uO1xyXG5cclxuICAgIGlmKGFjdGlvbiA9PSAndG9nZ2xlJykge1xyXG4gICAgICB0aGlzLl9kLnNlYXJjaC4kdG9nZ2xlX3N1Yi50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9IGVsc2UgaWYoYWN0aW9uID09ICdzaG93Jykge1xyXG4gICAgICB0aGlzLl9kLnNlYXJjaC4kdG9nZ2xlX3N1Yi5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9IGVsc2UgaWYoYWN0aW9uID09ICdoaWRlJykge1xyXG4gICAgICB0aGlzLl9kLnNlYXJjaC4kdG9nZ2xlX3N1Yi5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZWFyY2hTdWJtaXQoZCkge1xyXG4gICAgdmFyIGUgPSBkLmU7XHJcblxyXG4gICAgLy9lLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfVxyXG5cclxuICBsb2dpblNob3coZCkge1xyXG4gICAgdGhpcy51LmxpZ2h0Ym94LmNyZWF0ZSh7XHJcbiAgICAgIGJveF9jb250ZW50OnRoaXMuX2QubG9naW4udGVtcGxhdGUoe1xyXG4gICAgICAgIGJ1aWxkaW5nczp0aGlzLl9kLmJ1aWxkaW5nc1xyXG4gICAgICB9KSxcclxuICAgICAgYm94X2NsYXNzOiAnbGlnaHRib3gtbG9naW4nLFxyXG4gICAgICBib3hfY3NzOiB7XHJcbiAgICAgICAgcGFkZGluZzonNDBweCA4MHB4J1xyXG4gICAgICB9LFxyXG4gICAgICB3cmFwX2Nzczoge1xyXG4gICAgICAgIGJhY2tncm91bmQ6J3JnYmEoMCwwLDAsMC42KSdcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGxvZ2luU3VibWl0KGQpIHtcclxuICAgICQuYWpheCh7XHJcbiAgICAgIHVybDp3aW5kb3cuX2RhdGEuYV91cmwsXHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgJ2FjdGlvbic6ICdmb3JtbG9naW4nLFxyXG4gICAgICAgICdkYXRhJyA6IGRcclxuICAgICAgfSxcclxuICAgICAgJ2RhdGFUeXBlJyA6J2pzb24nLFxyXG4gICAgICBjb21wbGV0ZTogKHIpID0+IHtcclxuICAgICAgICBpZihyLnJlc3BvbnNlVGV4dCAhPSAwKSB7XHJcbiAgICAgICAgICB0aGlzLnUuY29va2llcy5zZXQoJ2xvZ2luJyxyLnJlc3BvbnNlVGV4dCwxKTtcclxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IGQudXJsO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBhbGVydCgnUGxlYXNlIGNoZWNrIHRoZSBwYXNzd29yZCBpcyBjb3JyZWN0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgbWVudShkKSB7XHJcbiAgICB2YXIgJHB1YiA9IHRoaXMuX2QubW9iaWxlLiRwdWI7XHJcbiAgICB2YXIgJHN1YiA9IHRoaXMuX2QubW9iaWxlLiRzdWI7XHJcblxyXG4gICAgLy9JcyBhbHJlYWR5IGFjdGl2ZT9cclxuICAgIHZhciBpc19hY3RpdmUgPSAkcHViLmhhc0NsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiAgICBpZihpc19hY3RpdmUpIHtcclxuICAgICAgJHB1Yi5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICRzdWIucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJHB1Yi5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICRzdWIuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gIH1cclxufSAgICAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIHtcclxuICBjb25zdHJ1Y3RvcihtYWluLHV0aWxzKSB7XHJcbiAgICB0aGlzLm0gPSBtYWluO1xyXG4gICAgdGhpcy51ID0gdXRpbHM7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ3N1YiBob21lJyk7XHJcblxyXG4gICAgcmFkaW8oJ2hvbWUnKS5zdWJzY3JpYmUoKGRhdGEpID0+IHt0aGlzLmluaXQoZGF0YSk7fSk7XHJcbiAgfVxyXG5cclxuICBpbml0KGQpIHtcclxuICAgIHRoaXMuX2QgPSBkO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHRoaXMuX2QpO1xyXG5cclxuICAgIHJhZGlvKCdob21lL3NsaWRlc2hvd3MvaGVybycpLnN1YnNjcmliZSgoZGF0YSkgPT4ge3RoaXMuaGVybyhkYXRhKTt9KTsgICAgICAgICAgICBcclxuICB9XHJcblxyXG4gIGhlcm8oZCkge1xyXG4gICAgdmFyICRzdWIgPSB0aGlzLl9kLnNsaWRlc2hvd3MuJGhlcm9fc3ViO1xyXG4gICAgJHN1Yi5maW5kKCc+ZGl2Jykuc2hvdygpO1xyXG4gICAgJHN1Yi5ieFNsaWRlcigpO1xyXG4gIH1cclxufSAgXHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIExheW91dCB7XHJcbiAgY29uc3RydWN0b3IobWFpbix1dGlscykge1xyXG4gICAgdGhpcy5tID0gbWFpbjtcclxuICAgIHRoaXMudSA9IHV0aWxzO1xyXG4gICAgcmFkaW8oJ2FjdGlvbi9sYXlvdXQnKS5zdWJzY3JpYmUoKGRhdGEpID0+IHt0aGlzLmxheW91dChkYXRhKTt9KTtcclxuICB9XHJcblxyXG4gIGxheW91dChkYXRhKSB7XHJcbiAgICB0aGlzLiRsYXlvdXQgPSBkYXRhLiRsYXlvdXQ7XHJcblxyXG4gICAgLy9zdWJzY3JpcHRpb25zXHJcbiAgICByYWRpbygnd2luZG93L3Jlc2l6ZScpLnN1YnNjcmliZSgoc3ViX2RhdGEpID0+IHt0aGlzLnJlc2l6ZShzdWJfZGF0YSk7fSk7XHJcbiAgfVxyXG5cclxuICByZXNpemUoZGF0YSkge1xyXG4gICAgY29uc29sZS5sb2coJ3VwZGF0ZSBsYXlvdXQgaGVpZ2h0Jyk7XHJcbiAgICB0aGlzLndpbmRvd19oZWlnaHQgPSB0aGlzLm0uJHdpbmRvdy5oZWlnaHQoKTtcclxuXHJcbiAgICB0aGlzLiRsYXlvdXQuY3NzKHsgXHJcbiAgICAgICdtaW4taGVpZ2h0JzogdGhpcy53aW5kb3dfaGVpZ2h0XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL1JlbW92ZSBsb2FkaW5nIGNsYXNzXHJcbiAgICBpZih0aGlzLiRsYXlvdXQuaGFzQ2xhc3MoJ2xvYWRpbmcnKSkge1xyXG4gICAgICB0aGlzLiRsYXlvdXQucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKVxyXG4gICAgfVxyXG4gIH1cclxufSAgICIsIi8vaW1wb3J0IFByZXNzIGZyb20gJy4vcGFnZS9wcmVzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlIHtcclxuICBjb25zdHJ1Y3RvcihtYWluLHV0aWxzKSB7XHJcbiAgICB0aGlzLm0gPSBtYWluO1xyXG4gICAgdGhpcy51ID0gdXRpbHM7XHJcblxyXG4gICAgLy90aGlzLnByZXNzID0gbmV3IFByZXNzKG1haW4sIHV0aWxzKTtcclxuICB9XHJcbn0gICAiLCJpbXBvcnQgSGVscGVycyBmcm9tICcuL3V0aWxzL2hlbHBlcnMvaGVscGVycyc7XHJcbmltcG9ydCBIYXNoIGZyb20gJy4vdXRpbHMvaGVscGVycy9oYXNoJztcclxuXHJcbmltcG9ydCBQcmVsb2FkIGZyb20gJy4vdXRpbHMvcHJlbG9hZC9wcmVsb2FkJztcclxuaW1wb3J0IFdpbmRvdyBmcm9tICcuL3V0aWxzL3dpbmRvdy9wdWInO1xyXG5pbXBvcnQgTmV3c2xldHRlciBmcm9tICcuL3V0aWxzL25ld3NsZXR0ZXIvbWFpbGNoaW1wJztcclxuaW1wb3J0IEZpeGVzIGZyb20gJy4vdXRpbHMvaGVscGVycy9maXhlcyc7XHJcbmltcG9ydCBMaWdodGJveCBmcm9tICcuL3V0aWxzL2xib3gvbGVnYWN5JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFV0aWxzIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICB0aGlzLmZpeGVzICAgICAgPSBuZXcgRml4ZXMoKTsgXHJcbiAgICB0aGlzLnByZWxvYWQgICAgPSBuZXcgUHJlbG9hZCgpO1xyXG4gICAgdGhpcy5uZXdzbGV0dGVyID0gbmV3IE5ld3NsZXR0ZXIoKTtcclxuICAgIHRoaXMuaGVscGVycyAgICA9IG5ldyBIZWxwZXJzKCk7XHJcbiAgICB0aGlzLmhhc2ggICAgICAgPSBuZXcgSGFzaCgpOyBcclxuICAgIHRoaXMubGlnaHRib3ggICA9IG5ldyBMaWdodGJveCgpO1xyXG4gICAgdGhpcy53aW5kb3cgICAgID0gbmV3IFdpbmRvdygpO1xyXG4gIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpeGVzIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuY29uc29sZSgpOyAgLy9Bdm9pZCBubyBjb25zb2xlIGVycm9yc1xyXG4gIH1cclxuXHJcbiAgY29uc29sZSgpIHsgXHJcbiAgICAoZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciBtZXRob2Q7XHJcbiAgICAgIHZhciBub29wID0gZnVuY3Rpb24oKSB7fTtcclxuICAgICAgdmFyIG1ldGhvZHMgPSBbXHJcbiAgICAgICdhc3NlcnQnLCAnY2xlYXInLCAnY291bnQnLCAnZGVidWcnLCAnZGlyJywgJ2RpcnhtbCcsICdlcnJvcicsXHJcbiAgICAgICdleGNlcHRpb24nLCAnZ3JvdXAnLCAnZ3JvdXBDb2xsYXBzZWQnLCAnZ3JvdXBFbmQnLCAnaW5mbycsICdsb2cnLFxyXG4gICAgICAnbWFya1RpbWVsaW5lJywgJ3Byb2ZpbGUnLCAncHJvZmlsZUVuZCcsICd0YWJsZScsICd0aW1lJywgJ3RpbWVFbmQnLFxyXG4gICAgICAndGltZVN0YW1wJywgJ3RyYWNlJywgJ3dhcm4nXHJcbiAgICAgIF07XHJcbiAgICAgIHZhciBsZW5ndGggPSBtZXRob2RzLmxlbmd0aDtcclxuICAgICAgdmFyIGNvbnNvbGUgPSAod2luZG93LmNvbnNvbGUgPSB3aW5kb3cuY29uc29sZSB8fCB7fSk7XHJcblxyXG4gICAgICB3aGlsZSAobGVuZ3RoLS0pIHtcclxuICAgICAgICBtZXRob2QgPSBtZXRob2RzW2xlbmd0aF07XHJcblxyXG4gICAgICAgIC8vIE9ubHkgc3R1YiB1bmRlZmluZWQgbWV0aG9kcy5cclxuICAgICAgICBpZiAoIWNvbnNvbGVbbWV0aG9kXSkge1xyXG4gICAgICAgICAgY29uc29sZVttZXRob2RdID0gbm9vcDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0oKSk7XHJcbiAgfVxyXG59ICIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhhc2gge1xyXG4gIHB1YigpIHtcclxuICAgICQod2luZG93KS5iaW5kKCAnbG9hZCBoYXNoY2hhbmdlJywgKGUpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ3B1YiBoYXNoIGNoYW5nZScpO1xyXG4gICAgICByYWRpbygnd2luZG93L2hhc2gvY2hhbmdlJykuYnJvYWRjYXN0KHtcclxuICAgICAgICBlOmUsXHJcbiAgICAgICAgaGFzaDpsb2NhdGlvbi5oYXNoLnNsaWNlKDEpXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7IFxyXG4gIH1cclxufSAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBIZWxwZXJzIHtcclxuICBzbHVnaWZ5KHRleHQpIHtcclxuICAgIHJldHVybiB0ZXh0LnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvW15cXHcgXSsvZywnJykucmVwbGFjZSgvICsvZywnLScpO1xyXG4gIH1cclxuICBnZXRDb29raWUoY19uYW1lKSB7XHJcbiAgICAgIHZhciBpLCB4LCB5LCBBUlJjb29raWVzID0gZG9jdW1lbnQuY29va2llLnNwbGl0KFwiO1wiKTtcclxuICAgICAgZm9yIChpID0gMDsgaSA8IEFSUmNvb2tpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB4ID0gQVJSY29va2llc1tpXS5zdWJzdHIoMCwgQVJSY29va2llc1tpXS5pbmRleE9mKFwiPVwiKSk7XHJcbiAgICAgICAgeSA9IEFSUmNvb2tpZXNbaV0uc3Vic3RyKEFSUmNvb2tpZXNbaV0uaW5kZXhPZihcIj1cIikgKyAxKTtcclxuICAgICAgICB4ID0geC5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCBcIlwiKTtcclxuICAgICAgICBpZiAoeCA9PSBjX25hbWUpIHtcclxuICAgICAgICAgIHJldHVybiB1bmVzY2FwZSh5KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgc2V0Q29va2llKGNfbmFtZSwgdmFsdWUsIGV4aG91cnMpIHtcclxuICAgIHZhciB0aW1lID0gbmV3IERhdGUoKTtcclxuICAgIHZhciBvZmZzZXQgPSB0aW1lLmdldFRpbWUoKTtcclxuICAgIG9mZnNldCArPSAoMzYwMCAqIDEwMDApICogZXhob3VycztcclxuICAgIHRpbWUuc2V0VGltZShvZmZzZXQpO1xyXG5cclxuICAgIGRvY3VtZW50LmNvb2tpZSA9IGNfbmFtZSArIFwiPVwiICsgZXNjYXBlKHZhbHVlKSArIFwiOyBleHBpcmVzPVwiICsgdGltZS50b0dNVFN0cmluZygpO1xyXG4gIH1cclxufSAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluIHtcclxuICBjcmVhdGUobmV3X29wdGlvbnMpIHtcclxuICAgIHZhciBvcHRpb25zID0ge1xyXG4gICAgICBmYWRlX2luOiB0cnVlLFxyXG4gICAgICBib3hfY2xhc3M6ICcnLFxyXG4gICAgICBib3hfY29udGVudDogJycsXHJcbiAgICAgIHdyYXBfY3NzOiB7XHJcbiAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgICAgICAgbGVmdDogMCxcclxuICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICBiYWNrZ3JvdW5kOiAncmdiYSgyNDQsMjM5LDIzMiwwLjkyKScsXHJcbiAgICAgICAgJ3otaW5kZXgnOiA5OTk5OTksXHJcbiAgICAgICAgb3BhY2l0eTowXHJcbiAgICAgIH0sXHJcbiAgICAgIHRhYmxlX2Nzczoge1xyXG4gICAgICAgIGRpc3BsYXk6ICd0YWJsZScsXHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBoZWlnaHQ6ICcxMDAlJ1xyXG4gICAgICB9LFxyXG4gICAgICByb3dfY3NzOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ3RhYmxlLXJvdydcclxuICAgICAgfSxcclxuICAgICAgY2VsbF9jc3M6IHtcclxuICAgICAgICBkaXNwbGF5OiAndGFibGUtY2VsbCcsXHJcbiAgICAgICAgJ3RleHQtYWxpZ24nOiAnY2VudGVyJyxcclxuICAgICAgICAndmVydGljYWwtYWxpZ24nOiAnbWlkZGxlJ1xyXG4gICAgICB9LFxyXG4gICAgICBib3hfY3NzOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICAgICAgJypkaXNwbGF5JzogJ2lubGluZScsXHJcbiAgICAgICAgd2lkdGg6ICdhdXRvJyxcclxuICAgICAgICBoZWlnaHQ6ICdhdXRvJyxcclxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICBwYWRkaW5nOiAnMjBweCcsXHJcbiAgICAgICAgYm9yZGVyOiAnbm9uZScsXHJcbiAgICAgICAgYmFja2dyb3VuZDogJyNmZmYnXHJcbiAgICAgIH0sXHJcbiAgICAgIGNhbGxiYWNrOiBmYWxzZVxyXG4gICAgfTtcclxuXHJcbiAgICAkLmV4dGVuZCh0cnVlLCBvcHRpb25zLCBuZXdfb3B0aW9ucyk7XHJcblxyXG4gICAgLy9SZW1vdmUgYW55IGV4aXN0aW5nIGxpZ2h0Ym94ZXNcclxuICAgICQoJy5saWdodGJveC13cmFwJykucmVtb3ZlKCk7XHJcblxyXG4gICAgdmFyICRsaWdodGJveF93cmFwICA9ICQoJzxkaXYgY2xhc3M9XCJsaWdodGJveC13cmFwXCIgLz4nKS5hcHBlbmRUbygnYm9keScpO1xyXG4gICAgdmFyICRsaWdodGJveF90YWJsZSA9ICQoJzxkaXYgY2xhc3M9XCJsaWdodGJveC10YWJsZVwiIC8+JykuYXBwZW5kVG8oJGxpZ2h0Ym94X3dyYXApO1xyXG4gICAgdmFyICRsaWdodGJveF9yb3cgICA9ICQoJzxkaXYgY2xhc3M9XCJsaWdodGJveC1yb3dcIiAvPicpLmFwcGVuZFRvKCRsaWdodGJveF90YWJsZSk7XHJcbiAgICB2YXIgJGxpZ2h0Ym94X2NlbGwgID0gJCgnPGRpdiBjbGFzcz1cImxpZ2h0Ym94LWNlbGxcIiAvPicpLmFwcGVuZFRvKCRsaWdodGJveF9yb3cpO1xyXG4gICAgdmFyICRsaWdodGJveF9ib3ggICA9ICQoJzxkaXYgY2xhc3M9XCJsaWdodGJveC1ib3hcIiAvPicpLmFwcGVuZFRvKCRsaWdodGJveF9jZWxsKTtcclxuXHJcbiAgICAkbGlnaHRib3hfd3JhcC5jc3Mob3B0aW9ucy53cmFwX2Nzcyk7XHJcbiAgICAkbGlnaHRib3hfdGFibGUuY3NzKG9wdGlvbnMudGFibGVfY3NzKTtcclxuICAgICRsaWdodGJveF9yb3cuY3NzKG9wdGlvbnMucm93X2Nzcyk7XHJcbiAgICAkbGlnaHRib3hfY2VsbC5jc3Mob3B0aW9ucy5jZWxsX2Nzcyk7XHJcbiAgICAkbGlnaHRib3hfYm94LmNzcyhvcHRpb25zLmJveF9jc3MpO1xyXG5cclxuICAgICRsaWdodGJveF9ib3guYWRkQ2xhc3Mob3B0aW9ucy5ib3hfY2xhc3MpO1xyXG4gICAgJGxpZ2h0Ym94X2JveC5odG1sKG9wdGlvbnMuYm94X2NvbnRlbnQpO1xyXG5cclxuICAgIGlmKG9wdGlvbnMuZmFkZV9pbiA9PSB0cnVlKSB7XHJcbiAgICAgICRsaWdodGJveF93cmFwLmFuaW1hdGUoe1xyXG4gICAgICAgIG9wYWNpdHk6MVxyXG4gICAgICB9LDUwMCwoKSA9PiB7XHJcbiAgICAgICAgLy9jbG9zZSBjb25kaXRpb25zXHJcbiAgICAgICAgJCgnLmxpZ2h0Ym94LWNlbGwgLmNsb3NlJykub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmxpZ2h0Ym94LWNlbGwnKS5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgaWYoJChlLnRhcmdldCkuaGFzQ2xhc3MoJ2xpZ2h0Ym94LWNlbGwnKSkgdGhpcy5yZW1vdmUoKTtcclxuICAgICAgICB9KTsgXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJGxpZ2h0Ym94X3dyYXAuY3NzKHtcclxuICAgICAgICBvcGFjaXR5OjFcclxuICAgICAgfSk7XHJcbiAgICAgIC8vY2xvc2UgY29uZGl0aW9uc1xyXG4gICAgICAkKCcubGlnaHRib3gtY2VsbCAuY2xvc2UnKS5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICAkKCcubGlnaHRib3gtY2VsbCcpLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgaWYoJChlLnRhcmdldCkuaGFzQ2xhc3MoJ2xpZ2h0Ym94LWNlbGwnKSkgdGhpcy5yZW1vdmUoKTtcclxuICAgICAgfSk7XHJcbiAgICB9IFxyXG5cclxuICAgICQoJ2JvZHknKS5rZXl1cCgoZSkgPT4gIHtcclxuICAgICAgaWYgKGUud2hpY2ggPT0gMjcpIHtcclxuICAgICAgICB0aGlzLnJlbW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAodHlwZW9mKG9wdGlvbnMuY2FsbGJhY2spID09PSAnZnVuY3Rpb24nKSBvcHRpb25zLmNhbGxiYWNrKCRsaWdodGJveF93cmFwKTtcclxuICB9XHJcbiAgXHJcbiAgcmVtb3ZlKCkge1xyXG4gICAgJCgnLmxpZ2h0Ym94LXdyYXAnKS5mYWRlT3V0KDEwMDAsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAkKCcubGlnaHRib3gtd3JhcCcpLnJlbW92ZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBsb2FkaW5nKCkge1xyXG4gICAgdGhpcy5jcmVhdGUoe1xyXG4gICAgICBib3hfY2xhc3M6ICdsaWdodGJveC1sb2FkaW5nJyxcclxuICAgICAgYm94X2NvbnRlbnQgOiAnTG9hZGluZy4uLicsXHJcbiAgICAgIGJveF9jc3MgOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDonbm9uZSdcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3c2xldHRlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvL3RoaXMucHViKCk7XHJcbiAgfVxyXG4gIFxyXG4gIHB1YigpIHtcclxuICAgIHZhciAkZm9ybSA9ICQoJyNuZXdzbGV0dGVyJyk7XHJcblxyXG4gICAgLy9PbiBjbGljayBzZW5kIG9wZW4gJ2Nhc3RcclxuICAgICRmb3JtLm9uKCdzdWJtaXQnLCBmdW5jdGlvbihlKXtcclxuICAgICAgY29uc29sZS5sb2coJ2Jyb2FkY2FzdCBuZXdzbGV0dGVyIHNpZ251cCcpO1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHJhZGlvKCdhY3Rpb24vbmV3c2xldHRlcicpLmJyb2FkY2FzdCh7XHJcbiAgICAgICAgYWN0aW9uIDogJ3NpZ251cCcsXHJcbiAgICAgICAgZXZlbnQgOiBlLFxyXG4gICAgICAgICRmb3JtIDogJGZvcm1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgXHJcbiAgc3ViKCkge1xyXG4gICAgcmFkaW8oJ2FjdGlvbi9uZXdzbGV0dGVyJykuc3Vic2NyaWJlKChkYXRhKSA9PiB7XHJcbiAgICAgIHZhciAkZm9ybSAgICA9IGRhdGEuJGZvcm07XHJcbiAgICAgIHZhciAkc3VjY2VzcyA9ICRmb3JtLmZpbmQoJy5zdWNjZXNzJyk7XHJcbiAgICAgIHZhciAkZXJyb3IgICA9ICRmb3JtLmZpbmQoJy5lcnJvcicpO1xyXG5cclxuICAgICAgdmFyIGFjdGlvbiA9IFN0cmluZygkZm9ybS5hdHRyKCdhY3Rpb24nKSk7XHJcblxyXG4gICAgICAkZXJyb3IuaGlkZSgpO1xyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6ICRmb3JtLmF0dHIoJ21ldGhvZCcpLFxyXG4gICAgICAgIHVybDogYWN0aW9uLFxyXG4gICAgICAgIGRhdGE6ICRmb3JtLnNlcmlhbGl6ZSgpLFxyXG4gICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24oZXJyKSB7XHJcbiAgICAgICAgICBhbGVydChcIkNvdWxkIG5vdCBjb25uZWN0IHRvIHRoZSByZWdpc3RyYXRpb24gc2VydmVyLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgaWYgKGRhdGEucmVzdWx0ICE9IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICAgIC8vIFNvbWV0aGluZyB3ZW50IHdyb25nLCBkbyBzb21ldGhpbmcgdG8gbm90aWZ5IHRoZSB1c2VyLiBtYXliZSBhbGVydChkYXRhLm1zZyk7XHJcbiAgICAgICAgICAgICRlcnJvci50ZXh0KCdQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzJykuc2hvdygpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gSXQgd29ya2VkLCBjYXJyeSBvbi4uLlxyXG4gICAgICAgICAgICAkZm9ybS5maW5kKCdpbnB1dCcpLnZhbCgnJyk7XHJcbiAgICAgICAgICAgICRzdWNjZXNzLnNob3coKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlbG9hZCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLl9maWxlcyA9IFtdO1xyXG5cclxuICAgIC8vQ3JlYXRlIHByZWxvYWQgZGl2XHJcbiAgICBpZiAoISQoJyNwcmVsb2FkJykuaXMoJyonKSkge1xyXG4gICAgICB0aGlzLiRwcmVsb2FkID0gJCgnPGRpdiBpZD1cInByZWxvYWRcIiAvPicpLmFwcGVuZFRvKCdib2R5Jyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLiRwcmVsb2FkID0gJCgnI3ByZWxvYWQnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLiRwcmVsb2FkLmhpZGUoKTtcclxuICB9XHJcblxyXG4gIGZpbGVzKG9wdHMpIHtcclxuICAgIHRoaXMuX2ZpbGVzID0gb3B0cy5zcmM7XHJcblxyXG4gICAgdmFyIGZpbGUgPSB0aGlzLl9maWxlcy5zaGlmdCgpO1xyXG4gICAgaWYgKHR5cGVvZihmaWxlKSAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICB0aGlzLmZpbGUoe1xyXG4gICAgICAgIHNyYzpmaWxlLFxyXG4gICAgICAgIGNhbGxiYWNrOiAoZCkgPT4ge1xyXG4gICAgICAgICAgLy9HbyB0byB0aGUgbmV4dCBmaWxlXHJcbiAgICAgICAgICB0aGlzLmZpbGVzKHtcclxuICAgICAgICAgICAgc3JjOiB0aGlzLl9maWxlcywgXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiBvcHRzLmNhbGxiYWNrXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coJ3J1biBjYWxsYmFjayEnKTtcclxuICAgICAgdGhpcy5jbGVhcigpO1xyXG4gICAgICBpZih0eXBlb2Yob3B0cy5jYWxsYmFjaykgIT0gJ3VuZGVmaW5lZCcpIG9wdHMuY2FsbGJhY2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZpbGUob3B0cykge1xyXG4gICAgdmFyIHNyYyAgICA9IG9wdHMuc3JjLnJlcGxhY2UoL1xcXCIvZywgJyAnKTtcclxuICAgIHZhciB0eXBlICAgPSB0aGlzLmdldEZpbGVUeXBlKG9wdHMuc3JjKTtcclxuICAgIHZhciAkcCAgICAgPSB0aGlzLiRwcmVsb2FkO1xyXG4gICAgdmFyIGhhc19jYiA9ICh0eXBlb2Yob3B0cy5jYWxsYmFjaykgIT0gJ3VuZGVmaW5lZCcpO1xyXG5cclxuICAgIC8vQmFpbCBpZiB3ZSBkb24ndCByZWNvZ25pc2UgdGhlIHR5cGVcclxuICAgIGlmKHR5cGUgPT0gZmFsc2UpIHtcclxuICAgICAgb3B0cy5jYWxsYmFjayhkKTsgXHJcbiAgICAvL0hhbmRsZSB0eXBlc1xyXG4gICAgfSBlbHNlIGlmKHR5cGUgPT0gJ2ltZycpIHtcclxuICAgICAgdmFyICRmaWxlID0gJCgnPGltZyAvPicpXHJcbiAgICAgICAgLmF0dHIoJ3NyYycsIHNyYylcclxuICAgICAgICAuYXBwZW5kVG8oJHApO1xyXG5cclxuICAgICAgaWYoaGFzX2NiKSB7XHJcbiAgICAgICAgJGZpbGUubG9hZCgoZCkgPT4ge1xyXG4gICAgICAgICAgLy9jb25zb2xlLmxvZygnbG9hZGVkIGltYWdlJyk7XHJcbiAgICAgICAgICAgb3B0cy5jYWxsYmFjayhkKTsgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZih0eXBlID09ICdqcycpIHtcclxuICAgICAgJC5nZXRTY3JpcHQoIHNyYywgKGQpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnbG9hZGVkIGpzJyk7XHJcbiAgICAgICAgaWYoaGFzX2NiKSBvcHRzLmNhbGxiYWNrKGQpOyBcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYodHlwZSA9PSAnY3NzJykge1xyXG4gICAgICB2YXIgJGZpbGUgPSAkKCc8bGluayAvPicpXHJcbiAgICAgICAgLmF0dHIoJ2hyZWYnLCBzcmMpXHJcbiAgICAgICAgLmF0dHIoJ3JlbCcsICdzdHlsZXNoZWV0JylcclxuICAgICAgICAuYXBwZW5kVG8oJHApO1xyXG5cclxuICAgICAgaWYoaGFzX2NiKSB7XHJcbiAgICAgICAgJGZpbGUubG9hZCgoZCkgPT4ge1xyXG4gICAgICAgICAgLy9jb25zb2xlLmxvZygnbG9hZGVkIGNzcycpO1xyXG4gICAgICAgICAgIG9wdHMuY2FsbGJhY2soZCk7IFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbWFnZShvcHRzKSB7XHJcbiAgICB0aGlzLmZpbGUob3B0cyk7XHJcbiAgfVxyXG5cclxuICBpbWFnZXMob3B0cykge1xyXG4gICAgdGhpcy5maWxlcyhvcHRzKTtcclxuICB9XHJcblxyXG4gIGNsZWFyKCkge1xyXG4gICAgdGhpcy5faW1hZ2VzID0gW107XHJcbiAgICAkKCcjcHJlbG9hZCBpbWcnKS5yZW1vdmUoKTtcclxuICAgICQoJyNwcmVsb2FkIHNjcmlwdCcpLnJlbW92ZSgpO1xyXG4gICAgJCgnI3ByZWxvYWQgc3R5bGUnKS5yZW1vdmUoKTtcclxuICB9XHJcblxyXG4gIGdldEZpbGVUeXBlKHNyYykge1xyXG4gICAgdmFyIGV4dCA9IHNyYy5zdWJzdHIoKHNyYy5sYXN0SW5kZXhPZignLicpICsxKSk7XHJcbiAgICBpZigvKGpzKSQvaWcudGVzdChleHQpKSB7XHJcbiAgICAgIHJldHVybiAnanMnO1xyXG4gICAgfSBlbHNlIGlmICgvKGNzcykkL2lnLnRlc3QoZXh0KSkge1xyXG4gICAgICByZXR1cm4gJ2Nzcyc7XHJcbiAgICB9IGVsc2UgaWYgKC8oanBnfHBuZ3xnaWYpJC9pZy50ZXN0KGV4dCkpIHtcclxuICAgICAgcmV0dXJuICdpbWcnO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQdWIge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy4kd2luZG93ID0gJCh3aW5kb3cpO1xyXG4gICAgLy8gdGhpcy5zY3JvbGwoKTtcclxuICAgIC8vIHRoaXMucmVzaXplKCk7XHJcbiAgICAvLyB0aGlzLmxvYWQoKTtcclxuICB9XHJcbiAgXHJcbiAgc2Nyb2xsKCkge1xyXG4gICAgdmFyICR3aW5kb3cgPSB0aGlzLiR3aW5kb3c7XHJcblxyXG4gICAgJHdpbmRvdy5vbignbG9hZCBzY3JvbGwnLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2Nyb2xsUHViKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlc2l6ZSgpIHtcclxuICAgIHZhciAkd2luZG93ID0gdGhpcy4kd2luZG93O1xyXG5cclxuICAgICR3aW5kb3cub24oJ2xvYWQgcmVzaXplJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLnJlc2l6ZVB1YigpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzY3JvbGxQdWIoKSB7XHJcbiAgICB2YXIgJHdpbmRvdyA9IHRoaXMuJHdpbmRvdztcclxuICAgIHJhZGlvKCd3aW5kb3cvc2Nyb2xsJykuYnJvYWRjYXN0KHtcclxuICAgICAgc2Nyb2xsVG9wIDogJHdpbmRvdy5zY3JvbGxUb3AoKVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXNpemVQdWIoKSB7XHJcbiAgICB2YXIgJHdpbmRvdyA9IHRoaXMuJHdpbmRvdztcclxuICAgIHJhZGlvKCd3aW5kb3cvcmVzaXplJykuYnJvYWRjYXN0KHtcclxuICAgICAgd2lkdGggIDogJHdpbmRvdy53aWR0aCgpLFxyXG4gICAgICBoZWlnaHQgOiAkd2luZG93LmhlaWdodCgpXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGxvYWQoKSB7XHJcbiAgICB2YXIgJHdpbmRvdyA9IHRoaXMuJHdpbmRvdztcclxuXHJcbiAgICAkd2luZG93Lm9uKCdsb2FkJywgKCkgPT4ge1xyXG4gICAgICByYWRpbygnd2luZG93L2xvYWQnKS5icm9hZGNhc3Qoe1xyXG4gICAgICAgIHdpZHRoICA6ICR3aW5kb3cud2lkdGgoKSxcclxuICAgICAgICBoZWlnaHQgOiAkd2luZG93LmhlaWdodCgpLFxyXG4gICAgICAgIHNjcm9sbFRvcCA6ICR3aW5kb3cuc2Nyb2xsVG9wKClcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19
