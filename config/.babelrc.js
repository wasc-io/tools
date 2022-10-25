module.exports = {
  presets: [
    require.resolve('babel-preset-preact'),
    [
      require.resolve('@babel/preset-env'),
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
  plugins: [
    require.resolve('babel-plugin-syntax-trailing-function-commas'),
    require.resolve('@babel/plugin-proposal-object-rest-spread'),
    require.resolve('babel-plugin-inline-import'),
    require.resolve('@babel/plugin-proposal-optional-chaining'),
  ],
};
