export default class Home {
  constructor(main,utils) {
    this.m = main;
    this.u = utils;

    console.log('sub home');

    radio('home').subscribe((data) => {this.init(data);});
  }

  init(d) {
    this._d = d;

    console.log(this._d);

    radio('home/slideshows/hero').subscribe((data) => {this.hero(data);});            
  }

  hero(d) {
    var $sub = this._d.slideshows.$hero_sub;
    $sub.find('>div').show();
    $sub.bxSlider();
  }
}  
