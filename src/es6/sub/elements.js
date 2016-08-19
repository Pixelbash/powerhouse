export default class Elements {
  constructor(main,utils) {
    this.m = main;
    this.u = utils;
    radio('elements').subscribe((data) => {this.elements(data);});
  }

  elements(data) {
    this.contact = data.contact;

    radio('contact/submit').subscribe((data) => {this.contactSubmit(data);});
  }

  contactSubmit(d) {
    var e      = d.e;
    var $form  = d.$pub;
    var $error = this.contact.$error_sub;

    $.post( window.location , $form.serialize() + '&submit=true' , (d) => {
      var $html = $(d);

      //Replace forms with contents
      var $pubs = this.contact.$pub;
      var $new_pubs = $html.find('[data-pub~="contact/form"]');
      var $new_subs = $html.find('[data-sub~="contact/form"]');

      $pubs.each((i,pub) => {
        var $pub = $(pub);
        var index = i;

        var $new_pub = $new_pubs.eq(index);
        if($new_pub.size() == 0) {
          $new_pub = $new_subs.eq(index);
        }

        var new_html = $new_pub.parent().html();

        $pub.parent().html(new_html);
      })
    });
  }
}   