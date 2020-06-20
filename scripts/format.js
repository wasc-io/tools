const execa = require('execa');
const paths = require('../config/paths');

module.exports = (argv) => {
  const userProvidedTargets = argv._.slice(1);

  const targets = userProvidedTargets.length ? userProvidedTargets : [`.`];

  const prettierArgs = [
    argv['dry-run'] ? '--list-different' : '--write',
    '--config',
    paths.selfPrettierConfig,
    '--ignore-path',
    paths.selfIgnore,
    ...targets,
  ];
  execa(paths.selfPrettier, prettierArgs, {
    env: process.env,
    cwd: paths.projectRoot,
    stdio: 'inherit',
  }).catch((error) => {
    console.error('Command failed with the following error:\n');
    console.error(error);
    process.exit(1);
  });
};
