const webpack = require('webpack');
const configBuilder = require('../config/webpack');

module.exports = async (argv) => {
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
