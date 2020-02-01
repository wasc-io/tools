module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'prettier',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: [
    'import',
    'jsx-a11y',
    'react',
    'prettier',
    'json',
    '@typescript-eslint',
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
  },
};
