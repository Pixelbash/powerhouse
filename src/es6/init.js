import Utils from './utils';

import Pub from './pub';
import Sub from './sub';

export default class Init {
  constructor() {
    this.$body     = $('body');
    this.$window   = $(window);
    this.$document = $(document);
    this.$root     = $('html, body');

    this._opts = window._opts;
    this._data = window._data;

    this.utils = new Utils();

    this.start();
  } 

  start() {
    //Jquery ready
    $(() => { 
      this.sub = new Sub(this, this.utils);
      this.pub = new Pub(this, this.utils); 

      //External links in new window
      $('a[href^="http"]')
        .not('a[href^="#"]')
        .not('a[href^="' + window._d.shop_url + '"]')
        .attr('target', '_blank');
    });
  }
}

global.app = new Init();   