const { existsSync } = require('fs');
const nodemon = require('nodemon');
const paths = require('../config/paths');

module.exports = async argv => {
  if (!existsSync(paths.projectIndexJs)) {
    console.error('`src/index.js` file does not exist.');

    process.exit(1);
  }

  const nodeArgs = [];

  if (argv.pnp) {
    nodeArgs.push(`-r ${paths.projectPnp}`);
  }

  nodemon({
    script: paths.projectIndexJs,
    execMap: {
      js: [
        paths.selfBabelNode,
        '--source-maps',
        '--config-file',
        paths.selfBabelConfig,
        ...nodeArgs,
      ],
    },
  });

  nodemon.on('quit', () => {
    process.exit();
  });
};
