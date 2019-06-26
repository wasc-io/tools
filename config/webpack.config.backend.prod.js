const webpack = require('webpack');

const nodeExternals = require('webpack-node-externals');

const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const NodemonPlugin = require('nodemon-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader');
const babelConfig = require('./.babelrc');

const paths = require('./paths');

module.exports = argv => {
  // Assemble nodemon configuration from cli options
  const nodeArgs = [];

  if (argv.env) {
    nodeArgs.push('-r', 'dotenv/config');
  }

  if (argv.debug) {
    nodeArgs.push('--inspect');
  }

  return {
    bail: true,
    output: {
      path: paths.projectBuild,
      filename: 'index.js',
      libraryTarget: 'commonjs',
    },
    entry: paths.projectIndexJs,
    target: 'node',
    node: false,
    externals: [
      nodeExternals({
        // load non-javascript files with extensions, presumably via loaders
        whitelist: [/\.(?!(?:jsx?|json)$).{1,5}$/i],
      }),
    ],
    devtool: 'sourcemap',
    mode: 'production',
    resolve: {
      modules: ['node_modules', paths.selfNodeModules],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: {
            loader: 'awesome-typescript-loader',
            options: {
              useBabel: true,
            },
          },
        },
        // TODO Change this back, when the error with graphql-js is resolved https://github.com/apollographql/react-apollo/issues/1737 https://github.com/graphql/graphql-js/issues/1272#issuecomment-377384574
        {
          test: /\.mjs$/,
          include: /node_modules/,
          type: 'javascript/auto',
        },
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: babelConfig,
          },
        },
        {
          test: /\.graphql$/,
          exclude: /node_modules/,
          use: [{ loader: 'graphql-import-loader' }],
        },
      ],
    },
    plugins: [
      new webpack.BannerPlugin({
        banner: 'require("source-map-support").install();',
        raw: true,
        entryOnly: false,
      }),
      new ProgressBarPlugin({
        format:
          '\u001b[90m\u001b[44mBuild\u001b[49m\u001b[39m [:bar] \u001b[32m\u001b[1m:percent\u001b[22m\u001b[39m (:elapseds) \u001b[2m:msg\u001b[22m',
        renderThrottle: 100,
        summary: false,
        clear: true,
      }),
      new NodemonPlugin({
        nodeArgs,
      }),
      new CheckerPlugin(),
    ],
  };
};
