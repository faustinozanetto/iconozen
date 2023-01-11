// @ts-check
const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  // Configuration for JavaScript files
  extends: [
    'turbo',
    'next/core-web-vitals', // Needed to avoid warning in next.js build: 'The Next.js plugin was not detected in your ESLint configuration'
    'plugin:prettier/recommended',
  ],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'react/jsx-key': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        endOfLine: 'auto',
      },
    ],
    'no-empty-pattern': 'off',
    'no-console': 'off',
    'consistent-return': 'off',
    'no-param-reassign': 'off',
    'class-methods-use-this': 'off',
  },
});