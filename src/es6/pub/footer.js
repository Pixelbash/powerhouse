export default class Footer {
  constructor(main,utils) {
    this.m = main;
    this.u = utils;
    this.footer();
  }

  footer() {
    var $footer              = $('footer.main');
    var $newsletter_pub      = $('a[href=#newsletter]');
    var $newsletter_template = $('#newsletter_template');

    radio('action/footer').broadcast({
      $newsletter_pub:$newsletter_pub,
      $newsletter_template:$newsletter_template
    });
 
    $newsletter_pub.on('click', (e) => {
      e.preventDefault();
      console.log('pub newsletter');
      radio('action/newsletter/lightbox').broadcast();
    });
  }
}  