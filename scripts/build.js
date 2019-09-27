const { existsSync } = require('fs');
const execa = require('execa');
const paths = require('../config/paths');

module.exports = async () => {
  if (!existsSync(paths.projectIndexJs)) {
    console.error('`src/index.js` file does not exist.');

    process.exit(1);
  }

  execa(paths.selfBabel, [
    paths.projectSrc,
    '--out-dir',
    paths.projectBuild,
    '--source-maps',
    '--config-file',
    paths.selfBabelConfig,
  ]).stdout.pipe(process.stdout);
};
