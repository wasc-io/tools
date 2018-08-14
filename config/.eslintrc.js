module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier'],
  plugins: ['import', 'jsx-a11y', 'react', 'prettier'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
  },
  // Turn off rules that are too strict
  rules: {
    'global-require': 'off',
    'no-console': 'off',
    'import/no-dynamic-require': 'off',
  },
};
