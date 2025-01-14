import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import eslintImport from 'eslint-plugin-import';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'simple-import-sort': simpleImportSort,
      import: eslintImport,
    },
    rules: {
      // Regras recomendadas para React Hooks
      ...reactHooks.configs.recommended.rules,

      // Regra para React Refresh
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // Regras para organizar importações com Simple Import Sort
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^react', '^@?\\w'], // Pacotes externos
            ['^(@|components|utils|hooks|config|assets)(/.*|$)'], // Imports absolutos e aliases
            ['^\\.\\./'], // Relativos de nível superior
            ['^\\./'], // Relativos do mesmo nível
          ],
        },
      ],
      'simple-import-sort/exports': 'error',

      // Regras relacionadas a import
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
    },
  },
);
