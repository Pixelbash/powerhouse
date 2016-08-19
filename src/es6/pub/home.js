export default class Home {
  constructor(main,utils) {
    this.m = main;
    this.u = utils;

    this.init();
  }

  init() {

    this._d = {
      slideshows: {
        $hero_sub: $('[data-sub~="hero-slideshow"]'),
      }
    };

    radio('home').broadcast(this._d);

    //Show video
    radio('home/slideshows/hero').broadcast(); 
  }
} 
