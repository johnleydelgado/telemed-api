module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    camelcase: 'off',
    'no-return-assign': 'off',
    'import/prefer-default-export': 'off',
    'no-shadow': 'off',
    'max-len': 'off',
    radix: 'off',
    'vars-on-top': 'off',
    'no-console': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'off',
      },
    ],
  },
};
