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
    'filenames',
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
  },
  rules: {
    'filenames/match-regex': 2,
    'filenames/match-regex': [2, '^[a-zA-Z]+$', true],
    'filenames/match-exported': [2, 'pascal'],
    // 'filenames/no-index': 2,
  },
};
