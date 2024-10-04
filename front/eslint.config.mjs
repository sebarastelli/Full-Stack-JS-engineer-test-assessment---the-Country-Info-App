import globals from 'globals';

export default [
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      sourceType: 'module',
      globals: globals.browser,
    },
    rules: {},
  },
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
];
