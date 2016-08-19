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

},{"./pub":2,"./sub":8,"./utils":15}],2:[function(require,module,exports){
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
  this.elements = new Elements(main, utils);

  //Template specific tests
  if (this.m.$body.filter('[data-template="page-index"]').size() > 0) this.home = new _home2.default(main, utils);
};

exports.default = Pub;

},{"./pub/footer":3,"./pub/header":4,"./pub/home":5,"./pub/layout":6,"./pub/page":7}],3:[function(require,module,exports){
'use strict';

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
    key: 'footer',
    value: function footer() {
      var $footer = $('footer.main');
      var $newsletter_pub = $('a[href=#newsletter]');
      var $newsletter_template = $('#newsletter_template');

      radio('action/footer').broadcast({
        $newsletter_pub: $newsletter_pub,
        $newsletter_template: $newsletter_template
      });

      $newsletter_pub.on('click', function (e) {
        e.preventDefault();
        console.log('pub newsletter');
        radio('action/newsletter/lightbox').broadcast();
      });
    }
  }]);

  return Footer;
}();

exports.default = Footer;

},{}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
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

},{"./sub/elements":9,"./sub/footer":10,"./sub/header":11,"./sub/home":12,"./sub/layout":13,"./sub/page":14}],9:[function(require,module,exports){
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

},{}],10:[function(require,module,exports){
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
    radio('action/newsletter/lightbox').subscribe(function (data) {
      _this.lightbox(data);
    });
  }

  _createClass(Landing, [{
    key: 'footer',
    value: function footer(data) {
      this.$newsletter_pub = data.$newsletter_pub;
      this.$newsletter_template = data.$newsletter_template;
      this.u.newsletter.sub();
    }
  }, {
    key: 'lightbox',
    value: function lightbox(data) {
      var _this2 = this;

      this.u.lightbox.create({
        box_content: this.$newsletter_template.html(),
        box_class: 'lightbox-newsletter',
        callback: function callback($lightbox_wrap) {
          _this2.u.newsletter.pub();
        }
      });
    }
  }]);

  return Landing;
}();

exports.default = Landing;

},{}],11:[function(require,module,exports){
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

},{}],12:[function(require,module,exports){
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

},{}],13:[function(require,module,exports){
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

},{}],14:[function(require,module,exports){
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

},{}],15:[function(require,module,exports){
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

},{"./utils/helpers/cookies":16,"./utils/helpers/fixes":17,"./utils/helpers/hash":18,"./utils/helpers/helpers":19,"./utils/helpers/vectors":20,"./utils/lightbox/main":21,"./utils/newsletter/mailchimp":22,"./utils/preload/preload":23,"./utils/window/pub":24}],16:[function(require,module,exports){
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

},{}],17:[function(require,module,exports){
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
  }]);

  return Helpers;
}();

