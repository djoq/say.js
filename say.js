var Say, util;

util = require('util');

const colorMap = {
  reset: "\x1b[0m",
  black: "\x1b[30m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  purple: "\x1b[35m",
  cyan: "\x1b[36m",
  white: "\x1b[37m"
}

Say = (function() { function Say() { }
  Say.prototype.dev = function() {
    let isValid = false;
    var logOut;
    let args = util.inspect([].slice.apply(arguments), false, null);
    this.cxt = { value: args, color: "\x1b[0m" };

    this.color = (name) => {
      isValid = true;
      let setter = {}
      setter['value'] = args;
      setter['color'] = colorMap[name];
      logOut = setter;
      return setTimeout(makeValid,200)
    }

    this.print = (value,color) => {
        let setter = {};
        setter['value'] = value;
        setter['color'] = color;
        return setter
    }

    let makeValid = () => {
       if (!!logOut && isValid) {
           console.log(logOut.color, logOut.value)
           isValid = false
           return
       } else if(!logOut) {
         logOut = this.print(args,this.cxt.color);
         console.log(logOut.color, logOut.value);
       }
    }
    setTimeout(makeValid, 200)
    return this
  };
  
  /* Mute it save + virutal trees in production */
  Say.prototype.prod = function() {
      this.color = () => {}
      return this
  };

  return Say;

})();

/* handle with care */

module.exports = new Say;

// Reset = "\x1b[0m"
// Bright = "\x1b[1m"
// Dim = "\x1b[2m"
// Underscore = "\x1b[4m"
// Blink = "\x1b[5m"
// Reverse = "\x1b[7m"
// Hidden = "\x1b[8m"
 
// FgBlack = "\x1b[30m"
// FgRed = "\x1b[31m"
// FgGreen = "\x1b[32m"
// FgYellow = "\x1b[33m"
// FgBlue = "\x1b[34m"
// FgMagenta = "\x1b[35m"
// FgCyan = "\x1b[36m"
// FgWhite = "\x1b[37m"
 
// BgBlack = "\x1b[40m"
// BgRed = "\x1b[41m"
// BgGreen = "\x1b[42m"
// BgYellow = "\x1b[43m"
// BgBlue = "\x1b[44m"
// BgMagenta = "\x1b[45m"
// BgCyan = "\x1b[46m"
// BgWhite = "\x1b[47m"
