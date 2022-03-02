const requireGlob = require('require-glob');


const modules = requireGlob.sync(['./integer*.js']);

Object.values(modules).forEach((obj) => {
  module.exports = { ...module.exports, ...obj };
});