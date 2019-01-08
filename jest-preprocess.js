const babelOptions = {
  presets: ['@babel/react', ['@babel/env', { targets: { node: 'current' } }]],
  plugins: ['@babel/plugin-proposal-class-properties'],
};

module.exports = require('babel-jest').createTransformer(babelOptions);
