const execa = require('execa');
const paths = require('../config/paths');

module.exports = () => {
  const jestArgs = [`--config=${paths.selfJestConfig}`];

  execa(paths.selfJest, jestArgs, {
    env: process.env,
    cwd: paths.projectRoot,
    stdio: 'inherit',
  }).catch(error => {
    console.error('Command failed with the following error:\n');
    console.error(error);
    process.exit(1);
  });
};
