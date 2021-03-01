module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'semi': ['error', 'always'],
    '@typescript-eslint/triple-slash-reference': 'off',
    'quotes': ['error', 'single', {'avoidEscape': true}],
    'vue/no-setup-props-destructure': 'off',
    '@typescript-eslint/consistent-type-assertions': 'off'
  }
}
