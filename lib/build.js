const gulp = require('gulp');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const paths = require('../config/paths');
const babelConfiguration = require('../config/.babelrc');

module.exports = () =>
  gulp
    .src(`${paths.projectSrc}/**`)
    .pipe(sourcemaps.init())
    .pipe(babel(babelConfiguration))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.projectBuild));
