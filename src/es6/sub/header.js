export default class Header {
  constructor(main,utils) {
    this.m = main;
    this.u = utils;

    radio('header').subscribe((d) => {this.init(d);});
  }

  init(d) {
    this._d = d;

    radio('header/search/toggle').subscribe((d) => {this.searchToggle(d);});
    radio('header/search/submit').subscribe((d) => {this.searchSubmit(d);});
    radio('header/login/show').subscribe((d) => {this.loginShow(d);});
    radio('header/login/submit').subscribe((d) => {this.loginSubmit(d);});


    radio('header/menu/toggle').subscribe((d) => {this.menu(d);});
  }

  searchToggle(d) {
    var action = d.action;

    if(action == 'toggle') {
      this._d.search.$toggle_sub.toggleClass('active');
    } else if(action == 'show') {
      this._d.search.$toggle_sub.addClass('active');
    } else if(action == 'hide') {
      this._d.search.$toggle_sub.removeClass('active');
    }
  }

  searchSubmit(d) {
    var e = d.e;

    //e.preventDefault();
  }

  loginShow(d) {
    this.u.lightbox.create({
      box_content:this._d.login.template({
        buildings:this._d.buildings
      }),
      box_class: 'lightbox-login',
      box_css: {
        padding:'40px 80px'
      },
      wrap_css: {
        background:'rgba(0,0,0,0.6)'
      }
    })
  }

  loginSubmit(d) {
    $.ajax({
      url:window._data.a_url,
      method: 'POST',
      data: {
        'action': 'formlogin',
        'data' : d
      },
      'dataType' :'json',
      complete: (r) => {
        if(r.responseText != 0) {
          this.u.cookies.set('login',r.responseText,1);
          window.location = d.url;
        } else {
          alert('Please check the password is correct');
        }
      }
    })
  }

  menu(d) {
    var $pub = this._d.mobile.$pub;
    var $sub = this._d.mobile.$sub;

    //Is already active?
    var is_active = $pub.hasClass('active');

    if(is_active) {
      $pub.removeClass('active');
      $sub.removeClass('active');
    } else {
      $pub.addClass('active');
      $sub.addClass('active');
    }
  }
}    