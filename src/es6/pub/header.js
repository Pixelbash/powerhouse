export default class Header {
  constructor(main,utils) {
    this.m = main;
    this.u = utils;
    this.header();
  }

  header() {
    var $header = $('header.default');
    var $search = $('[data-sub~="search"]');

    this._d = {
      buildings: window._data.buildings,
      search : {
        $toggle_sub: $search,
        $toggle_pub: $header.find('[data-pub~="search-toggle"]'),
        $hide_pub: $header.find('[data-pub~="search-hide"]'),
        $form_pub: $header.find('[data-pub~="search-form"]'),
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
        $sub: $header.find('[data-sub~="hamburger"]'),
      }
    }

    radio('header').broadcast(this._d);

    this.search();
    this.login();

    this._d.mobile.$pub.on('click', (e) => {
      radio('header/menu/toggle').broadcast({

      })
    });
  }

  search() {
    //Toggle search bar
    this._d.search.$toggle_pub.on('click', (e) => {
      radio('header/search/toggle').broadcast({
        'action':'toggle'
      });
    });

    //Hide search bar
    this._d.search.$hide_pub.on('click', (e) => {
      radio('header/search/toggle').broadcast({
        'action':'hide'
      });
    });

    //Submit search form
    this._d.search.$form_pub.on('submit', (e) => {
      radio('header/search/submit').broadcast({
        e:e,
        $form:$(e.currentTarget)
      });
    });
  }

  login() {
    //Show login template
    this._d.login.$show_pub.on('click', (e) => {
      var select = $(e.currentTarget).attr('data-select');
      radio('header/login/show').broadcast({
        select:select
      });
    });

    //Form submission
    this.m.$body.on('submit',this._d.login.$submit_pub.selector,(e) => {
      var $form = $(e.currentTarget).closest('form');
      var building = $form.find('[name="building"]').val();
      var password = $form.find('[name="password"]').val();
      var url = $form.find('[name="building"] option:selected').attr('data-url');

      e.preventDefault();
      radio('header/login/submit').broadcast({
        building:building,
        password:password,
        url:url
      });
    });
  }
}  