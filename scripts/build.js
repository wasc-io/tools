const { existsSync } = require('fs');
const webpack = require('webpack');
const paths = require('../config/paths');
const configBuilder = require('../config/webpack');

module.exports = async (argv) => {
  if (!existsSync(paths.projectIndexJs)) {
    console.error('`src/index.js` file does not exist.');

    process.exit(1);
  }

  const config = configBuilder(argv);
  const compiler = webpack(config);

  compiler.run((error, stats) => {
    // Handle webpack configuration errors
    if (error) {
      console.error(error.stack || error);
      if (error.details) {
        console.error(...error.details);
      }
    }

    const info = stats.toJson();

    // Handle compilation errors
    if (stats.hasErrors()) {
      console.error(...info.errors);
    }

    // Print any warnings before anything else
    if (stats.hasWarnings()) {
      console.warn(...info.warnings);
    }

    console.log(
      stats.toString({
        colors: true,
      }),
    );
  });
};
