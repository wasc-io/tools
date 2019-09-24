const gulp = require('gulp');
const prettier = require('gulp-prettier');

const prettierConfig = require('../config/.prettierrc.json');
const paths = require('../config/paths');

module.exports = argv => {
  const gulpStream = gulp.src(`${paths.projectSrc}/**/*.{js,json,graphql,md,html}`);
  let prettierStream;
  if (argv['dry-run']) {
    prettierStream = gulpStream.pipe(prettier.check(prettierConfig));
  } else {
    prettierStream = gulpStream.pipe(prettier(prettierConfig));
  }

  prettierStream.pipe(gulp.dest(paths.projectSrc));
};
