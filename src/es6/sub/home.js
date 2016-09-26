export default class Home {
  constructor(main,utils) {
    this.m = main;
    this.u = utils;

    radio('home').subscribe((data) => {this.init(data);});
  }

  init(d) {
    this._d = d;

    radio('home/slideshows/hero').subscribe((data) => {this.hero(data);});            
  }

  hero(d) {
    var $sub = this._d.slideshows.$hero_sub;

    //TODO: Use a non bxslider slideshow
  }
}  
