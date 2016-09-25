export default class Pub {
  constructor() {
    this.$window = $(window);
    // this.scroll();
    // this.resize();
    // this.load();
  }
  
  scroll() {
    var $window = this.$window;

    $window.on('load scroll', () => {
      this.scrollPub();
    });
  }

  resize() {
    var $window = this.$window;

    $window.on('load resize', () => {
      this.resizePub();
    });
  }

  scrollPub() {
    var $window = this.$window;
    radio('window/scroll').broadcast({
      scrollTop : $window.scrollTop()
    });
  }

  resizePub() {
    var $window = this.$window;
    radio('window/resize').broadcast({
      width  : $window.width(),
      height : $window.height()
    });
  }

  load() {
    var $window = this.$window;

    $window.on('load', () => {
      radio('window/load').broadcast({
        width  : $window.width(),
        height : $window.height(),
        scrollTop : $window.scrollTop()
      });
    });
  }
}
