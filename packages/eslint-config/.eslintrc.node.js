module.exports = {
  env: {
    es6: true,
  },
  plugins: [
    'eslint-plugin-import',
    'eslint-plugin-jsdoc',
    'eslint-plugin-prefer-arrow',
    'eslint-plugin-prettier',
    'security',
  ],
  extends: [
    'airbnb',
    'prettier',
    'plugin:jsdoc/recommended',
    'plugin:security/recommended',
    'node',
  ],
  rules: {
    'import/no-commonjs': 'off',
  },
};
