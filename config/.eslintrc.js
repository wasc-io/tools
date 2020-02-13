module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'prettier',
    'plugin:css-modules/recommended',
    'plugin:eslint-comments/recommended',
  ],
  plugins: [
    'import',
    'jsx-a11y',
    'react',
    'prettier',
    'json',
    'css-modules',
    'optimize-regex',
    'no-secrets',
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
  },
};
