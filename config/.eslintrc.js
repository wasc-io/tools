module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier'],
  plugins: ['import', 'jsx-a11y', 'react', 'prettier', 'json'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
  },
};
