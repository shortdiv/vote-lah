const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postsass = require('@csstools/postcss-sass')({
  includePaths: ['./node_modules']
});

const plugins = process.env.NODE_ENV === 'production'
  ? [ postsass,autoprefixer, cssnano ]
  : [ postsass, autoprefixer ]
module.exports = {
  syntax: 'postcss-scss',
  plugins,
}