module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier'],
  plugins: ['import', 'jsx-a11y', 'react', 'prettier', 'json'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
  },
  // Turn off rules that are too strict
  rules: {
    'global-require': 'off',
    'no-console': 'off',
    'import/no-dynamic-require': 'off',
    // https://eslint.org/docs/rules/no-plusplus#allowforloopafterthoughts
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
  },
};