exports.default = Helpers;

},{}],20:[function(require,module,exports){
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

},{}],21:[function(require,module,exports){
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

},{}],22:[function(require,module,exports){
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

},{}],23:[function(require,module,exports){
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

},{}],24:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZXM2L2luaXQuanMiLCJzcmMvZXM2L3B1Yi5qcyIsInNyYy9lczYvcHViL2Zvb3Rlci5qcyIsInNyYy9lczYvcHViL2hlYWRlci5qcyIsInNyYy9lczYvcHViL2hvbWUuanMiLCJzcmMvZXM2L3B1Yi9sYXlvdXQuanMiLCJzcmMvZXM2L3B1Yi9wYWdlLmpzIiwic3JjL2VzNi9zdWIuanMiLCJzcmMvZXM2L3N1Yi9lbGVtZW50cy5qcyIsInNyYy9lczYvc3ViL2Zvb3Rlci5qcyIsInNyYy9lczYvc3ViL2hlYWRlci5qcyIsInNyYy9lczYvc3ViL2hvbWUuanMiLCJzcmMvZXM2L3N1Yi9sYXlvdXQuanMiLCJzcmMvZXM2L3N1Yi9wYWdlLmpzIiwic3JjL2VzNi91dGlscy5qcyIsInNyYy9lczYvdXRpbHMvaGVscGVycy9jb29raWVzLmpzIiwic3JjL2VzNi91dGlscy9oZWxwZXJzL2ZpeGVzLmpzIiwic3JjL2VzNi91dGlscy9oZWxwZXJzL2hhc2guanMiLCJzcmMvZXM2L3V0aWxzL2hlbHBlcnMvaGVscGVycy5qcyIsInNyYy9lczYvdXRpbHMvaGVscGVycy92ZWN0b3JzLmpzIiwic3JjL2VzNi91dGlscy9saWdodGJveC9tYWluLmpzIiwic3JjL2VzNi91dGlscy9uZXdzbGV0dGVyL21haWxjaGltcC5qcyIsInNyYy9lczYvdXRpbHMvcHJlbG9hZC9wcmVsb2FkLmpzIiwic3JjL2VzNi91dGlscy93aW5kb3cvcHViLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FDQUE7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7OztJQUVxQixJO0FBQ25CLGtCQUFjO0FBQUE7O0FBQ1osU0FBSyxLQUFMLEdBQWlCLEVBQUUsTUFBRixDQUFqQjtBQUNBLFNBQUssT0FBTCxHQUFpQixFQUFFLE1BQUYsQ0FBakI7QUFDQSxTQUFLLFNBQUwsR0FBaUIsRUFBRSxRQUFGLENB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QUFqQztBQUdEOzs7Z0NBRVc7QUFDVixVQUFJLFVBQVUsS0FBSyxPQUFuQjtBQUNBLFlBQU0sZUFBTixFQUF1QixTQUF2QixDQUFpQztBQUMvQixlQUFTLFFBQVEsS0FBUixFQURzQjtBQUUvQixnQkFBUyxRQUFRLE1BQVI7QUFGc0IsT0FBakM7QUFJRDs7OzJCQUVNO0FBQ0wsVUFBSSxVQUFVLEtBQUssT0FBbkI7O0FBRUEsY0FBUSxFQUFSLENBQVcsTUFBWCxFQUFtQixZQUFNO0FBQ3ZCLGNBQU0sYUFBTixFQUFxQixTQUFyQixDQUErQjtBQUM3QixpQkFBUyxRQUFRLEtBQVIsRUFEb0I7QUFFN0Isa0JBQVMsUUFBUSxNQUFSLEVBRm9CO0FBRzdCLHFCQUFZLFFBQVEsU0FBUjtBQUhpQixTQUEvQjtBQUtELE9BTkQ7QUFPRDs7Ozs7O2tCQWpEa0IsRyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgVXRpbHMgZnJvbSAnLi91dGlscyc7XHJcblxyXG5pbXBvcnQgUHViIGZyb20gJy4vcHViJztcclxuaW1wb3J0IFN1YiBmcm9tICcuL3N1Yic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbml0IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuJGJvZHkgICAgID0gJCgnYm9keScpO1xyXG4gICAgdGhpcy4kd2luZG93ICAgPSAkKHdpbmRvdyk7XHJcbiAgICB0aGlzLiRkb2N1bWVudCA9ICQoZG9jdW1lbnQpO1xyXG4gICAgdGhpcy4kcm9vdCAgICAgPSAkKCdodG1sLCBib2R5Jyk7XHJcblxyXG4gICAgdGhpcy5fb3B0cyA9IHdpbmRvdy5fb3B0cztcclxuICAgIHRoaXMuX2RhdGEgPSB3aW5kb3cuX2RhdGE7XHJcblxyXG4gICAgdGhpcy51dGlscyA9IG5ldyBVdGlscygpO1xyXG5cclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH0gXHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICAvL0pxdWVyeSByZWFkeVxyXG4gICAgJCgoKSA9PiB7IFxyXG4gICAgICB0aGlzLnN1YiA9IG5ldyBTdWIodGhpcywgdGhpcy51dGlscyk7XHJcbiAgICAgIHRoaXMucHViID0gbmV3IFB1Yih0aGlzLCB0aGlzLnV0aWxzKTsgXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmdsb2JhbC5hcHAgPSBuZXcgSW5pdCgpOyAgICIsImltcG9ydCBMYXlvdXQgZnJvbSAnLi9wdWIvbGF5b3V0JztcclxuaW1wb3J0IFBhZ2UgZnJvbSAnLi9wdWIvcGFnZSc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9wdWIvaGVhZGVyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL3B1Yi9mb290ZXInO1xyXG5pbXBvcnQgSG9tZSBmcm9tICcuL3B1Yi9ob21lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFB1YiB7XHJcbiAgY29uc3RydWN0b3IobWFpbix1dGlscykge1xyXG4gICAgdGhpcy5tID0gbWFpbjtcclxuICAgIHRoaXMudSA9IHV0aWxzO1xyXG5cclxuICAgIC8vQmFzaWNzXHJcbiAgICB0aGlzLnUud2luZG93LnNjcm9sbCgpO1xyXG4gICAgdGhpcy51LndpbmRvdy5yZXNpemUoKTtcclxuICAgIHRoaXMudS53aW5kb3cubG9hZCgpO1xyXG4gICAgdGhpcy51Lm5ld3NsZXR0ZXIucHViKCk7XHJcbiAgICB0aGlzLnUuaGFzaC5wdWIoKTtcclxuICAgIFxyXG4gICAgdGhpcy5sYXlvdXQgPSBuZXcgTGF5b3V0KG1haW4sIHV0aWxzKTtcclxuICAgIHRoaXMuaGVhZGVyID0gbmV3IEhlYWRlcihtYWluLCB1dGlscyk7XHJcbiAgICB0aGlzLmZvb3RlciA9IG5ldyBGb290ZXIobWFpbiwgdXRpbHMpO1xyXG4gICAgdGhpcy5lbGVtZW50cyA9IG5ldyBFbGVtZW50cyhtYWluLCB1dGlscyk7XHJcblxyXG4gICAgLy9UZW1wbGF0ZSBzcGVjaWZpYyB0ZXN0c1xyXG4gICAgaWYodGhpcy5tLiRib2R5LmZpbHRlcignW2RhdGEtdGVtcGxhdGU9XCJwYWdlLWluZGV4XCJdJykuc2l6ZSgpID4gMCkgdGhpcy5ob21lID0gbmV3IEhvbWUobWFpbiwgdXRpbHMpO1xyXG4gIH1cclxufSAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGb290ZXIge1xyXG4gIGNvbnN0cnVjdG9yKG1haW4sdXRpbHMpIHtcclxuICAgIHRoaXMubSA9IG1haW47XHJcbiAgICB0aGlzLnUgPSB1dGlscztcclxuICAgIHRoaXMuZm9vdGVyKCk7XHJcbiAgfVxyXG5cclxuICBmb290ZXIoKSB7XHJcbiAgICB2YXIgJGZvb3RlciAgICAgICAgICAgICAgPSAkKCdmb290ZXIubWFpbicpO1xyXG4gICAgdmFyICRuZXdzbGV0dGVyX3B1YiAgICAgID0gJCgnYVtocmVmPSNuZXdzbGV0dGVyXScpO1xyXG4gICAgdmFyICRuZXdzbGV0dGVyX3RlbXBsYXRlID0gJCgnI25ld3NsZXR0ZXJfdGVtcGxhdGUnKTtcclxuXHJcbiAgICByYWRpbygnYWN0aW9uL2Zvb3RlcicpLmJyb2FkY2FzdCh7XHJcbiAgICAgICRuZXdzbGV0dGVyX3B1YjokbmV3c2xldHRlcl9wdWIsXHJcbiAgICAgICRuZXdzbGV0dGVyX3RlbXBsYXRlOiRuZXdzbGV0dGVyX3RlbXBsYXRlXHJcbiAgICB9KTtcclxuIFxyXG4gICAgJG5ld3NsZXR0ZXJfcHViLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgY29uc29sZS5sb2coJ3B1YiBuZXdzbGV0dGVyJyk7XHJcbiAgICAgIHJhZGlvKCdhY3Rpb24vbmV3c2xldHRlci9saWdodGJveCcpLmJyb2FkY2FzdCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59ICAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIge1xyXG4gIGNvbnN0cnVjdG9yKG1haW4sdXRpbHMpIHtcclxuICAgIHRoaXMubSA9IG1haW47XHJcbiAgICB0aGlzLnUgPSB1dGlscztcclxuICAgIHRoaXMuaGVhZGVyKCk7XHJcbiAgfVxyXG5cclxuICBoZWFkZXIoKSB7XHJcbiAgICB2YXIgJGhlYWRlciA9ICQoJ2hlYWRlci5kZWZhdWx0Jyk7XHJcbiAgICB2YXIgJHNlYXJjaCA9ICQoJ1tkYXRhLXN1Yn49XCJzZWFyY2hcIl0nKTtcclxuXHJcbiAgICB0aGlzLl9kID0ge1xyXG4gICAgICBidWlsZGluZ3M6IHdpbmRvdy5fZGF0YS5idWlsZGluZ3MsXHJcbiAgICAgIHNlYXJjaCA6IHtcclxuICAgICAgICAkdG9nZ2xlX3N1YjogJHNlYXJjaCxcclxuICAgICAgICAkdG9nZ2xlX3B1YjogJGhlYWRlci5maW5kKCdbZGF0YS1wdWJ+PVwic2VhcmNoLXRvZ2dsZVwiXScpLFxyXG4gICAgICAgICRoaWRlX3B1YjogJGhlYWRlci5maW5kKCdbZGF0YS1wdWJ+PVwic2VhcmNoLWhpZGVcIl0nKSxcclxuICAgICAgICAkZm9ybV9wdWI6ICRoZWFkZXIuZmluZCgnW2RhdGEtcHVifj1cInNlYXJjaC1mb3JtXCJdJyksXHJcbiAgICAgIH0sXHJcbiAgICAgIGxvZ2luOiB7XHJcbiAgICAgICAgJHNob3dfcHViOiAkKCdbZGF0YS1wdWJ+PVwibG9naW5cIl0nKSxcclxuICAgICAgICAkc3VibWl0X3B1YjogJCgnW2RhdGEtcHVifj1cImxvZ2luLWZvcm1cIl0nKSxcclxuICAgICAgICBhY3Rpb246IHdpbmRvdy5fZGF0YS50X3VybCArIFwiL2xvZ2luLnBocFwiLFxyXG4gICAgICAgIHRlbXBsYXRlOiBfLnRlbXBsYXRlKCQoJyNsb2dpbl90ZW1wbGF0ZScpLmh0bWwoKSlcclxuICAgICAgfSxcclxuICAgICAgbW9iaWxlOiB7XHJcbiAgICAgICAgJG1lbnU6ICRoZWFkZXIuZmluZCgnLm1lbnUnKSxcclxuICAgICAgICAkcHViOiAkaGVhZGVyLmZpbmQoJ1tkYXRhLXB1Yn49XCJoYW1idXJnZXJcIl0nKSxcclxuICAgICAgICAkc3ViOiAkaGVhZGVyLmZpbmQoJ1tkYXRhLXN1Yn49XCJoYW1idXJnZXJcIl0nKSxcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJhZGlvKCdoZWFkZXInKS5icm9hZGNhc3QodGhpcy5fZCk7XHJcblxyXG4gICAgdGhpcy5zZWFyY2goKTtcclxuICAgIHRoaXMubG9naW4oKTtcclxuXHJcbiAgICB0aGlzLl9kLm1vYmlsZS4kcHViLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIHJhZGlvKCdoZWFkZXIvbWVudS90b2dnbGUnKS5icm9hZGNhc3Qoe1xyXG5cclxuICAgICAgfSlcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2VhcmNoKCkge1xyXG4gICAgLy9Ub2dnbGUgc2VhcmNoIGJhclxyXG4gICAgdGhpcy5fZC5zZWFyY2guJHRvZ2dsZV9wdWIub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgcmFkaW8oJ2hlYWRlci9zZWFyY2gvdG9nZ2xlJykuYnJvYWRjYXN0KHtcclxuICAgICAgICAnYWN0aW9uJzondG9nZ2xlJ1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vSGlkZSBzZWFyY2ggYmFyXHJcbiAgICB0aGlzLl9kLnNlYXJjaC4kaGlkZV9wdWIub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgcmFkaW8oJ2hlYWRlci9zZWFyY2gvdG9nZ2xlJykuYnJvYWRjYXN0KHtcclxuICAgICAgICAnYWN0aW9uJzonaGlkZSdcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL1N1Ym1pdCBzZWFyY2ggZm9ybVxyXG4gICAgdGhpcy5fZC5zZWFyY2guJGZvcm1fcHViLm9uKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgICByYWRpbygnaGVhZGVyL3NlYXJjaC9zdWJtaXQnKS5icm9hZGNhc3Qoe1xyXG4gICAgICAgIGU6ZSxcclxuICAgICAgICAkZm9ybTokKGUuY3VycmVudFRhcmdldClcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGxvZ2luKCkge1xyXG4gICAgLy9TaG93IGxvZ2luIHRlbXBsYXRlXHJcbiAgICB0aGlzLl9kLmxvZ2luLiRzaG93X3B1Yi5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICB2YXIgc2VsZWN0ID0gJChlLmN1cnJlbnRUYXJnZXQpLmF0dHIoJ2RhdGEtc2VsZWN0Jyk7XHJcbiAgICAgIHJhZGlvKCdoZWFkZXIvbG9naW4vc2hvdycpLmJyb2FkY2FzdCh7XHJcbiAgICAgICAgc2VsZWN0OnNlbGVjdFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vRm9ybSBzdWJtaXNzaW9uXHJcbiAgICB0aGlzLm0uJGJvZHkub24oJ3N1Ym1pdCcsdGhpcy5fZC5sb2dpbi4kc3VibWl0X3B1Yi5zZWxlY3RvciwoZSkgPT4ge1xyXG4gICAgICB2YXIgJGZvcm0gPSAkKGUuY3VycmVudFRhcmdldCkuY2xvc2VzdCgnZm9ybScpO1xyXG4gICAgICB2YXIgYnVpbGRpbmcgPSAkZm9ybS5maW5kKCdbbmFtZT1cImJ1aWxkaW5nXCJdJykudmFsKCk7XHJcbiAgICAgIHZhciBwYXNzd29yZCA9ICRmb3JtLmZpbmQoJ1tuYW1lPVwicGFzc3dvcmRcIl0nKS52YWwoKTtcclxuICAgICAgdmFyIHVybCA9ICRmb3JtLmZpbmQoJ1tuYW1lPVwiYnVpbGRpbmdcIl0gb3B0aW9uOnNlbGVjdGVkJykuYXR0cignZGF0YS11cmwnKTtcclxuXHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgcmFkaW8oJ2hlYWRlci9sb2dpbi9zdWJtaXQnKS5icm9hZGNhc3Qoe1xyXG4gICAgICAgIGJ1aWxkaW5nOmJ1aWxkaW5nLFxyXG4gICAgICAgIHBhc3N3b3JkOnBhc3N3b3JkLFxyXG4gICAgICAgIHVybDp1cmxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn0gICIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUge1xyXG4gIGNvbnN0cnVjdG9yKG1haW4sdXRpbHMpIHtcclxuICAgIHRoaXMubSA9IG1haW47XHJcbiAgICB0aGlzLnUgPSB1dGlscztcclxuXHJcbiAgICB0aGlzLmluaXQoKTtcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcblxyXG4gICAgdGhpcy5fZCA9IHtcclxuICAgICAgc2xpZGVzaG93czoge1xyXG4gICAgICAgICRoZXJvX3N1YjogJCgnW2RhdGEtc3Vifj1cImhlcm8tc2xpZGVzaG93XCJdJyksXHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmFkaW8oJ2hvbWUnKS5icm9hZGNhc3QodGhpcy5fZCk7XHJcblxyXG4gICAgLy9TaG93IHZpZGVvXHJcbiAgICByYWRpbygnaG9tZS9zbGlkZXNob3dzL2hlcm8nKS5icm9hZGNhc3QoKTsgXHJcbiAgfVxyXG59IFxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBMYXlvdXQge1xyXG4gIGNvbnN0cnVjdG9yKG1haW4sdXRpbHMpIHtcclxuICAgIHRoaXMubSA9IG1haW47XHJcbiAgICB0aGlzLnUgPSB1dGlscztcclxuICAgIHRoaXMuc2V0dXAoKTtcclxuICB9XHJcblxyXG4gIHNldHVwKCkge1xyXG4gICAgdmFyICRsYXlvdXQgPSAkKCcjbGF5b3V0Jyk7XHJcblxyXG4gICAgcmFkaW8oJ2FjdGlvbi9sYXlvdXQnKS5icm9hZGNhc3Qoe1xyXG4gICAgICAkbGF5b3V0IDogJGxheW91dFxyXG4gICAgfSk7XHJcbiAgfVxyXG59IiwiLy9pbXBvcnQgUHJlc3MgZnJvbSAnLi9wYWdlL3ByZXNzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2Uge1xyXG4gIGNvbnN0cnVjdG9yKG1haW4sdXRpbHMpIHtcclxuICAgIHRoaXMubSA9IG1haW47XHJcbiAgICB0aGlzLnUgPSB1dGlscztcclxuXHJcbiAgICAvL3RoaXMucHJlc3MgPSBuZXcgUHJlc3MobWFpbiwgdXRpbHMpO1xyXG4gIH1cclxufSAiLCJpbXBvcnQgTGF5b3V0IGZyb20gJy4vc3ViL2xheW91dCc7XHJcbmltcG9ydCBQYWdlIGZyb20gJy4vc3ViL3BhZ2UnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vc3ViL2hlYWRlcic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9zdWIvZm9vdGVyJztcclxuaW1wb3J0IEhvbWUgZnJvbSAnLi9zdWIvaG9tZSc7XHJcbmltcG9ydCBFbGVtZW50cyBmcm9tICcuL3N1Yi9lbGVtZW50cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdWIge1xyXG4gIGNvbnN0cnVjdG9yKG1haW4sdXRpbHMpIHtcclxuICAgIHRoaXMubSA9IG1haW47XHJcbiAgICB0aGlzLnUgPSB1dGlscztcclxuXHJcbiAgICB0aGlzLmxheW91dCA9IG5ldyBMYXlvdXQobWFpbiwgdXRpbHMpO1xyXG4gICAgdGhpcy5oZWFkZXIgPSBuZXcgSGVhZGVyKG1haW4sIHV0aWxzKTtcclxuICAgIHRoaXMuZWxlbWVudHMgPSBuZXcgRWxlbWVudHMobWFpbiwgdXRpbHMpO1xyXG5cclxuXHJcbiAgICB0aGlzLmhvbWUgICAgICAgID0gbmV3IEhvbWUobWFpbiwgdXRpbHMpO1xyXG4gICAgdGhpcy5wYWdlICAgICAgICA9IG5ldyBQYWdlKG1haW4sIHV0aWxzKTtcclxuICB9XHJcbn0gIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWxlbWVudHMge1xyXG4gIGNvbnN0cnVjdG9yKG1haW4sdXRpbHMpIHtcclxuICAgIHRoaXMubSA9IG1haW47XHJcbiAgICB0aGlzLnUgPSB1dGlscztcclxuICAgIHJhZGlvKCdlbGVtZW50cycpLnN1YnNjcmliZSgoZGF0YSkgPT4ge3RoaXMuZWxlbWVudHMoZGF0YSk7fSk7XHJcbiAgfVxyXG5cclxuICBlbGVtZW50cyhkYXRhKSB7XHJcbiAgICB0aGlzLmNvbnRhY3QgPSBkYXRhLmNvbnRhY3Q7XHJcblxyXG4gICAgcmFkaW8oJ2NvbnRhY3Qvc3VibWl0Jykuc3Vic2NyaWJlKChkYXRhKSA9PiB7dGhpcy5jb250YWN0U3VibWl0KGRhdGEpO30pO1xyXG4gIH1cclxuXHJcbiAgY29udGFjdFN1Ym1pdChkKSB7XHJcbiAgICB2YXIgZSAgICAgID0gZC5lO1xyXG4gICAgdmFyICRmb3JtICA9IGQuJHB1YjtcclxuICAgIHZhciAkZXJyb3IgPSB0aGlzLmNvbnRhY3QuJGVycm9yX3N1YjtcclxuXHJcbiAgICAkLnBvc3QoIHdpbmRvdy5sb2NhdGlvbiAsICRmb3JtLnNlcmlhbGl6ZSgpICsgJyZzdWJtaXQ9dHJ1ZScgLCAoZCkgPT4ge1xyXG4gICAgICB2YXIgJGh0bWwgPSAkKGQpO1xyXG5cclxuICAgICAgLy9SZXBsYWNlIGZvcm1zIHdpdGggY29udGVudHNcclxuICAgICAgdmFyICRwdWJzID0gdGhpcy5jb250YWN0LiRwdWI7XHJcbiAgICAgIHZhciAkbmV3X3B1YnMgPSAkaHRtbC5maW5kKCdbZGF0YS1wdWJ+PVwiY29udGFjdC9mb3JtXCJdJyk7XHJcbiAgICAgIHZhciAkbmV3X3N1YnMgPSAkaHRtbC5maW5kKCdbZGF0YS1zdWJ+PVwiY29udGFjdC9mb3JtXCJdJyk7XHJcblxyXG4gICAgICAkcHVicy5lYWNoKChpLHB1YikgPT4ge1xyXG4gICAgICAgIHZhciAkcHViID0gJChwdWIpO1xyXG4gICAgICAgIHZhciBpbmRleCA9IGk7XHJcblxyXG4gICAgICAgIHZhciAkbmV3X3B1YiA9ICRuZXdfcHVicy5lcShpbmRleCk7XHJcbiAgICAgICAgaWYoJG5ld19wdWIuc2l6ZSgpID09IDApIHtcclxuICAgICAgICAgICRuZXdfcHViID0gJG5ld19zdWJzLmVxKGluZGV4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBuZXdfaHRtbCA9ICRuZXdfcHViLnBhcmVudCgpLmh0bWwoKTtcclxuXHJcbiAgICAgICAgJHB1Yi5wYXJlbnQoKS5odG1sKG5ld19odG1sKTtcclxuICAgICAgfSlcclxuICAgIH0pO1xyXG4gIH1cclxufSAgICIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIExhbmRpbmcge1xyXG4gIGNvbnN0cnVjdG9yKG1haW4sdXRpbHMpIHtcclxuICAgIHRoaXMubSA9IG1haW47XHJcbiAgICB0aGlzLnUgPSB1dGlscztcclxuICAgIHJhZGlvKCdhY3Rpb24vZm9vdGVyJykuc3Vic2NyaWJlKChkYXRhKSA9PiB7dGhpcy5mb290ZXIoZGF0YSk7fSk7XHJcbiAgICByYWRpbygnYWN0aW9uL25ld3NsZXR0ZXIvbGlnaHRib3gnKS5zdWJzY3JpYmUoKGRhdGEpID0+IHt0aGlzLmxpZ2h0Ym94KGRhdGEpO30pO1xyXG4gIH1cclxuXHJcbiAgZm9vdGVyKGRhdGEpIHtcclxuICAgIHRoaXMuJG5ld3NsZXR0ZXJfcHViICAgICAgPSBkYXRhLiRuZXdzbGV0dGVyX3B1YjtcclxuICAgIHRoaXMuJG5ld3NsZXR0ZXJfdGVtcGxhdGUgPSBkYXRhLiRuZXdzbGV0dGVyX3RlbXBsYXRlO1xyXG4gICAgdGhpcy51Lm5ld3NsZXR0ZXIuc3ViKCk7IFxyXG4gIH1cclxuXHJcbiAgbGlnaHRib3goZGF0YSkge1xyXG4gICAgdGhpcy51LmxpZ2h0Ym94LmNyZWF0ZSh7XHJcbiAgICAgIGJveF9jb250ZW50IDogdGhpcy4kbmV3c2xldHRlcl90ZW1wbGF0ZS5odG1sKCksXHJcbiAgICAgIGJveF9jbGFzczogJ2xpZ2h0Ym94LW5ld3NsZXR0ZXInLFxyXG4gICAgICBjYWxsYmFjazogKCRsaWdodGJveF93cmFwKSA9PiB7XHJcbiAgICAgICAgdGhpcy51Lm5ld3NsZXR0ZXIucHViKCk7IFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn0gICAgIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIHtcclxuICBjb25zdHJ1Y3RvcihtYWluLHV0aWxzKSB7XHJcbiAgICB0aGlzLm0gPSBtYWluO1xyXG4gICAgdGhpcy51ID0gdXRpbHM7XHJcblxyXG4gICAgcmFkaW8oJ2hlYWRlcicpLnN1YnNjcmliZSgoZCkgPT4ge3RoaXMuaW5pdChkKTt9KTtcclxuICB9XHJcblxyXG4gIGluaXQoZCkge1xyXG4gICAgdGhpcy5fZCA9IGQ7XHJcblxyXG4gICAgcmFkaW8oJ2hlYWRlci9zZWFyY2gvdG9nZ2xlJykuc3Vic2NyaWJlKChkKSA9PiB7dGhpcy5zZWFyY2hUb2dnbGUoZCk7fSk7XHJcbiAgICByYWRpbygnaGVhZGVyL3NlYXJjaC9zdWJtaXQnKS5zdWJzY3JpYmUoKGQpID0+IHt0aGlzLnNlYXJjaFN1Ym1pdChkKTt9KTtcclxuICAgIHJhZGlvKCdoZWFkZXIvbG9naW4vc2hvdycpLnN1YnNjcmliZSgoZCkgPT4ge3RoaXMubG9naW5TaG93KGQpO30pO1xyXG4gICAgcmFkaW8oJ2hlYWRlci9sb2dpbi9zdWJtaXQnKS5zdWJzY3JpYmUoKGQpID0+IHt0aGlzLmxvZ2luU3VibWl0KGQpO30pO1xyXG5cclxuXHJcbiAgICByYWRpbygnaGVhZGVyL21lbnUvdG9nZ2xlJykuc3Vic2NyaWJlKChkKSA9PiB7dGhpcy5tZW51KGQpO30pO1xyXG4gIH1cclxuXHJcbiAgc2VhcmNoVG9nZ2xlKGQpIHtcclxuICAgIHZhciBhY3Rpb24gPSBkLmFjdGlvbjtcclxuXHJcbiAgICBpZihhY3Rpb24gPT0gJ3RvZ2dsZScpIHtcclxuICAgICAgdGhpcy5fZC5zZWFyY2guJHRvZ2dsZV9zdWIudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfSBlbHNlIGlmKGFjdGlvbiA9PSAnc2hvdycpIHtcclxuICAgICAgdGhpcy5fZC5zZWFyY2guJHRvZ2dsZV9zdWIuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfSBlbHNlIGlmKGFjdGlvbiA9PSAnaGlkZScpIHtcclxuICAgICAgdGhpcy5fZC5zZWFyY2guJHRvZ2dsZV9zdWIucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2VhcmNoU3VibWl0KGQpIHtcclxuICAgIHZhciBlID0gZC5lO1xyXG5cclxuICAgIC8vZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH1cclxuXHJcbiAgbG9naW5TaG93KGQpIHtcclxuICAgIHRoaXMudS5saWdodGJveC5jcmVhdGUoe1xyXG4gICAgICBib3hfY29udGVudDp0aGlzLl9kLmxvZ2luLnRlbXBsYXRlKHtcclxuICAgICAgICBidWlsZGluZ3M6dGhpcy5fZC5idWlsZGluZ3NcclxuICAgICAgfSksXHJcbiAgICAgIGJveF9jbGFzczogJ2xpZ2h0Ym94LWxvZ2luJyxcclxuICAgICAgYm94X2Nzczoge1xyXG4gICAgICAgIHBhZGRpbmc6JzQwcHggODBweCdcclxuICAgICAgfSxcclxuICAgICAgd3JhcF9jc3M6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOidyZ2JhKDAsMCwwLDAuNiknXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBsb2dpblN1Ym1pdChkKSB7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICB1cmw6d2luZG93Ll9kYXRhLmFfdXJsLFxyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgICdhY3Rpb24nOiAnZm9ybWxvZ2luJyxcclxuICAgICAgICAnZGF0YScgOiBkXHJcbiAgICAgIH0sXHJcbiAgICAgICdkYXRhVHlwZScgOidqc29uJyxcclxuICAgICAgY29tcGxldGU6IChyKSA9PiB7XHJcbiAgICAgICAgaWYoci5yZXNwb25zZVRleHQgIT0gMCkge1xyXG4gICAgICAgICAgdGhpcy51LmNvb2tpZXMuc2V0KCdsb2dpbicsci5yZXNwb25zZVRleHQsMSk7XHJcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBkLnVybDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYWxlcnQoJ1BsZWFzZSBjaGVjayB0aGUgcGFzc3dvcmQgaXMgY29ycmVjdCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIG1lbnUoZCkge1xyXG4gICAgdmFyICRwdWIgPSB0aGlzLl9kLm1vYmlsZS4kcHViO1xyXG4gICAgdmFyICRzdWIgPSB0aGlzLl9kLm1vYmlsZS4kc3ViO1xyXG5cclxuICAgIC8vSXMgYWxyZWFkeSBhY3RpdmU/XHJcbiAgICB2YXIgaXNfYWN0aXZlID0gJHB1Yi5oYXNDbGFzcygnYWN0aXZlJyk7XHJcblxyXG4gICAgaWYoaXNfYWN0aXZlKSB7XHJcbiAgICAgICRwdWIucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAkc3ViLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICRwdWIuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAkc3ViLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgIH1cclxuICB9XHJcbn0gICAgIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSB7XHJcbiAgY29uc3RydWN0b3IobWFpbix1dGlscykge1xyXG4gICAgdGhpcy5tID0gbWFpbjtcclxuICAgIHRoaXMudSA9IHV0aWxzO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCdzdWIgaG9tZScpO1xyXG5cclxuICAgIHJhZGlvKCdob21lJykuc3Vic2NyaWJlKChkYXRhKSA9PiB7dGhpcy5pbml0KGRhdGEpO30pO1xyXG4gIH1cclxuXHJcbiAgaW5pdChkKSB7XHJcbiAgICB0aGlzLl9kID0gZDtcclxuXHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLl9kKTtcclxuXHJcbiAgICByYWRpbygnaG9tZS9zbGlkZXNob3dzL2hlcm8nKS5zdWJzY3JpYmUoKGRhdGEpID0+IHt0aGlzLmhlcm8oZGF0YSk7fSk7ICAgICAgICAgICAgXHJcbiAgfVxyXG5cclxuICBoZXJvKGQpIHtcclxuICAgIHZhciAkc3ViID0gdGhpcy5fZC5zbGlkZXNob3dzLiRoZXJvX3N1YjtcclxuICAgICRzdWIuZmluZCgnPmRpdicpLnNob3coKTtcclxuICAgICRzdWIuYnhTbGlkZXIoKTtcclxuICB9XHJcbn0gIFxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBMYXlvdXQge1xyXG4gIGNvbnN0cnVjdG9yKG1haW4sdXRpbHMpIHtcclxuICAgIHRoaXMubSA9IG1haW47XHJcbiAgICB0aGlzLnUgPSB1dGlscztcclxuICAgIHJhZGlvKCdhY3Rpb24vbGF5b3V0Jykuc3Vic2NyaWJlKChkYXRhKSA9PiB7dGhpcy5sYXlvdXQoZGF0YSk7fSk7XHJcbiAgfVxyXG5cclxuICBsYXlvdXQoZGF0YSkge1xyXG4gICAgdGhpcy4kbGF5b3V0ID0gZGF0YS4kbGF5b3V0O1xyXG5cclxuICAgIC8vc3Vic2NyaXB0aW9uc1xyXG4gICAgcmFkaW8oJ3dpbmRvdy9yZXNpemUnKS5zdWJzY3JpYmUoKHN1Yl9kYXRhKSA9PiB7dGhpcy5yZXNpemUoc3ViX2RhdGEpO30pO1xyXG4gIH1cclxuXHJcbiAgcmVzaXplKGRhdGEpIHtcclxuICAgIGNvbnNvbGUubG9nKCd1cGRhdGUgbGF5b3V0IGhlaWdodCcpO1xyXG4gICAgdGhpcy53aW5kb3dfaGVpZ2h0ID0gdGhpcy5tLiR3aW5kb3cuaGVpZ2h0KCk7XHJcblxyXG4gICAgdGhpcy4kbGF5b3V0LmNzcyh7IFxyXG4gICAgICAnbWluLWhlaWdodCc6IHRoaXMud2luZG93X2hlaWdodFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy9SZW1vdmUgbG9hZGluZyBjbGFzc1xyXG4gICAgaWYodGhpcy4kbGF5b3V0Lmhhc0NsYXNzKCdsb2FkaW5nJykpIHtcclxuICAgICAgdGhpcy4kbGF5b3V0LnJlbW92ZUNsYXNzKCdsb2FkaW5nJylcclxuICAgIH1cclxuICB9XHJcbn0gICAiLCIvL2ltcG9ydCBQcmVzcyBmcm9tICcuL3BhZ2UvcHJlc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZSB7XHJcbiAgY29uc3RydWN0b3IobWFpbix1dGlscykge1xyXG4gICAgdGhpcy5tID0gbWFpbjtcclxuICAgIHRoaXMudSA9IHV0aWxzO1xyXG5cclxuICAgIC8vdGhpcy5wcmVzcyA9IG5ldyBQcmVzcyhtYWluLCB1dGlscyk7XHJcbiAgfVxyXG59ICAgIiwiaW1wb3J0IEhlbHBlcnMgZnJvbSAnLi91dGlscy9oZWxwZXJzL2hlbHBlcnMnO1xyXG5pbXBvcnQgVmVjdG9ycyBmcm9tICcuL3V0aWxzL2hlbHBlcnMvdmVjdG9ycyc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJy4vdXRpbHMvaGVscGVycy9jb29raWVzJztcclxuaW1wb3J0IEhhc2ggZnJvbSAnLi91dGlscy9oZWxwZXJzL2hhc2gnO1xyXG5pbXBvcnQgTGlnaHRib3ggZnJvbSAnLi91dGlscy9saWdodGJveC9tYWluJztcclxuXHJcbmltcG9ydCBQcmVsb2FkIGZyb20gJy4vdXRpbHMvcHJlbG9hZC9wcmVsb2FkJztcclxuaW1wb3J0IFdpbmRvdyBmcm9tICcuL3V0aWxzL3dpbmRvdy9wdWInO1xyXG5pbXBvcnQgTmV3c2xldHRlciBmcm9tICcuL3V0aWxzL25ld3NsZXR0ZXIvbWFpbGNoaW1wJztcclxuaW1wb3J0IEZpeGVzIGZyb20gJy4vdXRpbHMvaGVscGVycy9maXhlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVdGlscyB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgdGhpcy5wcmVsb2FkICAgID0gbmV3IFByZWxvYWQoKTtcclxuICAgIHRoaXMubmV3c2xldHRlciA9IG5ldyBOZXdzbGV0dGVyKCk7XHJcbiAgICB0aGlzLmhlbHBlcnMgICAgPSBuZXcgSGVscGVycygpO1xyXG4gICAgdGhpcy52ZWN0b3JzICAgID0gbmV3IFZlY3RvcnMoKTtcclxuICAgIHRoaXMuY29va2llcyAgICA9IG5ldyBDb29raWVzKCk7XHJcbiAgICB0aGlzLmhhc2ggICAgICAgPSBuZXcgSGFzaCgpOyBcclxuICAgIHRoaXMubGlnaHRib3ggICA9IG5ldyBMaWdodGJveCgpO1xyXG4gICAgdGhpcy53aW5kb3cgICAgID0gbmV3IFdpbmRvdygpO1xyXG5cclxuICAgIC8vRml4ZXNcclxuICAgIHRoaXMuZml4ZXMgICAgICA9IG5ldyBGaXhlcygpOyBcclxuICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb29raWVzIHtcclxuICBnZXQoY19uYW1lKSB7XHJcbiAgICAgIHZhciBpLCB4LCB5LCBBUlJjb29raWVzID0gZG9jdW1lbnQuY29va2llLnNwbGl0KFwiO1wiKTtcclxuICAgICAgZm9yIChpID0gMDsgaSA8IEFSUmNvb2tpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB4ID0gQVJSY29va2llc1tpXS5zdWJzdHIoMCwgQVJSY29va2llc1tpXS5pbmRleE9mKFwiPVwiKSk7XHJcbiAgICAgICAgeSA9IEFSUmNvb2tpZXNbaV0uc3Vic3RyKEFSUmNvb2tpZXNbaV0uaW5kZXhPZihcIj1cIikgKyAxKTtcclxuICAgICAgICB4ID0geC5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCBcIlwiKTtcclxuICAgICAgICBpZiAoeCA9PSBjX25hbWUpIHtcclxuICAgICAgICAgIHJldHVybiB1bmVzY2FwZSh5KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgc2V0KGNfbmFtZSwgdmFsdWUsIGV4aG91cnMpIHtcclxuICAgIHZhciB0aW1lID0gbmV3IERhdGUoKTtcclxuICAgIHZhciBvZmZzZXQgPSB0aW1lLmdldFRpbWUoKTtcclxuICAgIG9mZnNldCArPSAoMzYwMCAqIDEwMDApICogZXhob3VycztcclxuICAgIHRpbWUuc2V0VGltZShvZmZzZXQpO1xyXG5cclxuICAgIGRvY3VtZW50LmNvb2tpZSA9IGNfbmFtZSArIFwiPVwiICsgZXNjYXBlKHZhbHVlKSArIFwiOyBleHBpcmVzPVwiICsgdGltZS50b0dNVFN0cmluZygpO1xyXG4gIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpeGVzIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuY29uc29sZSgpOyAgLy9Bdm9pZCBubyBjb25zb2xlIGVycm9yc1xyXG4gICAgLy8gdGhpcy5ob3ZlcnRhcCgpOyAvL0ZpeCBkb3VibGUgdGFwcGluZyBvbiBtb2JpbGUgd2Via2l0XHJcbiAgfVxyXG5cclxuICBjb25zb2xlKCkgeyBcclxuICAgIChmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgbWV0aG9kO1xyXG4gICAgICAgIHZhciBub29wID0gZnVuY3Rpb24oKSB7fTtcclxuICAgICAgICB2YXIgbWV0aG9kcyA9IFtcclxuICAgICAgICAgICAgJ2Fzc2VydCcsICdjbGVhcicsICdjb3VudCcsICdkZWJ1ZycsICdkaXInLCAnZGlyeG1sJywgJ2Vycm9yJyxcclxuICAgICAgICAgICAgJ2V4Y2VwdGlvbicsICdncm91cCcsICdncm91cENvbGxhcHNlZCcsICdncm91cEVuZCcsICdpbmZvJywgJ2xvZycsXHJcbiAgICAgICAgICAgICdtYXJrVGltZWxpbmUnLCAncHJvZmlsZScsICdwcm9maWxlRW5kJywgJ3RhYmxlJywgJ3RpbWUnLCAndGltZUVuZCcsXHJcbiAgICAgICAgICAgICd0aW1lU3RhbXAnLCAndHJhY2UnLCAnd2FybidcclxuICAgICAgICBdO1xyXG4gICAgICAgIHZhciBsZW5ndGggPSBtZXRob2RzLmxlbmd0aDtcclxuICAgICAgICB2YXIgY29uc29sZSA9ICh3aW5kb3cuY29uc29sZSA9IHdpbmRvdy5jb25zb2xlIHx8IHt9KTtcclxuXHJcbiAgICAgICAgd2hpbGUgKGxlbmd0aC0tKSB7XHJcbiAgICAgICAgICAgIG1ldGhvZCA9IG1ldGhvZHNbbGVuZ3RoXTtcclxuXHJcbiAgICAgICAgICAgIC8vIE9ubHkgc3R1YiB1bmRlZmluZWQgbWV0aG9kcy5cclxuICAgICAgICAgICAgaWYgKCFjb25zb2xlW21ldGhvZF0pIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGVbbWV0aG9kXSA9IG5vb3A7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KCkpO1xyXG4gIH1cclxuXHJcbiAgaG92ZXJ0YXAoKSB7XHJcbiAgICAkKCdib2R5Jykub24oJ3RvdWNoZW5kJywnYSwgc3BhbiwgYnV0dG9uLCBpbnB1dCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgJChlLmN1cnJlbnRUYXJnZXQpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICB9KTtcclxuICB9XHJcbn0gIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGFzaCB7XHJcbiAgcHViKCkge1xyXG4gICAgJCh3aW5kb3cpLmJpbmQoICdsb2FkIGhhc2hjaGFuZ2UnLCAoZSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygncHViIGhhc2ggY2hhbmdlJyk7XHJcbiAgICAgIHJhZGlvKCd3aW5kb3cvaGFzaC9jaGFuZ2UnKS5icm9hZGNhc3Qoe1xyXG4gICAgICAgIGU6ZSxcclxuICAgICAgICBoYXNoOmxvY2F0aW9uLmhhc2guc2xpY2UoMSlcclxuICAgICAgfSk7XHJcbiAgICB9KTsgXHJcbiAgfVxyXG59ICIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlbHBlcnMge1xyXG4gIHNsdWdpZnkodGV4dCkge1xyXG4gICAgcmV0dXJuIHRleHQudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bXlxcdyBdKy9nLCcnKS5yZXBsYWNlKC8gKy9nLCctJyk7XHJcbiAgfVxyXG59ICIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlY3RvcnMge1xyXG5cclxuICAvL0FkZCB2ZWN0b3JzXHJcbiAgYWRkKHAxLHAyKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB4OnAxLnggKyBwMi54LFxyXG4gICAgICB5OnAxLnkgKyBwMi55XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLy9NdWx0aXBseSB2ZWN0b3JcclxuICBtdWx0aXBseShwMSx2YWwpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHg6IHAxLnggKiB2YWwsXHJcbiAgICAgIHk6IHAxLnkgKiB2YWxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAvL05vcm1hbGl6ZXMgdGhlIHZlY3RvciB0byB2YWx1ZXMgYmV0d2VlbiAtMSBhbmQgMVxyXG4gIG5vcm1hbGlzZShwMSwgbmV3TGVuZ3RoKSB7XHJcbiAgICB2YXIgbCA9IHRoaXMubGVuZ3RoKHAxKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgeDogKHAxLnggLyBsKSAqIG5ld0xlbmd0aCxcclxuICAgICAgeTogKHAxLnkgLyBsKSAqIG5ld0xlbmd0aFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8vUmV0dXJucyB0aGUgdmVjdG9yIGJldHdlZW4gdHdvIHBvaW50cy5cclxuICBiZXR3ZWVuKHAxLHAyKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB4OiBwMS54IC0gcDIueCxcclxuICAgICAgeTogcDEueSAtIHAyLnlcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAvL0dldCBsZW5ndGggb2YgdmVjdG9yXHJcbiAgbGVuZ3RoKHApIHsgXHJcbiAgICByZXR1cm4gTWF0aC5zcXJ0KHAueCAqIHAueCArIHAueSAqIHAueSk7XHJcbiAgfVxyXG59ICIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW4ge1xyXG4gIGNyZWF0ZShuZXdfb3B0aW9ucykge1xyXG4gICAgdmFyIG9wdGlvbnMgPSB7XHJcbiAgICAgIGJveF9jbGFzczogJycsXHJcbiAgICAgIGJveF9odG1sOiAnJyxcclxuICAgICAgd3JhcF9jc3M6IHtcclxuICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcclxuICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgIHRvcDogMCxcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgIGJhY2tncm91bmQ6ICcjZmZmJyxcclxuICAgICAgICAnei1pbmRleCc6IDk5OTk5OVxyXG4gICAgICB9LFxyXG4gICAgICB0YWJsZV9jc3M6IHtcclxuICAgICAgICBkaXNwbGF5OiAndGFibGUnLFxyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgaGVpZ2h0OiAnMTAwJSdcclxuICAgICAgfSxcclxuICAgICAgcm93X2Nzczoge1xyXG4gICAgICAgIGRpc3BsYXk6ICd0YWJsZS1yb3cnXHJcbiAgICAgIH0sXHJcbiAgICAgIGNlbGxfY3NzOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ3RhYmxlLWNlbGwnLFxyXG4gICAgICAgICd0ZXh0LWFsaWduJzogJ2NlbnRlcicsXHJcbiAgICAgICAgJ3ZlcnRpY2FsLWFsaWduJzogJ21pZGRsZSdcclxuICAgICAgfSxcclxuICAgICAgYm94X2Nzczoge1xyXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgICAgICcqZGlzcGxheSc6ICdpbmxpbmUnLFxyXG4gICAgICAgIHdpZHRoOiAnYXV0bycsXHJcbiAgICAgICAgaGVpZ2h0OiAnYXV0bycsXHJcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgcGFkZGluZzogJzIwcHgnLFxyXG4gICAgICAgIGJvcmRlcjogJ25vbmUnLFxyXG4gICAgICAgIGJhY2tncm91bmQ6ICcjZmZmJ1xyXG4gICAgICB9LFxyXG4gICAgICBjYWxsYmFjazogZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgJC5leHRlbmQodHJ1ZSwgb3B0aW9ucywgbmV3X29wdGlvbnMpO1xyXG5cclxuICAgIHZhciAkbGlnaHRib3hfd3JhcCA9ICQoJzxkaXYgY2xhc3M9XCJsaWdodGJveC13cmFwXCIgLz4nKS5hcHBlbmRUbygnYm9keScpO1xyXG4gICAgdmFyICRsaWdodGJveF90YWJsZSA9ICQoJzxkaXYgY2xhc3M9XCJsaWdodGJveC10YWJsZVwiIC8+JykuYXBwZW5kVG8oJGxpZ2h0Ym94X3dyYXApO1xyXG4gICAgdmFyICRsaWdodGJveF9yb3cgPSAkKCc8ZGl2IGNsYXNzPVwibGlnaHRib3gtcm93XCIgLz4nKS5hcHBlbmRUbygkbGlnaHRib3hfdGFibGUpO1xyXG4gICAgdmFyICRsaWdodGJveF9jZWxsID0gJCgnPGRpdiBjbGFzcz1cImxpZ2h0Ym94LWNlbGxcIiAvPicpLmFwcGVuZFRvKCRsaWdodGJveF9yb3cpO1xyXG4gICAgdmFyICRsaWdodGJveF9ib3ggPSAkKCc8ZGl2IGNsYXNzPVwibGlnaHRib3gtYm94XCIgLz4nKS5hcHBlbmRUbygkbGlnaHRib3hfY2VsbCk7XHJcblxyXG4gICAgJGxpZ2h0Ym94X3dyYXAuY3NzKG9wdGlvbnMud3JhcF9jc3MpO1xyXG4gICAgJGxpZ2h0Ym94X3RhYmxlLmNzcyhvcHRpb25zLnRhYmxlX2Nzcyk7XHJcbiAgICAkbGlnaHRib3hfcm93LmNzcyhvcHRpb25zLnJvd19jc3MpO1xyXG4gICAgJGxpZ2h0Ym94X2NlbGwuY3NzKG9wdGlvbnMuY2VsbF9jc3MpO1xyXG4gICAgJGxpZ2h0Ym94X2JveC5jc3Mob3B0aW9ucy5ib3hfY3NzKTtcclxuXHJcbiAgICAkbGlnaHRib3hfYm94LmFkZENsYXNzKG9wdGlvbnMuYm94X2NsYXNzKTtcclxuICAgICRsaWdodGJveF9ib3guaHRtbChvcHRpb25zLmJveF9jb250ZW50KTtcclxuXHJcblxyXG4gICAgLy9jbG9zZSBjb25kaXRpb25zXHJcbiAgICAkKCcubGlnaHRib3gtY2VsbCcpLmZpbmQoJy5jbG9zZSwgW2RhdGEtcHViPWNsb3NlXScpLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCdib2R5Jykua2V5dXAoKGUpID0+ICB7XHJcbiAgICAgIGlmIChlLndoaWNoID09IDI3KSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmUoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLmxpZ2h0Ym94LWNlbGwnKS5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICBpZigkKGUudGFyZ2V0KS5oYXNDbGFzcygnbGlnaHRib3gtY2VsbCcpKSB0aGlzLnJlbW92ZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHR5cGVvZihvcHRpb25zLmNhbGxiYWNrKSA9PT0gJ2Z1bmN0aW9uJykgb3B0aW9ucy5jYWxsYmFjaygkbGlnaHRib3hfd3JhcCk7XHJcbiAgfVxyXG4gIFxyXG4gIHJlbW92ZSgpIHtcclxuICAgICQoJy5saWdodGJveC13cmFwJykuZmFkZU91dCgxMDAwLCBmdW5jdGlvbigpIHtcclxuICAgICAgJCgnLmxpZ2h0Ym94LXdyYXAnKS5yZW1vdmUoKTtcclxuICAgIH0pO1xyXG4gIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld3NsZXR0ZXIge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLy90aGlzLnB1YigpO1xyXG4gIH1cclxuICBcclxuICBwdWIoKSB7XHJcbiAgICB2YXIgJGZvcm0gPSAkKCcjbmV3c2xldHRlcicpO1xyXG5cclxuICAgIC8vT24gY2xpY2sgc2VuZCBvcGVuICdjYXN0XHJcbiAgICAkZm9ybS5vbignc3VibWl0JywgZnVuY3Rpb24oZSl7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdicm9hZGNhc3QgbmV3c2xldHRlciBzaWdudXAnKTtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICByYWRpbygnYWN0aW9uL25ld3NsZXR0ZXInKS5icm9hZGNhc3Qoe1xyXG4gICAgICAgIGFjdGlvbiA6ICdzaWdudXAnLFxyXG4gICAgICAgIGV2ZW50IDogZSxcclxuICAgICAgICAkZm9ybSA6ICRmb3JtXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIFxyXG4gIHN1YigpIHtcclxuICAgIHJhZGlvKCdhY3Rpb24vbmV3c2xldHRlcicpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xyXG4gICAgICB2YXIgJGZvcm0gICAgPSBkYXRhLiRmb3JtO1xyXG4gICAgICB2YXIgJHN1Y2Nlc3MgPSAkZm9ybS5maW5kKCcuc3VjY2VzcycpO1xyXG4gICAgICB2YXIgJGVycm9yICAgPSAkZm9ybS5maW5kKCcuZXJyb3InKTtcclxuXHJcbiAgICAgIHZhciBhY3Rpb24gPSBTdHJpbmcoJGZvcm0uYXR0cignYWN0aW9uJykpO1xyXG5cclxuICAgICAgJGVycm9yLmhpZGUoKTtcclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiAkZm9ybS5hdHRyKCdtZXRob2QnKSxcclxuICAgICAgICB1cmw6IGFjdGlvbixcclxuICAgICAgICBkYXRhOiAkZm9ybS5zZXJpYWxpemUoKSxcclxuICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGVycikge1xyXG4gICAgICAgICAgYWxlcnQoXCJDb3VsZCBub3QgY29ubmVjdCB0byB0aGUgcmVnaXN0cmF0aW9uIHNlcnZlci4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgIGlmIChkYXRhLnJlc3VsdCAhPSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgICAgICAvLyBTb21ldGhpbmcgd2VudCB3cm9uZywgZG8gc29tZXRoaW5nIHRvIG5vdGlmeSB0aGUgdXNlci4gbWF5YmUgYWxlcnQoZGF0YS5tc2cpO1xyXG4gICAgICAgICAgICAkZXJyb3IudGV4dCgnUGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwgYWRkcmVzcycpLnNob3coKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIEl0IHdvcmtlZCwgY2Fycnkgb24uLi5cclxuICAgICAgICAgICAgJGZvcm0uZmluZCgnaW5wdXQnKS52YWwoJycpO1xyXG4gICAgICAgICAgICAkc3VjY2Vzcy5zaG93KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByZWxvYWQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5fZmlsZXMgPSBbXTtcclxuXHJcbiAgICAvL0NyZWF0ZSBwcmVsb2FkIGRpdlxyXG4gICAgaWYgKCEkKCcjcHJlbG9hZCcpLmlzKCcqJykpIHtcclxuICAgICAgdGhpcy4kcHJlbG9hZCA9ICQoJzxkaXYgaWQ9XCJwcmVsb2FkXCIgLz4nKS5hcHBlbmRUbygnYm9keScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy4kcHJlbG9hZCA9ICQoJyNwcmVsb2FkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy4kcHJlbG9hZC5oaWRlKCk7XHJcbiAgfVxyXG5cclxuICBmaWxlcyhvcHRzKSB7XHJcbiAgICB0aGlzLl9maWxlcyA9IG9wdHMuc3JjO1xyXG5cclxuICAgIHZhciBmaWxlID0gdGhpcy5fZmlsZXMuc2hpZnQoKTtcclxuICAgIGlmICh0eXBlb2YoZmlsZSkgIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgdGhpcy5maWxlKHtcclxuICAgICAgICBzcmM6ZmlsZSxcclxuICAgICAgICBjYWxsYmFjazogKGQpID0+IHtcclxuICAgICAgICAgIC8vR28gdG8gdGhlIG5leHQgZmlsZVxyXG4gICAgICAgICAgdGhpcy5maWxlcyh7XHJcbiAgICAgICAgICAgIHNyYzogdGhpcy5fZmlsZXMsIFxyXG4gICAgICAgICAgICBjYWxsYmFjazogb3B0cy5jYWxsYmFja1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdydW4gY2FsbGJhY2shJyk7XHJcbiAgICAgIHRoaXMuY2xlYXIoKTtcclxuICAgICAgaWYodHlwZW9mKG9wdHMuY2FsbGJhY2spICE9ICd1bmRlZmluZWQnKSBvcHRzLmNhbGxiYWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmaWxlKG9wdHMpIHtcclxuICAgIHZhciBzcmMgICAgPSBvcHRzLnNyYy5yZXBsYWNlKC9cXFwiL2csICcgJyk7XHJcbiAgICB2YXIgdHlwZSAgID0gdGhpcy5nZXRGaWxlVHlwZShvcHRzLnNyYyk7XHJcbiAgICB2YXIgJHAgICAgID0gdGhpcy4kcHJlbG9hZDtcclxuICAgIHZhciBoYXNfY2IgPSAodHlwZW9mKG9wdHMuY2FsbGJhY2spICE9ICd1bmRlZmluZWQnKTtcclxuXHJcbiAgICAvL0JhaWwgaWYgd2UgZG9uJ3QgcmVjb2duaXNlIHRoZSB0eXBlXHJcbiAgICBpZih0eXBlID09IGZhbHNlKSB7XHJcbiAgICAgIG9wdHMuY2FsbGJhY2soZCk7IFxyXG4gICAgLy9IYW5kbGUgdHlwZXNcclxuICAgIH0gZWxzZSBpZih0eXBlID09ICdpbWcnKSB7XHJcbiAgICAgIHZhciAkZmlsZSA9ICQoJzxpbWcgLz4nKVxyXG4gICAgICAgIC5hdHRyKCdzcmMnLCBzcmMpXHJcbiAgICAgICAgLmFwcGVuZFRvKCRwKTtcclxuXHJcbiAgICAgIGlmKGhhc19jYikge1xyXG4gICAgICAgICRmaWxlLmxvYWQoKGQpID0+IHtcclxuICAgICAgICAgIC8vY29uc29sZS5sb2coJ2xvYWRlZCBpbWFnZScpO1xyXG4gICAgICAgICAgIG9wdHMuY2FsbGJhY2soZCk7IFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYodHlwZSA9PSAnanMnKSB7XHJcbiAgICAgICQuZ2V0U2NyaXB0KCBzcmMsIChkKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2xvYWRlZCBqcycpO1xyXG4gICAgICAgIGlmKGhhc19jYikgb3B0cy5jYWxsYmFjayhkKTsgXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmKHR5cGUgPT0gJ2NzcycpIHtcclxuICAgICAgdmFyICRmaWxlID0gJCgnPGxpbmsgLz4nKVxyXG4gICAgICAgIC5hdHRyKCdocmVmJywgc3JjKVxyXG4gICAgICAgIC5hdHRyKCdyZWwnLCAnc3R5bGVzaGVldCcpXHJcbiAgICAgICAgLmFwcGVuZFRvKCRwKTtcclxuXHJcbiAgICAgIGlmKGhhc19jYikge1xyXG4gICAgICAgICRmaWxlLmxvYWQoKGQpID0+IHtcclxuICAgICAgICAgIC8vY29uc29sZS5sb2coJ2xvYWRlZCBjc3MnKTtcclxuICAgICAgICAgICBvcHRzLmNhbGxiYWNrKGQpOyBcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW1hZ2Uob3B0cykge1xyXG4gICAgdGhpcy5maWxlKG9wdHMpO1xyXG4gIH1cclxuXHJcbiAgaW1hZ2VzKG9wdHMpIHtcclxuICAgIHRoaXMuZmlsZXMob3B0cyk7XHJcbiAgfVxyXG5cclxuICBjbGVhcigpIHtcclxuICAgIHRoaXMuX2ltYWdlcyA9IFtdO1xyXG4gICAgJCgnI3ByZWxvYWQgaW1nJykucmVtb3ZlKCk7XHJcbiAgICAkKCcjcHJlbG9hZCBzY3JpcHQnKS5yZW1vdmUoKTtcclxuICAgICQoJyNwcmVsb2FkIHN0eWxlJykucmVtb3ZlKCk7XHJcbiAgfVxyXG5cclxuICBnZXRGaWxlVHlwZShzcmMpIHtcclxuICAgIGNvbnNvbGUubG9nKHNyYyk7XHJcbiAgICB2YXIgZXh0ID0gc3JjLnN1YnN0cigoc3JjLmxhc3RJbmRleE9mKCcuJykgKzEpKTtcclxuICAgIGlmKC8oanMpJC9pZy50ZXN0KGV4dCkpIHtcclxuICAgICAgcmV0dXJuICdqcyc7XHJcbiAgICB9IGVsc2UgaWYgKC8oY3NzKSQvaWcudGVzdChleHQpKSB7XHJcbiAgICAgIHJldHVybiAnY3NzJztcclxuICAgIH0gZWxzZSBpZiAoLyhqcGd8cG5nfGdpZikkL2lnLnRlc3QoZXh0KSkge1xyXG4gICAgICByZXR1cm4gJ2ltZyc7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFB1YiB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvLyB0aGlzLnNjcm9sbCgpO1xyXG4gICAgLy8gdGhpcy5yZXNpemUoKTtcclxuICAgIC8vIHRoaXMubG9hZCgpO1xyXG4gICAgdGhpcy4kd2luZG93ID0gJCh3aW5kb3cpO1xyXG4gIH1cclxuICBcclxuICBzY3JvbGwoKSB7XHJcbiAgICB2YXIgJHdpbmRvdyA9IHRoaXMuJHdpbmRvdztcclxuXHJcbiAgICAkd2luZG93Lm9uKCdsb2FkIHNjcm9sbCcsICgpID0+IHtcclxuICAgICAgdGhpcy5zY3JvbGxQdWIoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVzaXplKCkge1xyXG4gICAgdmFyICR3aW5kb3cgPSB0aGlzLiR3aW5kb3c7XHJcblxyXG4gICAgJHdpbmRvdy5vbignbG9hZCByZXNpemUnLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMucmVzaXplUHViKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNjcm9sbFB1YigpIHtcclxuICAgIHZhciAkd2luZG93ID0gdGhpcy4kd2luZG93O1xyXG4gICAgcmFkaW8oJ3dpbmRvdy9zY3JvbGwnKS5icm9hZGNhc3Qoe1xyXG4gICAgICBzY3JvbGxUb3AgOiAkd2luZG93LnNjcm9sbFRvcCgpXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlc2l6ZVB1YigpIHtcclxuICAgIHZhciAkd2luZG93ID0gdGhpcy4kd2luZG93O1xyXG4gICAgcmFkaW8oJ3dpbmRvdy9yZXNpemUnKS5icm9hZGNhc3Qoe1xyXG4gICAgICB3aWR0aCAgOiAkd2luZG93LndpZHRoKCksXHJcbiAgICAgIGhlaWdodCA6ICR3aW5kb3cuaGVpZ2h0KClcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbG9hZCgpIHtcclxuICAgIHZhciAkd2luZG93ID0gdGhpcy4kd2luZG93O1xyXG5cclxuICAgICR3aW5kb3cub24oJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICAgIHJhZGlvKCd3aW5kb3cvbG9hZCcpLmJyb2FkY2FzdCh7XHJcbiAgICAgICAgd2lkdGggIDogJHdpbmRvdy53aWR0aCgpLFxyXG4gICAgICAgIGhlaWdodCA6ICR3aW5kb3cuaGVpZ2h0KCksXHJcbiAgICAgICAgc2Nyb2xsVG9wIDogJHdpbmRvdy5zY3JvbGxUb3AoKVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=
