export default class Lazy {
  constructor(utils) {
    this.u = utils;
    this.init();
  }

  init() {
    this.$els = $('[data-sub~="lazy-load"]');
    this.lazies = [];
    this.window_height = 0;

    this.$els.each((i,v) => {
      var $el    = $(v);
      var delay  = parseInt($el.attr('data-delay')) || 0;
      var offset = parseInt($el.attr('data-offset')) || 0;

      this.lazies.push({
        $el:$el,
        delay:delay,
        offset:offset,
        top:false
      });
    });

    radio('window/resize').subscribe((d) => {this.onResize(d);});
    radio('window/scroll').subscribe((d) => {this.onScroll(d);});
    this.u.window.scrollPub();
    this.u.window.resizePub();
  }

  onScroll(d) {
    //Check if any of the lazies have appeared
    _.each(this.lazies, (v,i) => {
      if(v.top !== false) {
        var top    = v.top;
        var offset = v.offset;
        var $el    = v.$el;

        if(top + offset < d.scrollTop + this.window_height) {
          //If they have, activate them
          setTimeout(() => {
            $el.attr('data-active', 'true');
          }, v.delay)

          //Remove active lazies from this.lazies
        }
      }
    });

  }

  onResize(d) {
    this.window_height = d.height;

    //update lazies saved distance from top
    _.each(this.lazies, (v,i) => {
      var $el = v.$el;

      //Distance from top
      v.top = $el.offset().top;
    });
  }
} 
