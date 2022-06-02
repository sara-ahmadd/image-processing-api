module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    isnan: 0,
    noinnerdeclaration: 0,
    'prettier/prettier': 2,
    quotes: ['error', 'single'],
    'no-var': 'error',
    'prefer-const': 'error',
  },
};
