export default class Config {
  constructor() {
    var dirs = {
      src: 'src',
      dest: 'dist'
    };

    this.browsersync = {
      proxy: {
        target: "http://ba.wordpress.pxl.nz",
        middleware: function (req, res, next) {
          console.log(req.url);
          next();
        }
      },
      files: [
        './views/**'
      ]
    }

    this.paths = {
      scss : {
        watch: `${dirs.src}/scss/**/*`,
        src: `${dirs.src}/scss/init.scss`,
        dest: `${dirs.dest}/css/`
      },
      img : {
        watch: `${dirs.src}/img/**/*`,
        src: `${dirs.src}/img/**/*.{jpg,png}`,
        dest: `${dirs.dest}/img/`
      },
      fnt : {
        watch: `${dirs.src}/fnt/**/*`,
        src: `${dirs.src}/fnt/**/*`,
        dest: `${dirs.dest}/fnt/`
      },
      file : {
        watch: `${dirs.src}/file/**/*`,
        src: `${dirs.src}/file/**/*`,
        dest: `${dirs.dest}/file/`
      },
      bower : {
        watch: `${dirs.src}/js/bower/**/*`,
        src: [
          `${dirs.src}/js/bower/zepto/zepto.js`,
          `${dirs.src}/js/bower/radio/radio.js`,
          `${dirs.src}/js/lib/lodash/lodash.custom.js`,
        ],
        dest: `${dirs.dest}/js/`
      },
      es6 : {
        watch: `${dirs.src}/es6/**/*`,
        src: `${dirs.src}/es6/init.js`,
        dest: `${dirs.dest}/js/`
      }
    };
  }
}
