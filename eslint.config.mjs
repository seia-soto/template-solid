import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginPrettier from 'eslint-plugin-prettier/recommended';
import pluginSolid from 'eslint-plugin-solid';
import tseslint from 'typescript-eslint';

export default [
  {
    files: ['**/*.{js,jsx,mjs,ts,tsx}'],
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginPrettier,
  pluginSolid.configs['flat/typescript'],
  {
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        projects: ['./tsconfig.json'],
      },
    },
    rules: {
      'prettier/prettier': 2,
    },
  },
];
