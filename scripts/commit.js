const bootstrap = require('commitizen/dist/cli/git-cz').bootstrap;

const paths = require('../config/paths');

// Shift the cli arguments to the original place

bootstrap({
  cliPath: paths.selfCommitizen,
  config: {
    path: 'cz-conventional-changelog',
  },
});
