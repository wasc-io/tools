const { existsSync } = require('fs');
const paths = require('../config/paths');
const execa = require('execa');

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
