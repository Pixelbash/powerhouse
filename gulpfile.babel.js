'use strict';

import gulp from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import changed from 'gulp-changed';
import babel from 'gulp-babel';
import bower from 'gulp-bower';
import concat from 'gulp-concat';
import rename from 'gulp-rename';
import image from 'gulp-image';
import imageResize from 'gulp-image-resize';

import Config from './config';
var config = new Config();
var paths  = config.paths;

gulp.task("img", () => {
  return gulp.src(paths.img.src)
    .pipe(changed("dist/img"))
    .pipe(image({
      pngquant: true,
      optipng: false,
      zopflipng: true,
      advpng: true,
      jpegRecompress: false,
      jpegoptim: true,
      mozjpeg: true,
      gifsicle: true,
      svgo: true
    }))
    .pipe(gulp.dest(paths.img.dest));
});

gulp.task('scss', () => {
  return gulp.src(paths.scss.src)
    .pipe(sass({indentedSyntax:false}).on('error', sass.logError))
    .pipe(sourcemaps.init())
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(concat('init.css'))
    .pipe(gulp.dest(paths.scss.dest));
});

gulp.task('bower', () => {
  return gulp.src(paths.bower.src
  , { base: './js/lib' })
  .pipe(concat('plugins.js'))
  .pipe(rename({dirname: ''}))
  .pipe(gulp.dest(paths.bower.dest))
});

gulp.task('es6', () => {
  return gulp.src(paths.es6.src)
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(concat('init.js'))
    .pipe(gulp.dest(paths.es6.dest));
});

gulp.task('watch', () => {
  gulp.watch(paths.scss.src,['scss']);
  gulp.watch(paths.img.src,['img']);
  gulp.watch(paths.es6.src,['es6']);
  gulp.watch(paths.bower.src,['bower']);
});

gulp.task('default', ['watch']);