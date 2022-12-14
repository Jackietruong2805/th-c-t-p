/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    // '../../.eslintrc.cjs',
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier',
  ],
  env: {
    'vue/setup-compiler-macros': true,
  },
  overrides: [
    {
      files: ['cypress/integration/**.spec.{js,ts,jsx,tsx}'],
      extends: ['plugin:cypress/recommended'],
    },

    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      rules: {
        '@typescript-eslint/no-empty-interface': ['off'],
        '@typescript-eslint/no-inferrable-types': ['off'],
      },
    },

    {
      files: ['*.vue'],
      rules: {
        '@typescript-eslint/no-empty-interface': ['off'],
        '@typescript-eslint/no-inferrable-types': ['off'],
      },
    },
  ],
  'prettier/prettier': [
    'error',
    {
      endOfLine: 'auto',
    },
  ],
};
