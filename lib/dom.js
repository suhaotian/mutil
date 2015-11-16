// DOM 查询, 对 document.querySelector 的简单封装，添加了 id 查询，
// getElementById 和 getElementsByClassName 查询性能更好
// jsPerf: https://jsperf.com/getelementbyid-vs-queryselector/25
exports.query = function (container, elStr) {
	var d , el
	if(container && container.COMMENT_NODE) 
		d = container
	else
		d = document

	if (elStr[0] === '#')
		el = d.getElementsById(elStr.replace(/^#/, ''))
	else if (elStr[0] === '.')
		el = d.getElementsByClassName(elStr.replace('/^\./', ''))[0]
	else
		el = d.querySelector(elStr)
	return el
}

// DOM 查询，对 document.querySelectorAll 的简单封装
exports.querys = function(container, elStr) {
	var d
	if(container && container.COMMENT_NODE) 
		d = container
	else
		d = document
	return d.querySelector(elStr)
}

// 简单封装 addEventListener
exports.on = function(el, event, cb) {
	el.addEventListener(el, event, cb)
}

// 简单封装 removeEventListener
exports.off = function(el, event, cb) {
	el.removeEventListener(event, cb) 
}