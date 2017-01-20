util = require 'util'
class Say
  dev: () ->
  	return console.log util.inspect [].slice.apply(arguments), false, null
  prod: () ->
  	return 
  red: () ->
  	return console.log chalk.red util.inspect [].slice.apply(arguments)[0], false, null

module.exports = new Say

