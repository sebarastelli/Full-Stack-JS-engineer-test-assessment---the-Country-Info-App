import globals from 'globals';
import prettierConfig from 'eslint-config-prettier';

export default [
  {
    files: ['**/*.js'],
    languageOptions: { sourceType: 'commonjs' },
  },
  {
    languageOptions: { globals: globals.browser },
  },
  {
    // Integra Prettier para que funcione junto a ESLint
    files: ['**/*.js'],
    rules: {
      ...prettierConfig.rules, // Agrega las reglas de Prettier
    },
  },
];
