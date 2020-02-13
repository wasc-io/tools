module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'plugin:css-modules/recommended'],
  plugins: ['import', 'jsx-a11y', 'react', 'prettier', 'json', 'css-modules'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
  },
};
