/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'vue/multi-word-component-names': 'off',
    'no-unused-vars': 'off',
    'no-undef': 'off',
    'no-constant-condition': 'off',
    'no-prototype-builtins': 'off',
    'no-irregular-whitespace': 'off',
    'no-async-promise-executor': 'off',
    'no-unsafe-optional-chaining': 'off',
    'no-useless-catch': 'off',
    'no-unsafe-negation': 'off',
    'no-useless-escape': 'off',
    'no-extra-boolean-cast': 'off',
    'no-unsafe-finally': 'off',
    'no-unsafe': 'off'
  }
}
