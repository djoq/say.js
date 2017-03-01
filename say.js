var Say, util;

util = require('util');

Say = (function() {
  function Say() {}

  Say.prototype.dev = function() {
    return console.log(util.inspect([].slice.apply(arguments), false, null));
  };

  Say.prototype.prod = function() {};

  Say.prototype.red = function() {
    return console.log(chalk.red(util.inspect([].slice.apply(arguments)[0], false, null)));
  };

  return Say;

})();

module.exports = new Say;

