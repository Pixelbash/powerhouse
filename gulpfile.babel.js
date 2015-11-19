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
import browserSync from 'browser-sync';

import Config from './config';
var config = new Config();
var paths  = config.paths;

gulp.task('browser-sync', function () {
  browserSync(config.browsersync);
});

gulp.task("img", () => {
  return gulp.src(paths.img.src)
    .pipe(changed("dist/img"))
    .pipe(image())
    .pipe(gulp.dest(paths.img.dest));
});

gulp.task("fnt", () => {
  return gulp.src(paths.fnt.src)
    .pipe(changed("dist/fnt"))
    .pipe(gulp.dest(paths.fnt.dest));
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

gulp.task('default', function () {
  gulp.start('img');
  gulp.start('fnt');
  gulp.start('scss');
  gulp.start('es6');
  gulp.start('bower');
});

gulp.task('watch', ['browser-sync'], function () {
  gulp.watch([paths.scss.watch],['scss', browserSync.reload]);
  gulp.watch([paths.img.watch],['img', browserSync.reload]);
  gulp.watch([paths.es6.watch],['es6', browserSync.reload]);
  gulp.watch([paths.bower.watch],['bower', browserSync.reload]);
});