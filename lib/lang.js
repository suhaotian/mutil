// 均分数组，将数组 array 平均分为 size 份数组组成一个数组返回，e.g 客户端分页
exports.chunk = function (array, size) {
  	var r = [], tmp = Math.ceil(array.length/size)
  	while(tmp--) r.push(array.splice(0, size))
  	return r
}


// 节流函数
exports.throttle = function (func, wait) {
	var ctx, args, rtn, timeoutID // 缓存
	var last = 0  // 初始值
	if (wait == null) wait = 100 
	return function throttled () {
		ctx = this
		args = arguments   
		var delta = new Date() - last 
		if (!timeoutID)
			if (delta >= wait) call()   
			else timeoutID = setTimeout(call, wait - delta)
		return rtn
	}

	function call () {
		timeoutID = 0
		last = +new Date()
		rtn = func.apply(ctx, args)
		ctx = args = null
	}
}


// 消抖函数
exports.debounce = function (func, wait, immediate) {
	var timeout, args, ctx, timestamp, result
	if (null == wait) wait = 100
	return function debounced () {
		ctx = this
		args = arguments
		timestamp = +new Date()
		if (!timeout) timeout = setTimeout(later, wait)
		if (immediate && !timeout)
			result = func.apply(ctx, args)
			ctx = args = null
		return result
	}

	function later () {
		var last = now() - timestamp
		if (last < wait && last >　0)
			timeout = setTimeout(later, wait - last)
		else 
			result = func.apply(ctx, args)
			timeout = context = args = null
	}
}


// 将对象 from 的属性混合进对象 to
exports.extend = function (to, from) {
	var keys = Object.keys(from),
		i = keys.length
	while (i--) 
		to[keys[i]] = from[keys[i]]
	return to
}

// 更快的 indexOf 实现
exports.indexOf = function (arr, obj) {
	var i = arr.length
	while (i--)
		if (arr[i] === obj) return i
	return -1
}
