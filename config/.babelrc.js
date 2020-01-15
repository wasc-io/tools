module.exports = {
  presets: [
    [
      require.resolve('@babel/preset-env'),
      {
        targets: {
          node: '13',
        },
      },
    ],
  ],
  plugins: [
    require.resolve('babel-plugin-syntax-trailing-function-commas'),
    require.resolve('babel-plugin-transform-object-rest-spread'),
  ],
};
