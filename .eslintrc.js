module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/no-unused-components': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-multiple-empty-lines': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-trailing-spaces': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'comma-dangle': process.env.NODE_ENV === 'production'? 'warn' : 'off',
    'quotes': process.env.NODE_ENV === 'production'? 'warn' : 'off',
    'no-trailing-spaces': process.env.NODE_ENV === 'production'? 'warn' : 'off',
  },
};
