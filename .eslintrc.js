module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module'
  },
  plugins: ['jest', 'prettier', 'react', 'security'],
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:security/recommended'
  ],
  rules: {
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-arrow-callback': 'error',
    'no-empty': ['warn', { allowEmptyCatch: true }],
    'no-unused-vars': ['error', { ignoreRestSiblings: true }],
    'no-console': 'warn'
  }
}
