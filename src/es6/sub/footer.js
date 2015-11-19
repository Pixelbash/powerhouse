export default class Landing {
  constructor(main,utils) {
    this.m = main;
    this.u = utils;
    radio('action/footer').subscribe((data) => {this.footer(data);});
    radio('action/newsletter/lightbox').subscribe((data) => {this.lightbox(data);});
  }

  footer(data) {
    this.$newsletter_pub      = data.$newsletter_pub;
    this.$newsletter_template = data.$newsletter_template;
    this.u.newsletter.sub(); 
  }

  lightbox(data) {
    this.u.lightbox.create({
      box_content : this.$newsletter_template.html(),
      box_class: 'lightbox-newsletter',
      callback: ($lightbox_wrap) => {
        this.u.newsletter.pub(); 
      }
    });
  }
}    