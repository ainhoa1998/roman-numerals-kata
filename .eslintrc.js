module.exports = {
  env: {
    es6: true, // enable es6 global variables
    node: true, // enable node global variables
    jest: true, // enable jest global variables
  },
  parser: '@typescript-eslint/parser', // parse typescript
  extends: [
    'eslint:recommended', // eslint recommended rules
  ],
  parserOptions: {
    ecmaVersion: 2018, // to support syntax version
    sourceType: 'module', // to use ECMAscript modules
    ecmaFeatures: {
      jsx: true, // allow to eslint to analize jsx and tsx files
    },
  },
}
