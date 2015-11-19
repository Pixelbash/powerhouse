export default class Config {
  constructor() {
    var dirs = {
      src: 'src',
      dest: 'dist'
    };

    this.browsersync = {
      proxy: {
        target: "http://powerhouse.local.io",
        middeware: function (req, res, next) {
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
      bower : {
        watch: `${dirs.src}/js/lib/**/*`,
        src: [
          `${dirs.src}/js/lib/jquery/dist/jquery.js`,
          `${dirs.src}/js/lib/radiojs/radio.js`,
          `${dirs.src}/js/lib/underscore/underscore.js`,
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