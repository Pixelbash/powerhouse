export default class Config {
  constructor() {
    var dirs = {
      src: 'src',
      dest: 'dist'
    };

    this.paths = {
      scss : {
        src: `${dirs.src}/scss/init.scss`,
        dest: `${dirs.dest}/css/`
      },
      img : {
        src: `${dirs.src}/img/**/*.{jpg,png}`,
        dest: `${dirs.dest}/img/`
      },
      bower : {
        src: [
          `${dirs.src}/js/lib/jquery/dist/jquery.js`,
          `${dirs.src}/js/lib/radiojs/radio.js`,
          `${dirs.src}/js/lib/underscore/underscore.js`,
        ],
        dest: `${dirs.dest}/js/`
      },
      es6 : {
        src: `${dirs.src}/es6/init.js`,
        dest: `${dirs.dest}/js/`
      }
    };
  }
}