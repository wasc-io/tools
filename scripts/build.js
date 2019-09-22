const { existsSync } = require('fs');
const gulp = require('gulp');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const paths = require('../config/paths');
const babelConfiguration = require('../config/.babelrc');

module.exports = async argv => {
  const mode = argv._[1];
  if (!existsSync(paths.projectIndexJs)) {
    console.error('`src/index.js` file does not exist.');

    process.exit(1);
  }

  // yarn run babel src --out-dir build --source-maps
  gulp
    .src(`${paths.projectSrc}/**`)
    .pipe(sourcemaps.init())
    .pipe(babel(babelConfiguration))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.projectBuild));
};
