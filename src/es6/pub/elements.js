export default class Layout {
  constructor(main,utils) {
    this.m = main;
    this.u = utils;
    this.init();
  }

  init() {
    
    var contact = {
      $pub : $('[data-pub~="contact/form"]'),
      $error_sub : $('[data-pub~="contact/form"] [data-sub~="contact/error"]')
    };

    radio('elements').broadcast({
      contact:contact
    });

    contact.$pub.on('submit', (e) => {
      var $pub = $(e.target);
      e.preventDefault();
      radio('contact/submit').broadcast({
        $pub:$pub,
        e:e
      });

    });
  }
}