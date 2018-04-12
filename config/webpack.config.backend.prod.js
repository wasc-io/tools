const webpack = require('webpack');
const paths = require('./paths');

const nodeExternals = require('webpack-node-externals');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    bail: true,
    output: {
        path: paths.projectBuild,
        filename: 'index.js',
        libraryTarget: 'commonjs',
    },
    entry: paths.projectIndexJs,
    target: 'node',
    node: false,
    externals: [nodeExternals()],
    devtool: 'sourcemap',
    resolve: {
        modules: ['node_modules', paths.selfNodeModules],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                require.resolve('babel-preset-env'),
                                {
                                    targets: {
                                        node: '8.2',
                                    },
                                }
                            ]
                        ],
                        plugins: [
                            require.resolve('babel-plugin-syntax-trailing-function-commas'),
                        ]
                    }
                },
            },
            {
                exclude: /node_modules/,
                test: /\.graphql$/,
                use: [{ loader: 'graphql-import-loader' }],
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin([paths.projectBuild], {root: paths.projectRoot}),
        new webpack.BannerPlugin({
            banner: 'require("source-map-support").install();',
            raw: true,
            entryOnly: false,
        }),
        new CopyWebpackPlugin([
            { from: '.env' },
            // { from: './src/graphql/public/types/*.graphql', to: path.join(BUILD, 'graphql/public/types') },
        ])
    ],
    devtool: 'sourcemap',
};
