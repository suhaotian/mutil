var lang = require('./lib/lang')
var extend = lang.extend

extend(exports, lang)
extend(exports, require('./lib/dom'))

// 导出
if(!!window) 
	window.mutil = exports
else
	module.exports = exports